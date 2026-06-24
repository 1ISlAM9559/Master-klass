"use client";

import { Typography, Card, Tag } from "antd";
import {
  ReloadOutlined,
  EyeOutlined,
  SwapOutlined,
  ToolOutlined,
  FileSearchOutlined,
  AlertOutlined,
  SafetyOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const tasks = [
  {
    icon: <EyeOutlined />,
    title: "Мониторинг оборудования",
    desc: "Отслеживание состояния серверов, температуры, нагрузки на CPU/RAM, состояния дисков и сети в режиме 24/7.",
    tag: "Ежедневно",
    color: "blue",
  },
  {
    icon: <ToolOutlined />,
    title: "Запчасти и замена",
    desc: "Диагностика вышедших из строя компонентов (диски, модули RAM, блоки питания) и их оперативная замена.",
    tag: "По необходимости",
    color: "orange",
  },
  {
    icon: <ReloadOutlined />,
    title: "Обслуживание и плановые работы",
    desc: "Плановая чистка оборудования, обновление прошивок, замена термопасты, проверка кабельных соединений.",
    tag: "Ежемесячно",
    color: "green",
  },
  {
    icon: <AlertOutlined />,
    title: "Реагирование на инциденты",
    desc: "Оперативное устранение аппаратных сбоев: перегрев, потеря сети, выход из строя дисков, сбои ИБП.",
    tag: "Критично",
    color: "red",
  },
  {
    icon: <FileSearchOutlined />,
    title: "Документирование",
    desc: "Ведение журнала инцидентов, актов замены, карт серверных стоек, инвентаризации оборудования.",
    tag: "Постоянно",
    color: "purple",
  },
  {
    icon: <SafetyOutlined />,
    title: "Контроль среды ЦОД",
    desc: "Мониторинг кондиционеров, пожаротушения, контроля доступа, электропитания и ИБП/генераторов.",
    tag: "Круглосуточно",
    color: "cyan",
  },
  {
    icon: <SwapOutlined />,
    title: "Ввод в эксплуатацию",
    desc: "Распаковка, установка в стойку, подключение и первичная настройка нового серверного оборудования.",
    tag: "По плану",
    color: "magenta",
  },
];

export default function TasksPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-2">
        Рабочие задачи
      </Title>
      <Paragraph className="text-center text-lg mb-12" type="secondary">
        7 ключевых направлений работы инженера эксплуатации ЦОД
      </Paragraph>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {tasks.map((task, i) => (
          <Card key={i} className="card-hover" hoverable>
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0"
                style={{ background: `var(--ant-color-${task.color})` }}
              >
                {task.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <Title level={4} style={{ margin: 0 }}>
                    {task.title}
                  </Title>
                  <Tag color={task.color}>{task.tag}</Tag>
                </div>
                <Paragraph type="secondary" style={{ margin: 0 }}>
                  {task.desc}
                </Paragraph>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
