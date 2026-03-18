"use client";

import { useEffect, useState } from "react";

const highlights = [
  "你買的不是圖片、不是空氣，你買的是等值實體黃金的所有權憑證。",
  "每一枚黃金 NFT 對應固定重量、固定純度的實體黃金。",
  "可兌換、可提領、可轉讓；黃金在，價值就在。"
];

const problems = [
  {
    title: "想買黃金，但不想放在家裡",
    points: ["怕被偷", "怕遺失", "怕不好賣"]
  },
  {
    title: "想保值，但不想碰高風險投資",
    points: ["不想炒幣", "不想賭 NFT 圖片", "不想每天盯盤"]
  },
  {
    title: "想要隨時能變現的資產",
    points: ["不想跑金店", "不想被殺價", "不想流程很麻煩"]
  }
];

const ownershipItems = [
  "黃金重量（例如 1 克 / 5 克 / 10 克）",
  "黃金純度（AU999 / 99.99%）",
  "實體黃金已存在",
  "存放於交易所／窗口",
  "可兌換實體黃金"
];

const compareRows = [
  ["保管", "自己想辦法", "傳統保險箱／銀行金庫"],
  ["流動性", "慢", "快"],
  ["轉讓", "麻煩", "一鍵"],
  ["小額", "不方便", "可以"],
  ["驗證", "要鑑定", "鏈上可查"],
  ["兌換", "看店家", "系統機制"]
];

const audiences = [
  "想保值、抗通膨的人",
  "不想高風險投資的人",
  "想慢慢累積黃金的人",
  "想以資產節稅／贈與／遺產／年收入申報的人",
  "想未來再兌換實體黃金的人",
  "想留給家人、下一代的人"
];

const navItems = [
  { id: "intro", label: "前言" },
  { id: "key-point", label: "01. 先說重點" },
  { id: "why-now", label: "02. 為什麼選擇黃金 NFT？" },
  { id: "what-is-it", label: "03. 什麼是黃金 NFT？" },
  { id: "what-you-get", label: "04. 你買到的到底是什麼？" },
  { id: "redeem", label: "05. 兌換機制" },
  { id: "options", label: "06. 不兌換的選擇" },
  { id: "compare", label: "07. 與實體黃金比較" },
  { id: "price", label: "08. 價格基礎" },
  { id: "audience", label: "09. 適合對象" },
  { id: "conclusion", label: "10. 結語" }
];

export default function Page() {
  const [activeSection, setActiveSection] = useState("intro");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -80% 0px" }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="page-shell">
      <aside className="sidebar">
        <h3>Contents</h3>
        <nav>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header id="intro" className="document-header doc-section">
          <span className="eyebrow">FVS / Gold NFT Whitepaper</span>
          <h1>拿到的是等值實體黃金，<br/>不是抽象敘事。</h1>
          <p className="lead">
            這份白皮書用最直白的方式說明：黃金 NFT 的本質，是把實體黃金的持有、轉讓與兌換流程，變成更清楚、更高效率的資產系統。
          </p>
        </header>

        <section id="key-point" className="doc-section">
          <h2>01. 先說重點</h2>
          <p className="subtitle">給沒耐心的人，一句話先講完。</p>

          <p className="key-point-text">
            你買的不是圖片、不是空氣，你買的是「等值實體黃金的所有權憑證」。
          </p>

          <ul className="check-list">
            {highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="why-now" className="doc-section">
          <h2>02. 為什麼現在很多人選擇黃金 NFT？</h2>
          <p className="subtitle">因為它對應的是三個很現實的資產需求。</p>

          <div className="card-grid">
            {problems.map((problem, index) => (
              <div key={problem.title} className="card">
                <span className="index">0{index + 1}</span>
                <h3>{problem.title}</h3>
                <ul>
                  {problem.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="what-is-it" className="doc-section">
          <h2>03. 什麼是黃金 NFT？</h2>
          <p className="subtitle">用白話講，它只是把持有黃金的方式變得更清楚。</p>

          <div className="callout">
            <strong>黃金 NFT = 把實體黃金，變成一張「區塊鏈所有權證書」</strong>
            <p>黃金是真的，NFT 是憑證，區塊鏈只是記帳工具。</p>
            <p>你不是在買數位商品，你是在用更方便的方式持有黃金。</p>
          </div>
        </section>

        <section id="what-you-get" className="doc-section">
          <h2>04. 你買到的到底是什麼？</h2>
          <p className="subtitle">每一枚 NFT 都對應清楚、可驗證的黃金資訊。</p>

          <ul className="check-list">
            {ownershipItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="redeem" className="doc-section">
          <h2>05. 兌換機制（最重要的一件事）</h2>
          <p className="subtitle">你可以拿到等值實體黃金，而且這不是口頭說說。</p>

          <p className="key-point-text">你持有黃金 NFT，就可以申請兌換實體黃金。</p>

          <ul className="check-list">
            <li>申請兌換實體黃金</li>
            <li>選擇提領或寄送</li>
            <li>兌換完成後，NFT 會被銷毀</li>
          </ul>

          <div className="callout">
            <strong>銷毀機制 (Burn Mechanism)</strong>
            <p>一份黃金，只對應一枚 NFT。不重複、不超發、不灌水。</p>
          </div>
        </section>

        <section id="options" className="doc-section">
          <h2>06. 如果我不兌換呢？</h2>
          <p className="subtitle">選擇權一直在持有人手上。</p>

          <ul className="check-list">
            <li>長期持有（保值）：黃金隨時間抗通膨，NFT 只是載體。</li>
            <li>轉讓給別人：直接轉 NFT，不用搬黃金。</li>
            <li>之後再兌換：什麼時候需要，什麼時候換。</li>
          </ul>
        </section>

        <section id="compare" className="doc-section">
          <h2>07. 跟直接買實體黃金有什麼不同？</h2>
          <p className="subtitle">不是取代黃金，而是升級黃金。</p>

          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th>比較項目</th>
                  <th>傳統實體黃金</th>
                  <th>黃金 NFT</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([label, traditional, nft]) => (
                  <tr key={label}>
                    <td>{label}</td>
                    <td>{traditional}</td>
                    <td>{nft}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="price" className="doc-section">
          <h2>08. 價格會不會亂漲亂跌？</h2>
          <p className="subtitle">價格基礎來自黃金，而不是市場情緒。</p>

          <div className="callout">
            <strong>國際金價 + 合理的管理與鑄造成本</strong>
            <p>不是靠炒作、拉盤、畫大餅，你買的是黃金的價值，不是別人接不接盤。</p>
          </div>
        </section>

        <section id="audience" className="doc-section">
          <h2>09. 誰適合買黃金 NFT？</h2>
          <p className="subtitle">如果你是下面其中一種人，這就是很合理的持有方式。</p>

          <ul className="check-list">
            {audiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section id="conclusion" className="doc-section">
          <h2>10. 一句話幫你做決定</h2>
          <p className="subtitle">把選擇聚焦回資產本質。</p>

          <div className="callout">
            <p style={{ color: "var(--text)", marginBottom: "8px" }}>
              如果你相信黃金的價值，那你只是在選「用什麼方式持有它」。
            </p>
            <strong>黃金 NFT，只是目前最方便的一種。</strong>
          </div>
        </section>
      </main>
    </div>
  );
}
