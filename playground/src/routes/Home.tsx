import { Link } from "react-router-dom";

export function Home() {
  return (
    <div className="content-card space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-slate-500">Playground</p>
        <h1 className="text-3xl font-semibold text-slate-900">Not Idea UI</h1>
        <p className="text-slate-600">
          Este playground corre sobre React + React Router 7. Usa el build generado con Vite para
          validar componentes, probar overrides y crear ejemplos interactivos.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Cómo importar la librería</h2>
        <p className="text-slate-600">
          El paquete expone dos entry-points para CSS. Usa el compilado cuando no quieras modificar
          Tailwind, o el modo raw si planeas recompilar con tu propia configuración/theme.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/60">
            <h3 className="text-sm font-semibold text-slate-700">Compilado listo para usar</h3>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900/90 p-3 text-xs text-slate-100">
              <code>{`// src/styles/library.css
@import 'not-idea-ui/css/not-idea-ui.css';`}</code>
            </pre>
          </div>
          <div className="rounded-xl border border-slate-200 p-4 bg-slate-50/60">
            <h3 className="text-sm font-semibold text-slate-700">Modo raw + Tailwind propio</h3>
            <pre className="mt-2 overflow-x-auto rounded-lg bg-slate-900/90 p-3 text-xs text-slate-100">
              <code>{`// src/styles/library-raw.css
@import 'not-idea-ui/tailwind/not-idea-ui.css';`}</code>
            </pre>
          </div>
        </div>
        <p className="text-slate-600 text-sm">
          En este playground usamos el compilado por defecto. Cambia la importación en
          <code> src/styles/library.css</code> para validar el modo raw o crea un archivo propio para
          testear overrides.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold text-slate-900">Recorrido</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-600">
          <li>
            Usa el menú lateral para navegar entre componentes. Empieza por los{" "}
            <Link to="/components/buttons" className="text-primary-600 underline">
              botones
            </Link>{" "}
            donde puedes activar diferentes estados y tamaños.
          </li>
          <li>
            Cambia el tema desde el header para ver cómo las variables de <code>theme.css</code>
            personalizan colores y tipografías en caliente.
          </li>
          <li>
            Clona ejemplos en tu proyecto copiando el HTML generado por la librería.
          </li>
        </ul>
      </section>
    </div>
  );
}

export default Home;
