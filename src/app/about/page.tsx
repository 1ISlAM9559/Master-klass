"use client";

import { Typography, Card, Tag } from "antd";
import {
  DesktopOutlined,
  CloudServerOutlined,
  SafetyCertificateOutlined,
  AlertOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-2">
        О профессии
      </Title>
      <Paragraph className="text-center text-lg mb-12" type="secondary">
        Инженер эксплуатации аппаратных средств и центров обработки данных
      </Paragraph>

      <Card className="mb-8">
        <Title level={3}>Кто это простыми словами?</Title>
        <Paragraph className="text-base leading-relaxed">
          Представьте гигантский серверный зал — тысячи компьютеров, которые работают
          круглые сутки. Это и есть <strong>центр обработки данных (ЦОД)</strong>.
          Инженер эксплуатации — это <strong>врач для этих машин</strong>: он следит,
          чтобы они не «заболели», вовремя чинит, обновляет и заменяет детали.
        </Paragraph>
        <Paragraph className="text-base leading-relaxed">
          Он не просто «включает и выключает». Он <strong>мониторит</strong> температуру,
          нагрузку, сеть; <strong>диагностирует</strong> сбои; <strong>заменяет</strong>
          вышедшие из строя компоненты; <strong>настраивает</strong> системы резервного
          копирования и следит за безопасностью оборудования.
        </Paragraph>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {[
          {
            icon: <DesktopOutlined style={{ fontSize: 32, color: "#1890ff" }} />,
            title: "Аппаратное обеспечение",
            desc: "Серверы, сетевое оборудование, системы хранения данных (СХД), источники бесперебойного питания (ИБП).",
          },
          {
            icon: <CloudServerOutlined style={{ fontSize: 32, color: "#52c41a" }} />,
            title: "Инфраструктура ЦОД",
            desc: "Системы кондиционирования, пожаротушения, контроля доступа и электропитания.",
          },
          {
            icon: <SafetyCertificateOutlined style={{ fontSize: 32, color: "#faad14" }} />,
            title: "Безопасность",
            desc: "Физическая защита оборудования, мониторинг среды, предотвращение инцидентов.",
          },
          {
            icon: <AlertOutlined style={{ fontSize: 32, color: "#ff4d4f" }} />,
            title: "Реагирование на инциденты",
            desc: "Оперативное устранение аварий, восстановление сервисов, документирование.",
          },
        ].map((item, i) => (
          <Card key={i} className="card-hover">
            <div className="flex items-start gap-4">
              {item.icon}
              <div>
                <Title level={4}>{item.title}</Title>
                <Paragraph type="secondary">{item.desc}</Paragraph>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card title="Где работают такие специалисты?" className="mb-8">
        <div className="flex flex-wrap gap-2">
          {[
            "Телеком-операторы (МТС, Билайн, МегаФон, ЭР-Телеком)",
            "Банки и финтех",
            "Облачные провайдеры (Яндекс.Облако, Selectel)",
            "Государственные структуры",
            "IT-компании и хостинг-провайдеры",
            "Крупные корпорации с собственными ЦОД",
          ].map((item) => (
            <Tag key={item} color="blue" className="text-sm py-1 px-3">
              {item}
            </Tag>
          ))}
        </div>
      </Card>

      <Card title="Ключевые термины">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { term: "ЦОД", def: "Центр обработки данных — здание/помещение с серверами" },
            { term: "RAID", def: "Массив дисков для защиты данных от потери" },
            { term: "ИБП", def: "Источник бесперебойного питания" },
            { term: "SLA", def: "Соглашение об уровне сервиса (например, 99.99% uptime)" },
            { term: "IPMI/BMC", def: "Удалённое управление сервером на аппаратном уровне" },
            { term: "Rack", def: "Стойка для серверного оборудования" },
          ].map((item, i) => (
            <div key={i} className="border-b pb-2">
              <strong>{item.term}</strong> — {item.def}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
