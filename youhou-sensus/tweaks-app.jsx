// tweaks-app.jsx — mounts the Tweaks panel and applies values as CSS vars / attrs.
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#FFD23F",
  "font": "hand",
  "paper": "dots",
  "weight": 2
}/*EDITMODE-END*/;

const FONT_MAP = {
  hand: "'Patrick Hand', cursive",
  kalam: "'Kalam', cursive",
  shantell: "'Shantell Sans', cursive",
};

function WireframeTweaks() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const r = document.documentElement;
    r.style.setProperty('--accent', t.accent);
    r.style.setProperty('--font', FONT_MAP[t.font] || FONT_MAP.hand);
    r.style.setProperty('--bw', (t.weight || 2) + 'px');
    document.body.setAttribute('data-paper', t.paper);
  }, [t]);

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Ambiance" />
      <TweakColor label="Surligneur" value={t.accent}
        options={['#FFD23F', '#FF7AAE', '#5BC0EB', '#8AC926']}
        onChange={(v) => setTweak('accent', v)} />
      <TweakRadio label="Écriture" value={t.font}
        options={[{value:'hand',label:'Plume'},{value:'kalam',label:'Stylo'},{value:'shantell',label:'Rond'}]}
        onChange={(v) => setTweak('font', v)} />
      <TweakSection label="Papier" />
      <TweakRadio label="Fond" value={t.paper}
        options={[{value:'uni',label:'Uni'},{value:'dots',label:'Points'},{value:'grid',label:'Grille'}]}
        onChange={(v) => setTweak('paper', v)} />
      <TweakSlider label="Épaisseur du trait" value={t.weight} min={1} max={3} step={0.5} unit="px"
        onChange={(v) => setTweak('weight', v)} />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById('tweaks-root')).render(<WireframeTweaks />);
