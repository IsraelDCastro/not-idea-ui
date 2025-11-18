export function AlertsDemo() {
  return (
    <div className="content-card space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
        <h2 className="text-2xl font-semibold text-slate-900">Alerts</h2>
        <p className="text-slate-600">
          Alertas listas para copy/paste con iconos, variantes y layouts. Úsalas para validar copy y
          contrastes de color con distintos temas rápidamente.
        </p>
      </header>

      <div className="component-grid">
        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">Variantes sólidas</h3>
          <div className="grid gap-3">
            <div className="alert is-primary">
              <span className="icon">ℹ️</span>
              <div>
                <strong className="block">Primary alert</strong>
                <p>Perfecta para mensajes informativos destacados en tarjetas o modales.</p>
              </div>
            </div>
            <div className="alert is-success">
              <span className="icon">✅</span>
              <div>
                <strong className="block">Success</strong>
                <p>Ideal para confirmar acciones como envíos de formularios o guardados.</p>
              </div>
            </div>
            <div className="alert is-danger">
              <span className="icon">⚠️</span>
              <div>
                <strong className="block">Danger</strong>
                <p>Resalta errores críticos manteniendo la jerarquía visual del layout.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-3">
          <h3 className="text-lg font-semibold text-slate-800">Borde lateral</h3>
          <div className="grid gap-3">
            <div className="alert has-left-border is-warning">
              <span className="icon">🔔</span>
              <div>
                <strong className="block">Warning alert</strong>
                <p>Sugiere atención sin bloquear el flujo principal de la interfaz.</p>
              </div>
            </div>
            <div className="alert has-left-border is-info is-semi-transparent">
              <span className="icon">💡</span>
              <div>
                <strong className="block">Info inline</strong>
                <p>Útil para mensajes contextuales dentro de formularios y listas.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AlertsDemo;
