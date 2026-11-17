window.SURVEY_PAGES = [
  {
    id: 'consent',
    type: 'consent',
    title: '研究說明與填答同意',
    description: ' 親愛的參與者，您好：<br><br> 感謝您參與此研究，並撥冗填寫本研究問卷。<br><br>本研究為國立臺南大學經營與管理學系以及國立高雄科技大學企業管理系之學術研究，旨在探討個體面對企業對於新科技策略構框時的意義建構、心理認知與創新評價。<br><br>本問卷採匿名方式蒐集資料，僅供學術研究使用，不涉及任何商業用途。<br><br>點擊下一步代表您已閱讀並同意填答。',
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
    title: '請回想剛才閱讀的說明。評估在閱讀這些內容後，有多大程度同意以下的敘述。',
    description: '1 非常不同意｜2 不同意｜3 普通｜4 同意｜5 非常同意',
    questions: [
      { id: 'GCI-1', type: 'likert', text: '這些資訊幫助我建立對智慧養豬科技的基本認識。' },
      { id: 'GCI-2', type: 'likert', text: '這些資訊讓我對智慧養豬科技有新的認識。' },
      { id: 'GCI-3', type: 'likert', text: '這些資訊讓我理解智慧養豬科技的用途與意義。' },
      { id: 'GCI-4', type: 'likert', text: '這些資訊讓我對智慧養豬科技如何運作，有清楚且連貫的理解。' },
      { id: 'GCI-5', type: 'likert', text: '我能根據這些資訊理解智慧養豬科技的不同面向如何相互關聯。' },
      { id: 'GCI-6', type: 'likert', text: '我能以自己可以理解的方式，整理這些智慧養豬科技的相關資訊。' }
    ]
  },
  {
    id: 'scale-2',
    title: '請回想剛才閱讀的說明。評估在閱讀這些內容後，有多大程度同意以下的敘述。',
    description: '1 非常不同意｜2 不同意｜3 普通｜4 同意｜5 非常同意',
    questions: [
      { id: 'RCU-1', type: 'likert', text: '這些資訊幫助我補足原本不清楚的智慧養豬科技相關內容。' },
      { id: 'RCU-2', type: 'likert', text: '這些資訊降低了我對智慧養豬科技的困惑。' },
      { id: 'RCU-3', type: 'likert', text: '這些資訊減少了我對智慧養豬科技的不確定感。' },
      { id: 'RCU-4', type: 'likert', text: '這些資訊讓我更清楚該如何解讀與理解智慧養豬科技。' },
      { id: 'UNC-1', type: 'likert', text: '這些資訊讓我聯想到自己過去對智慧養豬科技的認識。' },
      { id: 'UNC-2', type: 'likert', text: '我能把這些資訊和自己原本對養豬的認識連結起來。' },
      { id: 'UNC-3', type: 'likert', text: '這些資訊讓我了解智慧養豬科技與養豬業者、消費者及相關企業之間的關係。' },
      { id: 'UNC-4', type: 'likert', text: '這些資訊讓我了解智慧養豬科技與養豬場實際運作之間的關聯。' }
    ]
  },
  {
   id: 'scale-3',
   title: '請回想剛才閱讀的說明，評估您有多大程度同意以下對於說明內容的敘述。',
   description: '1 非常不同意｜2 不同意｜3 普通｜4 同意｜5 非常同意',
   questions: [
     { id: 'AQ-1', type: 'likert', text: '我覺得這些智慧養豬科技資訊內容充實。' },
     { id: 'AQ-2', type: 'likert', text: '我覺得這些智慧養豬科技資訊對我有幫助。' },
     { id: 'AQ-3', type: 'likert', text: '我覺得這些智慧養豬科技資訊很有價值。' },
     { id: 'AQ-4', type: 'likert', text: '我覺得這些智慧養豬科技資訊具有說服力。' }
   ]
  },
  {
   id: 'scale-4',
   title: '請回想剛才閱讀的說明，評估有多大程度同意以下對於您個人態度的敘述。',
   description: '1 非常不同意｜2 不同意｜3 普通｜4 同意｜5 非常同意',
   questions: [
     { id: 'SP-1', type: 'likert', text: '如果認識的人向我推薦一項新科技，我通常會考慮他們的建議。' },
     { id: 'SP-2', type: 'likert', text: '當我接觸不熟悉的科技時，我會參考其他人對它的看法。' },
     { id: 'SP-3', type: 'likert', text: '如果知道其他人支持一項新科技，我對這項科技的看法也會受到影響。' },
     { id: 'SP-4', type: 'likert', text: '在評價不熟悉的科技時，我經常依靠其他人的意見來做判斷。' },
     { id: 'SP-5', type: 'likert', text: '我很在意自己對新科技的看法是否與其他人一致。' }
   ]
  },
  {
   id: 'scale-5',
   title: '請回想剛才閱讀的說明，並評估您有多大程度同意以下對於該科技的敘述。',
   description: '1 非常不同意｜2 不同意｜3 普通｜4 同意｜5 非常同意',
   questions: [
     { id: 'IE-1', type: 'likert', text: '整體而言，我對智慧養豬科技的評價是正面的。' },
     { id: 'IE-2', type: 'likert', text: '整體而言，我認為智慧養豬科技是好的。' },
     { id: 'IE-3', type: 'likert', text: '整體而言，我喜歡智慧養豬科技。' },
     { id: 'IE-4', type: 'likert', text: '我喜歡智慧養豬科技這個想法。' },
     { id: 'IE-5', type: 'likert', text: '我認為智慧養豬科技是值得期待的。' }
   ]
 },
  {
    id: 'demographics',
    title: '謝謝您的耐心，這是最後一部分的基本資料與先前經驗',
    description: '請依題目選出最適合您的答案。',
    submitLabel: '送出問卷',
    questions: [
      { id: 'gender', type: 'choice', text: '請問您的性別為何？', options: ['男性', '女性', '其他／不便透露'] },
      { id: 'age', type: 'choice', text: '請問您的年齡為何？', options: ['18歲以下', '18–24歲', '25–34歲', '35–44歲', '45–54歲', '55–64歲', '65歲以上'] },
      { id: 'education', type: 'choice', text: '請問您的您的最高教育程度為何？', options: ['國中及以下', '高中／高職', '專科', '學士', '碩士', '博士'] },
      { id: 'systemkw', type: 'choice', text: '請問您在閱讀本問卷的科技介紹之前，您對「智慧養豬科技」的了解程度為何？', options: ['完全不了解','不太了解','略有了解','相當了解','非常了解'] },
      { id: 'experience', type: 'choice', text: '請問您是否曾經接觸或了解養豬產業的實際運作？', options: ['完全沒有','僅從媒體或網路了解','曾參訪或接觸養豬場','曾參與相關課程、研究或專案','目前或過去曾在相關產業工作'] },
      { id: 'techkw', type: 'choice', text: '請問在閱讀本問卷之前，您對感測器、影像辨識與資料分析等智慧科技的熟悉程度為何？', options: ['完全不熟悉','不太熟悉','普通','相當熟悉','非常熟悉'] },    
      { id: 'diet', type: 'choice', text: '請問您平常食用豬肉或豬肉製品的頻率為何？', options: ['幾乎每天','每週數次', '每週約一次','每月數次','很少','從不'] },
      { id: 'career', type: 'choice', text: '請問您目前主要從事的工作領域為何？', options: ['農業／畜牧業','食品製造／加工／流通','資訊科技／工程','其他產業','家庭管理','學生','退休／未就業']}
    ]
  }
];
