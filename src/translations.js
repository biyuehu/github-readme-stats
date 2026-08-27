// @ts-check

import { encodeHTML } from "./common/html.js";

/**
 * Retrieves stat card labels in the available locales.
 *
 * @param {object} props Function arguments.
 * @param {string} props.name The name of the locale.
 * @param {string} props.apostrophe Whether to use apostrophe or not.
 * @returns {object} The locales object.
 */
const statCardLocales = ({ name, apostrophe }) => {
  const encodedName = encodeHTML(name);
  return {
    "statcard.title": {
      en: `${encodedName}'${apostrophe} GitHub Stats`,
      cn: `${encodedName} 的 GitHub 统计数据`,
      "zh-tw": `${encodedName} 的 GitHub 統計資料`,
      ja: `${encodedName}の GitHub 統計`,
      kr: `${encodedName}의 GitHub 통계`,
    },
    "statcard.ranktitle": {
      en: `${encodedName}'${apostrophe} GitHub Rank`,
      cn: `${encodedName} 的 GitHub 统计数据`,
      "zh-tw": `${encodedName} 的 GitHub 統計資料`,
      ja: `${encodedName} の GitHub ランク`,
      kr: `${encodedName}의 GitHub 통계`,
    },
    "statcard.totalstars": {
      en: "Total Stars Earned",
      cn: "获标星数",
      "zh-tw": "得標星星數量（Star）",
      ja: "スターされた数",
      kr: "받은 스타 수",
    },
    "statcard.commits": {
      en: "Total Commits",
      cn: "累计提交总数",
      "zh-tw": "累計提交數量（Commit）",
      ja: "合計コミット数",
      kr: "전체 커밋 수",
    },
    "statcard.lastyear": {
      en: "last year",
      cn: "去年",
      "zh-tw": "去年",
      ja: "昨年",
      kr: "작년",
    },
    "statcard.prs": {
      en: "Total PRs",
      cn: "发起的 PR 总数",
      "zh-tw": "拉取請求數量（PR）",
      ja: "合計 PR",
      kr: "PR 횟수",
    },
    "statcard.issues": {
      en: "Total Issues",
      cn: "提出的 issue 总数",
      "zh-tw": "提出問題數量（Issue）",
      ja: "合計 issue",
      kr: "이슈 개수",
    },
    "statcard.contribs": {
      en: "Contributed to (last year)",
      cn: "贡献的项目数（去年）",
      "zh-tw": "參與項目數量（去年）",
      ja: "貢献したリポジトリ （昨年）",
      kr: "(작년) 기여",
    },
    "statcard.reviews": {
      en: "Total PRs Reviewed",
      cn: "审查的 PR 总数",
      "zh-tw": "審核的 PR 總計",
      ja: "レビューされた PR の総数",
      kr: "검토된 총 PR",
    },
    "statcard.discussions-started": {
      en: "Total Discussions Started",
      cn: "发起的讨论总数",
      "zh-tw": "發起的討論總數",
      ja: "開始されたディスカッションの総数",
      kr: "시작된 토론 총 수",
    },
    "statcard.discussions-answered": {
      en: "Total Discussions Answered",
      cn: "回复的讨论总数",
      "zh-tw": "回覆討論總計",
      ja: "回答されたディスカッションの総数",
      kr: "답변된 토론 총 수",
    },
    "statcard.prs-merged": {
      en: "Total PRs Merged",
      cn: "合并的 PR 总数",
      "zh-tw": "合併的 PR 總計",
      ja: "マージされた PR の総数",
      kr: "병합된 총 PR",
    },
    "statcard.prs-merged-percentage": {
      en: "Merged PRs Percentage",
      cn: "被合并的 PR 占比",
      "zh-tw": "合併的 PR 百分比",
      ja: "マージされた PR の割合",
      kr: "병합된 PR의 비율",
    },
  };
};

const repoCardLocales = {
  "repocard.template": {
    en: "Template",
    cn: "模板",
    "zh-tw": "模板",
    ja: "テンプレート",
    kr: "템플릿",
  },
  "repocard.archived": {
    en: "Archived",
    cn: "已归档",
    "zh-tw": "已封存",
    ja: "アーカイブ済み",
    kr: "보관됨",
  },
};

const langCardLocales = {
  "langcard.title": {
    en: "Most Used Languages",
    cn: "最常用的语言",
    "zh-tw": "最常用的語言",
    ja: "最もよく使っている言語",
    kr: "가장 많이 사용된 언어",
  },
  "langcard.nodata": {
    en: "No languages data.",
    cn: "没有语言数据。",
    "zh-tw": "沒有語言資料。",
    ja: "言語データがありません。",
    kr: "언어 데이터가 없습니다.",
  },
};

const availableLocales = Object.keys(repoCardLocales["repocard.archived"]);

/**
 * Checks whether the locale is available or not.
 *
 * @param {string} locale The locale to check.
 * @returns {boolean} Boolean specifying whether the locale is available or not.
 */
const isLocaleAvailable = (locale) => {
  return availableLocales.includes(locale.toLowerCase());
};

export {
  availableLocales,
  isLocaleAvailable,
  langCardLocales,
  repoCardLocales,
  statCardLocales,
};
