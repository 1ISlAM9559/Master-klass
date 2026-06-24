"use client";

import { Typography, Card, Row, Col, Tag } from "antd";
import {
  CodeOutlined,
  DatabaseOutlined,
  CloudOutlined,
  ToolOutlined,
  TeamOutlined,
  MessageOutlined,
  ClockCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const hardSkills = [
  {
    icon: <DatabaseOutlined />,
    title: "Аппаратная архитектура",
    desc: "Знание устройств серверов, СХД, сетевого оборудования, ИБП и систем кондиционирования",
  },
  {
    icon: <ToolOutlined />,
    title: "Диагностика и ремонт",
    desc: "Умение выявлять и устранять аппаратные сбои, заменять компоненты, работать с мультиметром",
  },
  {
    icon: <CodeOutlined />,
    title: "IPMI/BMC и удалённое управление",
    desc: "Настройка и использование систем удалённого мониторинга и управления серверами",
  },
  {
    icon: <CloudOutlined />,
    title: "Сетевые технологии",
    desc: "Понимание TCP/IP, VLAN, маршрутизации, работы сетевых интерфейсов серверов",
  },
];

const softSkills = [
  {
    icon: <ClockCircleOutlined />,
    title: "Стрессоустойчивость",
    desc: "Способность работать под давлением, когда серверы упали и бизнес теряет деньги каждую минуту",
  },
  {
    icon: <MessageOutlined />,
    title: "Коммуникация",
    desc: "Умение объяснять технические проблемы нетехническим коллегам и руководству",
  },
  {
    icon: <SolutionOutlined />,
    title: "Аналитическое мышление",
    desc: "Быстрый поиск причины сбоев, анализ логов, построение цепочки причинно-следственных связей",
  },
  {
    icon: <TeamOutlined />,
    title: "Командная работа",
    desc: "Взаимодействие с сетевиками, системными администраторами, службами безопасности",
  },
];

export default function SkillsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-2">
        Скиллы инженера
      </Title>
      <Paragraph className="text-center text-lg mb-12" type="secondary">
        Что нужно знать и уметь для успешной работы
      </Paragraph>

      <Title level={2} className="mb-6">
        Хард-скиллы
      </Title>
      <Row gutter={[16, 16]} className="mb-12">
        {hardSkills.map((skill, i) => (
          <Col xs={24} sm={12} key={i}>
            <Card className="card-hover h-full" hoverable>
              <div className="text-3xl text-blue-500 mb-3">{skill.icon}</div>
              <Title level={4}>{skill.title}</Title>
              <Paragraph type="secondary">{skill.desc}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={2} className="mb-6">
        Софт-скиллы
      </Title>
      <Row gutter={[16, 16]} className="mb-12">
        {softSkills.map((skill, i) => (
          <Col xs={24} sm={12} key={i}>
            <Card className="card-hover h-full" hoverable>
              <div className="text-3xl text-green-500 mb-3">{skill.icon}</div>
              <Title level={4}>{skill.title}</Title>
              <Paragraph type="secondary">{skill.desc}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Card title="Полезные сертификаты" className="mb-8">
        <div className="flex flex-wrap gap-2">
          {[
            "CompTIA A+",
            "CompTIA Server+",
            "Cisco CCNA",
            "ITIL Foundation",
            "Red Hat RHCSA",
            "华为 HCIA-Data Center",
          ].map((cert) => (
            <Tag key={cert} color="blue" className="text-sm py-1 px-3">
              {cert}
            </Tag>
          ))}
        </div>
      </Card>
    </div>
  );
}
