"use client";

import { Button, Typography } from "antd";
import { RightOutlined, SettingOutlined } from "@ant-design/icons";
import Link from "next/link";

const { Title, Paragraph } = Typography;

export default function HomePage() {
  return (
    <div>
      <section className="hero-section flex items-center justify-center text-white text-center px-4">
        <div className="max-w-4xl mx-auto">
          <SettingOutlined className="text-7xl mb-6 opacity-80" />
          <Title level={1} style={{ color: "white", fontSize: "3rem", marginBottom: "16px" }}>
            Инженер эксплуатации
            <br />
            аппаратных и ЦОД
          </Title>
          <Paragraph
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1.25rem",
              maxWidth: "640px",
              margin: "0 auto 32px",
            }}
          >
            Человек, который следит, чтобы серверы работали бесперебойно,
            железо было исправно, а данные — в безопасности
          </Paragraph>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about">
              <Button type="primary" size="large" icon={<RightOutlined />}>
                Узнать больше
              </Button>
            </Link>
            <Link href="/quiz">
              <Button size="large" ghost style={{ borderColor: "white", color: "white" }}>
                Пройти тест
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 max-w-6xl mx-auto">
        <Title level={2} className="text-center mb-12">
          Почему эта профессия?
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Критичная роль",
              desc: "Без инженеров ЦОД останавливаются банки, больницы, телеком — всё, что зависит от IT.",
            },
            {
              title: "Стабильный спрос",
              desc: "Каждый год появляются новые дата-центры, и им нужны специалисты 24/7.",
            },
            {
              title: "Понятный карьерный путь",
              desc: "От младшего инженера до руководителя инфраструктуры — прозрачная лестница роста.",
            },
          ].map((item, i) => (
            <div key={i} className="card-hover bg-white rounded-lg p-6 shadow-sm">
              <Title level={4}>{item.title}</Title>
              <Paragraph type="secondary">{item.desc}</Paragraph>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
