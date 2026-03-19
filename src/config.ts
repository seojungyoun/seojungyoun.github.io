export const siteConfig = {
  name: "서정윤 (Seojungyoun)", 
  title: "AI Engineer & Media Technologist",
  description: "XAI 연구 및 생성형 AI 워크플로우 설계를 통해 기술과 인간을 연결하는 IT미디어공학도입니다.",
  accentColor: "#3b82f6",
  social: {
    email: "bellita@naver.com",
    linkedin: "https://linkedin.com/in/yourprofile",
    github: "https://github.com/seojungyoun"
  },
  aboutMe:
    "IT 미디어 공학을 전공하며 4.2/4.5의 성적을 유지하고 있습니다. 독일 마르부르크 대학교에서 XAI 개인 연구를 수행하며 기술적 깊이를 쌓았으며, 세 번의 인턴십을 통해 AI 자동화 파이프라인 구축 역량을 증명했습니다. '기술은 만국 공통어'라는 신념으로 다양한 이해관계자와 소통하며 문제를 해결하는 엔지니어입니다.",
  
  skills: [
    "Python", "C/C++", "Java", "JavaScript", "PyTorch", "Jupyter",
    "Unity", "Unreal Engine", "LangChain", "Flask/Celery",
    "Adobe Premiere Pro", "After Effects", "Illustrator", "Figma", "Excel (Expert)"
  ],

  projects: [
    {
      name: "독일 University of Marburg XAI 연구",
      description: "방문학생 기간 중 XAI(Explainable AI)를 학습하고 관련 개인 연구를 수행하여 기술적 불확실성을 해소하는 인공지능 모델의 설명 가능성을 탐구했습니다.",
      link: "#",
      skills: ["Python", "Jupyter", "XAI"]
    },
    {
      name: "생성형 AI 단편영화 워크플로우 개발",
      description: "LangChain과 LangGraph를 활용해 '프롬프트-이미지-영상' 자동화 워크플로우를 설계하고, 장면 간 시각적 일관성을 확보한 단편 애니메이션을 제작했습니다.",
      link: "https://youtu.be/rbRzVczIRcQ",
      skills: ["Python", "LangChain", "Generative AI"]
    },
    {
      name: "Dorememe (VR 실시간 공감각 미디어 아트)",
      description: "사용자의 3D 스케치 데이터를 실시간 음악 파라미터로 매핑하는 AI 사운드 파이프라인을 구축했습니다. Flask/Celery 비동기 서버로 저지연 인터랙션을 실현했습니다.",
      link: "https://github.com/seojungyoun/25_Dorememe.git",
      skills: ["PyTorch", "Unity", "Flask", "C#"]
    },
    {
      name: "도봉옛길 메타버스 구현 및 전시",
      description: "지역 상권 활성화를 위해 '도봉옛길'의 역사성을 Zep과 제페토에 가상 공간으로 구현하고 미디어아트 전시 <도봉옛길로 빠지다>에 참여했습니다.",
      link: "#",
      skills: ["Zep", "Zepeto", "Metaverse"]
    },
    {
      name: "항만 업무 노트북 자동 스크린 락 앱",
      description: "스마트해상물류 ICT 멘토링 프로젝트를 통해 블루투스 기반의 보안 자동화 애플리케이션을 개발하여 공모전에 참가했습니다.",
      link: "#",
      skills: ["Python", "Bluetooth Integration"]
    }
  ],

  experience: [
    {
      company: "네이션에이 (NationA)",
      title: "AI 콘텐츠 크리에이터 (인턴)",
      dateRange: "2026.01 - 2026.03",
      bullets: [
        "생성형 AI 활용 콘텐츠 제작 및 서비스 자동화 툴 개발",
        "Python 기반 캐릭터 채팅 콘텐츠 파이프라인 구축"
      ]
    },
    {
      company: "(주)후시파트너스",
      title: "마케팅 콘텐츠 제작 인턴",
      dateRange: "2025.06 - 2025.08",
      bullets: [
        "AI 활용 브랜드 홍보 영상 제작 및 SNS 콘텐츠 자동화 파이프라인 구축",
        "팔로워 60% 이상 증대 및 ZEP 활용 회사 소개 콘텐츠 제작"
      ]
    },
    {
      company: "가톨릭평화방송",
      title: "콘텐츠 제작 인턴",
      dateRange: "2024.03 - 2024.07",
      bullets: [
        "유튜브 라이브 스트리밍 및 롱폼/쇼츠 콘텐츠 전반 제작",
        "인스타그램 및 유튜브 채널 그래픽 디자인 총괄"
      ]
    }
  ],

  education: [
    {
      school: "덕성여자대학교 (Duksung Women's University)",
      degree: "IT미디어공학전공 (GPA: 4.2 / 4.5)",
      dateRange: "2022 - 2026.08 졸업예정",
      achievements: [
        "KT디지털인재장학생"
        "한국지능정보사회진흥원 원장상",
        "경기XR아카데미 경기콘텐츠진흥원장상 수상",
        "덕성여자대학교 연합해커톤 학생투표상 수상",
        "독일 University of Marburg 방문학생 수료 (Computer Science)",
        "청년 ESG 기획봉사 (서울시자원봉사센터) 참여 및 전시 개최",
        "GDSC Duksung 홍보팀 운영진 및 UIUX 스터디 팀장",
        "인천 도서산간 지역 대상 '랜선야학' 수학 및 진로 멘토링"
      ]
    }
  ]
};
