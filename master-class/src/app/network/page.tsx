"use client";

import MatrixBackground from "@/components/MatrixBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";
import TabsSection from "@/components/TabsSection";
import InfoWindow from "@/components/InfoWindow";
import SalaryDetails from "@/components/SalaryDetails";
import CareerTimeline from "@/components/CareerTimeline";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const aboutItems = [
  { icon: "🔍", title: "Диагностика", description: "Выявляешь проблемы в сети: потери пакетов, задержки, ошибки конфигурации, перегрузку каналов и сбои оборудования." },
  { icon: "🧪", title: "Тестирование", description: "Проводишь нагрузочное, стрессовое и функциональное тестирование сетей перед запуском в продакшн." },
  { icon: "🛡️", title: "Безопасность", description: "Проверяешь уязвимости, настраиваешь межсетевые экраны, контролируешь трафик и реагируешь на инциденты." },
  { icon: "📡", title: "Мониторинг", description: "Настраиваешь системы наблюдения за сетью: Zabbix, Grafana, PRTG — отслеживаешь метрики в реальном времени." },
  { icon: "⚙️", title: "Настройка", description: "Конфигурируешь маршрутизаторы, коммутаторы, VLAN, VPN, DNS, DHCP — всё работает как часы." },
  { icon: "📋", title: "Документирование", description: "Создаёшь схемы сетей, описываешь процедуры, ведёшь журналы инцидентов и миграционные планы." },
];

const technicalSkills = [
  "TCP/IP, OSI-модель, DNS, DHCP",
  "Настройка VLAN, VPN, маршрутизации",
  "Wireshark, tcpdump, nmap",
  "Python / Bash для скриптов",
  "Мониторинг: Zabbix, Grafana, PRTG",
  "Cisco IOS, MikroTik RouterOS",
  "Безопасность: firewall, IDS/IPS",
];

const softSkills = [
  "Аналитическое мышление",
  "Внимание к деталям",
  "Работа в стрессовых ситуациях",
  "Документирование и отчётность",
];

const tools = [
  { icon: "🦈", name: "Wireshark", description: "Анализ трафика. Захват и декодирование пакетов в реальном времени." },
  { icon: "🗺️", name: "Nmap", description: "Сканирование сетей. Обнаружение хостов, портов и сервисов." },
  { icon: "📊", name: "Zabbix", description: "Мониторинг инфраструктуры. Уведомления, графики, отчёты." },
  { icon: "📈", name: "Grafana", description: "Визуализация метрик. Дашборды для сетевых показателей." },
  { icon: "🐍", name: "Python", description: "Скрипты автоматизации, парсинг логов, работа с API устройств." },
  { icon: "🔧", name: "PuTTY / SSH", description: "Удалённое управление сетевым оборудованием по CLI." },
  { icon: "🌐", name: "cURL / Postman", description: "Тестирование REST API сетевых сервисов и контроллеров." },
  { icon: "🐳", name: "Docker", description: "Контейнеризация сетевых сервисов для тестовых сред." },
];

const tabs = [
  { key: "tasks", label: "Задачи", icon: "📋" },
  { key: "salary", label: "Зарплата", icon: "💰" },
  { key: "challenges", label: "Трудности", icon: "⚡" },
  { key: "career", label: "Карьерный рост", icon: "🚀" },
];

const taskItems = [
  { icon: "🔍", title: "Диагностика сети", description: "выявляешь проблемы: потери пакетов, задержки, ошибки DNS, перегрузку каналов и сбои оборудования." },
  { icon: "🧪", title: "Тестирование", description: "проводишь нагрузочное, стрессовое и функциональное тестирование сетей перед запуском в продакшн." },
  { icon: "📡", title: "Мониторинг", description: "настраиваешь Zabbix, Grafana, PRTG для отслеживания метрик сети в реальном времени." },
  { icon: "🛡️", title: "Безопасность", description: "проверяешь уязвимости, настраиваешь firewall, контролируешь трафик, реагируешь на инциденты." },
  { icon: "⚙️", title: "Конфигурация", description: "настраиваешь маршрутизаторы, коммутаторы, VLAN, VPN, DNS, DHCP — всё работает как часы." },
  { icon: "📋", title: "Документирование", description: "создаёшь схемы сетей, описываешь процедуры, ведёшь журналы инцидентов." },
];

const salaryLevels = [
  { level: "Junior", range: "100 — 180K", responsibilities: ["Базовая диагностика (ping, traceroute)", "Настройка простых VLAN", "Мониторинг по шаблонам"] },
  { level: "Middle", range: "180 — 350K", responsibilities: ["Анализ трафика в Wireshark", "Настройка VPN и маршрутизации", "Автоматизация на Python/Bash"] },
  { level: "Senior / Lead", range: "350K — 550K+", responsibilities: ["Проектирование сетевой архитектуры", "Управление командой NOC", "Внедрение SD-WAN / Zero Trust"] },
];

const challengeItems = [
  { icon: "🌙", title: "Ночные инциденты", description: "сбои сети не ждут утра. Дежурства, ночные выезды, восстановление сервисов под давлением." },
  { icon: "🧩", title: "Сложная диагностика", description: "проблема может быть где угодно: в кабеле, настройке, конфликте IPs, нагрузке, обновлении прошивки." },
  { icon: "🏗️", title: "Легаси-оборудование", description: "старые коммутаторы без SNMP, нестандартные протоколы, отсутствие документации по сети." },
  { icon: "👥", title: "Давление бизнеса", description: "«сеть работает медленно» без конкретики. Нужно быстро находить причину и объяснять нетехническому руководству." },
  { icon: "📚", title: "Постоянное обучение", description: "обновления Cisco, новые стандарты Wi-Fi 6E, SD-WAN, SASE. Нужно следить за трендами." },
  { icon: "🔒", title: "Безопасность", description: "каждая настройка может стать уязвимостью. Нужно балансировать между доступностью и защитой." },
];

const careerSteps = [
  { title: "Junior NOC Engineer / Network Technician", experience: "0 — 1 год опыта", description: "Мониторинг сети, обработка тикетов, базовая диагностика, документирование инцидентов под руководством старших." },
  { title: "Middle Network Engineer", experience: "1 — 3 года опыта", description: "Настройка и поддержка сетевого оборудования, VPN, VLAN. Автоматизация рутинных задач. Анализ трафика." },
  { title: "Senior Network Engineer", experience: "3 — 5 лет опыта", description: "Проектирование сетевой архитектуры, внедрение новых технологий, настройка сложных сценариев (BGP, MPLS)." },
  { title: "Network Architect / Team Lead", experience: "5+ лет опыта", description: "Стратегическое планирование инфраструктуры, управление командой, выбор технологий и вендоров." },
  { title: "Head of Network / Infrastructure Director", experience: "7+ лет опыта", description: "Управление всей сетевой инфраструктурой компании. Бюджетирование, цифровая трансформация, Zero Trust." },
];

const roadmapSteps = [
  { number: "01", title: "Изучи основы сетей", description: "Освой OSI-модель, TCP/IP, DNS, DHCP, HTTP. Пойми, как работает маршрутизация и коммутация. Пройди курс CompTIA Network+." },
  { number: "02", title: "Освой инструменты", description: "Научись пользоваться Wireshark, nmap, ping, traceroute. Попрактикуйся в анализе трафика и сканировании сетей." },
  { number: "03", title: "Настрой лабораторную", description: "Собери тестовую сеть дома: виртуальные машины, GNS3, Cisco Packet Tracer. Практикуй конфигурацию оборудования." },
  { number: "04", title: "Изучи мониторинг", description: "Настрой Zabbix или Grafana для наблюдения за сетью. Научись создавать алерты и анализировать метрики." },
  { number: "05", title: "Получи сертификацию", description: "CompTIA Network+, Cisco CCNA, Juniper JNCIA — подтверди навыки документально. Это откроет двери в крупные компании." },
  { number: "06", title: "Начни карьеру", description: "Претендуй на позицию Junior Network Tester / NOC Engineer. Дальше — рост до Senior, Team Lead, архитектора сетей." },
];

const faqItems = [
  { question: "Нужны ли сертификации?", answer: "Сертификации (CCNA, Network+) значительно повышают шансы на трудоустройство. Многие работодатели требуют их как обязательное условие. Однако практические навыки тоже важны — идеально сочетать и то, и другое." },
  { question: "Сколько времени нужно на обучение?", answer: "При занятиях 2–3 часа в день до уровня Junior за 4–6 месяцев. Если есть опыт в IT — можно освоить за 2–3 месяца. Сертификации требуют дополнительного времени на подготовку." },
  { question: "Можно ли работать удалённо?", answer: "Да, многие задачи (мониторинг, анализ логов, настройка VPN) можно выполнять удалённо. Однако инциденты могут потребовать физического доступа к оборудованию." },
  { question: "Чем тестировщик сетей отличается от сетевого инженера?", answer: "Тестировщик фокусируется на проверке, диагностике и поиске проблем. Инженер — на проектировании и настройке. На практике роли часто пересекаются, особенно в небольших командах." },
];

const codeLines = [
  { type: "comment" as const, text: "// Проверка сети" },
  { type: "code" as const, text: '<span class="keyword">$ ping</span> -c 4 <span class="string">192.168.1.1</span>' },
  { type: "code" as const, text: "" },
  { type: "code" as const, text: '<span class="keyword">PING</span> <span class="func">192.168.1.1</span>: 56 data bytes' },
  { type: "code" as const, text: '64 bytes: icmp_seq=<span class="string">0</span> ttl=64 time=<span class="func">0.42ms</span>' },
  { type: "code" as const, text: '64 bytes: icmp_seq=<span class="string">1</span> ttl=64 time=<span class="func">0.38ms</span>' },
  { type: "code" as const, text: '64 bytes: icmp_seq=<span class="string">2</span> ttl=64 time=<span class="func">0.41ms</span>' },
  { type: "code" as const, text: '64 bytes: icmp_seq=<span class="string">3</span> ttl=64 time=<span class="func">0.39ms</span>' },
  { type: "code" as const, text: "" },
  { type: "comment" as const, text: "# 4 packets transmitted, 4 received" },
  { type: "comment" as const, text: "# 0% packet loss" },
];

export default function NetworkPage() {
  return (
    <>
      <MatrixBackground />
      <Navbar />

      <Hero
        badge="Востребованная профессия 2025+"
        title={
          <>
            Тестировщик сетей — обеспечь{" "}
            <span className="gradient-text">стабильность</span>
          </>
        }
        description="Проверяй, настраивай и обеспечивай бесперебойную работу сетевой инфраструктуры. Каждый пинг, каждый пакет — под твоим контролем."
        buttons={[
          { label: "Начать путь", href: "#roadmap", primary: true },
          { label: "Узнать больше", href: "#about" },
        ]}
        stats={[
          { value: "200K+", label: "руб./мес. зарплата" },
          { value: "25%", label: "рост вакансий / год" },
          { value: "99.9%", label: "целевая доступность" },
        ]}
        codeLines={codeLines}
        primaryColor="#0077CC"
      />

      <About items={aboutItems} primaryColor="#0077CC" />
      <Skills technical={technicalSkills} soft={softSkills} />
      <Tools tools={tools} />

      <TabsSection
        tabs={tabs}
        primaryColor="#0077CC"
        panels={{
          tasks: <InfoWindow title="📋 Основные задачи" items={taskItems} />,
          salary: (
            <InfoWindow title="💰 Зарплата по уровням">
              <SalaryDetails levels={salaryLevels} />
            </InfoWindow>
          ),
          challenges: (
            <InfoWindow title="⚡ Основные трудности" items={challengeItems} />
          ),
          career: (
            <InfoWindow title="🚀 Карьерный путь">
              <CareerTimeline steps={careerSteps} />
            </InfoWindow>
          ),
        }}
      />

      <Roadmap steps={roadmapSteps} primaryColor="#0077CC" />
      <FAQ items={faqItems} />

      <CTA
        title="Готов начать карьеру в тестировании сетей?"
        description="Каждая сеть нуждается в надёжном страже. Стань экспертом, который обеспечивает бесперебойную связь."
        buttonLabel="Следовать дорожной картой"
        buttonHref="#roadmap"
      />

      <Footer />
    </>
  );
}
