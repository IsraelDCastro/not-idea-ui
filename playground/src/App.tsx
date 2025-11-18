import { BrowserRouter, NavLink, Navigate, Route, Routes } from "react-router-dom";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Home from "./routes/Home";
import ComponentsCatalog, { componentSections } from "./routes/components/ComponentsCatalog";
import "./styles/library.css";

const componentLinks = componentSections.map((section) => ({
  to: `/components/${section.id}`,
  label: section.label
}));

export function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="app-header">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
                Playground
              </p>
              <h1 className="text-lg font-semibold text-slate-900">
                Not Idea UI
              </h1>
            </div>
            <ThemeSwitcher />
          </div>
        </header>

        <main className="app-content mx-auto w-full max-w-6xl">
          <aside className="sidebar-nav">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `sidebar-link ${isActive ? "active" : ""}`
              }
              viewTransition
            >
              Inicio
            </NavLink>
            <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Componentes
            </span>
            {componentLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `sidebar-link ${isActive ? "active" : ""}`
                }
                viewTransition
              >
                {link.label}
              </NavLink>
            ))}
          </aside>

          <section className="space-y-6 pb-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/components"
                element={<Navigate to={`/components/${componentSections[0].id}`} replace />}
              />
              <Route
                path="/components/:componentId"
                element={<ComponentsCatalog />}
              />
              <Route path="*" element={<Home />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
