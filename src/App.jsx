import React, { useState } from 'react';
import { BookOpen, PlayCircle, Scale, ListOrdered, ChevronRight, Info, AlertCircle } from 'lucide-react';

const TaiwanMahjongApp = () => {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', label: '簡介', icon: <BookOpen className="w-5 h-5" /> },
    { id: 'gameplay', label: '玩法', icon: <PlayCircle className="w-5 h-5" /> },
    { id: 'rules', label: '規則', icon: <Scale className="w-5 h-5" /> },
    { id: 'scoring', label: '台數表 (計番)', icon: <ListOrdered className="w-5 h-5" /> },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'intro':
        return <IntroSection />;
      case 'gameplay':
        return <GameplaySection />;
      case 'rules':
        return <RulesSection />;
      case 'scoring':
        return <ScoringSection />;
      default:
        return <IntroSection />;
    }
  };

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-stone-800 pb-12">
      {/* Header */}
      <header className="bg-emerald-800 text-white shadow-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg text-emerald-800 font-bold text-xl shadow-inner flex items-center justify-center">
              <span className="text-2xl leading-none">🀄</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wider">台灣麻雀入門指南</h1>
              <p className="text-emerald-200 text-sm mt-1">輕鬆學習 16 張麻將的魅力</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="bg-emerald-900 overflow-x-auto scrollbar-hide">
          <div className="max-w-4xl mx-auto px-2 flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'bg-stone-100 text-emerald-900 rounded-t-lg' 
                    : 'text-emerald-100 hover:bg-emerald-700 hover:text-white rounded-t-lg'
                  }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8 animate-in fade-in duration-500">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto px-4 mt-8 text-center text-stone-500 text-sm">
        <p>© 2026 台灣麻雀教學網 | 祝你把把自摸，把把胡！</p>
      </footer>
    </div>
  );
};

// --- Components for each section ---

const IntroSection = () => (
  <div className="space-y-6">
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
      <h2 className="text-2xl font-bold text-emerald-800 mb-4 flex items-center">
        <Info className="mr-2 text-emerald-600" /> 什麼是台灣麻雀？
      </h2>
      <p className="text-lg leading-relaxed mb-4 text-stone-700">
        台灣麻雀（台灣稱「台灣麻將」）與香港或廣東麻雀最大的不同，在於它是<strong className="text-emerald-700">「16張」</strong>的玩法。玩家手上會有16張牌，胡牌時需要湊齊17張牌。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-emerald-50 p-5 rounded-xl border border-emerald-100">
          <h3 className="font-bold text-emerald-800 mb-3 text-lg">主要特色</h3>
          <ul className="list-disc list-inside space-y-2 text-stone-700">
            <li><strong>牌數：</strong>共 144 張（包含春夏秋冬、梅蘭竹菊 8 張花牌）。</li>
            <li><strong>手牌：</strong>每人起手拿 16 張牌（莊家 17 張）。</li>
            <li><strong>胡牌：</strong>需要湊齊 5 組順子/刻子，加上 1 對眼（將），共 17 張。</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-5 rounded-xl border border-orange-100">
          <h3 className="font-bold text-orange-800 mb-3 text-lg">計分方式</h3>
          <p className="text-stone-700 leading-relaxed">
            台灣麻雀的計分單位稱為<strong className="text-orange-600">「台」</strong>（香港習慣稱「番」）。結算時是以「底注 + (台數 × 台錢)」來計算。<br/><br/>
            <span className="text-sm bg-orange-100 p-2 rounded block">例如：打 100/20（底100，一台20），如果你胡了 3 台，就可以贏得 100 + (3 × 20) = 160 元。</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const GameplaySection = () => (
  <div className="space-y-6">
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
      <h2 className="text-2xl font-bold text-emerald-800 mb-6">基本流程</h2>
      
      <div className="space-y-6">
        {[
          { title: '1. 洗牌與砌牌', desc: '四人將 144 張牌洗勻，每人砌 18 墩（上下兩張為一墩），排成四方形的牌牆。' },
          { title: '2. 打骰與抓牌', desc: '莊家擲骰子決定從哪裡開始抓牌。莊家拿 17 張，其餘三家拿 16 張。' },
          { title: '3. 補花', desc: '若起手拿到「花牌」，需從牌牆最後方補牌，由莊家開始依序進行。' },
          { title: '4. 行牌', desc: '莊家先打出第一張牌。接著依逆時針方向，玩家輪流「摸牌」或「吃/碰/槓」，然後「打牌」，直到有人胡牌或流局。' },
        ].map((step, idx) => (
          <div key={idx} className="flex items-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mr-4 mt-0.5">
              {idx + 1}
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-800">{step.title}</h3>
              <p className="text-stone-600 mt-1">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
      <h2 className="text-2xl font-bold text-emerald-800 mb-4">吃、碰、槓</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="p-5 border border-stone-200 rounded-xl hover:border-emerald-300 hover:shadow-md transition-all">
          <h3 className="font-bold text-lg text-emerald-700 mb-2 flex items-center">🥢 吃牌</h3>
          <p className="text-sm text-stone-600 leading-relaxed">只能吃<strong className="text-stone-800">上家</strong>打出的牌，湊成「順子」（例如：三四五萬）。</p>
        </div>
        <div className="p-5 border border-stone-200 rounded-xl hover:border-emerald-300 hover:shadow-md transition-all">
          <h3 className="font-bold text-lg text-emerald-700 mb-2 flex items-center">💥 碰牌</h3>
          <p className="text-sm text-stone-600 leading-relaxed">任何一家打出你手中已有一對的牌，可喊碰湊成「刻子」（例如：三個東風）。碰牌優先於吃牌。</p>
        </div>
        <div className="p-5 border border-stone-200 rounded-xl hover:border-emerald-300 hover:shadow-md transition-all">
          <h3 className="font-bold text-lg text-emerald-700 mb-2 flex items-center">🔥 槓牌</h3>
          <p className="text-sm text-stone-600 leading-relaxed">分為明槓（碰別人打的）與暗槓（自己摸到四張）。槓牌後需從牌牆尾部補一張牌。</p>
        </div>
      </div>
    </div>
  </div>
);

const RulesSection = () => (
  <div className="space-y-6">
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
      <h2 className="text-2xl font-bold text-emerald-800 mb-4">胡牌條件</h2>
      <p className="text-stone-700 mb-4">
        台灣麻雀的標準胡牌牌型必須滿足：<strong className="text-emerald-700 text-xl mx-1">5 面子 + 1 雀頭 (眼) = 17 張</strong>
      </p>
      <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-center font-medium text-lg tracking-widest text-stone-700 overflow-x-auto whitespace-nowrap">
        (順/刻) + (順/刻) + (順/刻) + (順/刻) + (順/刻) + (一對眼)
      </div>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
      <h2 className="text-2xl font-bold text-emerald-800 mb-4">重要特殊規則</h2>
      <ul className="space-y-5">
        <li className="flex items-start">
          <ChevronRight className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <strong className="text-stone-800 text-lg block mb-1">連莊與拉莊</strong>
            <p className="text-stone-600 text-sm leading-relaxed">莊家若胡牌或流局，則繼續作莊（連莊）。每連一次莊，胡牌或放銃時都會多算 2 台（莊家1台 + 連莊台數）。這讓台灣麻雀的莊家輸贏非常大。</p>
          </div>
        </li>
        <li className="flex items-start">
          <ChevronRight className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <strong className="text-stone-800 text-lg block mb-1">過水規則</strong>
            <p className="text-stone-600 text-sm leading-relaxed">如果你可以胡某張牌但選擇不胡，在你自己摸下一張牌之前，別家打出同一張牌或同一條線的牌（如一四七萬），你都不能胡。必須等過了一巡才能解除。</p>
          </div>
        </li>
        <li className="flex items-start">
          <ChevronRight className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <strong className="text-stone-800 text-lg block mb-1">眼牌</strong>
            <p className="text-stone-600 text-sm leading-relaxed">聽牌後可以選擇「眼牌」（需付籌碼），可以看其他三家的暗牌，但眼牌後不能換牌，摸到非胡牌就必須直接打出，若放銃需加罰台數。</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

const ScoringSection = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: '全部' },
    { id: 'basic', label: '一、基本台 (1台)' },
    { id: 'common', label: '二、常見牌型 (2台)' },
    { id: 'medium', label: '三、中型牌 (4台)' },
    { id: 'big', label: '四、大牌型 (5台)' },
    { id: 'high', label: '五、高台牌型 (8台)' },
    { id: 'extreme', label: '六、極限牌型 (16台+)' },
  ];

  // 完整收錄你提供的台數表資料
  const scores = [
    // --- 一、基本台 (1 台) ---
    { name: '莊家', tai: 1, desc: '莊家胡牌或放銃，多計 1 台。', category: 'basic' },
    { name: '自摸', tai: 1, desc: '自己摸到胡牌。', category: 'basic' },
    { name: '門清', tai: 1, desc: '冇吃、碰、明槓，全部牌留喺門前。（有啲牌局會獨立計1台；有啲就只計「門清自摸3台」）', category: 'basic' },
    { name: '正花', tai: 1, desc: '拿到同自己座位對應嘅花牌：東家(春/梅)、南家(夏/蘭)、西家(秋/菊)、北家(冬/竹)。', category: 'basic' },
    { name: '圈風刻 / 門風刻', tai: 1, desc: '與當前圈風或自己座位風相同嘅刻子。', category: 'basic' },
    { name: '三元刻', tai: 1, desc: '中、發、白其中一組刻子。', category: 'basic' },
    { name: '海底撈月', tai: 1, desc: '摸牌牆最後一張牌自摸胡牌。', category: 'basic' },
    { name: '河底撈魚', tai: 1, desc: '胡別人打出嘅最後一張牌。', category: 'basic' },
    { name: '槓上開花', tai: 1, desc: '槓後補牌，剛好自摸胡牌。', category: 'basic' },
    { name: '搶槓', tai: 1, desc: '別人加槓時，嗰張牌啱啱俾你搶槓胡。', category: 'basic' },
    { name: '單吊 (獨聽)', tai: 1, desc: '只聽眼牌。', category: 'basic' },
    { name: '嵌張', tai: 1, desc: '聽中洞牌，例如 4、6 聽 5。', category: 'basic' },
    { name: '邊張', tai: 1, desc: '聽邊張牌，例如 1、2 聽 3，或 8、9 聽 7。', category: 'basic' },

    // --- 二、常見牌型 (2 台) ---
    { name: '平胡', tai: 2, desc: '全部由順子組成，冇刻子、冇字牌，且唔係單吊/嵌張/邊張。（定義差異大，有啲要求門清，有啲唔計自摸）', category: 'common' },
    { name: '三暗刻', tai: 2, desc: '有三組自己摸成嘅暗刻，暗槓都算。', category: 'common' },
    { name: '全求人', tai: 2, desc: '全部牌都食/碰/明槓出去，手中淨返一張，最後單吊食胡。（通常自摸唔算）', category: 'common' },
    { name: '花槓', tai: 2, desc: '集齊「春夏秋冬」或「梅蘭菊竹」其中一組。', category: 'common' },
    { name: '三色同順', tai: 2, desc: '萬、筒、索三門花色，各有同樣數字嘅順子（如123萬、123筒、123索）。', isExtra: true, category: 'common' },
    { name: '老少副 / 老少咸宜', tai: 2, desc: '同一花色有 123 同 789（如123萬+789萬）。', isExtra: true, category: 'common' },
    { name: '不求人', tai: 2, desc: '全程冇食碰明槓，靠自己摸牌成牌。（部分牌例，有時同門清/自摸互蓋）', isExtra: true, category: 'common' },
    { name: '全帶么', tai: 2, desc: '每組牌都帶 1、9 或字牌。（部分牌例）', isExtra: true, category: 'common' },

    // --- 三、中型牌 (4 台) ---
    { name: '碰碰胡', tai: 4, desc: '全部都係刻子，冇順子。', category: 'medium' },
    { name: '混一色', tai: 4, desc: '由同一花色加字牌組成。', category: 'medium' },
    { name: '小三元', tai: 4, desc: '中、發、白其中兩組做刻子，另一組做眼。', category: 'medium' },
    { name: '小四喜', tai: 4, desc: '東南西北其中三組做刻子，另一組做眼。（部分牌例算 8 台）', isExtra: true, category: 'medium' },
    { name: '混帶么', tai: 4, desc: '牌型由字牌同帶 1、9 嘅組合構成。（部分牌例）', isExtra: true, category: 'medium' },

    // --- 四、大牌型 (5 台) ---
    { name: '四暗刻', tai: 5, desc: '四組自己摸成嘅暗刻，暗槓都算。', category: 'big' },

    // --- 五、高台牌型 (8 台) ---
    { name: '清一色', tai: 8, desc: '全部由同一花色組成，完全冇字牌。', category: 'high' },
    { name: '大三元', tai: 8, desc: '中、發、白三組都係刻子。', category: 'high' },
    { name: '五暗刻', tai: 8, desc: '五組自己摸成嘅暗刻。非常罕見；有啲牌局會同碰碰胡一齊計。', category: 'high' },
    { name: '八仙過海', tai: 8, desc: '一個人攞齊全部 8 張花牌，直接胡牌。', category: 'high' },
    { name: '七搶一', tai: 8, desc: '與花牌有關嘅特殊胡法。（通常屬常見外加規則）', isExtra: true, category: 'high' },
    { name: '嚦咕嚦咕 (八對半)', tai: 8, desc: '7 組對子 + 1 組刻子，共 17 張牌。', isExtra: true, category: 'high' },
    { name: '混老頭', tai: 8, desc: '全部由 1、9、字牌組成。（部分牌例）', isExtra: true, category: 'high' },
    { name: '小四喜 (高台版)', tai: 8, desc: '有啲牌局將小四喜直接算 8 台。', isExtra: true, category: 'high' },

    // --- 六、極限牌型 (16 台以上) ---
    { name: '大四喜', tai: 16, desc: '東、南、西、北四組全部都係刻子。', category: 'extreme' },
    { name: '字一色', tai: 16, desc: '全部由字牌組成：東、南、西、北、中、發、白。', category: 'extreme' },
    { name: '天胡', tai: '16/24', desc: '莊家起手補花後，第一手即胡牌。（台數依桌規而定）', category: 'extreme' },
    { name: '地胡', tai: '16/24', desc: '閒家第一巡摸牌即自摸，且之前無人食碰槓。', category: 'extreme' },
    { name: '人胡', tai: '16/24', desc: '閒家第一巡即食胡，且之前無人食碰槓。（部分牌局不計）', isExtra: true, category: 'extreme' },
    { name: '九蓮寶燈', tai: 'Max', desc: '同一花色組成 1112345678999，再加同花任意一張成胡。超大牌，台數依桌規而定。（部分牌例）', isExtra: true, category: 'extreme' },
    { name: '清老頭', tai: 'Max', desc: '全部由 1 同 9 組成，冇字牌。（部分牌例）', isExtra: true, category: 'extreme' },
    { name: '十八羅漢', tai: 'Max', desc: '四槓子加一對將。唔係每張枱都有計。（部分牌例）', isExtra: true, category: 'extreme' },
  ];

  const filteredScores = filter === 'all' ? scores : scores.filter(s => s.category === filter);

  return (
    <div className="space-y-6">
      
      {/* 提示區塊 */}
      <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-200 text-sm text-yellow-800 flex items-start">
        <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5 text-yellow-600" />
        <div>
          <p className="font-bold mb-1 text-base">打牌前必讀：</p>
          <p>唔同牌局或牌咖可能會有少少差異，以下係常見版本。帶有 <span className="inline-block bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded text-xs font-bold mx-1">外加</span> 標籤嘅牌型，代表必須喺開局前先講明有計先算數（俗稱「拜神」或「講例」）。</p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map(btn => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
              filter === btn.id 
                ? 'bg-emerald-700 text-white border-emerald-700' 
                : 'bg-white text-stone-600 border-stone-200 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      {/* Score Cards */}
      <div className="grid gap-4 md:grid-cols-2">
        {filteredScores.map((score, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-start hover:shadow-md transition-shadow relative overflow-hidden">
            
            <div className="flex-shrink-0 w-14 h-14 bg-red-50 text-red-600 rounded-lg flex flex-col items-center justify-center border border-red-100 mr-4 z-10">
              <span className={`font-black leading-none ${typeof score.tai === 'string' && score.tai.includes('/') ? 'text-lg' : typeof score.tai === 'string' ? 'text-base' : 'text-2xl'}`}>
                {score.tai}
              </span>
              <span className="text-[10px] font-bold mt-1 text-red-400">{typeof score.tai === 'number' ? '台' : ''}</span>
            </div>
            
            <div className="flex-1 min-w-0 z-10">
              <div className="flex items-center flex-wrap gap-2 mb-1">
                <h3 className="text-lg font-bold text-stone-800">{score.name}</h3>
                {score.isExtra && (
                  <span className="bg-purple-100 text-purple-700 text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">
                    外加
                  </span>
                )}
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">{score.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaiwanMahjongApp;
