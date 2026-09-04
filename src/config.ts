export type SocialLinks = {
  email?: string;
  linkedin?: string;
  github?: string;
};

export type HeroStat = {
  label: string;
  value: string;
};

export type HighlightProject = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  status: string;
  role: string[];
  proof: string[];
  stack: string[];
  video?: string;
  diagrams?: string[];
  diagramCaptions?: string[];
  image?: string;
  website?: string;
};

export type ArchiveItem = {
  title: string;
  subtitle?: string;
  description?: string;
  bullets?: string[];
  link?: string;
  linkLabel?: string;
  patentHref?: string;
  patentLabel?: string;
  image?: string;
  video?: string;
  tags?: string[];
};

export type ArchiveTab = {
  id: string;
  label: string;
  items: ArchiveItem[];
};

export const siteConfig = {
  name: "서비스 기획자 | 서정윤",
  profileImage: "/media/youn-profile-neutral.png",
  englishName: "Seo Jungyoun",
  title: "AI Workflow Designer · Creative Technologist",
  description:
    "AI 로직과 콘텐츠 제작 사이를 연결하는 기획자 서정윤의 포트폴리오.",
  accentColor: "#f37321",
  secondaryColor: "#0b0b0b",
  softColor: "#f7f7f5",
  social: {
    email: "bellita@naver.com",
    linkedin: "https://www.linkedin.com/in/%EC%A0%95%EC%9C%A4-%EC%84%9C-71b989274/",
    github: "https://github.com/seojungyoun",
  } satisfies SocialLinks,
  hero: {
    eyebrow: "AI-Human Creative Collaboration",
    headline: "Bridging AI, Technology,\nand Creative Ideas.",
    summary:
      "AI·개발·디자인을 직접 다루며 기획 감각을 쌓아왔습니다. 생성형 AI 영상 워크플로우 FILMFLOW는 논문 투고와 특허 출원을 완료했으며, KT 2025 ESG 보고서 홍보 영상과 언어 표현 소셜 아카이브 Phris까지 직접 기획하고 구현해왔습니다.",
    primaryCta: {
      label: "핵심 프로젝트 보기",
      href: "#featured-projects",
    },
    secondaryCta: {
      label: "전체 이력 보기",
      href: "#full-archive",
    },
    stats: [
      { label: "특허 출원", value: "10-2026-0101551" },
      { label: "인턴십", value: "3회" },
      { label: "협업", value: "대기업·지자체·학교" },
    ] satisfies HeroStat[],
  },
  about: {
    heading: "데이터 흐름을 설계하고,\n소통하는 서비스 기획자",
    body:
      "덕성여자대학교 IT미디어공학과에서 4.2/4.5 학점을 유지하며, 생성형 AI 워크플로우 설계, Unity 기반 실감형 콘텐츠, 웹/앱 개발과 서비스 기획을 함께 다뤄왔습니다. 다양한 기술을 활용하여 문제를 구조화하고, 더 나은 사용자 경험을 만들어 나갑니다.",
  },
  highlightProjects: [
    {
      id: "flimflow",
      title: "FILMFLOW",
      subtitle: "생성형 AI 영상 자동화 워크플로우 · 특허 출원 완료",
      summary:
        "장면 간 비일관성, 무한 재생성, 불완전한 프롬프트 입력 문제를 워크플로우 설계의 문제로 재정의한 프로젝트입니다.",
      status:
        "‘제한적 사용자 개입 기반의 시각적 일관성 유지를 위한 생성형 인공지능 영상 제작 방법 및 장치’로 특허 출원(10-2026-0101551)을 완료했습니다.",
      role: [
        "워크플로우 전체 기획 및 설계",
        "특허 명세서 및 출원 문서 작성",
        "스토리보드-이미지-영상 연결 구조 정의",
      ],
      proof: [
        "생성형 AI 영상 제작 파이프라인 설계 문서 기반 정리",
        "특허 출원 완료 · 출원번호 10-2026-0101551",
        "도1·도2 다이어그램으로 로직 레이어 시각화",
      ],
      stack: ["LangChain", "LangGraph", "Stable Diffusion", "Veo3", "Python"],
      video: "https://youtu.be/d4_xoC0egl4?si=HVRcyg-W-ricGCCU",
      diagrams: ["/media/flimflow-diagram-1.png", "/media/flimflow-diagram-2.png"],
      diagramCaptions: [
        "도1 — 장면 일관성 평가 흐름도: 스토리보드 파싱 → 6축 충분성 평가 → 재생성/승인 분기",
        "도2 — 전체 파이프라인 아키텍처: PDF 입력 → 프롬프트 생성 → 이미지·영상 출력까지의 시스템 흐름",
      ],
    },
    {
      id: "kt-esg-2025",
      title: "KT 2025 ESG 보고서",
      subtitle: "KT디지털인재장학생 콘텐츠 · 생성형 AI 기반 ESG 홍보 영상",
      summary:
        "KT 2025 ESG 보고서의 핵심 메시지를 시청자가 쉽고 빠르게 이해할 수 있도록, 생성형 AI를 활용해 영상 콘텐츠로 재구성한 프로젝트입니다.",
      status:
        "보고서 내용을 분석해 전달 구조를 기획하고, 생성형 AI를 활용한 영상 제작부터 스크립트 작성·편집·후반 작업까지 전 과정을 수행했습니다.",
      role: [
        "ESG 보고서 핵심 내용 분석 및 메시지 구조화",
        "생성형 AI 기반 홍보 영상 콘셉트 기획 및 제작",
        "스크립트 작성 및 시각 자료 구성",
        "영상 편집·모션그래픽·후반 작업",
      ],
      proof: [
        "KT 2025 ESG 보고서 기반 홍보 영상 완성",
        "정보성 콘텐츠를 시청 흐름에 맞게 재구성",
        "기획부터 후반 작업까지 전 과정 수행",
      ],
      stack: ["KT", "ESG", "Generative AI", "Premiere Pro", "After Effects"],
      video: "https://youtu.be/QAWND9Cv4kY?si=FpT3pksDKnzhM8YC",
    },
    {
      id: "phris",
      title: "Phris",
      subtitle: "언어 표현 소셜 아카이브 · App Store 출시",
      summary:
        "언어 학습자가 일상에서 발견한 표현을 기록하고, 저장하고, 다른 사용자와 공유하며 함께 학습할 수 있도록 설계한 소셜 컬렉션 앱입니다.",
      status:
        "Expo Router와 Supabase를 기반으로 서비스 기획부터 UI/UX, 개발, 배포까지 전 과정을 수행했으며 App Store에 정식 출시했습니다.",
      role: [
        "서비스 전체 기획 및 모바일 UI/UX 설계",
        "표현 피드·모임·채팅·보관함 기능 구현",
        "인증·데이터베이스 구조 설계 및 App Store 배포",
      ],
      proof: [
        "App Store 정식 출시",
        "학습 언어 기반 피드와 월별 표현 아카이브 구현",
        "모임·1:1 채팅을 연결한 소셜 학습 경험 설계",
      ],
      stack: ["Expo", "React Native", "TypeScript", "Supabase", "App Store"],
      image: "/media/phris-promo.png",
      website: "https://phris.io/?demo=1",
    },
  ] satisfies HighlightProject[],
  management: {
    title: "기획부터 실행까지 설계하는 인재",
    summary:
      "프로젝트를 기획하는 데서 멈추지 않고, 운영 흐름과 협업 구조를 함께 설계해왔습니다.\nKT디지털인재장학생 활동과 인턴십을 통해 콘텐츠 발행, 협업 조율, 실행 관리 경험을 쌓았습니다.",
    metrics: [
      { label: "KT디지털인재장학생", value: "운영진 · 우수장학생", detail: "KT와 협업하며 장학생 활동 기획·운영" },
      { label: "KT디지털인재장학생 공식 SNS 콘텐츠", value: "30건 이상", detail: "콘텐츠 기획·제작과 운영 기획 및 관리" },
      { label: "인턴십", value: "3회", detail: "콘텐츠 제작, 자동화, 운영 경험 축적" },
      { label: "협업 툴", value: "Slack · Notion · Figma", detail: "기획 문서 작성과 진행 리드 경험" },
    ],
    tools: ["Slack", "Notion", "Figma", "Excel", "Google Sheets"],
  },
  skills: [
    "Python",
    "Unity (C#)",
    "LangChain / LangGraph",
    "Flask / Celery",
    "PyTorch",
    "Figma",
    "Premiere Pro",
    "After Effects",
    "Swift",
    "PHP / MySQL",
    "React",
    "Linux",
    "Unreal (C++)",
  ],
  archiveTabs: [
    {
      id: "projects",
      label: "Projects",
      items: [
        {
          title: "FILMFLOW",
          subtitle: "생성형 AI 영상 자동화 워크플로우",
          description:
            "LangChain 및 LangGraph를 활용해 프롬프트-이미지-영상 자동화 파이프라인을 설계했고, 장면 간 일관성 문제를 워크플로우 관점에서 해결했습니다.",
          bullets: [
            "특허 출원 완료 · 10-2026-0101551",
            "스토리보드 기반 파이프라인 기획·설계",
            "특허 명세서 및 출원 문서 작성",
          ],
          link: "https://youtu.be/d4_xoC0egl4?si=HVRcyg-W-ricGCCU",
          patentHref: "/media/patent-filing-specification.pdf",
          patentLabel: "특허출원명세서 보기",
          linkLabel: "영상 보기",
          tags: ["Python", "LangChain", "LangGraph", "Generative AI"],
        },
        {
          title: "2026 K-AI 공모전",
          subtitle: "콘텐츠 영상 대상 · 한국방송통신전파진흥원 원장상",
          description:
            "생성형 AI를 활용한 영상 작품을 기획·제작해 2026 K-AI 공모전 콘텐츠 영상 대상을 수상했습니다.",
          bullets: [
            "콘텐츠 영상 대상",
            "한국방송통신전파진흥원 원장상",
          ],
          link: "https://youtu.be/tz3NOHHITt0?si=dEyGXD6hElddrrB1",
          linkLabel: "영상 보기",
          tags: ["K-AI", "대상", "Generative AI", "영상 기획", "영상 제작"],
        },
        {
          title: "Dorememe",
          subtitle: "VR 기반 실시간 공감각 미디어아트",
          description:
            "PyTorch 기반 AI 사운드 파이프라인과 Unity VR 환경을 결합한 졸업작품으로, 전시에 출품했습니다.",
          bullets: [
            "Unity 개발 전담",
            "3D 스케치 로직 구현",
            "Flask/Celery 비동기 서버 아키텍처 연결",
          ],
          tags: ["Unity", "PyTorch", "Flask", "Celery", "VR"],
          link: "https://github.com/seojungyoun/25_Dorememe.git",
          linkLabel: "깃허브 보기",
          video: "/media/dorememe.mp4",
        },
        {
          title: "Phris",
          subtitle: "언어 표현 소셜 아카이브 · App Store 출시",
          image: "/media/phris-promo.png",
          description:
            "언어 학습자가 일상에서 발견한 표현을 기록하고 저장하며, 모임과 채팅을 통해 다른 사용자와 함께 학습할 수 있는 소셜 컬렉션 앱입니다.",
          bullets: [
            "서비스 기획부터 UI/UX, 개발, 배포까지 전 과정 수행",
            "표현 피드·모임·채팅·월별 보관함 기능 구현",
            "App Store 정식 출시",
          ],
          link: "https://phris.io/?demo=1",
          linkLabel: "체험하기",
          tags: ["Expo", "React Native", "TypeScript", "Supabase"],
        },
        {
          title: "특추리",
          subtitle: "국내 기업 특허출원 도우미",
          description:
            "기업의 발명 아이디어를 구조화하고 KIPRIS 공개특허와 비교해, 출원 전 보완 사항과 준비도를 검토서로 제공하는 멀티에이전트 서비스입니다.",
          bullets: [
            "서비스 기획 및 프론트엔드 담당",
            "발명 설명 구조화·누락 정보 탐지 흐름 설계",
            "유사특허 Top-K 비교 및 출원 준비도 검토서 구현",
          ],
          tags: ["Python", "LLM", "Multi-Agent", "KIPRIS", "RAG"],
        },
        {
          title: "독일 University of Marburg XAI 개인 연구",
          subtitle: "설명 가능한 AI 연구",
          description:
            "Explainable AI를 학습하고 인공지능 모델의 기술적 신뢰성을 분석했습니다.",
          tags: ["Python", "Jupyter", "XAI"],
        },
        {
          title: "덕성여자대학교 RISE 사업 AR 영상 제작",
          subtitle: "AI 기반 데이터 분류 및 시각 에셋 최적화",
          image: "/media/ar.png",
          description:
            "AI 기반 데이터 분류와 시각 에셋 최적화를 바탕으로 영상 제작 품질 관리를 주도했습니다.",
          tags: ["AI", "AR", "Content Production"],
        },
        {
          title: "도봉옛길 메타버스 구현 및 전시",
          subtitle: "지역 문화유산 가상 구현",
          image: "/media/zep.png",
          description:
            "Zep과 제페토 플랫폼을 활용해 지역 문화유산을 가상 공간으로 구현하고 미디어아트 전시에 참여했습니다.",
          link: "https://zep.us/play/2XdGEJ",
          linkLabel: "ZEP 보러가기",
          tags: ["Zep", "Zepeto", "Metaverse"],
        },
        {
          title: "장미원시장 미디어 파사드 영상 제작",
          subtitle: "상권 활성화 콘텐츠",
          description:
            "Grok AI, Veo3, Gemini 등 최신 AI 모델을 활용해 실감형 상권 활성화 미디어 파사드 영상 콘텐츠를 기획하고 제작했습니다.",
          link: "https://www.youtube.com/shorts/YDDte8_xuzQ?si=AsH2JDI-gqdrFdLi",
          linkLabel: "영상 보기",
          tags: ["Grok AI", "Veo3", "Gemini", "미디어파사드"],
        },
        {
          title: "KT 2025 ESG 보고서 홍보 영상 제작",
          subtitle: "KT디지털인재장학생 · 생성형 AI 콘텐츠",
          description:
            "KT 2025 ESG 보고서의 핵심 내용을 분석하고 생성형 AI를 활용해 홍보 영상으로 제작했습니다. 콘셉트 기획과 스크립트 작성부터 편집·후반 작업까지 전 과정을 담당했습니다.",
          link: "https://youtu.be/QAWND9Cv4kY?si=FpT3pksDKnzhM8YC",
          linkLabel: "영상 보기",
          tags: ["생성형 AI", "영상 기획", "편집", "KT", "ESG"],
        },
        {
          title: "성동 1+1 프로젝트",
          subtitle: "지역 상생 콘텐츠 기획",
          image: "/media/1+1.png",
          description:
            "성동구 지역 상생을 위한 콘텐츠 기획 및 제작 프로젝트에 참여했습니다.",
          tags: ["기획", "콘텐츠 제작", "지역협력"],
        },
        {
          title: "스마트해상물류 X ICT 멘토링 프로젝트",
          subtitle: "항만 업무용 자동 스크린 락 앱 개발",
          description:
            "블루투스 기반 항만 업무용 노트북 자동 스크린 락 애플리케이션을 개발했습니다.",
          tags: ["Python", "Bluetooth"],
        },
        {
          title: "Future Letter 모바일 앱 개발",
          subtitle: "미래 전달 편지 서비스",
          description:
            "Swift, PHP, MySQL 기반으로 미래 편지 전달 서비스를 설계하고 개발했습니다. 이 서비스에서는 AI가 편지의 내용을 바탕으로 감정과 목표 달성률을 분석하여 리포트로 제공합니다.",
          tags: ["Swift", "PHP", "MySQL"],
        },
        {
          title: "Linux TCP 통신 채팅 프로그램 개발",
          subtitle: "Ubuntu 기반 네트워크 시스템 구현",
          description:
            "Ubuntu 환경에서 C 언어 기반의 TCP/IP 소켓 멀티스레드 채팅 시스템을 구현했습니다.",
          tags: ["C", "Linux", "TCP/IP"],
        },
      ],
    },
    {
      id: "internships",
      label: "Internships",
      items: [
        {
          title: "네이션에이 (NationA)",
          subtitle: "AI 콘텐츠 크리에이터 인턴",
          description:
            "Python 기반 캐릭터 채팅 콘텐츠 제작과 서비스 자동화 툴 개발에 참여했습니다.",
        },
        {
          title: "(주)후시파트너스",
          subtitle: "IT / 마케팅 인턴",
          description:
            "생성형 AI 활용 브랜드 홍보 영상 제작 및 SNS 콘텐츠 자동화 파이프라인 구축을 통해 팔로워 60% 증대를 달성했습니다.",
        },
        {
          title: "가톨릭평화방송 (CPBC)",
          subtitle: "뉴미디어팀 인턴",
          description:
            "유튜브 라이브 스트리밍 관리, 롱폼·쇼츠 영상, 인스타그램 콘텐츠 전반 제작을 총괄했습니다.",
        },
      ],
    },
    {
      id: "awards",
      label: "Awards",
      items: [
        {
          title: "2026 K-AI 콘텐츠 영상 대상",
          subtitle: "한국방송통신전파진흥원 원장상 · 2026",
          description:
            "생성형 AI 기반 영상 작품을 기획·제작해 2026 K-AI 공모전 콘텐츠 영상 대상을 수상했습니다.",
          link: "https://youtu.be/tz3NOHHITt0?si=dEyGXD6hElddrrB1",
          linkLabel: "수상작 보기",
          tags: ["K-AI", "콘텐츠 영상 대상", "한국방송통신전파진흥원"],
        },
        {
          title: "한국미디어아트산업협회(KMAIA) 우수논문상",
          subtitle: "2026",
          description:
            "FILMFLOW 연구 논문을 투고해 사단법인 한국미디어아트산업협회(KMAIA) 우수논문상을 수상했습니다.",
          tags: ["FILMFLOW", "우수논문상", "KMAIA"],
        },
        {
          title: "2025 K-AI 공모전 최우수상",
          subtitle: "한국지능정보사회진흥원 원장상 · 2025",
          description:
            "AI를 활용한 쇼츠 영상을 기획·제작해 2025 K-AI 공모전 최우수상을 수상했습니다.",
          link: "https://youtube.com/shorts/MyBtsOtpXts?si=oPI_F7_O558oe8fZ",
          linkLabel: "수상작 보기",
          tags: ["K-AI", "최우수상", "한국지능정보사회진흥원"],
        },
        {
          title: "경기콘텐츠진흥원장상",
          subtitle: "2024",
          description: "실버 세대 여행 지원 VR/MR 메타버스 콘텐츠 개발 성과로 수상했습니다.",
        },
        {
          title: "덕성여자대학교 연합해커톤 수상",
          subtitle: "2023",
          description: "졸업 정보 아카이빙 웹 서비스 '졸업을 도와조' 프론트엔드 개발로 수상했습니다.",
          image: "/media/duksung.png",
        },
        {
          title: "Microsoft Office Specialist : Excel 2016 Expert",
          subtitle: "자격증",
          description: "데이터 정리와 운영 문서 제작 역량을 보여주는 자격 취득입니다.",
        },
      ],
    },
    {
      id: "activities",
      label: "Activities",
      items: [
        {
          title: "KT디지털인재장학생",
          description:
            "디지털·AI 역량 강화 교육을 이수하고 운영진으로 활동하며 SNS 콘텐츠를 기획·관리했습니다. 활동 성과를 인정받아 우수장학생으로 선정됐습니다.",
        },
        {
          title: "GDSC Duksung",
          description:
            "홍보팀 운영진과 UI/UX 스터디 팀장으로 활동하며 커뮤니티 운영을 주도했습니다.",
        },
        {
          title: "청년 ESG 기획봉사",
          description:
            "서울시자원봉사센터와 함께 지역 상생 전시를 기획하고 개최했습니다.",
        },
        {
          title: "인천 도서산간 지역 랜선야학 멘토링",
          description:
            "대학생 멘토로서 수학 학습 지도와 취약 계층 학생 대상 진로 멘토링을 수행했습니다.",
        },
        {
          title: "대학생 건축연합동아리 아키텐",
          description:
            "AI와 메타버스 융합 주제로 스터디를 진행하고 기획 전시에 참여했습니다.",
        },
        {
          title: "코딩 학습 유튜브 채널 운영",
          description:
            "Java, Python, Django 기반 교육 콘텐츠를 기획하고 영상을 제작했습니다.",
        },
        {
          title: "경기콘텐츠진흥원 경기 XR 캠퍼스 유니티 과정 수료",
          description:
            "경기콘텐츠진흥원이 주관하는 경기 XR 캠퍼스에서 Unity 심화 과정을 수료했습니다.",
          tags: ["Unity", "XR", "수료"],
        },
      ],
    },
    {
      id: "education",
      label: "Education",
      items: [
        {
          title: "덕성여자대학교",
          subtitle: "IT미디어공학과 · GPA 4.2 / 4.5 · 2022 - 2026.08 졸업예정",
          description:
            "AI, 미디어, 프론트엔드, 실감형 콘텐츠를 아우르는 전공 기반 위에서 기획과 구현 경험을 함께 쌓았습니다.",
        },
        {
          title: "University of Marburg",
          subtitle: "방문학생 · Computer Science",
          description:
            "독일에서 XAI 연구와 컴퓨터과학 학습을 수행하며 기술적 관점을 확장했습니다.",
        },
      ],
    },
  ] satisfies ArchiveTab[],
  archive: {
    reviewerSummaryHref: "",
  },
};
