/* N1 Forex Academy — brand marks.

   Original artwork, drawn as inline SVG so it stays crisp at any size and
   follows the palette. Nothing here imitates an existing institution.

   The mark: a shield (training, credentials) containing an ascending candle
   sequence (the subject) with "N1" set beneath. Gold on navy. */

window.BRAND = (function () {
  var B = {};

  B.signatory = {
    name: 'Jonathan Afolayan',
    title: 'Founder & Head of Training',
    org: 'N1 Forex Academy'
  };

  /* Compact mark for the top bar. */
  B.mark = function (size) {
    var s = size || 34;
    return '<svg class="n1-mark" width="' + s + '" height="' + s + '" viewBox="0 0 64 64" role="img" aria-label="N1 Forex Academy">' +
      '<defs><linearGradient id="n1g" x1="0" y1="0" x2="0" y2="1">' +
        '<stop offset="0" stop-color="var(--gold)"/><stop offset="1" stop-color="var(--gold)" stop-opacity=".72"/>' +
      '</linearGradient></defs>' +
      '<path d="M32 3 L58 12 v22c0 14-11 23-26 27C17 57 6 48 6 34V12z" fill="var(--accent)"/>' +
      '<path d="M32 3 L58 12 v22c0 14-11 23-26 27C17 57 6 48 6 34V12z" fill="none" stroke="url(#n1g)" stroke-width="2.2"/>' +
      '<g stroke="url(#n1g)" stroke-width="2.6" stroke-linecap="round">' +
        '<line x1="19" y1="36" x2="19" y2="24"/><line x1="26" y1="32" x2="26" y2="18"/>' +
        '<line x1="33" y1="28" x2="33" y2="14"/><line x1="40" y1="24" x2="40" y2="12"/>' +
      '</g>' +
      '<path d="M15 41 L23 34 L31 30 L39 24 L47 18" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity=".9"/>' +
      '<text x="32" y="55" text-anchor="middle" font-family="var(--sans)" font-size="13" font-weight="800" fill="#fff" letter-spacing=".5">N1</text>' +
    '</svg>';
  };

  /* Full lockup for the certificate and sign-in. */
  B.lockup = function (size) {
    var s = size || 56;
    return '<div class="n1-lockup">' + B.mark(s) +
      '<div class="n1-words"><b>N1 FOREX ACADEMY</b><span>Structured trader training</span></div></div>';
  };

  /* Embossed verification seal for the certificate. */
  B.seal = function (refId) {
    return '<svg class="n1-seal" viewBox="0 0 150 150" role="img" aria-label="Academy verification seal">' +
      '<defs>' +
        '<path id="sealArcTop" d="M75,75 m-56,0 a56,56 0 1,1 112,0" fill="none"/>' +
        '<path id="sealArcBot" d="M75,75 m-46,0 a46,46 0 1,0 92,0" fill="none"/>' +
      '</defs>' +
      '<circle cx="75" cy="75" r="70" fill="none" stroke="var(--gold)" stroke-width="2"/>' +
      '<circle cx="75" cy="75" r="63" fill="none" stroke="var(--gold)" stroke-width="1" opacity=".65"/>' +
      '<circle cx="75" cy="75" r="40" fill="none" stroke="var(--gold)" stroke-width="1" opacity=".5"/>' +
      '<g fill="var(--gold)" font-family="var(--sans)" font-size="9.5" font-weight="700" letter-spacing="2.2">' +
        '<text><textPath href="#sealArcTop" startOffset="50%" text-anchor="middle">N1 FOREX ACADEMY</textPath></text>' +
      '</g>' +
      '<g fill="var(--gold)" font-family="var(--mono)" font-size="7" letter-spacing="1.4" opacity=".85">' +
        '<text><textPath href="#sealArcBot" startOffset="50%" text-anchor="middle">' +
          (refId ? String(refId).slice(0, 24) : 'VERIFIED') + '</textPath></text>' +
      '</g>' +
      '<g stroke="var(--gold)" stroke-width="2.6" stroke-linecap="round">' +
        '<line x1="62" y1="86" x2="62" y2="74"/><line x1="70" y1="82" x2="70" y2="68"/>' +
        '<line x1="78" y1="78" x2="78" y2="63"/><line x1="86" y1="73" x2="86" y2="60"/>' +
      '</g>' +
      '<path d="M58 92 L67 84 L75 79 L83 72 L91 65" fill="none" stroke="var(--gold)" stroke-width="1.8" stroke-linecap="round"/>' +
      '<text x="75" y="106" text-anchor="middle" font-family="var(--sans)" font-size="7" font-weight="700" ' +
        'fill="var(--gold)" letter-spacing="1.6">COMPLETION</text>' +
    '</svg>';
  };

  /* Hand-drawn signature path. Original, generic script — not a scan of anyone's
     real handwriting, and captioned as an electronic signature. */
  B.signature = function () {
    return '<svg class="n1-sig" viewBox="0 0 260 70" role="img" aria-label="Electronic signature">' +
      '<g fill="none" stroke="var(--ink)" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round">' +
        '<path d="M12 52 C18 30 24 18 30 20 C36 22 30 44 26 50 C23 55 21 52 24 46 C30 34 42 22 52 20"/>' +
        '<path d="M46 30 C54 28 60 26 66 22"/>' +
        '<path d="M62 48 C66 34 72 24 78 26 C83 28 78 40 74 46 C71 50 70 47 73 42 C79 32 90 24 99 24"/>' +
        '<path d="M96 44 C100 32 104 26 109 28 C113 30 110 38 107 43 C112 40 116 32 121 30 C126 28 126 36 124 42 C129 38 133 30 139 28"/>' +
        '<path d="M136 46 C140 32 146 22 152 24 C157 26 152 38 148 44"/>' +
        '<path d="M150 34 C160 32 168 30 176 26"/>' +
        '<path d="M170 46 C176 32 182 24 188 26 C193 28 188 40 184 45 C190 41 195 32 201 30 C207 28 206 38 204 44"/>' +
        '<path d="M206 40 C214 34 220 26 226 24 C232 22 230 34 226 42 C232 38 238 30 246 28"/>' +
        '<path d="M18 60 C70 56 150 54 232 58" stroke-width="1.2" opacity=".55"/>' +
      '</g>' +
    '</svg>';
  };

  return B;
})();
