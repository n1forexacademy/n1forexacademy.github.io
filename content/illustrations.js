/* N1 Forex Academy — platform illustrations.

   These are annotated drawings of the ACADEMY'S OWN TERMINAL, not generic
   diagrams. A student who reads a slide should recognise the exact panel they
   are about to use on the trading floor — same layout, same field names, same
   colours. Where a slide teaches a control, it shows that control.

   Reference from any slide with:  illus: 'orderTicket'
   Resolved at render time by app.js, so module files stay readable.

   All colour comes from CSS custom properties, so they follow light/dark. */

window.ILLUS = (function () {

  /* Shared chrome: a panel with a header strip. */
  function panel(x, y, w, h, title) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="7" class="ui-panel"/>' +
           (title
             ? '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="17" rx="7" class="ui-head"/>' +
               '<rect x="' + x + '" y="' + (y + 10) + '" width="' + w + '" height="7" class="ui-head"/>' +
               '<text x="' + (x + 8) + '" y="' + (y + 12) + '" class="ui-kicker">' + title + '</text>'
             : '');
  }
  function row(x, y, w, label, value, cls) {
    return '<text x="' + x + '" y="' + y + '" class="ui-lbl">' + label + '</text>' +
           '<text x="' + (x + w) + '" y="' + y + '" class="ui-val ' + (cls || '') + '" text-anchor="end">' + value + '</text>';
  }
  function field(x, y, w, label, value) {
    return '<text x="' + x + '" y="' + y + '" class="ui-tiny">' + label + '</text>' +
           '<rect x="' + x + '" y="' + (y + 4) + '" width="' + w + '" height="16" rx="4" class="ui-input"/>' +
           '<text x="' + (x + 6) + '" y="' + (y + 15) + '" class="ui-val">' + value + '</text>';
  }
  function callout(x1, y1, x2, y2, tx, ty, text, anchor) {
    return '<path d="M' + x1 + ' ' + y1 + ' L' + x2 + ' ' + y2 + '" class="ui-call"/>' +
           '<circle cx="' + x1 + '" cy="' + y1 + '" r="2.5" class="ui-dot"/>' +
           '<text x="' + tx + '" y="' + ty + '" class="ui-note" text-anchor="' + (anchor || 'start') + '">' + text + '</text>';
  }

  var I = {};

  /* ---------- whole terminal, labelled ---------- */
  I.terminalOverview =
    '<svg class="fig ui-fig" viewBox="0 0 620 260" role="img" aria-label="The academy trading terminal, with its four panels labelled">' +
      panel(10, 26, 100, 190, 'MARKET WATCH') +
      '<g class="ui-mono">' +
        '<text x="18" y="60" class="ui-lbl">EUR/USD</text><text x="102" y="60" class="ui-val" text-anchor="end">1.0851</text>' +
        '<text x="18" y="78" class="ui-lbl">GBP/USD</text><text x="102" y="78" class="ui-val" text-anchor="end">1.2740</text>' +
        '<text x="18" y="96" class="ui-lbl">USD/JPY</text><text x="102" y="96" class="ui-val" text-anchor="end">148.40</text>' +
        '<text x="18" y="114" class="ui-lbl">Gold</text><text x="102" y="114" class="ui-val" text-anchor="end">2338.0</text>' +
      '</g>' +
      '<line x1="10" y1="126" x2="110" y2="126" class="ui-line"/>' +
      '<text x="18" y="142" class="ui-kicker">ACCOUNT</text>' +
      '<g>' + row(18, 158, 84, 'Equity', '$5,000') + row(18, 174, 84, 'Free margin', '$4,458') +
      row(18, 190, 84, 'Margin level', '369%', 'ui-bull') + '</g>' +

      panel(118, 26, 350, 190) +
      '<g class="ui-candles">' +
        '<line class="ui-bull-s" x1="140" y1="120" x2="140" y2="170"/><rect class="ui-bull-f" x="136" y="132" width="9" height="26"/>' +
        '<line class="ui-bear-s" x1="162" y1="110" x2="162" y2="168"/><rect class="ui-bear-f" x="158" y="122" width="9" height="34"/>' +
        '<line class="ui-bull-s" x1="184" y1="108" x2="184" y2="160"/><rect class="ui-bull-f" x="180" y="118" width="9" height="30"/>' +
        '<line class="ui-bull-s" x1="206" y1="92" x2="206" y2="148"/><rect class="ui-bull-f" x="202" y="104" width="9" height="32"/>' +
        '<line class="ui-bear-s" x1="228" y1="86" x2="228" y2="140"/><rect class="ui-bear-f" x="224" y="98" width="9" height="28"/>' +
        '<line class="ui-bull-s" x1="250" y1="74" x2="250" y2="132"/><rect class="ui-bull-f" x="246" y="86" width="9" height="30"/>' +
        '<line class="ui-bull-s" x1="272" y1="64" x2="272" y2="120"/><rect class="ui-bull-f" x="268" y="76" width="9" height="28"/>' +
        '<line class="ui-bear-s" x1="294" y1="58" x2="294" y2="118"/><rect class="ui-bear-f" x="290" y="70" width="9" height="30"/>' +
        '<line class="ui-bull-s" x1="316" y1="66" x2="316" y2="126"/><rect class="ui-bull-f" x="312" y="80" width="9" height="30"/>' +
        '<line class="ui-bull-s" x1="338" y1="54" x2="338" y2="112"/><rect class="ui-bull-f" x="334" y="66" width="9" height="30"/>' +
      '</g>' +
      '<line x1="126" y1="96" x2="440" y2="96" class="ui-dash-bear"/><text x="444" y="99" class="ui-tiny ui-bear">SL</text>' +
      '<line x1="126" y1="52" x2="440" y2="52" class="ui-dash-bull"/><text x="444" y="55" class="ui-tiny ui-bull">TP</text>' +
      '<line x1="126" y1="76" x2="440" y2="76" class="ui-dash"/><text x="444" y="79" class="ui-tiny">entry</text>' +

      panel(476, 26, 134, 190, 'ORDER') +
      '<rect x="484" y="48" width="60" height="22" rx="4" class="ui-sell"/><text x="514" y="62" class="ui-btn-t" text-anchor="middle">SELL</text>' +
      '<rect x="548" y="48" width="54" height="22" rx="4" class="ui-buy"/><text x="575" y="62" class="ui-btn-t" text-anchor="middle">BUY</text>' +
      field(484, 80, 118, 'Volume (lots)', '0.14') +
      field(484, 116, 118, 'Stop loss (pips)', '35') +
      '<rect x="484" y="152" width="118" height="18" rx="4" class="ui-ghost"/>' +
      '<text x="543" y="164" class="ui-accent-t" text-anchor="middle">Size it to policy risk</text>' +
      row(484, 188, 118, 'Risk', '$50.00 (1.00%)', 'ui-bull') +

      '<text x="60" y="240" class="ui-note" text-anchor="middle">1 · what you can trade</text>' +
      '<text x="293" y="240" class="ui-note" text-anchor="middle">2 · what price is doing</text>' +
      '<text x="543" y="240" class="ui-note" text-anchor="middle">3 · what you are risking</text>' +
      '<text x="310" y="18" class="ui-title" text-anchor="middle">The terminal you will use on every drill</text>' +
    '</svg>';

  /* ---------- order ticket close up ---------- */
  I.orderTicket =
    '<svg class="fig ui-fig" viewBox="0 0 560 250" role="img" aria-label="The order ticket, with volume, stop loss and the live risk readout labelled">' +
      panel(150, 14, 170, 220, 'ORDER') +
      '<rect x="160" y="38" width="76" height="26" rx="5" class="ui-sell"/>' +
      '<text x="198" y="52" class="ui-btn-t" text-anchor="middle">SELL</text>' +
      '<text x="198" y="61" class="ui-btn-s" text-anchor="middle">1.08500</text>' +
      '<rect x="240" y="38" width="70" height="26" rx="5" class="ui-buy"/>' +
      '<text x="275" y="52" class="ui-btn-t" text-anchor="middle">BUY</text>' +
      '<text x="275" y="61" class="ui-btn-s" text-anchor="middle">1.08512</text>' +
      field(160, 74, 150, 'Volume (lots)', '0.14') +
      field(160, 110, 150, 'Stop loss (pips)', '35') +
      field(160, 146, 150, 'Take profit (pips)', '70') +
      '<rect x="160" y="186" width="150" height="18" rx="4" class="ui-ghost"/>' +
      '<text x="235" y="198" class="ui-accent-t" text-anchor="middle">Size it to policy risk</text>' +
      '<line x1="160" y1="210" x2="310" y2="210" class="ui-line"/>' +
      row(160, 224, 150, 'Risk', '$50.00 (1.00%)', 'ui-bull') +

      callout(198, 44, 120, 30, 116, 27, 'you buy at the ask,', 'end') +
      '<text x="116" y="38" class="ui-note" text-anchor="end">sell at the bid</text>' +
      callout(160, 90, 110, 92, 106, 95, 'an OUTPUT,', 'end') +
      '<text x="106" y="106" class="ui-note" text-anchor="end">never a choice</text>' +
      callout(310, 126, 400, 118, 406, 115, 'set this FIRST —') +
      '<text x="406" y="126" class="ui-note">where the idea is wrong</text>' +
      callout(310, 196, 400, 190, 406, 187, 'computes the lots that make') +
      '<text x="406" y="198" class="ui-note">that stop cost exactly 1%</text>' +
      callout(310, 222, 400, 228, 406, 225, 'updates live as you type') +
      '<text x="406" y="236" class="ui-note">— red if over policy</text>' +
    '</svg>';

  /* ---------- account / margin panel ---------- */
  I.accountPanel =
    '<svg class="fig ui-fig" viewBox="0 0 580 210" role="img" aria-label="The account panel showing balance, equity, margin and margin level">' +
      panel(20, 16, 200, 176, 'ACCOUNT') +
      '<g>' +
        row(30, 46, 180, 'Balance', '$5,000.00') +
        row(30, 70, 180, 'Equity', '$4,742.00', 'ui-bear') +
        row(30, 94, 180, 'Used margin', '$542.50') +
        row(30, 118, 180, 'Free margin', '$4,199.50') +
        row(30, 142, 180, 'Margin level', '874%', 'ui-bull') +
        row(30, 172, 180, 'Today', '-$258 (-5.2%)', 'ui-bear') +
      '</g>' +
      callout(150, 42, 250, 34, 256, 31, 'closed trades only —') +
      '<text x="256" y="42" class="ui-note">does not move while a trade is open</text>' +
      callout(150, 66, 250, 66, 256, 63, 'balance ± floating P&amp;L.') +
      '<text x="256" y="74" class="ui-note ui-strong">THIS is what you actually have</text>' +
      callout(150, 90, 250, 98, 256, 95, 'collateral locked by open positions.') +
      '<text x="256" y="106" class="ui-note">Not spent, not borrowed</text>' +
      callout(150, 138, 250, 146, 256, 143, 'equity ÷ used margin.') +
      '<text x="256" y="154" class="ui-note ui-strong">The number the broker acts on</text>' +
      callout(150, 168, 250, 182, 256, 179, 'your daily stop watches this') +
    '</svg>';

  /* ---------- margin level falling to stop out ---------- */
  I.marginLadder =
    '<svg class="fig ui-fig" viewBox="0 0 600 220" role="img" aria-label="Margin level falling from healthy through margin call to stop out">' +
      '<text x="300" y="16" class="ui-title" text-anchor="middle">What the Margin Level figure does as price moves against you</text>' +
      '<line x1="60" y1="188" x2="560" y2="188" class="ui-line"/>' +
      '<g class="ui-mono">' +
        '<rect x="70" y="40" width="86" height="140" rx="6" class="ui-panel"/>' +
        '<text x="113" y="62" class="ui-val ui-bull" text-anchor="middle">874%</text>' +
        '<text x="113" y="78" class="ui-tiny" text-anchor="middle">healthy</text>' +
        '<rect x="184" y="60" width="86" height="120" rx="6" class="ui-panel"/>' +
        '<text x="227" y="82" class="ui-val ui-bull" text-anchor="middle">369%</text>' +
        '<text x="227" y="98" class="ui-tiny" text-anchor="middle">normal</text>' +
        '<rect x="298" y="96" width="86" height="84" rx="6" class="ui-panel"/>' +
        '<text x="341" y="118" class="ui-val ui-warn" text-anchor="middle">138%</text>' +
        '<text x="341" y="134" class="ui-tiny" text-anchor="middle">getting tight</text>' +
        '<rect x="412" y="124" width="86" height="56" rx="6" class="ui-panel ui-warn-bg"/>' +
        '<text x="455" y="146" class="ui-val ui-warn" text-anchor="middle">100%</text>' +
        '<text x="455" y="160" class="ui-tiny" text-anchor="middle">MARGIN CALL</text>' +
        '<rect x="512" y="152" width="60" height="28" rx="6" class="ui-panel ui-bear-bg"/>' +
        '<text x="542" y="170" class="ui-val ui-bear" text-anchor="middle">50%</text>' +
      '</g>' +
      '<text x="542" y="200" class="ui-note ui-bear" text-anchor="middle">STOP OUT</text>' +
      '<text x="300" y="212" class="ui-note" text-anchor="middle">Nobody telephones you. Below the stop-out level the broker closes your largest loser automatically.</text>' +
    '</svg>';

  /* ---------- the risk guard blocking an order ---------- */
  I.riskBlock =
    '<svg class="fig ui-fig" viewBox="0 0 560 230" role="img" aria-label="The risk guard blocking an oversized order and showing the correct lot size">' +
      '<rect x="60" y="14" width="440" height="30" rx="7" class="ui-bear-solid"/>' +
      '<text x="80" y="34" class="ui-modal-h">⛔ Order blocked by your risk policy</text>' +
      '<rect x="60" y="44" width="440" height="120" class="ui-panel-sq"/>' +
      '<text x="80" y="68" class="ui-modal-t">Position too large — 12.00% risk</text>' +
      '<text x="80" y="90" class="ui-modal-b">Your stop is 30.0 pips away. At 2.00 lots that risks</text>' +
      '<text x="80" y="106" class="ui-modal-b">$600.00, which is 12.00% of equity against your 1% limit.</text>' +
      '<text x="80" y="128" class="ui-modal-b ui-strong">Correct size for this stop is 0.16 lots.</text>' +
      '<rect x="60" y="164" width="440" height="42" class="ui-panel-sq"/>' +
      '<rect x="300" y="174" width="110" height="22" rx="5" class="ui-accent-solid"/>' +
      '<text x="355" y="189" class="ui-btn-t" text-anchor="middle">Set 0.16 lots</text>' +
      '<rect x="418" y="174" width="70" height="22" rx="5" class="ui-ghost"/>' +
      '<text x="453" y="189" class="ui-accent-t" text-anchor="middle">Understood</text>' +
      '<text x="280" y="224" class="ui-note" text-anchor="middle">Early in the course this blocks you. Later it only warns. In the final drill it is gone entirely.</text>' +
    '</svg>';

  /* ---------- risk panel with ATR ---------- */
  I.riskPanel =
    '<svg class="fig ui-fig" viewBox="0 0 560 200" role="img" aria-label="The risk panel showing ATR and the volatility-scaled stop distance">' +
      panel(20, 14, 210, 172, 'RISK') +
      '<g>' +
        row(30, 46, 190, 'Policy', 'Enforced') +
        row(30, 68, 190, 'Max risk / trade', '1%') +
        row(30, 90, 190, 'Open risk', '1.00%') +
        row(30, 112, 190, 'ATR(14) H1', '31.4 pips', 'ui-accent') +
        row(30, 134, 190, '2× ATR stop', '63 pips', 'ui-accent') +
        row(30, 156, 190, 'Blocked attempts', '0') +
        row(30, 178, 190, 'Leverage', '1:100') +
      '</g>' +
      callout(160, 108, 270, 100, 276, 97, 'how far this instrument actually') +
      '<text x="276" y="108" class="ui-note">moves right now — read it before sizing</text>' +
      callout(160, 130, 270, 138, 276, 135, 'a stop that survives normal noise.') +
      '<text x="276" y="146" class="ui-note ui-strong">Same instrument, different day = different stop</text>' +
      callout(160, 152, 270, 174, 276, 171, 'every block is counted and assessed') +
    '</svg>';

  /* ---------- market watch: pip value differs ---------- */
  I.marketWatch =
    '<svg class="fig ui-fig" viewBox="0 0 560 190" role="img" aria-label="Market watch showing bid and spread for four instruments">' +
      panel(20, 14, 230, 164, 'MARKET WATCH') +
      '<text x="30" y="44" class="ui-tiny">SYMBOL</text>' +
      '<text x="175" y="44" class="ui-tiny" text-anchor="end">BID</text>' +
      '<text x="240" y="44" class="ui-tiny" text-anchor="end">SPREAD</text>' +
      '<g class="ui-mono">' +
        '<text x="30" y="68" class="ui-lbl">EUR/USD</text><text x="175" y="68" class="ui-val" text-anchor="end">1.08500</text><text x="240" y="68" class="ui-val" text-anchor="end">1.2</text>' +
        '<text x="30" y="92" class="ui-lbl">GBP/USD</text><text x="175" y="92" class="ui-val" text-anchor="end">1.27400</text><text x="240" y="92" class="ui-val" text-anchor="end">1.6</text>' +
        '<text x="30" y="116" class="ui-lbl">USD/JPY</text><text x="175" y="116" class="ui-val" text-anchor="end">148.400</text><text x="240" y="116" class="ui-val" text-anchor="end">1.4</text>' +
        '<text x="30" y="140" class="ui-lbl">Gold</text><text x="175" y="140" class="ui-val" text-anchor="end">2338.00</text><text x="240" y="140" class="ui-val ui-bear" text-anchor="end">22</text>' +
      '</g>' +
      callout(180, 64, 290, 56, 296, 53, '$10 a pip per lot') +
      callout(180, 112, 290, 100, 296, 97, 'about $6.75 a pip —') +
      '<text x="296" y="108" class="ui-note ui-strong">the pip is the 2nd decimal here</text>' +
      callout(232, 136, 290, 146, 296, 143, 'spread is 18× EUR/USD.') +
      '<text x="296" y="154" class="ui-note">Compare it to the daily range,</text>' +
      '<text x="296" y="164" class="ui-note">never in isolation</text>' +
    '</svg>';

  /* ---------- chart with position lines ---------- */
  I.chartLines =
    '<svg class="fig ui-fig" viewBox="0 0 580 210" role="img" aria-label="Chart showing entry, stop loss and take profit lines with the live bid tag">' +
      panel(20, 14, 470, 176) +
      '<g class="ui-candles">' +
        '<line class="ui-bear-s" x1="60" y1="60" x2="60" y2="120"/><rect class="ui-bear-f" x="55" y="72" width="10" height="32"/>' +
        '<line class="ui-bull-s" x1="90" y1="76" x2="90" y2="136"/><rect class="ui-bull-f" x="85" y="90" width="10" height="32"/>' +
        '<line class="ui-bull-s" x1="120" y1="86" x2="120" y2="146"/><rect class="ui-bull-f" x="115" y="100" width="10" height="30"/>' +
        '<line class="ui-bear-s" x1="150" y1="80" x2="150" y2="140"/><rect class="ui-bear-f" x="145" y="94" width="10" height="30"/>' +
        '<line class="ui-bull-s" x1="180" y1="70" x2="180" y2="132"/><rect class="ui-bull-f" x="175" y="84" width="10" height="32"/>' +
        '<line class="ui-bull-s" x1="210" y1="58" x2="210" y2="118"/><rect class="ui-bull-f" x="205" y="70" width="10" height="32"/>' +
        '<line class="ui-bear-s" x1="240" y1="52" x2="240" y2="112"/><rect class="ui-bear-f" x="235" y="64" width="10" height="30"/>' +
        '<line class="ui-bull-s" x1="270" y1="60" x2="270" y2="122"/><rect class="ui-bull-f" x="265" y="74" width="10" height="32"/>' +
        '<line class="ui-bull-s" x1="300" y1="46" x2="300" y2="106"/><rect class="ui-bull-f" x="295" y="58" width="10" height="32"/>' +
      '</g>' +
      '<line x1="30" y1="40" x2="470" y2="40" class="ui-dash-bull"/>' +
      '<rect x="470" y="32" width="42" height="16" rx="3" class="ui-bull-solid"/><text x="491" y="43" class="ui-tag" text-anchor="middle">TP</text>' +
      '<line x1="30" y1="84" x2="470" y2="84" class="ui-dash"/>' +
      '<rect x="470" y="76" width="42" height="16" rx="3" class="ui-neutral-solid"/><text x="491" y="87" class="ui-tag" text-anchor="middle">entry</text>' +
      '<line x1="30" y1="150" x2="470" y2="150" class="ui-dash-bear"/>' +
      '<rect x="470" y="142" width="42" height="16" rx="3" class="ui-bear-solid"/><text x="491" y="153" class="ui-tag" text-anchor="middle">SL</text>' +
      '<text x="40" y="34" class="ui-tiny ui-bull">take profit — where you exit a winner</text>' +
      '<text x="40" y="166" class="ui-tiny ui-bear">stop loss — where the idea is proven wrong</text>' +
      '<text x="255" y="202" class="ui-note" text-anchor="middle">Your open positions draw themselves on the chart, so you can see the trade rather than remember it.</text>' +
    '</svg>';

  /* ---------- drill assessment strip ---------- */
  I.drillProgress =
    '<svg class="fig ui-fig" viewBox="0 0 560 130" role="img" aria-label="The drill progress strip showing objective and pass state">' +
      panel(20, 14, 520, 46) +
      '<text x="32" y="32" class="ui-kicker">DRILL OBJECTIVE</text>' +
      '<rect x="32" y="38" width="496" height="7" rx="4" class="ui-track"/>' +
      '<rect x="32" y="38" width="298" height="7" rx="4" class="ui-accent-solid"/>' +
      '<text x="32" y="56" class="ui-tiny">6 of 10 trades closed. 1 blocked attempt — 3 or fewer to pass.</text>' +
      panel(20, 72, 520, 44) +
      '<text x="32" y="90" class="ui-kicker ui-bull">✓ DRILL PASSED</text>' +
      '<rect x="32" y="96" width="496" height="7" rx="4" class="ui-track"/>' +
      '<rect x="32" y="96" width="496" height="7" rx="4" class="ui-bull-solid"/>' +
      '<text x="546" y="34" class="ui-note" text-anchor="end"></text>' +
      '<text x="280" y="128" class="ui-note" text-anchor="middle">Assessed on process — sizing, compliance, drawdown — never on whether you got lucky.</text>' +
    '</svg>';

  return I;
})();
