"use client";

import { Typography, Card, Row, Col, Statistic } from "antd";
import {
  BankOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  TrophyOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

export default function ImportancePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-2">
        Важность для ЭР-Телеком Холдинг
      </Title>
      <Paragraph className="text-center text-lg mb-12" type="secondary">
        Почему инженеры эксплуатации — ключевые сотрудники телеком-компании
      </Paragraph>

      <Row gutter={[16, 16]} className="mb-12">
        {[
          { title: "Uptime 99.99%", value: "8760", suffix: "час/год", icon: <SafetyCertificateOutlined /> },
          { title: "Серверов под контролем", value: "5000+", suffix: "", icon: <BankOutlined /> },
          { title: "Сотрудников в команде", value: "50+", suffix: "", icon: <TeamOutlined /> },
          { title: "Лет на рынке", value: "15+", suffix: "", icon: <TrophyOutlined /> },
        ].map((stat, i) => (
          <Col xs={12} md={6} key={i}>
            <Card className="text-center card-hover">
              <div className="text-3xl text-blue-500 mb-2">{stat.icon}</div>
              <Statistic
                title={stat.title}
                value={stat.value}
                suffix={stat.suffix}
                valueStyle={{ fontSize: "1.5rem", color: "#1890ff" }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Card className="mb-8">
        <Title level={3}>Почему именно ЭР-Телеком?</Title>
        <Paragraph className="text-base leading-relaxed">
          <strong>ЭР-Телеком Холдинг</strong> — один из крупнейших телеком-операторов
          России, предоставляющий услуги связи, интернета и цифровых сервисов миллионам
          абонентов. Вся эта инфраструктура работает на оборудовании, которое требует
          <strong>постоянного обслуживания</strong>.
        </Paragraph>
        <Paragraph className="text-base leading-relaxed">
          Инженеры эксплуатации аппаратных средств и ЦОД — это те люди, которые
          <strong>обеспечивают бесперебойную работу</strong> всей сети. Когда вы
          пользуетесь мобильным интернетом, делаете онлайн-платёж или смотрите
          видео — где-то инженер следит, чтобы серверы не упали.
        </Paragraph>
      </Card>

      <Card title="Зона ответственности инженеров в ЭР-Телеком" className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            {
              title: "Серверные платформы",
              desc: "Серверы баз данных, вычислительные кластеры, системы хранения — всё работает 24/7",
            },
            {
              title: "Сетевое оборудование",
              desc: "Коммутаторы, маршрутизаторы, оптические линии — backbone сети",
            },
            {
              title: "Электропитание",
              desc: "ИБП, генераторы, системы резервного питания — энергонезависимость ЦОД",
            },
            {
              title: "Среда ЦОД",
              desc: "Кондиционирование, пожаротушение, контроль доступа — физическая безопасность",
            },
          ].map((item, i) => (
            <div key={i} className="p-4 bg-blue-50 rounded-lg">
              <Title level={5}>{item.title}</Title>
              <Paragraph type="secondary" style={{ margin: 0 }}>
                {item.desc}
              </Paragraph>
            </div>
          ))}
        </div>
      </Card>

      <Card title="Влияние на бизнес">
        <Paragraph className="text-base leading-relaxed">
          Простой одного сервера в ЦОД может стоить компании <strong>миллионы рублей
          в час</strong>. Инженер эксплуатации — это тот, кто предотвращает такие
          простои. Его работа напрямую влияет на:
        </Paragraph>
        <ul className="list-disc pl-6 space-y-2">
          <li>Доход компании (бесперебойный сервис = лояльные клиенты)</li>
          <li>Репутацию (выброс из строя = негатив в СМИ)</li>
          <li>Безопасность данных (потеря дисков = утечка информации)</li>
          <li>Соответствие стандартам (PCI DSS, ISO 27001 требуют documented procedures)</li>
        </ul>
      </Card>
    </div>
  );
}
