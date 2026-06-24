"use client";

import { useState } from "react";
import { Typography, Card, Button, Result, Progress } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ReloadOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

interface Question {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: Question[] = [
  {
    question: "Что такое ЦОД?",
    options: [
      "Центр обработки данных — здание с серверами",
      "Центр оперативного управления",
      "Центр online-доступа",
      "Центр отладки устройств",
    ],
    correct: 0,
    explanation:
      "ЦОД (Data Center) — это специальное помещение, где размещено серверное и сетевое оборудование, обеспечивающее хранение и обработку данных.",
  },
  {
    question: "Какой компонент защищает серверы от перебоев электричества?",
    options: [
      "Жёсткий диск",
      "Блок питания",
      "ИБП (Источник бесперебойного питания)",
      "Оперативная память",
    ],
    correct: 2,
    explanation:
      "ИБП обеспечивает временное питание при отключении электричества и даёт время для безопасного выключения или запуска генератора.",
  },
  {
    question: "Что делает RAID?",
    options: [
      "Ускоряет интернет",
      "Объединяет диски для защиты данных и повышения производительности",
      "Управляет температурой серверов",
      "Контролирует доступ в серверный зал",
    ],
    correct: 1,
    explanation:
      "RAID (Redundant Array of Independent Disks) — технология объединения нескольких дисков для отказоустойчивости и/или производительности.",
  },
  {
    question: "Какой инструмент используется для удалённого управления сервером на аппаратном уровне?",
    options: [
      "SSH",
      "IPMI / BMC",
      "FTP",
      "DNS",
    ],
    correct: 1,
    explanation:
      "IPMI (Intelligent Platform Management Interface) / BMC (Baseboard Management Controller) — аппаратный чип на сервере, позволяющий управлять им удалённо даже при выключенной ОС.",
  },
  {
    question: "Какая норма температуры в серверном зале?",
    options: [
      "25-30°C",
      "18-22°C",
      "10-15°C",
      "0-5°C",
    ],
    correct: 1,
    explanation:
      "Рекомендуемый диапазон для серверных — 18-22°C. Слишком холодно тоже плохо — конденсат и дискомфорт для персонала.",
  },
  {
    question: "Что такое SLA в контексте ЦОД?",
    options: [
      "Система личного анализа",
      "Соглашение об уровне сервиса (garanting uptime)",
      "Серверная логическая архитектура",
      "Система_limiting access",
    ],
    correct: 1,
    explanation:
      "SLA (Service Level Agreement) — договор между провайдером и клиентом, гарантирующий определённый уровень доступности (например, 99.99% uptime).",
  },
  {
    question: "Как часто инженер проводит физический обход серверного зала?",
    options: [
      "Раз в год",
      "Раз в месяц",
      "Ежедневно (как минимум 1-2 раза за смену)",
      "Только при авариях",
    ],
    correct: 2,
    explanation:
      "Регулярный обход — одна из ключевых обязанностей. Инженер проверяет индикаторы, шум, температуру, состояние кабелей и оборудование визуально.",
  },
];

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>([]);

  const handleSelect = (index: number) => {
    if (selected !== null) return;
    setSelected(index);
  };

  const handleNext = () => {
    const newAnswers = [...answers, selected];
    setAnswers(newAnswers);

    if (selected === questions[current].correct) {
      setScore((s) => s + 1);
    }

    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setShowResult(false);
    setScore(0);
    setAnswers([]);
  };

  if (showResult) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Card>
          <Result
            status={percentage >= 70 ? "success" : "warning"}
            title={
              percentage >= 70
                ? "Отлично! Вы хорошо знаете профессию!"
                : "Неплохо! Но стоит подучить"
            }
            subTitle={`Вы ответили правильно на ${score} из ${questions.length} вопросов (${percentage}%)`}
            extra={
              <div className="text-center">
                <Progress
                  type="circle"
                  percent={percentage}
                  className="mb-6"
                  size={120}
                />
                <br />
                <Button
                  type="primary"
                  icon={<ReloadOutlined />}
                  onClick={handleRestart}
                >
                  Пройти ещё раз
                </Button>
              </div>
            }
          />

          <div className="mt-8 space-y-4">
            {questions.map((q, i) => (
              <div
                key={i}
                className="p-4 rounded-lg"
                style={{
                  background:
                    answers[i] === q.correct ? "#f6ffed" : "#fff2f0",
                  border: `1px solid ${
                    answers[i] === q.correct ? "#b7eb8f" : "#ffa39e"
                  }`,
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  {answers[i] === q.correct ? (
                    <CheckCircleOutlined style={{ color: "#52c41a" }} />
                  ) : (
                    <CloseCircleOutlined style={{ color: "#ff4d4f" }} />
                  )}
                  <strong>{q.question}</strong>
                </div>
                <Paragraph type="secondary" style={{ margin: 0, fontSize: 13 }}>
                  {q.explanation}
                </Paragraph>
              </div>
            ))}
          </div>
        </Card>
      </div>
    );
  }

  const q = questions[current];
  const progress = Math.round(((current) / questions.length) * 100);

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-2">
        Тест по профессии
      </Title>
      <Paragraph className="text-center text-lg mb-6" type="secondary">
        Проверь свои знания об инженере эксплуатации ЦОД
      </Paragraph>

      <Progress percent={progress} className="mb-6" />

      <Card>
        <Paragraph className="text-sm text-gray-500 mb-2">
          Вопрос {current + 1} из {questions.length}
        </Paragraph>
        <Title level={3} className="mb-6">
          {q.question}
        </Title>

        <div className="space-y-3 mb-6">
          {q.options.map((option, i) => (
            <div
              key={i}
              onClick={() => handleSelect(i)}
              className={`quiz-option p-4 rounded-lg border-2 ${
                selected === i ? "selected" : ""
              } ${
                selected !== null && i === q.correct ? "correct" : ""
              } ${
                selected !== null && selected === i && i !== q.correct
                  ? "wrong"
                  : ""
              }`}
            >
              <span className="font-medium">{String.fromCharCode(65 + i)}.</span>{" "}
              {option}
            </div>
          ))}
        </div>

        {selected !== null && (
          <div
            className="p-3 rounded-lg mb-4"
            style={{
              background: selected === q.correct ? "#f6ffed" : "#fff2f0",
              border: `1px solid ${selected === q.correct ? "#b7eb8f" : "#ffa39e"}`,
            }}
          >
            <div className="flex items-center gap-2 mb-1">
              {selected === q.correct ? (
                <CheckCircleOutlined style={{ color: "#52c41a" }} />
              ) : (
                <CloseCircleOutlined style={{ color: "#ff4d4f" }} />
              )}
              <strong>
                {selected === q.correct ? "Правильно!" : "Неправильно!"}
              </strong>
            </div>
            <Paragraph type="secondary" style={{ margin: 0 }}>
              {q.explanation}
            </Paragraph>
          </div>
        )}

        <Button
          type="primary"
          size="large"
          block
          disabled={selected === null}
          onClick={handleNext}
        >
          {current < questions.length - 1 ? "Следующий вопрос" : "Показать результат"}
        </Button>
      </Card>
    </div>
  );
}
