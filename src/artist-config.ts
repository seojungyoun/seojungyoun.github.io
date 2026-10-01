import { siteConfig } from "./config";

// This application page reuses existing evidence without changing the main portfolio.
const archiveOrder = ["internships", "awards", "projects", "education", "activities"];
const projectOrder = [
  "FILMFLOW",
  "2026 K-AI 공모전",
  "KT 2025 ESG 보고서 홍보 영상 제작",
  "장미원시장 미디어 파사드 영상 제작",
  "덕성여자대학교 RISE 사업 AR 영상 제작",
  "Dorememe",
];

export const artistConfig: typeof siteConfig = {
  ...siteConfig,
  name: "AI Artist / AI Content Creator | 서정윤",
  title: "AI Artist / AI Content Creator",
  description: "서정윤의 AI 콘텐츠 크리에이터 이력서. 생성형 AI 영상 제작, 시각적 일관성 워크플로우, 편집 경험을 소개합니다.",
  accentColor: "#009be6",
  softColor: "#ffffff",
  hero: {
    ...siteConfig.hero,
    headline: "AI Artist /\nAI Content Creator",
    summary: "AI 캐릭터의 서사와 비주얼을 기획하고 이미지·영상 콘텐츠로 구현해온 AI Content Creator입니다. NationA에서 약 30개의 AI 캐릭터를 제작했으며, 제작 콘텐츠 중 최고 조회수는 9.1만 회로 평균 약 1만 회 대비 약 9배를 기록했습니다. FILMFLOW 연구에서는 생성형 AI 영상 제작 과정을 개선해 평균 제작시간을 29% 단축했습니다.",
    primaryCta: { label: "경력·수상 보기", href: "#full-archive" },
    secondaryCta: { label: "대표 작업 보기", href: "#featured-projects" },
  },
  highlightProjects: [
    {
      ...siteConfig.highlightProjects[0],
      subtitle: "생성형 AI 영상 제작 개선 · 평균 제작시간 29% 단축",
      summary: "생성형 AI 영상 제작 과정에서 장면 간 비일관성, 불완전한 프롬프트 입력 등으로 반복 제작이 발생하는 문제를 개선했습니다.",
      status: "제작 과정을 구조화한 결과 평균 제작시간을 100분에서 71분으로 29% 단축했습니다.",
      role: ["생성형 AI 영상 제작 워크플로우 기획·설계", "스토리보드와 이미지·영상 연결 구조 정의", "장면 간 비주얼 일관성 평가 흐름 설계"],
      proof: ["평균 제작시간 100분 → 71분, 29% 단축", "특허 출원 · 10-2026-0101551", "한국미디어아트산업협회 우수논문상"],
      stack: ["생성형 AI 영상 제작", "워크플로우 설계"],
    },
    {
      ...siteConfig.highlightProjects[1],
      stack: siteConfig.highlightProjects[1].stack.filter((tool) => tool !== "After Effects"),
      status: "보고서 내용을 분석해 전달 구조를 기획하고, 생성형 AI를 활용한 영상 제작부터 스크립트 작성·편집까지 수행했습니다.",
      role: ["ESG 보고서 핵심 내용 분석 및 메시지 구조화", "생성형 AI 기반 홍보 영상 콘셉트 기획 및 제작", "스크립트 작성 및 시각 자료 구성", "영상 편집"],
      proof: ["KT 2025 ESG 보고서 기반 홍보 영상 완성", "정보성 콘텐츠를 시청 흐름에 맞게 재구성", "기획부터 영상 제작·편집까지 수행"],
    },
    {
      id: "k-ai-2026",
      title: "2026 K-AI 콘텐츠 영상 대상",
      subtitle: "생성형 AI 영상 기획·제작 · 한국방송통신전파진흥원 원장상",
      summary: "생성형 AI를 활용한 영상 작품을 기획·제작해 2026 K-AI 공모전 콘텐츠 영상 대상을 수상했습니다.",
      status: "2025 K-AI 공모전 최우수상에 이어 2026년 콘텐츠 영상 대상을 수상했습니다.",
      role: ["생성형 AI 영상 작품 기획", "생성형 AI를 활용한 영상 콘텐츠 제작"],
      proof: ["2026 K-AI 콘텐츠 영상 대상", "한국방송통신전파진흥원 원장상"],
      stack: ["Generative AI", "영상 기획", "영상 제작"],
      video: "https://youtu.be/tz3NOHHITt0?si=dEyGXD6hElddrrB1",
    },
  ],
  management: {
    title: "주요 성과와 제작 역량",
    summary: "생성형 AI를 활용해 캐릭터와 영상 콘텐츠를 기획·제작해왔습니다. 콘텐츠 목적에 맞는 비주얼을 정하고 생성 결과를 반복 조정하며 완성도를 높이는 작업을 수행했습니다.",
    metrics: [
      { label: "콘텐츠 최고 조회수", value: "9.1만 회", detail: "평균 약 1만 회 대비 약 9배" },
      { label: "생성형 AI 영상 평균 제작시간 단축", value: "29%", detail: "평균 100분 → 71분" },
      { label: "AI 캐릭터 기획·제작", value: "약 30개", detail: "NationA · 캐릭터 서사와 비주얼 기획" },
      { label: "생성형 AI 영상 콘텐츠 수상", value: "대상·최우수상", detail: "2026 K-AI 대상 · 2025 K-AI 최우수상" },
    ],
    tools: ["Premiere Pro", "생성형 이미지/영상 도구"],
  },
  skills: [
    "AI 캐릭터 및 비주얼 기획", "생성형 AI 이미지·영상 제작", "캐릭터 비주얼 일관성 관리",
    "콘텐츠 구성 및 영상 편집", "제작 방식 개선",
  ],
  archiveTabs: archiveOrder.map((id) => {
    const tab = siteConfig.archiveTabs.find((tab) => tab.id === id)!;
    if (id === "internships") return {
      ...tab,
      items: [
        {
          title: "네이션에이 (NationA)",
          subtitle: "AI 콘텐츠 크리에이터 인턴 · 2026.01-2026.04",
          description: "AI 캐릭터 약 30개의 서사와 비주얼을 기획하고 이미지·영상 콘텐츠를 제작했습니다. 제작 콘텐츠 중 최고 조회수는 9.1만 회로, 평균 약 1만 회 대비 약 9배를 기록했습니다.",
        },
        {
          title: "(주)후시파트너스",
          subtitle: "IT / 마케팅 인턴 · 2025.06-2025.08",
          description: "기업 SNS 콘텐츠와 홍보 영상을 기획·제작하고 채널 운영에 참여했습니다. 콘텐츠 운영 기간 동안 SNS 팔로워가 약 60% 증가했습니다.",
        },
        {
          title: "가톨릭평화방송 (CPBC)",
          subtitle: "라디오국 인턴 · 2024.03-2024.06",
          description: "라디오국 인턴으로 유튜브 라이브 운영을 지원하고 롱폼·쇼츠 영상, 썸네일 및 SNS 콘텐츠를 제작했습니다.",
        },
      ],
    };
    if (id === "awards") return { ...tab, label: "수상 및 자격증" };
    if (id === "activities") return {
      ...tab,
      items: [
        {
          title: "SKALA",
          subtitle: "교육 및 프로젝트 활동",
          description: "SKALA 미니 프로젝트에서 장학생 통합 운영 플랫폼을 기획하고, 관리자·장학생의 업무 흐름과 주요 화면을 설계했습니다.",
          bullets: [
            "성적 증명서 정보 추출·입력값 비교를 지원하는 MVP 설계",
            "자료 제출·검토·보완 흐름 및 데이터 모델 ERD·API 명세 작성",
          ],
          tags: ["SKALA", "서비스 기획", "UI/UX", "ERD", "API 설계"],
        },
        ...tab.items,
      ],
    };
    if (id !== "projects") return tab;
    const rank = (title: string) => {
      const index = projectOrder.indexOf(title);
      return index === -1 ? projectOrder.length : index;
    };
    return { ...tab, items: tab.items.map((item) => (item.title === "FILMFLOW" ? {
      ...item,
      subtitle: "생성형 AI 영상 제작 개선 · 평균 제작시간 29% 단축",
      description: "장면 간 비일관성과 불완전한 프롬프트 입력으로 인한 반복 제작 문제를 개선하고, 평균 제작시간을 100분에서 71분으로 29% 단축했습니다.",
      bullets: ["평균 제작시간 100분 → 71분, 29% 단축", "특허 출원 · 10-2026-0101551", "한국미디어아트산업협회 우수논문상"],
      tags: ["생성형 AI 영상 제작", "워크플로우 설계"],
    } : { ...item, description: item.description?.replaceAll("·후반 작업", "") })).sort((a, b) => rank(a.title) - rank(b.title)) };
  }),
};
