/* boards.js — injects the low-fi phone mockups into each board.
   Kept as JS template strings so no single file gets huge. */
(function () {
  // ── small helpers ──────────────────────────────────────────────────────
  const nav = (active) => `
    <div class="navbar">
      <div class="navitem ${active==='home'?'on':''}"><svg viewBox="0 0 24 24"><use href="#ic-home"/></svg>Fil</div>
      <div class="navitem ${active==='pen'?'on':''}"><svg viewBox="0 0 24 24"><use href="#ic-pen"/></svg>Écrire</div>
      <div class="navitem ${active==='circ'?'on':''}"><svg viewBox="0 0 24 24"><use href="#ic-circ"/></svg>Cercles</div>
      <div class="navitem ${active==='user'?'on':''}"><svg viewBox="0 0 24 24"><use href="#ic-user"/></svg>Moi</div>
    </div>`;
  const status = `<div class="statusbar"><span>9:41</span><span class="dots">●●● ▮</span></div>`;
  const phone = (inner, notch=true) => `
    <div class="phone">${notch?'<div class="notch"></div>':''}
      <div class="screen">${status}<div class="viewport">${inner}</div></div>
    </div>`;
  const dir = (badge, title, desc, phoneHtml, callout) => `
    <div class="dir">
      <h3><span class="badge">${badge}</span>${title}</h3>
      <div class="desc">${desc}</div>
      ${phoneHtml}
      ${callout?`<div class="callout"><span class="arrow">︎↑</span>${callout}</div>`:''}
    </div>`;

  const set = (id, html) => { const el = document.getElementById(id); if (el) el.innerHTML = html; };

  // ════════════════════════════════════════════════════════════════════════
  // BOARD 1 — DÉCOUVERTE / FEED PAR CERCLES
  // ════════════════════════════════════════════════════════════════════════

  // A — rubans de cercles + fil unifié
  const feedA = phone(`
    <div class="appbar">
      <div class="title">Mon fil</div>
      <div class="row">
        <div class="ico"><svg viewBox="0 0 24 24" width="22" height="22"><use href="#ic-search"/></svg></div>
        <div class="ico"><svg viewBox="0 0 24 24" width="22" height="22"><use href="#ic-bell"/></svg></div>
      </div>
    </div>
    <div class="chips">
      <span class="chip on dot">Tous</span>
      <span class="chip dot">Famille</span>
      <span class="chip dot">Pro</span>
      <span class="chip dot">Quartier</span>
      <span class="chip dot">Photo</span>
    </div>
    <div class="scroll">
      <div class="card">
        <div class="meta"><span class="avatar"></span> Camille · <span class="tag">Quartier</span><span class="spacer"></span><span class="tag t-doc">Doc</span></div>
        <div class="kicker">Compost partagé, mode d'emploi</div>
        <div class="ln w95"></div><div class="ln w90"></div><div class="ln w50"></div>
        <div class="cardfoot"><span>♡ 24</span><span>💬 6</span><span>↻ 3</span></div>
      </div>
      <div class="card">
        <div class="meta"><span class="avatar"></span> Inès a commenté · <span class="tag">Pro</span><span class="spacer"></span><span class="tag">Commentaire</span></div>
        <div class="tiny">sur « Spec API v2 » (wiki externe)</div>
        <div class="quote"><div class="ln sm w90" style="background:#b7b2a6"></div><div class="ln sm w60" style="background:#b7b2a6"></div></div>
        <div class="ln w95"></div><div class="ln w40"></div>
        <div class="cardfoot"><span>♡ 9</span><span>💬 4 réponses</span></div>
      </div>
      <div class="card">
        <div class="meta"><span class="avatar"></span> Discussion · <span class="tag">Photo</span><span class="spacer"></span><span class="tag">Fil</span></div>
        <div class="kicker">Argentique vs numérique</div>
        <div class="ln w90"></div><div class="ln w70"></div>
        <div class="cardfoot"><span>💬 31</span><span>12 personnes</span></div>
      </div>
    </div>
    ${nav('home')}
  `);

  // B — mosaïque de cercles (entrer dans un espace)
  const feedB = phone(`
    <div class="appbar">
      <div class="title">Tes cercles</div>
      <div class="ico"><svg viewBox="0 0 24 24" width="22" height="22"><use href="#ic-search"/></svg></div>
    </div>
    <div class="scroll">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:11px;margin-bottom:13px">
        <div class="card" style="margin:0;text-align:center;padding:16px 8px">
          <div style="font-size:21px">Famille</div>
          <div class="tiny">5 nouveaux</div>
          <div style="margin-top:8px"><span class="avatar" style="display:inline-block;margin:-4px"></span><span class="avatar" style="display:inline-block;margin:-4px"></span><span class="avatar" style="display:inline-block;margin:-4px"></span></div>
        </div>
        <div class="card" style="margin:0;text-align:center;padding:16px 8px;background:color-mix(in srgb,var(--accent) 14%,transparent)">
          <div style="font-size:21px">Pro</div>
          <div class="tiny">12 nouveaux</div>
          <div style="margin-top:8px"><span class="avatar" style="display:inline-block;margin:-4px"></span><span class="avatar" style="display:inline-block;margin:-4px"></span></div>
        </div>
        <div class="card" style="margin:0;text-align:center;padding:14px 8px">
          <div style="font-size:19px">Quartier</div>
          <div class="tiny">3 nouveaux</div>
        </div>
        <div class="card" style="margin:0;text-align:center;padding:14px 8px">
          <div style="font-size:19px">Photo&nbsp;📷</div>
          <div class="tiny">8 nouveaux</div>
        </div>
        <div class="card add" style="margin:0;text-align:center;padding:14px 8px;border-style:dashed;display:grid;place-items:center">
          <div class="tiny" style="font-size:16px">＋ Nouveau<br>cercle</div>
        </div>
        <div class="card" style="margin:0;text-align:center;padding:14px 8px">
          <div style="font-size:19px">Tout&nbsp;récent</div>
          <div class="tiny">le fil mêlé</div>
        </div>
      </div>
      <h2 class="scn">Aperçu — Pro</h2>
      <div class="card" style="padding:9px 11px">
        <div class="meta"><span class="avatar"></span> Inès · <span class="tag t-doc">Doc</span></div>
        <div class="ln w90"></div><div class="ln w60"></div>
      </div>
    </div>
    ${nav('circ')}
  `);

  set('cols-feed',
    dir('A', 'Rubans de cercles + fil unifié',
      'Une barre de <b>cercles</b> filtre un fil vertical mêlant documents, commentaires et discussions. Familier, rapide à scanner.',
      feedA,
      'le cercle actif filtre le fil <i>et</i> pré-remplit l\'audience à la publication') +
    dir('B', 'Mosaïque de cercles',
      'Chaque cercle est un <b>espace où l\'on entre</b>. Vue spatiale qui sépare nettement pro / perso et montre l\'activité par cercle.',
      feedB,
      'bon pour cloisonner les contextes — on choisit où regarder avant de plonger')
  );

  // ════════════════════════════════════════════════════════════════════════
  // BOARD 2 — ÉDITEUR + VERSIONS + PUBLICATION
  // ════════════════════════════════════════════════════════════════════════

  // A — éditeur minimal · versions en modale · publier = feuille d'audience
  const editorA = phone(`
    <div class="appbar" style="padding:9px 12px">
      <div class="row" style="gap:11px"><span style="font-size:20px">✕</span><span class="tiny" style="font-size:15px">Brouillon</span></div>
      <div class="row" style="gap:13px;font-family:var(--hand);font-size:19px;color:#6f6b61"><span>↺</span><span>↻</span><span>⋯</span></div>
    </div>
    <div class="toolbar">
      <div class="gp"><b>B</b><i>I</i><u>U</u></div><span class="sep"></span>
      <div class="gp"><span>H1</span><span>" "</span><span>• —</span></div><span class="sep"></span>
      <div class="gp"><span>🔗</span><span>🖼</span></div>
    </div>
    <div class="scroll" style="padding:14px 15px">
      <div style="font-size:24px;border-bottom:1.5px dashed var(--graphite);padding-bottom:6px;margin-bottom:10px">Jardiner en ville</div>
      <div class="ln w95"></div><div class="ln w90"></div><div class="ln w70"></div>
      <div class="imgph" style="margin:12px 0"><span>＋ image</span></div>
      <div class="ln w95"></div><div class="ln w80"></div><div class="ln w50"></div>
    </div>
    <div class="sheet">
      <div class="grip"></div>
      <h4>Publier</h4>
      <div class="tiny" style="margin-bottom:7px">Visible par les cercles&nbsp;:</div>
      <div class="check"><span class="box x"></span> Famille</div>
      <div class="check"><span class="box"></span> Pro</div>
      <div class="check"><span class="box x"></span> Quartier</div>
      <div class="row" style="justify-content:space-between;margin:11px 0 9px">
        <span class="licbadge">CC BY-SA 4.0 · appliquée</span>
      </div>
      <div class="btn primary block">Publier maintenant</div>
    </div>
  `);

  // B — rail d'historique (timeline) toujours visible · publication inline
  const editorB = phone(`
    <div class="appbar" style="padding:9px 12px;flex-wrap:wrap;gap:6px">
      <div class="row" style="gap:7px;flex:1">
        <span class="tiny" style="font-size:14px">Visible&nbsp;:</span>
        <span class="chip" style="font-size:13px;padding:1px 8px">Famille ✕</span>
        <span class="chip" style="font-size:13px;padding:1px 8px">Pro ✕</span>
        <span class="chip add" style="font-size:13px;padding:1px 8px">＋</span>
      </div>
      <span class="licbadge" style="font-size:12px">CC BY-SA</span>
    </div>
    <div class="seg" style="margin:9px 12px 4px"><div>Brouillon</div><div class="on">Publié</div></div>
    <div class="editzone">
      <div style="display:flex;flex:1;min-height:0">
        <div class="rail">
          <div class="node"><div class="dot fill"></div><span class="vlabel">v1</span></div>
          <div class="line"></div>
          <div class="node"><div class="dot fill"></div><span class="vlabel">v2</span></div>
          <div class="line"></div>
          <div class="node"><div class="dot fill"></div><span class="vlabel">v3</span></div>
          <div class="line"></div>
          <div class="node"><div class="dot now"></div><span class="vlabel">now</span></div>
        </div>
        <div class="scroll" style="padding:13px 13px">
          <div style="font-size:22px;margin-bottom:9px">Jardiner en ville</div>
          <div class="ln w95"></div><div class="ln w90"></div>
          <div class="hl-ln w80"></div>
          <div class="tiny" style="margin:2px 0 8px">↑ ajouté en v3 · il y a 2&nbsp;h</div>
          <div class="ln w90"></div><div class="ln w60"></div>
        </div>
      </div>
    </div>
    <div class="bottombar"><span>🕓 v3 → maintenant · enreg. auto</span><span class="btn sm">Comparer</span></div>
  `);

  set('cols-editor',
    dir('A', 'Éditeur épuré · publier = feuille',
      'Barre d\'outils classique, document plein écran. L\'<b>historique</b> est derrière l\'icône 🕓 ; <b>Publier</b> ouvre une feuille pour choisir cercles + confirmer la licence.',
      editorA,
      'action de publication explicite — un geste, une feuille, c\'est fait') +
    dir('B', 'Rail d\'historique permanent',
      'Une <b>timeline de versions</b> reste visible à gauche (on saute à n\'importe quel état). L\'audience et l\'état Brouillon/Publié sont <b>inline</b>, toujours sous les yeux.',
      editorB,
      'le versionnage devient ambiant — on voit l\'historique sans le chercher')
  );

  // ════════════════════════════════════════════════════════════════════════
  // BOARD 3 — COMMENTAIRE WEB (surcouche / extension)
  // ════════════════════════════════════════════════════════════════════════

  const browser = `<div class="browserbar"><span class="nav-ar">‹ ›</span><div class="urlbar">https://exemple.org/article-recherche</div><span>⤓</span></div>`;

  // A — bulle d'action sur sélection + composer ancré
  const webA = phone(`
    ${browser}
    <div class="scroll" style="padding:14px 14px;position:relative">
      <div style="font-size:21px;margin-bottom:9px">Les communs numériques</div>
      <div class="ln w95"></div><div class="ln w90"></div>
      <div style="position:relative;margin:10px 0">
        <span class="hl">une ressource gérée collectivement par sa communauté</span>
        <div class="bubble" style="top:-44px;left:8px"><b>✎ Commenter</b><span style="color:var(--graphite)">|</span><b>⌖ la page</b></div>
      </div>
      <div class="composer">
        <div class="tail"></div>
        <div class="tiny" style="border-left:2px solid var(--accent);padding-left:7px;margin-bottom:6px">« …gérée collectivement par sa communauté »</div>
        <div class="field">Ton commentaire sur ce passage…</div>
        <div class="row" style="justify-content:space-between">
          <span class="chip" style="font-size:13px">→ Pro ▾</span>
          <span class="btn sm primary">Publier</span>
        </div>
      </div>
      <div class="ln w80" style="margin-top:12px"></div><div class="ln w50"></div>
    </div>
    <div class="fab">💬 Commenter la page</div>
  `, false);

  // B — marge d'annotations (panneau latéral, façon Hypothesis)
  const webB = phone(`
    ${browser}
    <div class="viewport" style="position:relative;flex:1">
      <div class="scroll" style="padding:13px 13px;width:100%">
        <div style="font-size:20px;margin-bottom:9px">Les communs numériques</div>
        <div class="ln w95"></div>
        <div class="row" style="gap:6px;align-items:flex-start;margin:8px 0">
          <div style="flex:1"><span class="hl">une ressource gérée collectivement</span></div>
          <span class="marker">1</span>
        </div>
        <div class="ln w90"></div>
        <div class="row" style="gap:6px;align-items:flex-start;margin:8px 0">
          <div style="flex:1"><span class="hl">la gouvernance polycentrique</span> évite</div>
          <span class="marker">2</span>
        </div>
        <div class="ln w70"></div>
      </div>
      <div class="drawer">
        <div class="dh">Annotations <span class="tag">3</span></div>
        <div class="dscroll">
          <div class="note">
            <div class="nq">« gérée collectivement »</div>
            <div class="ln sm w95"></div><div class="ln sm w70"></div>
            <div class="nmeta"><span>Léa · Pro</span><span>💬 2</span></div>
          </div>
          <div class="note">
            <div class="nq">« gouvernance polycentrique »</div>
            <div class="ln sm w90"></div>
            <div class="nmeta"><span>Toi · brouillon</span></div>
          </div>
          <div class="btn sm block" style="margin-top:2px">＋ Commenter la page</div>
        </div>
      </div>
      <div class="handle">Annot. (3)</div>
    </div>
  `, false);

  set('cols-web',
    dir('A', 'Bulle sur sélection + composer ancré',
      'Je sélectionne du texte → une <b>bulle</b> propose de commenter le passage ou la page. Le composer s\'<b>ancre</b> à la sélection. Léger, contextuel, éphémère.',
      webA,
      'sélection = commentaire ancré (surlignage) · le bouton flottant vise la page entière') +
    dir('B', 'Marge d\'annotations (panneau)',
      'Les passages commentés sont <b>surlignés et numérotés</b> ; un panneau latéral liste toutes les annotations en marge. Couche persistante, façon relecture partagée.',
      webB,
      'on voit d\'un coup d\'œil tout ce qui a déjà été annoté sur la page')
  );

  // ════════════════════════════════════════════════════════════════════════
  // BOARD 4 — DISCUSSION / CONSULTATION D'UN CONTENU
  // ════════════════════════════════════════════════════════════════════════

  // A — lecture immersive, fils ancrés inline (révélés au tap)
  const discA = phone(`
    <div class="appbar"><div class="row"><span style="font-size:18px">‹</span><div class="title" style="font-size:18px">Compost partagé</div></div><span class="tiny">⋯</span></div>
    <div class="scroll" style="padding:13px 14px">
      <div class="meta" style="font-family:var(--hand);font-size:15px;color:#6f6b61"><span class="avatar"></span> Camille · <span class="tag">Quartier</span> · v4</div>
      <div class="ln w95" style="margin-top:10px"></div><div class="ln w90"></div>
      <div class="passage row" style="gap:7px;align-items:flex-start">
        <div style="flex:1"><span class="hl">on retourne le tas tous les 15 jours</span> pour aérer</div>
        <span class="margintag">💬 3</span>
      </div>
      <div class="inlinethread">
        <div class="cmt" style="margin:0 0 8px;border-radius:12px">
          <div class="ch"><span class="avatar" style="width:18px;height:18px"></span> Nadia · Quartier</div>
          <div class="ln sm w90"></div><div class="ln sm w50"></div>
          <div class="ca"><span>↳ Répondre</span><span>♡ 4</span></div>
        </div>
        <div class="field" style="margin:0">Répondre à ce passage…</div>
      </div>
      <div class="ln w90"></div><div class="ln w70"></div>
      <div class="passage row" style="gap:7px;align-items:flex-start">
        <div style="flex:1">Couvrir avec des feuilles mortes</div>
        <span class="margintag">💬 1</span>
      </div>
      <div class="ln w60"></div>
    </div>
    <div class="bottombar" style="justify-content:space-between"><span>💬 12 commentaires</span><span class="btn sm primary">Ajouter</span></div>
  `);

  // B — onglets Contenu / Discussions, fil threadé global
  const discB = phone(`
    <div class="appbar"><div class="row"><span style="font-size:18px">‹</span><div class="title" style="font-size:18px">Compost partagé</div></div><span class="tiny">⋯</span></div>
    <div class="seg" style="margin:9px 12px 2px"><div>Contenu</div><div class="on">Discussions 12</div><div>Versions</div></div>
    <div class="row" style="justify-content:space-between;padding:6px 13px 2px">
      <span class="chip" style="font-size:13px">Récents ▾</span>
      <span class="tiny">filtrer : tous cercles ▾</span>
    </div>
    <div class="scroll" style="padding:8px 12px">
      <div class="thread">
        <div class="cmt">
          <div class="ch"><span class="avatar" style="width:18px;height:18px"></span> Nadia · Quartier · 2&nbsp;j</div>
          <div class="ln sm w95"></div><div class="ln sm w70"></div>
          <div class="ca"><span>↳ Répondre</span><span>♡ 8</span><span>2 réponses</span></div>
        </div>
      </div>
      <div class="replies">
        <div class="reply">
          <div class="ch" style="font-size:13px;color:#8d887d;display:flex;gap:6px;align-items:center;margin-bottom:4px"><span class="avatar" style="width:15px;height:15px"></span> Camille</div>
          <div class="ln sm w90"></div>
        </div>
        <div class="reply">
          <div class="ch" style="font-size:13px;color:#8d887d;display:flex;gap:6px;align-items:center;margin-bottom:4px"><span class="avatar" style="width:15px;height:15px"></span> Toi</div>
          <div class="ln sm w70"></div>
        </div>
      </div>
      <div class="thread">
        <div class="cmt">
          <div class="ch"><span class="avatar" style="width:18px;height:18px"></span> Inès · Pro · 3&nbsp;j</div>
          <div class="ln sm w90"></div>
          <div class="ca"><span>↳ Répondre</span><span>♡ 2</span></div>
        </div>
      </div>
    </div>
    <div class="bottombar"><div class="field" style="flex:1;margin:0">Ajouter un commentaire…</div><span class="btn sm primary" style="margin-left:8px">→</span></div>
  `);

  set('cols-discuss',
    dir('A', 'Lecture immersive · fils ancrés',
      'Les discussions <b>vivent dans le texte</b> : un passage surligné porte un compteur ; on le tape pour ouvrir son fil sur place. Les commentaires du document entier sont en bas.',
      discA,
      'idéal pour suivre un débat passage par passage, sans quitter la lecture') +
    dir('B', 'Onglets · fil threadé global',
      'Le contenu et la discussion sont <b>séparés</b> par des onglets. Le fil est <b>threadé</b> (réponses imbriquées), triable et filtrable par cercle. On répond à n\'importe quel commentaire.',
      discB,
      'structure claire quand la conversation devient longue et ramifiée')
  );

})();
