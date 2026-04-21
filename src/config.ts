export type SocialLinks = {
  email?: string;
  linkedin?: string;
  github?: string;
};

export type WorkflowStep = {
  id: string;
  label: string;
  title: string;
  description: string;
  metrics?: string[];
};

export type ProjectShowcase = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  challenge: string;
  solution: string;
  outcomes: string[];
  tags: string[];
  accent: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  detail: string;
};

export type TechGroup = {
  name: string;
  stack: string[];
  projectIds: string[];
};

export type LegacyProject = {
  name: string;
  description: string;
  link?: string;
  skills?: string[];
};

export type ExperienceItem = {
  company: string;
  title: string;
  dateRange: string;
  bullets: string[];
};

export type EducationItem = {
  school: string;
  degree: string;
  dateRange: string;
  achievements: string[];
};

export const siteConfig = {
  name: "서정윤",
  englishName: "Seo Jungyoun",
  title: "AI Engineer and Creative Pipeline Designer",
  description:
    "AI logic, workflow design, and content operations를 연결하는 인터랙티브 포트폴리오.",
  accentColor: "#f5a8c8",
  secondaryColor: "#1f2f63",
  softColor: "#fff7fb",
  social: {
    email: "bellita@naver.com",
    linkedin: "https://www.linkedin.com/in/%EC%A0%95%EC%9C%A4-%EC%84%9C-71b989274/",
    github: "https://github.com/seojungyoun",
  } satisfies SocialLinks,
  hero: {
    eyebrow: "AI-Human Collaborative Pipeline",
    headline: "Bridging the Gap between AI Logic and Content Creation.",
    subheadline:
      "기획, 시스템 설계, 운영, 그리고 콘텐츠 실행까지 하나의 워크플로우로 연결하는 AI 협업형 포트폴리오.",
    primaryCta: {
      label: "Workflow Start",
      href: "#workflow",
    },
    secondaryCta: {
      label: "SM Hidden Page",
      href: "/sm-proposal",
    },
    stats: [
      { label: "Workflow Lens", value: "3 Layers" },
      { label: "Content Ops", value: "12+ Releases" },
      { label: "Focus", value: "AI x Media x PMO" },
    ],
  },
  workflow: [
    {
      id: "input",
      label: "01 Input",
      title: "User Intent and Creative Friction",
      description:
        "아이디어가 실행 가능한 시스템 요구사항으로 번역되기 전의 모호함을 먼저 정의합니다.",
      metrics: ["Needs mapping", "User goal framing", "Prompt constraints"],
    },
    {
      id: "logic",
      label: "02 Logic",
      title: "AI Logic Layer",
      description:
        "일관성, 컨텍스트, 정량 평가 기준을 설계해 생성형 결과물을 제어 가능한 프로세스로 바꿉니다.",
      metrics: ["Consistency rules", "Context strategy", "Evaluation metrics"],
    },
    {
      id: "ops",
      label: "03 Operations",
      title: "Management Layer",
      description:
        "개발, 디자인, 운영팀이 같은 기준으로 움직일 수 있도록 실행 대시보드와 협업 규칙을 설계합니다.",
      metrics: ["Milestone tracking", "Cross-team rituals", "Output cadence"],
    },
    {
      id: "archive",
      label: "04 Archive",
      title: "Foundation and Archive",
      description:
        "기술 스택, 문서화, 요약본, 제안서를 통해 결과물을 빠르게 검토할 수 있는 구조를 남깁니다.",
      metrics: ["Tech mapping", "Reviewer summary", "Strategic proposal"],
    },
  ] satisfies WorkflowStep[],
  projects: [
    {
      id: "video",
      title: "AI Video Generation Workflow",
      subtitle: "Inconsistency Control / Patent Review Context",
      summary:
        "스토리보드 파싱부터 6축 정량 평가까지, 영상 생성의 비일관성을 관리 가능한 파이프라인으로 변환한 설계입니다.",
      challenge:
        "샷 간 스타일과 동작이 흔들리는 생성형 영상은 결과물보다 프로세스 설계가 더 중요합니다.",
      solution:
        "문제 정의, 장면 파싱, 제약 설계, 품질 측정 지표를 묶어 기획자가 통제 가능한 로직 레이어를 만들었습니다.",
      outcomes: [
        "Storyboard parsing to prompt graph",
        "6-axis scoring for motion, style, continuity, timing, framing, emotion",
        "Before/after narrative for reviewer-friendly explanation",
      ],
      tags: ["Generative AI", "Workflow Design", "Evaluation Strategy"],
      accent: "#ffd9eb",
    },
    {
      id: "dorememe",
      title: "Dorememe",
      subtitle: "VR + AI Sound Mapping",
      summary:
        "사용자의 드로잉과 움직임을 사운드 파라미터로 실시간 매핑하는 감각형 인터랙션 시스템입니다.",
      challenge:
        "몰입형 콘텐츠에서는 입력과 출력 사이의 반응성이 경험 품질을 결정합니다.",
      solution:
        "Unity 프론트와 Flask/Celery 비동기 서버를 나누고, 색상과 굵기를 음색과 밀도로 연결하는 인터페이스를 설계했습니다.",
      outcomes: [
        "Gesture to sound mapping demo",
        "Unity client + async inference server diagram",
        "Emotion-driven interactive media narrative",
      ],
      tags: ["Unity", "Flask", "Celery", "Interactive Media"],
      accent: "#ffd4f1",
    },
    {
      id: "writie",
      title: "Writie",
      subtitle: "LLM Context Strategy for Writing Growth",
      summary:
        "AI가 글을 대신 완성하는 대신 사용자의 사고를 확장하도록 설계한 컨텍스트 전략 사례입니다.",
      challenge:
        "글쓰기 보조 도구가 사용자의 판단과 문체를 약화시키지 않으려면 질문 구조가 핵심입니다.",
      solution:
        "Claude API 프롬프트를 단계별 코칭 구조로 설계하고, 응답보다 사고를 유도하는 UI 흐름으로 풀어냈습니다.",
      outcomes: [
        "Prompt architecture vs flowchart comparison",
        "Question-led writing support model",
        "User agency preserved through guided context shaping",
      ],
      tags: ["Claude API", "Prompt Design", "EdTech Thinking"],
      accent: "#ffe7f2",
    },
  ] satisfies ProjectShowcase[],
  management: {
    title: "The Management Layer",
    summary:
      "프로젝트 운영은 감각이 아니라 시스템이라고 생각합니다. 실행 리듬, 커뮤니케이션 방식, 운영 지표를 눈에 보이게 만드는 일을 해왔습니다.",
    metrics: [
      {
        label: "KT Digital Talent",
        value: "Representative Lead",
        detail: "운영진 대표로 행사와 멤버 커뮤니케이션 플로우를 조율",
      },
      {
        label: "SNS Content Releases",
        value: "12+",
        detail: "브랜딩과 행사 운영 콘텐츠를 일정 기반으로 발행",
      },
      {
        label: "Milestone Completion",
        value: "93%",
        detail: "운영 목표와 실행 결과를 대시보드로 관리",
      },
      {
        label: "Event Satisfaction",
        value: "4.8/5",
        detail: "행사 피드백 회수와 개선 항목 반영까지 추적",
      },
    ] satisfies DashboardMetric[],
    tools: [
      "Slack",
      "Notion",
      "Figma",
      "Google Sheets",
      "Discord",
      "Premiere Pro",
    ],
    guidelines: [
      "기획 언어를 개발 언어로 다시 번역해 공통 기준을 만듭니다.",
      "진행 현황은 감이 아니라 공개된 보드와 마일스톤으로 정렬합니다.",
      "운영 피드백은 다음 배포 주기로 바로 연결되도록 문서화합니다.",
    ],
  },
  techGroups: [
    {
      name: "AI Systems",
      stack: ["Python", "LangChain", "Claude API", "PyTorch"],
      projectIds: ["video", "writie"],
    },
    {
      name: "Realtime Media",
      stack: ["Unity", "C++", "UE5", "Flask/Celery"],
      projectIds: ["dorememe"],
    },
    {
      name: "Experience Delivery",
      stack: ["Astro", "Tailwind CSS", "Figma", "Notion"],
      projectIds: ["video", "dorememe", "writie"],
    },
  ] satisfies TechGroup[],
  aboutMe:
    "IT 미디어 공학을 전공하며 4.2/4.5의 성적을 유지하고 있습니다. 독일 마르부르크 대학교에서 XAI 개인 연구를 수행하며 기술적 깊이를 쌓았으며, 세 번의 인턴십을 통해 AI 자동화 파이프라인 구축 역량을 증명했습니다. '기술은 만국 공통어'라는 신념으로 다양한 이해관계자와 소통하며 문제를 해결하는 엔지니어입니다.",
  skills: [
    "Python",
    "C/C++",
    "Java",
    "JavaScript",
    "PyTorch",
    "Jupyter",
    "Unity",
    "Unreal Engine",
    "LangChain",
    "Flask/Celery",
    "Adobe Premiere Pro",
    "After Effects",
    "Illustrator",
    "Figma",
    "Excel (Expert)",
  ],
  legacyProjects: [
    {
      name: "독일 University of Marburg XAI 연구",
      description:
        "방문학생 기간 중 XAI(Explainable AI)를 학습하고 관련 개인 연구를 수행하여 기술적 불확실성을 해소하는 인공지능 모델의 설명 가능성을 탐구했습니다.",
      link: "#",
      skills: ["Python", "Jupyter", "XAI"],
    },
    {
      name: "생성형 AI 단편영화 워크플로우 개발",
      description:
        "LangChain과 LangGraph를 활용해 '프롬프트-이미지-영상' 자동화 워크플로우를 설계하고, 장면 간 시각적 일관성을 확보한 단편 애니메이션을 제작했습니다.",
      link: "https://youtu.be/rbRzVczIRcQ",
      skills: ["Python", "LangChain", "Generative AI"],
    },
    {
      name: "Dorememe (VR 실시간 공감각 미디어 아트)",
      description:
        "사용자의 3D 스케치 데이터를 실시간 음악 파라미터로 매핑하는 AI 사운드 파이프라인을 구축했습니다. Flask/Celery 비동기 서버로 저지연 인터랙션을 실현했습니다.",
      link: "https://github.com/seojungyoun/25_Dorememe.git",
      skills: ["PyTorch", "Unity", "Flask", "C#"],
    },
    {
      name: "도봉옛길 메타버스 구현 및 전시",
      description:
        "지역 상권 활성화를 위해 '도봉옛길'의 역사성을 Zep과 제페토에 가상 공간으로 구현하고 미디어아트 전시 <도봉옛길로 빠지다>에 참여했습니다.",
      link: "#",
      skills: ["Zep", "Zepeto", "Metaverse"],
    },
    {
      name: "항만 업무 노트북 자동 스크린 락 앱",
      description:
        "스마트해상물류 ICT 멘토링 프로젝트를 통해 블루투스 기반의 보안 자동화 애플리케이션을 개발하여 공모전에 참가했습니다.",
      link: "#",
      skills: ["Python", "Bluetooth Integration"],
    },
  ] satisfies LegacyProject[],
  experience: [
    {
      company: "네이션에이 (NationA)",
      title: "AI 콘텐츠 크리에이터 (인턴)",
      dateRange: "2026.01 - 2026.03",
      bullets: [
        "생성형 AI 활용 콘텐츠 제작 및 서비스 자동화 툴 개발",
        "Python 기반 캐릭터 채팅 콘텐츠 파이프라인 구축",
      ],
    },
    {
      company: "(주)후시파트너스",
      title: "마케팅 콘텐츠 제작 인턴",
      dateRange: "2025.06 - 2025.08",
      bullets: [
        "AI 활용 브랜드 홍보 영상 제작 및 SNS 콘텐츠 자동화 파이프라인 구축",
        "팔로워 60% 이상 증대 및 ZEP 활용 회사 소개 콘텐츠 제작",
      ],
    },
    {
      company: "가톨릭평화방송",
      title: "콘텐츠 제작 인턴",
      dateRange: "2024.03 - 2024.07",
      bullets: [
        "유튜브 라이브 스트리밍 및 롱폼/쇼츠 콘텐츠 전반 제작",
        "인스타그램 및 유튜브 채널 그래픽 디자인 총괄",
      ],
    },
  ] satisfies ExperienceItem[],
  education: [
    {
      school: "덕성여자대학교 (Duksung Women's University)",
      degree: "IT미디어공학전공 (GPA: 4.2 / 4.5)",
      dateRange: "2022 - 2026.08 졸업예정",
      achievements: [
        "KT디지털인재장학생",
        "한국지능정보사회진흥원 원장상",
        "경기XR아카데미 경기콘텐츠진흥원장상 수상",
        "덕성여자대학교 연합해커톤 학생투표상 수상",
        "독일 University of Marburg 방문학생 수료 (Computer Science)",
        "청년 ESG 기획봉사 (서울시자원봉사센터) 참여 및 전시 개최",
        "GDSC Duksung 홍보팀 운영진 및 UIUX 스터디 팀장",
        "인천 도서산간 지역 대상 '랜선야학' 수학 및 진로 멘토링",
      ],
    },
  ] satisfies EducationItem[],
  archive: {
    reviewerSummaryHref: "/reviewer-summary",
    hiddenPageHref: "/sm-proposal",
  },
  hiddenProposal: {
    title: "SM AI Virtual Artist Operations Proposal",
    scenario:
      "나이비스(naevis)의 실시간 소통 운영에 제한적 사용자 개입 모델을 적용한다면, 팬의 참여는 유지하면서도 브랜드 일관성을 통제할 수 있습니다.",
    bullets: [
      "팬 입력을 바로 출력하지 않고 moderation + intent classification + response framing 단계를 둡니다.",
      "실시간 대화의 감정 톤은 유지하되, 세계관과 브랜드 가이드는 시스템 레벨에서 제어합니다.",
      "운영팀이 개입해야 하는 순간과 자동 응답이 가능한 순간을 명확히 구분해 안정성을 확보합니다.",
    ],
  },
};
