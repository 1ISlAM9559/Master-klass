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
  { icon: "⚙️", title: "Автоматизация", description: "Проектируешь и разрабатываешь роботов (бот), которые делают рутинную работу: ввод данных, сверку таблиц, генерацию отчётов." },
  { icon: "🔗", title: "Интеграция", description: "Связываешь разные системы друг с другом: ERP, CRM, 1С, Excel, базы данных — всё работает как единое целое." },
  { icon: "📊", title: "Аналитика", description: "Анализируешь процессы, выявляешь узкие места и предлагаешь решения для их автоматизации и оптимизации." },
  { icon: "🛡️", title: "Надёжность", description: "Обеспечиваешь стабильную работу роботов: мониторинг, обработка ошибок, логирование и тестирование." },
  { icon: "📈", title: "Масштабирование", description: "Развиваешь автоматизацию от единичных ботов до полноценных цифровых workforce-платформ для всей компании." },
  { icon: "💡", title: "Инновации", description: "Внедряешь AI и ML в автоматизацию, создавая интеллектуальных роботов, способных принимать решения." },
];

const technicalSkills = [
  "Анализ бизнес-процессов",
  "Разработка на Python / C# / Java",
  "Работа с API и web-сервисами",
  "SQL и работа с базами данных",
  "Платформы: UiPath, Blue Prism, Power Automate",
  "Версионирование: Git",
  "Тестирование и дебаггинг",
];

const softSkills = [
  "Документирование процессов",
  "Коммуникация с заказчиками",
  "Структурное мышление",
  "Управление временем",
];

const tools = [
  { icon: "🟠", name: "UiPath", description: "Лидер рынка RPA. Скринчепинг, Orchestration, AI Center." },
  { icon: "🔵", name: "Blue Prism", description: "Enterprise-платформа с усиленной безопасностью." },
  { icon: "🟡", name: "Power Automate", description: "Microsoft-экосистема. Desktop + Cloud автоматизация." },
  { icon: "🟢", name: "Automation Anywhere", description: "Облачная платформа с AI- и ML-интеграцией." },
  { icon: "🐍", name: "Python", description: "Скрипты автоматизации, парсинг, работа с Excel/CSV." },
  { icon: "🗃️", name: "1С:Предприятие", description: "Автоматизация учёта и документооборота в России." },
  { icon: "🐙", name: "Git", description: "Контроль версий и командная разработка." },
  { icon: "📋", name: "Jira / Confluence", description: "Управление задачами и документация." },
];

const tabs = [
  { key: "tasks", label: "Задачи", icon: "📋" },
  { key: "salary", label: "Зарплата", icon: "💰" },
  { key: "challenges", label: "Трудности", icon: "⚡" },
  { key: "career", label: "Карьерный рост", icon: "🚀" },
];

const taskItems = [
  { icon: "🔍", title: "Анализ процессов", description: "изучаешь бизнес-процессы компании, выявляешь рутинные задачи, пригодные для автоматизации." },
  { icon: "🤖", title: "Разработка ботов", description: "создаёшь роботов в UiPath, Power Automate или Python, которые заменяют ручной труд." },
  { icon: "🔗", title: "Интеграция систем", description: "связываешь ERP, CRM, 1С, Excel, API в единую автоматизированную цепочку." },
  { icon: "🐛", title: "Тестирование и отладка", description: "проверяешь ботов на разных сценариях, ловишь ошибки, оптимизируешь логику." },
  { icon: "📄", title: "Документирование", description: "составляешь ТЗ, схемы процессов (BPMN), техническую документацию." },
  { icon: "🛠️", title: "Поддержка и развитие", description: "мониторишь работающих ботов, обновляешь их при изменении процессов." },
];

const salaryLevels = [
  { level: "Junior", range: "150 — 250K", responsibilities: ["Простые боты по готовым ТЗ", "Работа с UiPath / Power Automate", "Наставничество от тимлида"] },
  { level: "Middle", range: "250 — 450K", responsibilities: ["Сложные интеграции", "Самостоятельное проектирование", "Оптимизация и масштабирование"] },
  { level: "Senior / Lead", range: "450K — 700K+", responsibilities: ["Архитектура RPA-платформы", "Управление командой", "Стратегия автоматизации"] },
];

const challengeItems = [
  { icon: "🧩", title: "Хрупкость ботов", description: "если пользователь изменил интерфейс программы, бот может сломаться. Нужно постоянно адаптировать селекторы и логику." },
  { icon: "📐", title: "Неполные ТЗ", description: "заказчики часто не могут четко описать процесс. Приходится самому разбираться, общаться с исполнителями, выявлять скрытые шаги." },
  { icon: "🏗️", title: "Легаси-системы", description: "старые версии 1С, SAP, bespoke-системы без API. Приходится парсить экраны, работать с CV или скриншотами." },
  { icon: "🔒", title: "Безопасность", description: "боты работают с учётными данными, персональными данными, финансовыми системами. Любая ошибка = инцидент." },
  { icon: "📊", title: "Доказательство ROI", description: "нужно уметь считать экономию от автоматизации и доказывать бизнес-ценность проекта руководству." },
  { icon: "🔄", title: "Постоянное обучение", description: "платформы обновляются, появляются новые AI-возможности. Нужно следить за трендами и учиться." },
];

const careerSteps = [
  { title: "Junior RPA Developer", experience: "0 — 1 год опыта", description: "Разработка простых ботов под руководством тимлида. Изучение платформы, участие в code review, написание документации." },
  { title: "Middle RPA Developer", experience: "1 — 3 года опыта", description: "Самостоятельная разработка сложных автоматизаций. Интеграция с API, работа с БД, оптимизация производительности." },
  { title: "Senior RPA Developer", experience: "3 — 5 лет опыта", description: "Архитектурные решения, наставничество, выбор технологий. Проектирование масштабируемых RPA-платформ." },
  { title: "RPA Team Lead / Architect", experience: "5+ лет опыта", description: "Управление командой, стратегия автоматизации, взаимодействие с бизнесом. Внедрение Center of Excellence (CoE)." },
  { title: "RPA Solution Architect / Head of Automation", experience: "7+ лет опыта", description: "Цифровая трансформация компании. Сочетание RPA + AI/ML. Масштабирование на весь бизнес." },
];

const roadmapSteps = [
  { number: "01", title: "Изучи основы программирования", description: "Начни с Python или C#. Пойми переменные, циклы, функции, работу с файлами и API. Это фундамент для любой автоматизации." },
  { number: "02", title: "Освой одну RPA-платформу", description: "Выбери UiPath, Power Automate или Automation Anywhere. Пройди бесплатные курсы и сделай 2–3 простых бота." },
  { number: "03", title: "Пойми бизнес-процессы", description: "Научись описывать процессы (BPMN), выявлять задачи для автоматизации и общаться с заказчиками." },
  { number: "04", title: "Собери портфолио", description: "Создай 3–5 проектов: парсер сайтов, автозаполнение форм, интеграция с 1С, генератор отчётов. Выложи на GitHub." },
  { number: "05", title: "Получи сертификацию", description: "UiPath Certified Professional, Microsoft PL-500, Automation Anywhere Certified — подтверди навыки документально." },
  { number: "06", title: "Начни карьеру", description: "Претендуй на позицию Junior RPA Developer / RPA Analyst. Дальше — рост до Middle, Lead, архитектора." },
];

const faqItems = [
  { question: "Нужно ли уметь программировать?", answer: "Базовые навыки программирования приветствуются, но не обязательны на старте. Многие RPA-платформы (UiPath, Power Automate) предлагают low-code среду. Однако для серьёзных проектов знание Python или C# станет значительным преимуществом." },
  { question: "Сколько времени нужно на обучение?", answer: "При занятиях 2–3 часа в день до уровня Junior за 3–6 месяцев. Период зависит от предыдущего опыта: программист освоит за 2–3 месяца, новичок — за 4–6." },
  { question: "Какая платформа лучше для начала?", answer: "UiPath — самая популярная с бесплатной Community-версией и большим комьюнити. Power Automate удобен, если вы в экосистеме Microsoft. Automation Anywhere хорош для облачных решений." },
  { question: "RPA не заменит ли AI разработчиков?", answer: "Наоборот — AI делает RPA ещё востребованнее. Интеллектуальные роботы (IPA) требуют специалистов, которые умеют сочетать автоматизацию с машинным обучением. Это растущий рынок." },
];

const codeLines = [
  { type: "comment" as const, text: "// Автоматизация отчётов" },
  { type: "code" as const, text: '<span class="keyword">flow</span> = <span class="func">create_flow</span>(<span class="string">"Закрытие месяца"</span>)' },
  { type: "code" as const, text: "" },
  { type: "code" as const, text: '<span class="keyword">flow</span>.<span class="func">open_sap</span>()' },
  { type: "code" as const, text: '<span class="keyword">flow</span>.<span class="func">extract_data</span>(<span class="string">"FBL3N"</span>)' },
  { type: "code" as const, text: '<span class="keyword">flow</span>.<span class="func">transform</span>(rules=<span class="string">"template.xlsx"</span>)' },
  { type: "code" as const, text: '<span class="keyword">flow</span>.<span class="func">send_email</span>(to=<span class="string">"cfo@company.ru"</span>)' },
  { type: "code" as const, text: "" },
  { type: "comment" as const, text: "# Время выполнения: 5 мин" },
  { type: "comment" as const, text: "# Вместо 4 часов вручную" },
];

export default function RpaPage() {
  return (
    <>
      <MatrixBackground />
      <Navbar />

      <Hero
        badge="Востребованная профессия 2025+"
        title={
          <>
            RPA-разработчик — автоматизируй{" "}
            <span className="gradient-text">будущее</span>
          </>
        }
        description="Создавай роботов, которые берут на себя рутину. Автоматизируй бизнес-процессы и освободи время людей для творческой работы."
        buttons={[
          { label: "Начать путь", href: "#roadmap", primary: true },
          { label: "Узнать больше", href: "#about" },
        ]}
        stats={[
          { value: "350K+", label: "руб./мес. зарплата" },
          { value: "40%", label: "рост вакансий / год" },
          { value: "#1", label: "навык в автоматизации" },
        ]}
        codeLines={codeLines}
      />

      <About items={aboutItems} />
      <Skills technical={technicalSkills} soft={softSkills} />
      <Tools tools={tools} />

      <TabsSection
        tabs={tabs}
        primaryColor="#6C3FE0"
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

      <Roadmap steps={roadmapSteps} primaryColor="#6C3FE0" />
      <FAQ items={faqItems} />

      <CTA
        title="Готов начать карьеру в RPA?"
        description="Автоматизация — это не тренд, а новая реальность. Стань частью цифровой трансформации уже сегодня."
        buttonLabel="Следовать дорожной картой"
        buttonHref="#roadmap"
      />

      <Footer />
    </>
  );
}
