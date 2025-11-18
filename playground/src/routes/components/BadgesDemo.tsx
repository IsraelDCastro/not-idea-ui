export function BadgesDemo() {
  return (
    <div className="content-card space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
        <h2 className="text-2xl font-semibold text-slate-900">Badges</h2>
        <p className="text-slate-600">
          Estados cortos para etiquetar elementos, resaltar contadores o reforzar filtros activos.
          Aquí puedes comprobar contraste y comportamiento con distintas tipografías.
        </p>
      </header>

      <div className="component-grid columns-3">
        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">Colores base</h3>
          <div className="flex flex-wrap gap-2">
            <span className="state is-primary">Primary</span>
            <span className="state is-secondary">Secondary</span>
            <span className="state is-tertiary">Tertiary</span>
            <span className="state is-info">Info</span>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">Estados</h3>
          <div className="flex flex-wrap gap-2">
            <span className="state is-success">Success</span>
            <span className="state is-warning">Warning</span>
            <span className="state is-danger">Danger</span>
            <span className="state is-dark">Dark</span>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">Semi transparentes</h3>
          <div className="flex flex-wrap gap-2">
            <span className="state is-primary semi-transparent">Primary</span>
            <span className="state is-secondary semi-transparent">Secondary</span>
            <span className="state is-success semi-transparent">Success</span>
            <span className="state is-info semi-transparent">Info</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default BadgesDemo;
