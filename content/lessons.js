/* N1 Forex Academy — lesson breakdown.

   Each module is split into short lessons. A student reads a lesson, then takes
   a two-question check on THAT lesson before the next one opens. The module test
   only unlocks once every lesson is passed.

   Why: a single quiz at the end lets someone skim eleven slides and guess. A
   check straight after three slides finds the gap while it is still small.

   `slides` are indices into the module's own slides array.
   A check is passed with both answers correct — they are short and specific, so
   a wrong answer means genuinely go back, not bad luck.

   Modules without an entry here fall back to read-everything-then-one-test. */

window.LESSONS = {

  /* ================= MODULE 1 ================= */
  1: [
    {
      title: 'What you are actually buying',
      slides: [0, 1],
      check: [
        { q: 'You buy GBP/USD. What do you now hold?',
          options: ['Pounds, funded by selling dollars', 'Both pounds and dollars', 'Dollars, funded by selling pounds', 'A share of the UK economy'],
          a: 0,
          why: 'Buying a pair means buying the base currency and selling the quote currency. You profit only if the pound strengthens relative to the dollar.' },
        { q: 'Most daily forex volume comes from:',
          options: ['Retail speculators', 'Commercial payments, hedging and institutional flow', 'Central bank intervention', 'Automated retail robots'],
          a: 1,
          why: 'Speculation is a small slice. Much of the flow comes from businesses and funds acting on need or mandate, not on charts — which is why your analysis cannot move price.' }
      ]
    },
    {
      title: 'How the market is put together',
      slides: [2, 3, 4],
      check: [
        { q: 'Two regulated brokers show slightly different EUR/USD prices at the same moment. Why?',
          options: ['One is manipulating price', 'Forex is decentralised — each broker builds its price from its own liquidity sources and markup', 'Their clocks are out of sync', 'It only happens on demo accounts'],
          a: 1,
          why: 'There is no central exchange and no consolidated tape. Small differences between brokers are normal and expected.' },
        { q: 'What actually makes price move?',
          options: ['Chart patterns completing', 'Resting buy and sell orders being consumed until the next best price is different', 'Indicators crossing', 'Broker servers updating on a timer'],
          a: 1,
          why: 'Price moves when one side is more urgent and eats through the orders resting at the current level. Everything about levels and structure is a way of guessing where that resting interest sits.' }
      ]
    },
    {
      title: 'What a trade costs before you are right',
      slides: [5, 6, 7],
      check: [
        { q: 'You open and immediately close a position, with no price movement. What happens?',
          options: ['You break even', 'You lose the spread — you bought at the ask and sold at the bid', 'You make a tiny rebate', 'The trade is cancelled'],
          a: 1,
          why: 'Every trade begins underwater by the spread, plus any commission. This is why a strategy with a tiny edge can still lose money overall.' },
        { q: 'Which cost hurts a trader holding positions for several weeks the most?',
          options: ['Spread', 'Commission', 'Swap, charged every night the position is open', 'The deposit fee'],
          a: 2,
          why: 'Spread and commission are paid once per trade. Swap compounds nightly, so it punishes long holds specifically. Match your cost structure to your holding period.' }
      ]
    },
    {
      title: 'The honest picture',
      slides: [8, 9, 10],
      check: [
        { q: 'A service advertises "15% monthly returns, guaranteed". What is the clearest problem?',
          options: ['15% is too low to bother with', 'No legitimate trading operation can guarantee a return, because outcomes are uncertain', 'Monthly is the wrong period to quote', 'Nothing, if the results are verified'],
          a: 1,
          why: 'The word "guaranteed" is the giveaway and it is independent of the number. Trading outcomes are probabilistic; a fixed promised return means something other than trading is going on.' },
        { q: 'Published regulatory figures put the share of retail accounts that lose money at roughly:',
          options: ['10–20%', '30–40%', '70–80%', 'Nobody measures it'],
          a: 2,
          why: 'Brokers are legally required to publish this and it consistently sits around 70–80%. Most of that is oversized positions and missing stops, not bad analysis — which is why this course weights risk so heavily.' }
      ]
    }
  ],

  /* ================= MODULE 2 ================= */
  2: [
    {
      title: 'Reading a quote',
      slides: [0, 1],
      check: [
        { q: 'EUR/USD falls from 1.0900 to 1.0850. What happened?',
          options: ['The euro definitely weakened', 'The dollar definitely strengthened', 'Either, or both — the pair only shows their relative value', 'Both currencies weakened'],
          a: 2,
          why: 'A pair price is relative. A fall means the base weakened, the quote strengthened, or some combination. That ambiguity is the seed of correlation later on.' },
        { q: 'Why are beginners told to trade majors rather than exotics?',
          options: ['Exotics move too slowly', 'Majors have far tighter spreads, deeper liquidity and more orderly behaviour', 'Exotics are not offered by most brokers', 'Majors cannot lose money'],
          a: 1,
          why: 'Exotic spreads can be twenty times wider, with thin overnight liquidity and violent gaps on local news. Majors are cheaper and better behaved — not safe.' }
      ]
    },
    {
      title: 'Pips and lots',
      slides: [2, 3],
      check: [
        { q: 'USD/JPY moves from 148.20 to 148.75. How many pips?',
          options: ['5.5', '55', '550', '0.55'],
          a: 1,
          why: 'On JPY pairs the pip is the SECOND decimal place, so 0.55 in price is 55 pips. Using the four-decimal convention here would size a position a hundred times wrong.' },
        { q: 'What is a volume of 0.01 on most platforms?',
          options: ['One standard lot, 100,000 units', 'One mini lot, 10,000 units', 'One micro lot, 1,000 units', 'One unit'],
          a: 2,
          why: '0.01 is a micro lot — 1,000 units of the base currency, worth about $0.10 per pip on a USD-quoted pair. This is where every student starts.' }
      ]
    },
    {
      title: 'Turning pips into money',
      slides: [4, 5, 6],
      check: [
        { q: 'You are long 0.30 lots of GBP/USD with a USD account. Pip value?',
          options: ['$0.30', '$3.00', '$30.00', 'Cannot be determined without the price'],
          a: 1,
          why: 'GBP/USD is USD-quoted, so pip value is exactly $10 per standard lot whatever the price. At 0.30 lots that is $3.00. The "cannot be determined" answer would be right for USD/CHF, where the dollar is the base.' },
        { q: 'You short EUR/USD at 1.0920 and cover at 1.0885 with 0.50 lots. Gross result?',
          options: ['−$175', '+$175', '+$35', '+$17.50'],
          a: 1,
          why: '35 pips gained × $5 per pip (0.50 lots on a USD-quoted pair) = +$175 gross. Shorts profit when price falls; the arithmetic is identical with the subtraction reversed.' }
      ]
    },
    {
      title: 'Direction and hidden overlap',
      slides: [7, 8, 9],
      check: [
        { q: 'Long EUR/USD, long GBP/USD and long AUD/USD, each risking 1%. Real exposure?',
          options: ['1% — they are separate trades', '3% across three independent markets', 'Close to 3% on one view — all three profit from dollar weakness', 'Zero, they hedge each other'],
          a: 2,
          why: 'All three are short-dollar expressions and will lose together on dollar strength. Count correlated positions once — this is how disciplined 1%-per-trade traders still take 3% hits.' },
        { q: 'In forex, going short:',
          options: ['Requires borrowing the currency first', 'Is structurally identical to going long, with the subtraction reversed', 'Costs more in commission', 'Is only possible on majors'],
          a: 1,
          why: 'Selling EUR/USD is just buying USD/EUR. There is no borrowing step and no upward structural bias as in an equity index, so both directions are equally natural.' }
      ]
    }
  ],

  /* ================= MODULE 3 ================= */
  3: [
    {
      title: 'Getting in and out',
      slides: [0, 1],
      check: [
        { q: 'Price is 1.0850. You want to go long only if it breaks above 1.0900. Which order?',
          options: ['Buy limit at 1.0900', 'Buy stop at 1.0900', 'Market order now', 'Sell stop at 1.0900'],
          a: 1,
          why: 'You want a worse price than now on purpose, because you want proof of momentum first. That is a buy stop. Limit = patience, stop = confirmation.' },
        { q: 'Why should you never use a limit order to exit a loser?',
          options: ['Limits are not allowed for exits', 'It may never fill, so the loss keeps growing while you wait for a better price', 'Limits cost more commission', 'Limits fill too fast'],
          a: 1,
          why: 'A limit exit depends on the market coming back to you — exactly what a losing trade is not doing. Enter with patience, exit with certainty.' }
      ]
    },
    {
      title: 'What leverage really is',
      slides: [2, 3],
      check: [
        { q: 'Two traders both open 0.10 lots of EUR/USD. One has 30:1 leverage, the other 500:1. Price falls 30 pips. Who loses more?',
          options: ['The 500:1 trader', 'The 30:1 trader', 'Neither — both lose $30, because loss depends on position size', 'Depends on the balance'],
          a: 2,
          why: 'Leverage sets the margin required to hold a position, not the profit or loss it produces. Both hold 0.10 lots, so both lose $1 per pip. Leverage is permission; position size is risk.' },
        { q: 'So why do regulators cap retail leverage?',
          options: ['Because it directly magnifies losses', 'Because it caps the maximum position an inexperienced trader can take on a small deposit', 'To reduce broker profits', 'To slow down trading'],
          a: 1,
          why: 'The danger is temptation, not mechanism. With £500 and 500:1 you can control 2.5 standard lots, where a normal 20-pip move wipes the account.' }
      ]
    },
    {
      title: 'Margin, and the number that matters',
      slides: [4, 5],
      check: [
        { q: 'Which figure is your real account value while trades are open?',
          options: ['Balance', 'Equity — balance plus or minus floating profit and loss', 'Free margin', 'Used margin'],
          a: 1,
          why: 'Balance only changes when a trade closes. Equity moves with your open positions and is what the broker uses to judge you.' },
        { q: 'Equity is $1,200 and used margin is $800. Margin level?',
          options: ['66.7%', '150%', '$400', '40%'],
          a: 1,
          why: '(1200 ÷ 800) × 100 = 150%. Uncomfortably close to a typical 100% call level — margin level falls faster than it feels like it should, because equity drops while used margin stays roughly fixed.' }
      ]
    },
    {
      title: 'Exactly how accounts die',
      slides: [6, 7, 8, 9],
      check: [
        { q: 'What actually happens at a modern margin call?',
          options: ['The broker telephones you', 'Trading is suspended until you deposit', 'A warning appears; if margin level keeps falling to the stop-out level, positions are auto-closed largest loser first', 'Everything closes immediately at the call level'],
          a: 2,
          why: 'Nobody calls — the name is a historical leftover. Below the stop-out level the system closes positions for you, at whatever price exists, with no input from you.' },
        { q: 'Your stop is at 1.0800 but Monday opens at 1.0710. What happens?',
          options: ['Filled at exactly 1.0800', 'The trade is cancelled', 'Filled near 1.0710 — a stop becomes a market order at the first available price', 'The broker covers the difference'],
          a: 2,
          why: 'A stop is an instruction to exit once a level trades, not a reservation of that price. Size positions assuming the exit can be worse than planned.' }
      ]
    }
  ],

  /* ================= MODULE 4 ================= */
  4: [
    {
      title: 'Choosing who holds your money',
      slides: [0, 1, 2],
      check: [
        { q: 'What matters most before depositing anywhere?',
          options: ['The leverage on offer', 'The tightest possible spread', 'That they are genuinely regulated, hold segregated funds, and have a clean withdrawal record', 'The size of the deposit bonus'],
          a: 2,
          why: 'Every other feature is worthless if you cannot withdraw. Verify the licence on the regulator\'s own register, and check which legal entity you are actually contracting with.' },
        { q: 'Why does a dealing-desk (B-book) broker have a conflict of interest?',
          options: ['They charge more commission', 'They take the other side of your trade internally, so your losses are their revenue', 'They are always unregulated', 'They cannot offer stop losses'],
          a: 1,
          why: 'This is legal and disclosed, and a good market maker gives fine fills on small size. But the incentive is structurally misaligned, which is why agency execution costs more per trade and is often worth it.' }
      ]
    },
    {
      title: 'What it really costs',
      slides: [3],
      check: [
        { q: 'Broker A: 1.6-pip spread, no commission. Broker B: 0.2 pips plus $7 per lot round turn. Which is cheaper?',
          options: ['A, because there is no commission', 'B — 0.2 pips plus 0.7 pips of commission is 0.9 pips total', 'They are the same', 'It cannot be compared'],
          a: 1,
          why: '$7 per standard lot equals 0.7 pips at $10 per pip. B totals 0.9 against A\'s 1.6, so "commission-free" is nearly twice as expensive. Always convert commission into pips.' },
        { q: 'Besides spread and commission, which cost is most often overlooked?',
          options: ['Swap markup on overnight positions', 'The cost of the platform', 'Chart data fees', 'Order routing fees'],
          a: 0,
          why: 'Swap is charged nightly and brokers add their own markup to it. Also compare inactivity fees, withdrawal charges and currency conversion on deposits.' }
      ]
    },
    {
      title: 'Setting up a workspace',
      slides: [4, 5, 6, 7],
      check: [
        { q: 'You copied an MT4 indicator into MT5 and nothing appears. Why?',
          options: ['The file is corrupt', 'MT5 needs a paid licence for custom indicators', 'MT4 and MT5 formats are incompatible — an .ex4 will never load in MT5', 'You must restart the computer'],
          a: 2,
          why: 'MT5 is not backward compatible. The file extension tells you immediately, which saves an hour of hunting through folder paths.' },
        { q: 'The time on your chart is:',
          options: ['Your local time', 'Always UTC', 'Your broker\'s server time, which is rarely either', 'Set by your operating system'],
          a: 2,
          why: 'Chart timestamps follow broker server time, which determines where the daily candle opens. Work out your offset now or the whole session module will confuse you.' }
      ]
    },
    {
      title: 'Traps to walk past',
      slides: [8, 9],
      check: [
        { q: 'A broker offers a 100% deposit bonus. The realistic catch?',
          options: ['There is none', 'Volume requirements that force over-trading, and terms that can lock your own deposit', 'It is taxed more heavily', 'You must trade only exotics'],
          a: 1,
          why: 'Bonuses are tied to turnover conditions far beyond what a sensible strategy generates. The bonus is designed to change your behaviour, and it does.' },
        { q: 'Before depositing, where should you verify a broker\'s licence?',
          options: ['On the broker\'s own website', 'On the regulator\'s own public register', 'On a review site', 'In the platform\'s About box'],
          a: 1,
          why: 'Only the regulator\'s register counts, and you should check that the registered entity name matches the brand you are signing up with — they often differ.' }
      ]
    }
  ]
};
