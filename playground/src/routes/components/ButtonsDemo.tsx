export function ButtonsDemo() {
  return (
    <div className="content-card space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
        <h2 className="text-2xl font-semibold text-slate-900">Buttons</h2>
        <p className="text-slate-600">
          Variaciones básicas para validar tamaños, estados y colores. Usa estos ejemplos como
          sandbox antes de copiar el marcado final a tus apps.
        </p>
      </header>

      <div className="component-grid columns-2">
        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">Primary</h3>
          <div className="flex flex-wrap gap-3 items-end">
            <button className="button button-primary">Primary</button>
            <button className="button button-primary-outline">Outline</button>
            <button className="button button-primary-flat">Flat</button>
            <button className="button button-primary-rounded">Rounded</button>
            <button className="button button-primary link">Link</button>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">Secondary</h3>
          <div className="flex flex-wrap gap-3 items-end">
            <button className="button button-secondary">Secondary</button>
            <button className="button button-secondary-outline">Outline</button>
            <button className="button button-secondary-flat">Flat</button>
            <button className="button button-secondary-rounded">Rounded</button>
            <button className="button button-secondary link">Link</button>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">Estados y tonos</h3>
          <div className="flex flex-wrap gap-3 items-end">
            <button className="button button-success">Success</button>
            <button className="button button-danger">Danger</button>
            <button className="button button-warning">Warning</button>
            <button className="button button-info">Info</button>
            <button className="button button-gray">Gray</button>
            <button className="button button-dark">Dark</button>
            <button className="button button-primary" disabled>
              Disabled
            </button>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">Sizes</h3>
          <div className="flex flex-col gap-3">
            <button className="button button-primary is-small">Small</button>
            <button className="button button-primary">Default</button>
            <button className="button button-primary is-large">Large</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ButtonsDemo;
