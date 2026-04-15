import React, { useState } from 'react';
import { BookOpen, PlayCircle, Scale, ListOrdered, ChevronRight, Info } from 'lucide-react';

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
    <div className="min-h-screen bg-stone-100 font-sans text-stone-800">
      {/* Header */}
      <header className="bg-emerald-800 text-white shadow-md sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-white p-2 rounded-lg text-emerald-800 font-bold text-xl shadow-inner">
              🀄
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-wider">台灣麻雀入門指南</h1>
              <p className="text-emerald-200 text-sm mt-1">輕鬆學習 16 張麻將的魅力</p>
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="bg-emerald-900 overflow-x-auto">
          <div className="max-w-4xl mx-auto px-2 flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-3 text-sm font-medium transition-colors whitespace-nowrap
                  ${activeTab === tab.id 
                    ? 'bg-white text-emerald-800 rounded-t-lg' 
                    : 'text-emerald-100 hover:bg-emerald-800 hover:text-white rounded-t-lg'
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
      <footer className="bg-stone-200 text-stone-600 py-6 text-center text-sm">
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
      <p className="text-lg leading-relaxed mb-4">
        台灣麻雀（台灣稱「台灣麻將」）與香港或廣東麻雀最大的不同，在於它是<strong className="text-emerald-700">「16張」</strong>的玩法。玩家手上會有16張牌，胡牌時需要湊齊17張牌。
      </p>
      <div className="grid md:grid-cols-2 gap-4 mt-6">
        <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100">
          <h3 className="font-bold text-emerald-800 mb-2">主要特色</h3>
          <ul className="list-disc list-inside space-y-2 text-stone-700">
            <li><strong>牌數：</strong>共 144 張（包含春夏秋冬、梅蘭竹菊 8 張花牌）。</li>
            <li><strong>手牌：</strong>每人起手拿 16 張牌（莊家 17 張）。</li>
            <li><strong>胡牌：</strong>需要湊齊 5 組順子/刻子，加上 1 對眼（將），共 17 張。</li>
          </ul>
        </div>
        <div className="bg-orange-50 p-4 rounded-xl border border-orange-100">
          <h3 className="font-bold text-orange-800 mb-2">計分方式</h3>
          <p className="text-stone-700">
            台灣麻雀的計分單位稱為<strong className="text-orange-600">「台」</strong>（香港習慣稱「番」）。結算時是以「底注 + (台數 × 台錢)」來計算。例如：打 100/20（底100，一台20），如果你胡了 3 台，就可以贏得 100 + (3 × 20) = 160 元。
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
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold mr-4">
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
        <div className="p-4 border border-stone-200 rounded-xl hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-emerald-700 mb-2">🥢 吃牌</h3>
          <p className="text-sm text-stone-600">只能吃<strong className="text-stone-800">上家</strong>打出的牌，湊成「順子」（例如：三四五萬）。</p>
        </div>
        <div className="p-4 border border-stone-200 rounded-xl hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-emerald-700 mb-2">💥 碰牌</h3>
          <p className="text-sm text-stone-600">任何一家打出你手中已有一對的牌，可喊碰湊成「刻子」（例如：三個東風）。碰牌優先於吃牌。</p>
        </div>
        <div className="p-4 border border-stone-200 rounded-xl hover:shadow-md transition-shadow">
          <h3 className="font-bold text-lg text-emerald-700 mb-2">🔥 槓牌</h3>
          <p className="text-sm text-stone-600">分為明槓（碰別人打的）與暗槓（自己摸到四張）。槓牌後需從牌牆尾部補一張牌。</p>
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
      <div className="bg-stone-50 p-4 rounded-xl border border-stone-200 text-center font-medium text-lg tracking-widest text-stone-700 overflow-x-auto">
        (順/刻) + (順/刻) + (順/刻) + (順/刻) + (順/刻) + (一對眼)
      </div>
    </div>

    <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-200">
      <h2 className="text-2xl font-bold text-emerald-800 mb-4">重要特殊規則</h2>
      <ul className="space-y-4">
        <li className="flex items-start">
          <ChevronRight className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <strong className="text-stone-800">連莊與拉莊：</strong>
            <p className="text-stone-600 text-sm mt-1">莊家若胡牌或流局，則繼續作莊（連莊）。每連一次莊，胡牌或放銃時都會多算 2 台（莊家1台 + 連莊台數）。這讓台灣麻雀的莊家輸贏非常大。</p>
          </div>
        </li>
        <li className="flex items-start">
          <ChevronRight className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <strong className="text-stone-800">過水規則：</strong>
            <p className="text-stone-600 text-sm mt-1">如果你可以胡某張牌但選擇不胡，在你自己摸下一張牌之前，別家打出同一張牌或同一條線的牌（如一四七萬），你都不能胡。必須等過了一巡才能解除。</p>
          </div>
        </li>
        <li className="flex items-start">
          <ChevronRight className="w-5 h-5 text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
          <div>
            <strong className="text-stone-800">眼牌：</strong>
            <p className="text-stone-600 text-sm mt-1">聽牌後可以選擇「眼牌」（需付籌碼），可以看其他三家的暗牌，但眼牌後不能換牌，摸到非胡牌就必須直接打出，若放銃需加罰台數。</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

const ScoringSection = () => {
  const [filter, setFilter] = useState('all');

  const scores = [
    { name: '莊家', tai: 1, desc: '身為莊家，無論胡牌或放銃都多算1台。', category: 'basic' },
    { name: '門清', tai: 1, desc: '沒有吃、碰、明槓，全部牌都在自己門前。', category: 'basic' },
    { name: '自摸', tai: 1, desc: '自己摸到胡的牌。', category: 'basic' },
    { name: '花牌', tai: 1, desc: '拿到與自己座位對應的花（東1, 南2, 西3, 北4），或拿到相同顏色的花4張。', category: 'basic' },
    { name: '平胡', tai: 2, desc: '全部都是順子，沒有刻子，且沒有字牌，不能單吊或獨聽。需非門清。', category: 'common' },
    { name: '三暗刻', tai: 2, desc: '手中有三組自己摸到的刻子（未碰出）。', category: 'common' },
    { name: '全求人', tai: 2, desc: '16張牌全部吃碰明槓出去，最後單吊別人打的牌胡牌。', category: 'common' },
    { name: '碰碰胡', tai: 4, desc: '全部都是刻子（碰牌或暗刻），沒有順子。', category: 'big' },
    { name: '混一色', tai: 4, desc: '由同一花色（萬/筒/索）加上字牌組成。', category: 'big' },
    { name: '小三元', tai: 4, desc: '中、發、白其中兩組刻子，一組作眼。', category: 'big' },
    { name: '清一色', tai: 8, desc: '全部由同一花色組成，完全沒有字牌。', category: 'huge' },
    { name: '大三元', tai: 8, desc: '集齊中、發、白三組刻子。', category: 'huge' },
    { name: '八仙過海', tai: 8, desc: '一人拿到全部8張花牌，直接宣告胡牌。', category: 'huge' },
    { name: '大四喜', tai: 16, desc: '集齊東、南、西、北四組刻子。', category: 'huge' },
    { name: '字一色', tai: 16, desc: '全部由字牌（東南西北中發白）組成。', category: 'huge' },
  ];

  const filteredScores = filter === 'all' ? scores : scores.filter(s => s.category === filter);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap gap-2 mb-6">
        {[
          { id: 'all', label: '全部' },
          { id: 'basic', label: '基本台 (1台)' },
          { id: 'common', label: '常見牌型 (2台)' },
          { id: 'big', label: '大牌型 (4台)' },
          { id: 'huge', label: '極限牌型 (8台+)' },
        ].map(btn => (
          <button
            key={btn.id}
            onClick={() => setFilter(btn.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === btn.id 
                ? 'bg-emerald-600 text-white' 
                : 'bg-stone-200 text-stone-700 hover:bg-emerald-100'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {filteredScores.map((score, idx) => (
          <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 shadow-sm flex items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-red-50 text-red-600 rounded-full flex flex-col items-center justify-center border border-red-100 mr-4">
              <span className="text-xl font-black leading-none">{score.tai}</span>
              <span className="text-[10px] font-bold mt-0.5">台</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-stone-800">{score.name}</h3>
              <p className="text-stone-600 text-sm mt-1">{score.desc}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 bg-blue-50 p-4 rounded-xl border border-blue-100 text-sm text-blue-800">
        <p><strong>💡 提示：</strong> 各地的詳細台數計算可能會有些微差異，建議在遊戲開始前先與牌友溝通確認規則（俗稱「拜神」或「講例」）。</p>
      </div>
    </div>
  );
};

export default TaiwanMahjongApp;