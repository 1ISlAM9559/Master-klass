"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Button, Drawer } from "antd";
import {
  HomeOutlined,
  TeamOutlined,
  CheckSquareOutlined,
  ThunderboltOutlined,
  RocketOutlined,
  ClockCircleOutlined,
  BankOutlined,
  BulbOutlined,
  MenuOutlined,
} from "@ant-design/icons";

const menuItems = [
  { key: "/", icon: <HomeOutlined />, label: <Link href="/">Главная</Link> },
  { key: "/about", icon: <TeamOutlined />, label: <Link href="/about">О профессии</Link> },
  { key: "/tasks", icon: <CheckSquareOutlined />, label: <Link href="/tasks">Задачи</Link> },
  { key: "/skills", icon: <ThunderboltOutlined />, label: <Link href="/skills">Скиллы</Link> },
  { key: "/career", icon: <RocketOutlined />, label: <Link href="/career">Карьера</Link> },
  { key: "/day", icon: <ClockCircleOutlined />, label: <Link href="/day">День из жизни</Link> },
  { key: "/importance", icon: <BankOutlined />, label: <Link href="/importance">Важность</Link> },
  { key: "/quiz", icon: <BulbOutlined />, label: <Link href="/quiz">Тест</Link> },
];

export default function AppHeader() {
  const pathname = usePathname();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="site-header sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-white font-bold text-lg whitespace-nowrap">
            Инженер ЦОД
          </Link>

          <div className="hidden md:block">
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[pathname]}
              items={menuItems}
              style={{ background: "transparent", borderBottom: "none", flex: 1 }}
            />
          </div>

          <Button
            className="md:hidden"
            type="text"
            icon={<MenuOutlined />}
            onClick={() => setDrawerOpen(true)}
            style={{ color: "white" }}
          />
        </div>
      </div>

      <Drawer
        title="Навигация"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
      >
        <Menu
          mode="vertical"
          selectedKeys={[pathname]}
          items={menuItems.map((item) => ({
            ...item,
            label: <span onClick={() => setDrawerOpen(false)}>{item.label}</span>,
          }))}
        />
      </Drawer>
    </header>
  );
}
