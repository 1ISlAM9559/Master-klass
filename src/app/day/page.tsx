"use client";

import { Typography, Card, Timeline } from "antd";
import {
  AlertOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CoffeeOutlined,
  FileTextOutlined,
  ToolOutlined,
  SwapOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const timelineItems = [
  {
    color: "blue",
    children: (
      <>
        <div className="flex items-center gap-2">
          <ClockCircleOutlined />
          <strong>08:00 — Начало смены</strong>
        </div>
        <Paragraph className="mt-1">
          Приход на смену. Передача дежурства от ночного инженера: какие инциденты
          были, что требует внимания. Проверка мониторинга — все ли системы в норме.
        </Paragraph>
      </>
    ),
  },
  {
    color: "green",
    children: (
      <>
        <div className="flex items-center gap-2">
          <CheckCircleOutlined />
          <strong>09:00 — Утренний обход</strong>
        </div>
        <Paragraph className="mt-1">
          Физический обход залов: проверка индикаторов на серверах, шума вентиляторов,
          показаний кондиционеров, состояния ИБП. Всё ли в пределах нормы?
        </Paragraph>
      </>
    ),
  },
  {
    color: "orange",
    children: (
      <>
        <div className="flex items-center gap-2">
          <ToolOutlined />
          <strong>10:30 — Плановая работа</strong>
        </div>
        <Paragraph className="mt-1">
          Сегодня в плане: замена двух жёстких дисков в RAID-массиве и обновление
          прошивки на сетевом коммутаторе. Составляем акт, проводим работы.
        </Paragraph>
      </>
    ),
  },
  {
    color: "cyan",
    children: (
      <>
        <div className="flex items-center gap-2">
          <CoffeeOutlined />
          <strong>12:30 — Обед</strong>
        </div>
        <Paragraph className="mt-1">
          Перерыв. Мониторинг продолжает работать — при любых alarm получим SMS.
        </Paragraph>
      </>
    ),
  },
  {
    color: "red",
    children: (
      <>
        <div className="flex items-center gap-2">
          <AlertOutlined />
          <strong>14:00 — Инцидент!</strong>
        </div>
        <Paragraph className="mt-1">
          Сработал датчик температуры в серверном зале №3. Летим проверять.
          Оказалось — кондиционер переключился в экономичный режим. Переключили
          обратно, температура нормализовалась за 10 минут. Фиксируем в журнале.
        </Paragraph>
      </>
    ),
  },
  {
    color: "blue",
    children: (
      <>
        <div className="flex items-center gap-2">
          <FileTextOutlined />
          <strong>15:30 — Документация</strong>
        </div>
        <Paragraph className="mt-1">
          Заполняем журнал: акт замены дисков, описание инцидента с кондиционером,
          обновляем карту стоек. Отправляем отчёт руководителю.
        </Paragraph>
      </>
    ),
  },
  {
    color: "purple",
    children: (
      <>
        <div className="flex items-center gap-2">
          <SwapOutlined />
          <strong>17:00 — Приём смены</strong>
        </div>
        <Paragraph className="mt-1">
          Передаём дежурство вечернему инженеру. Рассказываем про инцидент,
          незавершённые работы. Проверяем, что все системы в норме. Уходим домой.
        </Paragraph>
      </>
    ),
  },
];

export default function DayPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <Title level={1} className="text-center mb-2">
        Один день из жизни
      </Title>
      <Paragraph className="text-center text-lg mb-12" type="secondary">
        Как выглядит рабочий день инженера эксплуатации ЦОД
      </Paragraph>

      <Card className="mb-8">
        <Timeline items={timelineItems} />
      </Card>

      <Card title="А что ночью?" className="mb-8">
        <Paragraph>
          Ночная смена — это спокойнее, но ответственнее. Если сервер упал в 3 часа
          ночи, инженер должен поднять его <strong>самостоятельно</strong>, без
          поддержки коллег. Именно поэтому дневные и ночные инженеры чередуются.
        </Paragraph>
        <Paragraph>
          Ночью обычно проводят плановые работы: обновления, перемещения оборудования,
          тестирование灾灾灾备份 — когда ЦОД пуст и можно безопасно менять конфигурации.
        </Paragraph>
      </Card>

      <Card title="Интересные моменты">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { emoji: "🔧", text: "Замена блока питания в 200-кг сервере — спортзал не нужен" },
            { emoji: "🌡️", text: "Контроль температуры: в зале +18-22°C, люди мёрзнут" },
            { emoji: "🔇", text: "Шум от серверов — как взлёт самолёта. Наушники обязательны" },
            { emoji: "🚨", text: "Каждый инцидент — как дежурство в больнице: быстрые решения" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
              <span className="text-xl">{item.emoji}</span>
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
