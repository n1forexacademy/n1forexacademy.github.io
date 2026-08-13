/* N1 Forex Academy — lessons for Module 4. Loaded on demand. */
(function () {
  var L = (window.LESSONS = window.LESSONS || {});
  L[4] = [
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
  ];
})();
