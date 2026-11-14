window.SURVEY_PAGES = [
  {
    id: 'consent',
    type: 'consent',
    title: '研究說明與填答同意',
    description: '本問卷採匿名方式蒐集，資料僅供學術研究使用。點擊下一步代表您已閱讀並同意填答。',
    submitLabel: '我已閱讀並同意，開始填答',
    questions: []
  },
  {
    id: 'scenario',
    type: 'scenario',
    title: '請先閱讀以下情境',
    description: '系統會自動分派 A/B/C/D 其中一個情境。本頁內容會依分派結果切換。',
    submitLabel: '我已閱讀情境，開始作答',
    questions: []
  },
  {
    id: 'scale-1',
    title: '第一部分：請依照你的感受評分',
    description: '1 非常不同意｜2 不同意｜3 普通｜4 同意｜5 非常同意',
    questions: [
      { id: 'Q1', type: 'likert', text: '這裡放第一題量表題。' },
      { id: 'Q2', type: 'likert', text: '這裡放第二題量表題。' },
      { id: 'Q3', type: 'likert', text: '這裡放第三題量表題。' },
      { id: 'Q4', type: 'likert', text: '這裡放第四題量表題。' }
    ]
  },
  {
    id: 'scale-2',
    title: '第二部分：共同問卷題目',
    description: '四個情境共用同一份題目；只要改這裡，不需要做四份問卷。',
    questions: [
      { id: 'Q5', type: 'likert', text: '這裡放第五題量表題。' },
      { id: 'Q6', type: 'likert', text: '這裡放第六題量表題。' },
      { id: 'Q7', type: 'likert', text: '這裡放第七題量表題。' },
      { id: 'Q8', type: 'likert', text: '這裡放第八題量表題。' }
    ]
  },
  {
    id: 'demographics',
    title: '最後一部分：基本資料',
    description: '以下題目可依研究需要增減。題目 id 要同步填到 Apps Script 的 QUESTION_IDS。',
    submitLabel: '送出問卷',
    questions: [
      { id: 'gender', type: 'choice', text: '請問您的性別為何？', options: ['男性', '女性', '其他／不便透露'] },
      { id: 'age', type: 'choice', text: '請問您的年齡區間為何？', options: ['18歲以下', '18–24歲', '25–34歲', '35歲以上'] },
      { id: 'experience', type: 'choice', text: '請問您是否曾有類似經驗？', options: ['有', '沒有'] }
    ]
  }
];
