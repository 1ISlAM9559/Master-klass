"use client";

import { Typography, Card, Steps, Button, Tag } from "antd";
import {
  ReadOutlined,
  ExperimentOutlined,
  TrophyOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

const { Title, Paragraph } = Typography;

const steps = [
  {
    title: "Образование",
    icon: <ReadOutlined />,
    description: "Получите базовое техническое образование",
    details: [
      "Среднее профессиональное (техникум) по IT-специальностям",
      "Высшее: Информатика, Вычислительная техника, Телекоммуникации",
      "Онлайн-курсы: Stepik, Coursera, GeekBrains, Skillbox",
    ],
  },
  {
    title: "Практика",
    icon: <ExperimentOutlined />,
    description: "Набирайтесь реального опыта",
    details: [
      "Стажировка в техподдержке или серверной",
      "Лабораторные работы в учебных ЦОД",
      "Персональные проекты: собрать сервер, настроить RAID",
      "Участие в соревнованиях и хакатонах",
    ],
  },
  {
    title: "Карьера",
    icon: <TrophyOutlined />,
    description: "Начните работать и расти",
    details: [
      "Позиция: Младший инженер / Техник ЦОД",
      "Через 1-2 года: Инженер эксплуатации",
      "Через 3-5 лет: Старший инженер / Ведущий инженер",
      "Далее: Руководитель группы / Начальник ЦОД",
    ],
  },
];

const tips = [
  "Начните с курсов по аппаратному обеспечению и Linux",
  "Соберите домашнюю лабораторию: старый ПК + виртуализация",
  "Изучите IPMI, SNMP, основы сетевых технологий",
  "Получите сертификат CompTIA A+ или Server+",
  "Подпишитесь на форумы и Telegram-чаты инженеров ЦОД",
  "Откликайтесь на стажировки в телеком-компаниях",
];

export default function CareerPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-2">
        Как начать карьеру
      </Title>
      <Paragraph className="text-center text-lg mb-12" type="secondary">
        Пошаговый план для студента
      </Paragraph>

      <Steps
        direction="vertical"
        current={-1}
        className="mb-12"
        items={steps.map((step) => ({
          title: step.title,
          icon: step.icon,
          description: (
            <div>
              <Paragraph>{step.description}</Paragraph>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                {step.details.map((d, i) => (
                  <li key={i} className="text-gray-600">
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          ),
        }))}
      />

      <Card title="Советы для старта" className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {tips.map((tip, i) => (
            <div
              key={i}
              className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg"
            >
              <ArrowRightOutlined className="text-blue-500 mt-1" />
              <span>{tip}</span>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Кем можно расти?" className="mb-8">
        <div className="flex flex-wrap gap-2">
          {[
            "Инженер ЦОД",
            "Системный администратор",
            "Сетевой инженер",
            "Инженер по ИБП и электропитанию",
            "Руководитель инфраструктуры",
            "Менеджер ЦОД",
            "Cloud-инженер",
          ].map((role) => (
            <Tag key={role} color="blue">
              {role}
            </Tag>
          ))}
        </div>
      </Card>

      <div className="text-center">
        <Link href="/quiz">
          <Button type="primary" size="large">
            Проверь себя — пройди тест
          </Button>
        </Link>
      </div>
    </div>
  );
}
