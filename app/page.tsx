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

function SectionHeader({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return (
    <div className="section-header">
      <span>{index}</span>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <section className="hero panel hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">FVS / Gold NFT Whitepaper</p>
          <h1>拿到的是等值實體黃金，不是抽象敘事。</h1>
          <p className="hero-lead">
            這份白皮書用最直白的方式說明：黃金 NFT 的本質，是把實體黃金的持有、轉讓與兌換流程，變成更清楚、更高效率的資產系統。
          </p>

          <div className="hero-actions">
            <a href="#key-point" className="primary-link">
              先看重點
            </a>
            <a href="#redeem" className="secondary-link">
              兌換機制
            </a>
          </div>
        </div>

        <aside className="hero-aside">
          <div className="data-card">
            <p className="data-label">Asset Logic</p>
            <strong>1 NFT = 1 份可驗證黃金權利</strong>
            <ul>
              <li>固定重量</li>
              <li>固定純度</li>
              <li>固定對應實體庫存</li>
            </ul>
          </div>
          <div className="quote-card">
            <p>如果你相信黃金的價值，那你只是在選擇用什麼方式持有它。</p>
          </div>
        </aside>
      </section>

      <section id="key-point" className="panel">
        <SectionHeader index="01" title="先說重點" subtitle="給沒耐心的人，一句話先講完。" />
        <div className="key-point-box">
          <p className="key-point-statement">你買的不是圖片、不是空氣，你買的是「等值實體黃金的所有權憑證」。</p>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article key={item} className="highlight-card">
                <span className="card-kicker">Core</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="panel">
        <SectionHeader index="02" title="為什麼現在很多人選擇黃金 NFT？" subtitle="因為它對應的是三個很現實的資產需求。" />
        <div className="problem-grid">
          {problems.map((problem, index) => (
            <article key={problem.title} className="problem-card">
              <span className="problem-index">0{index + 1}</span>
              <h3>{problem.title}</h3>
              <ul>
                {problem.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="section-note">黃金 NFT，就是為這三種人而設計的。</p>
      </section>

      <section className="panel split-layout">
        <div>
          <SectionHeader index="03" title="什麼是黃金 NFT？" subtitle="用白話講，它只是把持有黃金的方式變得更清楚。" />
          <div className="formula-box">
            <strong>黃金 NFT = 把實體黃金，變成一張「區塊鏈所有權證書」</strong>
            <p>黃金是真的，NFT 是憑證，區塊鏈只是記帳工具。</p>
            <p>你不是在買數位商品，你是在用更方便的方式持有黃金。</p>
          </div>
        </div>

        <div>
          <SectionHeader index="04" title="你買到的到底是什麼？" subtitle="每一枚 NFT 都對應清楚、可驗證的黃金資訊。" />
          <ul className="check-list">
            {ownershipItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="section-note">不是承諾，是對應關係。</p>
        </div>
      </section>

      <section id="redeem" className="panel emphasis-panel">
        <SectionHeader index="05" title="最重要的一件事" subtitle="你可以拿到等值實體黃金，而且這不是口頭說說。" />
        <div className="emphasis-content">
          <div>
            <p className="emphasis-title">你持有黃金 NFT，就可以申請兌換實體黃金。</p>
            <ul className="action-list">
              <li>申請兌換實體黃金</li>
              <li>選擇提領或寄送</li>
              <li>兌換完成後，NFT 會被銷毀</li>
            </ul>
          </div>
          <div className="burn-card">
            <span className="card-kicker">Burn Mechanism</span>
            <p>一份黃金，只對應一枚 NFT。</p>
            <p>不重複、不超發、不灌水。</p>
          </div>
        </div>
      </section>

      <section className="panel split-layout">
        <div>
          <SectionHeader index="06" title="如果我不兌換呢？" subtitle="選擇權一直在持有人手上。" />
          <ul className="check-list">
            <li>長期持有（保值）：黃金隨時間抗通膨，NFT 只是載體。</li>
            <li>轉讓給別人：直接轉 NFT，不用搬黃金。</li>
            <li>之後再兌換：什麼時候需要，什麼時候換。</li>
          </ul>
        </div>

        <div>
          <SectionHeader index="08" title="價格會不會亂漲亂跌？" subtitle="價格基礎來自黃金，而不是市場情緒。" />
          <div className="price-box">
            <p>黃金 NFT 的價格基礎是：</p>
            <strong>國際金價 + 合理的管理與鑄造成本</strong>
            <p>不是靠炒作、拉盤、畫大餅，你買的是黃金的價值，不是別人接不接盤。</p>
          </div>
        </div>
      </section>

      <section className="panel">
        <SectionHeader index="07" title="跟直接買實體黃金有什麼不同？" subtitle="不是取代黃金，而是升級黃金。" />
        <div className="table-wrap">
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

      <section className="panel split-layout final-grid">
        <div>
          <SectionHeader index="09" title="誰適合買黃金 NFT？" subtitle="如果你是下面其中一種人，這就是很合理的持有方式。" />
          <ul className="check-list audience-list">
            {audiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeader index="10" title="一句話幫你做決定" subtitle="把選擇聚焦回資產本質。" />
          <div className="decision-box">
            <p>如果你相信黃金的價值，那你只是在選「用什麼方式持有它」。</p>
            <strong>黃金 NFT，只是目前最方便的一種。</strong>
          </div>
        </div>
      </section>
    </main>
  );
}
