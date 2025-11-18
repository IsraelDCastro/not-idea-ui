import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import AlertsDemo from "./AlertsDemo";
import BadgesDemo from "./BadgesDemo";
import ButtonsDemo from "./ButtonsDemo";

type Section = {
  id: string;
  label: string;
  render: () => JSX.Element;
};

const AccordionsSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
      <h2 className="text-2xl font-semibold text-slate-900">Accordions</h2>
      <p className="text-slate-600">
        Estructuras plegables con variantes minimalistas, ligeras y redondeadas. Usa detalles HTML o
        tu propio manejo de estado siempre que conserves las clases.
      </p>
    </header>

    <div className="grid gap-6 md:grid-cols-2">
      <details className="question" open>
        <summary>
          <span>¿Qué es Not Idea UI?</span>
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
          </svg>
        </summary>
        <div className="summary">
          Colección de estilos basada en Tailwind CSS con componentes listos para copiar y pegar o
          adaptar a tus propios temas.
        </div>
      </details>

      <div className="accordions rounded-accordions">
        <article className="accordion">
          <header className="accordion-head">
            <span className="title">Accordion redondeado</span>
            <button className="open rotate" type="button" aria-label="Toggle">
              ↓
            </button>
          </header>
          <div className="accordion-content">
            <p>
              Las variantes redondeadas combinan fondos suaves y bordes fluidos; perfectas para FAQs
              o listados de preguntas.
            </p>
          </div>
        </article>
      </div>
    </div>
  </div>
);

const BreadcrumbsSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
      <h2 className="text-2xl font-semibold text-slate-900">Breadcrumbs</h2>
      <p className="text-slate-600">
        Usa variantes con separadores por barras, flechas o viñetas para reforzar la navegación.
      </p>
    </header>

    <div className="space-y-4">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <ul>
          <li>
            <a className="breadcrumb-link" href="#">
              Inicio
            </a>
          </li>
          <li>
            <a className="breadcrumb-link" href="#">
              Componentes
            </a>
          </li>
          <li>
            <span className="breadcrumb-link is-active">Breadcrumb</span>
          </li>
        </ul>
      </nav>

      <nav className="breadcrumb has-arrows" aria-label="Breadcrumb con flechas">
        <ul>
          <li>
            <a className="breadcrumb-link" href="#">
              Docs
            </a>
          </li>
          <li>
            <a className="breadcrumb-link" href="#">
              Layouts
            </a>
          </li>
          <li>
            <span className="breadcrumb-link is-active">Navbar</span>
          </li>
        </ul>
      </nav>
    </div>
  </div>
);

const CardsSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
      <h2 className="text-2xl font-semibold text-slate-900">Cards</h2>
      <p className="text-slate-600">
        Tarjetas flexibles con imagen, contenido y pie para usar en listados, noticias o perfiles.
      </p>
    </header>

    <div className="grid gap-6 md:grid-cols-2">
      <article className="card">
        <figure className="card-header has-category">
          <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600" alt="Office" />
          <span className="card-category">Productividad</span>
        </figure>
        <div className="card-content">
          <div className="top-header">
            <div className="multi-items">
              <span>UI</span>
              <span>Design System</span>
            </div>
            <span className="info">Actualizado hace 2h</span>
          </div>
          <h3 className="card-title">Crea interfaces consistentes</h3>
          <p>
            Utiliza botones, alerts, badges y otros componentes listos para usar en tu siguiente
            proyecto.
          </p>
        </div>
        <div className="card-footer">
          <span className="text-sm text-gray-500">6 min de lectura</span>
          <button className="button button-primary" type="button">
            Leer más
          </button>
        </div>
      </article>

      <article className="card card-image" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800')" }}>
        <div className="card-category">Equipo</div>
        <div className="card-content">
          <h3 className="card-title">Construye en equipo</h3>
          <p>Componentes cohesivos, tipografías y colores configurables con CSS variables.</p>
        </div>
      </article>
    </div>
  </div>
);

const CarouselSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
      <h2 className="text-2xl font-semibold text-slate-900">Carousel & Slider</h2>
      <p className="text-slate-600">
        Carruseles horizontales usando snap points nativos y controles laterales.
      </p>
    </header>

    <div className="slider">
      <div className="content-slider rounded-lg">
        <div className="slide bg-primary-600/90">Slide 1</div>
        <div className="slide bg-secondary-600/90">Slide 2</div>
        <div className="slide bg-tertiary-600/90">Slide 3</div>
      </div>
      <button className="btn-slide prev" type="button" aria-label="Anterior">
        ‹
      </button>
      <button className="btn-slide next" type="button" aria-label="Siguiente">
        ›
      </button>
      <div className="dots">
        <button className="dot active" type="button" aria-label="Slide 1" />
        <button className="dot" type="button" aria-label="Slide 2" />
        <button className="dot" type="button" aria-label="Slide 3" />
      </div>
    </div>
  </div>
);

const CommentsSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
      <h2 className="text-2xl font-semibold text-slate-900">Comments</h2>
      <p className="text-slate-600">Bloques de feedback con cabecera, contenido y acciones.</p>
    </header>

    <article className="comment">
      <header className="comment-head">
        <div className="image">
          <img
            className="w-full h-full rounded-full object-cover"
            src="https://i.pravatar.cc/150?u=designer"
            alt="Usuario"
          />
        </div>
        <div>
          <p className="name">Isabel Duarte</p>
          <p className="profession">Product Designer</p>
        </div>
        <span className="date">Hace 3 días</span>
      </header>
      <div className="comment-content">
        <p>
          “Las utilidades CSS de Not Idea UI nos permiten iterar rápido sin perder consistencia.
          El modo raw con @apply es perfecto para personalizar.”
        </p>
      </div>
      <footer className="comment-footer">
        <button className="button button-secondary" type="button">
          Responder
        </button>
        <button className="button button-secondary-outline" type="button">
          Marcar útil
        </button>
      </footer>
    </article>
  </div>
);

const DropdownSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="content-card space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
        <h2 className="text-2xl font-semibold text-slate-900">Dropdowns</h2>
        <p className="text-slate-600">
          Menús flotantes que se muestran al foco o hover. Usa la clase `is-focused` para forzar el
          estado abierto cuando lo controles desde React.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <button
          type="button"
          className={`dropdown dropdown-primary ${open ? "is-focused" : ""}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
        >
          <span className="dropdown-wrap">
            <span className="dropdown-text">
              Acciones
              <span className="dropdown-wrap-icon">▾</span>
            </span>
          </span>
          <ul className="dropdown-content">
            <li>
              <button type="button" className="dropdown-item">
                Perfil
              </button>
            </li>
            <li className="dropdown-divider" />
            <li>
              <button type="button" className="dropdown-item">
                Cerrar sesión
              </button>
            </li>
          </ul>
        </button>

        <div className="dropdown dropdown-tertiary is-focused">
          <div className="dropdown-wrap">
            <div className="dropdown-text">Dropdown siempre visible</div>
          </div>
          <ul className="dropdown-content is-fade-up">
            <li>
              <span className="dropdown-title">Opciones</span>
            </li>
            <li>
              <a href="#" className="dropdown-item">
                Crear
              </a>
            </li>
            <li>
              <a href="#" className="dropdown-item">
                Duplicar
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const GallerySection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
      <h2 className="text-2xl font-semibold text-slate-900">Gallery</h2>
      <p className="text-slate-600">Grid responsiva con variantes cuadradas y esquinas redondeadas.</p>
    </header>

    <div className="gallery is-squared">
      {Array.from({ length: 6 }).map((_, index) => (
        <figure key={index} className="image-gallery is-rounded">
          <img
            src={`https://source.unsplash.com/random/400x40${index}?nature`}
            alt={`Paisaje ${index + 1}`}
            loading="lazy"
          />
        </figure>
      ))}
    </div>
  </div>
);

const ImagesSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
      <h2 className="text-2xl font-semibold text-slate-900">Images</h2>
      <p className="text-slate-600">Utilidades para mostrar imágenes redondeadas, circulares o con captions flotantes.</p>
    </header>

    <div className="grid gap-6 md:grid-cols-3">
      <figure className="image is-rounded is-shadow">
        <img src="https://source.unsplash.com/random/400x400?workspace" alt="Workspace" />
        <figcaption>Rounded + shadow</figcaption>
      </figure>
      <figure className="image is-circle">
        <img src="https://source.unsplash.com/random/400x400?portrait" alt="Portrait" />
        <figcaption>Circle</figcaption>
      </figure>
      <figure className="image float-caption">
        <img src="https://source.unsplash.com/random/400x400?city" alt="City" />
        <figcaption>Caption flotante</figcaption>
      </figure>
    </div>
  </div>
);

const ListsSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
      <h2 className="text-2xl font-semibold text-slate-900">Lists</h2>
      <p className="text-slate-600">Listas ordenadas, con separaciones o estilo “todo list”.</p>
    </header>

    <div className="grid gap-6 md:grid-cols-2">
      <ul className="list disordered">
        <li>Controls</li>
        <li>
          Utilities
          <ul>
            <li>Buttons</li>
            <li>Badges</li>
          </ul>
        </li>
      </ul>

      <ul className="list todo-list">
        <li>
          <div className="field flex items-center gap-4">
            <label className="checkbox is-primary">
              <input type="checkbox" defaultChecked />
              <span className="label">Ajustar tema principal</span>
            </label>
          </div>
        </li>
        <li className="completed">
          <div className="field flex items-center gap-4">
            <label className="checkbox is-secondary">
              <input type="checkbox" defaultChecked />
              <span className="label">Configurar navegación</span>
            </label>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

const ModalSection = () => {
  const [opened, setOpened] = useState(false);

  return (
    <div className="content-card space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
        <h2 className="text-2xl font-semibold text-slate-900">Modal</h2>
        <p className="text-slate-600">Aplica `modal-wrap` y controla la clase `is-opened` para mostrar u ocultar.</p>
      </header>

      <button className="button button-primary" type="button" onClick={() => setOpened(true)}>
        Abrir modal demo
      </button>

      <div className={`modal-wrap ${opened ? "is-opened" : ""}`}>
        <div className="backdrop" onClick={() => setOpened(false)} />
        <div className="modal">
          <header className="modal-head">
            <h3 className="modal-title">Configura tu tema</h3>
            <button className="modal-close" type="button" onClick={() => setOpened(false)}>
              ✕
            </button>
          </header>
          <div className="modal-body space-y-4">
            <p className="text-slate-600">
              Ajusta colores, tipografías y sombras desde `theme.css` o mediante CSS variables en tu
              proyecto.
            </p>
          </div>
          <footer className="modal-footer">
            <button className="button button-secondary-outline" type="button" onClick={() => setOpened(false)}>
              Cancelar
            </button>
            <button className="button button-secondary" type="button" onClick={() => setOpened(false)}>
              Guardar
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

const PaginationSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
      <h2 className="text-2xl font-semibold text-slate-900">Pagination</h2>
      <p className="text-slate-600">Estructura semántica con botones prev/next y lista de páginas.</p>
    </header>

    <nav className="pagination is-rounded" aria-label="Pagination demo">
      <button className="page-prev" type="button">
        Anterior
      </button>
      <ul className="pages-list">
        <li>
          <button className="page-link" type="button">
            1
          </button>
        </li>
        <li>
          <button className="page-link is-active" type="button">
            2
          </button>
        </li>
        <li>
          <button className="page-link" type="button">
            3
          </button>
        </li>
      </ul>
      <button className="page-next" type="button">
        Siguiente
      </button>
    </nav>
  </div>
);

const ProgressSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
      <h2 className="text-2xl font-semibold text-slate-900">Progress bars</h2>
      <p className="text-slate-600">Barras de progreso con variantes de color y tamaños.</p>
    </header>

    <div className="space-y-3">
      <div className="progress is-primary">
        <div className="inner-progress" style={{ width: "65%" }}>
          65%
        </div>
      </div>
      <div className="progress is-secondary is-large">
        <div className="inner-progress" style={{ width: "45%" }}>
          45%
        </div>
      </div>
      <div className="progress is-success is-small">
        <div className="inner-progress" style={{ width: "85%" }} />
      </div>
    </div>
  </div>
);

const TabsSection = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = useMemo(
    () => [
      { id: "overview", label: "Overview", content: "Resumen con información general." },
      { id: "tokens", label: "Tokens", content: "Variables CSS y theme custom properties." },
      { id: "usage", label: "Usage", content: "Clases y utilidades para integrarlo en tu app." }
    ],
    []
  );

  return (
    <div className="content-card space-y-6">
      <header className="space-y-2">
        <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
        <h2 className="text-2xl font-semibold text-slate-900">Tabs</h2>
        <p className="text-slate-600">Navegación por pestañas con soporte para variantes redondeadas o subrayadas.</p>
      </header>

      <div className="tabs-wrapper is-rounded">
        <ul className="tabs-lists">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                type="button"
                className={`tab-link ${activeTab === tab.id ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
        <div className="tabs-content">
          {tabs.map((tab) => (
            <article key={tab.id} className={`tab-content ${activeTab === tab.id ? "" : "hidden"}`}>
              <p className="text-slate-600">{tab.content}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

const TooltipsSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Components</p>
      <h2 className="text-2xl font-semibold text-slate-900">Tooltips</h2>
      <p className="text-slate-600">Tooltips posicionados con `data-tooltip` y variantes de color.</p>
    </header>

    <div className="flex flex-wrap gap-4">
      <span className="tooltip to-top is-primary" data-tooltip="Arriba">
        Hover arriba
      </span>
      <span className="tooltip to-right is-secondary" data-tooltip="Derecha">
        Hover derecha
      </span>
      <span className="tooltip to-bottom is-filled is-rounded" data-tooltip="Abajo">
        Tooltip pill
      </span>
      <span className="tooltip to-left is-danger" data-tooltip="Izquierda">
        Hover izquierda
      </span>
    </div>
  </div>
);

const FormsSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Layouts</p>
      <h2 className="text-2xl font-semibold text-slate-900">Forms</h2>
      <p className="text-slate-600">Inputs, selects y radios con estados de error o éxito.</p>
    </header>

    <form className="form space-y-4">
      <div className="double-field">
        <div className="field">
          <label className="label" htmlFor="first-name">
            Nombre
          </label>
          <input id="first-name" className="input" placeholder="Isabel" />
        </div>
        <div className="field">
          <label className="label" htmlFor="email">
            Email
          </label>
          <input id="email" className="input" type="email" placeholder="mail@notidea.dev" />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="role">
          Rol
        </label>
        <select id="role" className="select-inner">
          <option>Diseño</option>
          <option>Frontend</option>
          <option>Marketing</option>
        </select>
      </div>

      <div className="field">
        <label className="label" htmlFor="message">
          Mensaje
        </label>
        <textarea id="message" className="textarea" placeholder="Cuéntanos sobre tu proyecto" />
      </div>

      <div className="field">
        <span className="label">Preferencias</span>
        <div className="radio-group">
          <label className="radio is-primary">
            <input type="radio" name="preference" defaultChecked />
            <span className="label">Diseño</span>
          </label>
          <label className="radio is-secondary">
            <input type="radio" name="preference" />
            <span className="label">Desarrollo</span>
          </label>
        </div>
      </div>

      <div className="field">
        <span className="label">Notificaciones</span>
        <div className="check-group">
          <label className="checkbox is-toggle">
            <input type="checkbox" defaultChecked />
            <span className="label" aria-hidden="true" />
            <span className="label-text">Email</span>
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="label">SMS</span>
          </label>
        </div>
      </div>

      <div className="field field-button">
        <button className="button button-primary" type="button">
          Enviar mensaje
        </button>
      </div>
    </form>
  </div>
);

const TablesSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Layouts</p>
      <h2 className="text-2xl font-semibold text-slate-900">Tables</h2>
      <p className="text-slate-600">Tablas responsivas con contenedor scrollable y variantes bordeadas.</p>
    </header>

    <div className="table-container table-shadow">
      <table className="table is-bordered">
        <thead className="has-background">
          <tr>
            <th>Nombre</th>
            <th>Rol</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Isabel Duarte</td>
            <td>Product Designer</td>
            <td><span className="state is-success">Activo</span></td>
          </tr>
          <tr>
            <td>Lucas Ríos</td>
            <td>Frontend</td>
            <td><span className="state is-warning">Pendiente</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);

const NavbarSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Layouts</p>
      <h2 className="text-2xl font-semibold text-slate-900">Navbar</h2>
      <p className="text-slate-600">Ejemplo de navegación con logo, menú y botones secundarios.</p>
    </header>

    <nav className="navbar is-filled">
      <div className="logo">
        <a className="text-primary-700 font-semibold text-xl" href="#">
          Not Idea UI
        </a>
      </div>
      <div className="menu enter-right">
        <a className="nav-link is-active" href="#">
          Inicio
        </a>
        <a className="nav-link" href="#">
          Componentes
        </a>
        <div className="has-submenu">
          <button className="nav-link" type="button">
            Recursos ▾
          </button>
          <ul className="submenu">
            <li>
              <a className="nav-link" href="#">
                Figma kit
              </a>
            </li>
            <li>
              <a className="nav-link" href="#">
                Changelog
              </a>
            </li>
          </ul>
        </div>
        <a className="nav-link" href="#">
          Blog
        </a>
      </div>
      <div className="burger-menu">☰</div>
    </nav>
  </div>
);

const SidebarSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Layouts</p>
      <h2 className="text-2xl font-semibold text-slate-900">Sidebar</h2>
      <p className="text-slate-600">Menú lateral con submenús y variantes coloreadas.</p>
    </header>

    <aside className="sidebar is-primary">
      <div className="sidebar-head">
        <h4>Panel</h4>
        <span className="close-sidebar">×</span>
      </div>
      <nav>
        <ul className="sidebar-nav">
          <li>
            <a className="sidebar-item is-active" href="#">
              Dashboard
            </a>
          </li>
          <li className="has-submenu">
            <button className="sidebar-item" type="button">
              Componentes
            </button>
            <ul className="sidebar-submenu">
              <li>
                <a className="sidebar-item" href="#">
                  Buttons
                </a>
              </li>
              <li>
                <a className="sidebar-item" href="#">
                  Cards
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a className="sidebar-item" href="#">
              Ajustes
            </a>
          </li>
        </ul>
      </nav>
      <footer className="sidebar-foot">
        <button className="button button-secondary-outline" type="button">
          Cerrar sesión
        </button>
      </footer>
    </aside>
  </div>
);

const FooterSection = () => (
  <div className="content-card space-y-6">
    <header className="space-y-2">
      <p className="text-sm uppercase tracking-wide text-slate-500">Layouts</p>
      <h2 className="text-2xl font-semibold text-slate-900">Footer</h2>
      <p className="text-slate-600">Footer dividido en top/bottom con menús y enlaces sociales.</p>
    </header>

    <footer className="footer">
      <div className="footer-top">
        <div className="footer-item">
          <h4 className="text-white text-lg font-semibold">Not Idea UI</h4>
          <p className="text-slate-100">Tailwind-first component framework con theming por CSS variables.</p>
        </div>
        <div className="footer-item has-menu">
          <span className="text-white font-semibold">Recursos</span>
          <div className="footer-menu">
            <a href="#">Docs</a>
            <a href="#">Playground</a>
            <a href="#">Changelog</a>
          </div>
        </div>
        <div className="footer-item has-media">
          <span className="text-white font-semibold">Social</span>
          <div className="social-media">
            <a href="#" aria-label="Github">
              GitHub
            </a>
            <a href="#" aria-label="Twitter">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom flex flex-wrap items-center justify-between">
        <p className="copyright">© {new Date().getFullYear()} Not Idea UI. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
);

export const componentSections: Section[] = [
  { id: "buttons", label: "Buttons", render: () => <ButtonsDemo /> },
  { id: "badges", label: "Badges", render: () => <BadgesDemo /> },
  { id: "alerts", label: "Alerts", render: () => <AlertsDemo /> },
  { id: "accordions", label: "Accordions", render: () => <AccordionsSection /> },
  { id: "breadcrumbs", label: "Breadcrumbs", render: () => <BreadcrumbsSection /> },
  { id: "cards", label: "Cards", render: () => <CardsSection /> },
  { id: "carousel", label: "Carousel", render: () => <CarouselSection /> },
  { id: "comments", label: "Comments", render: () => <CommentsSection /> },
  { id: "dropdowns", label: "Dropdowns", render: () => <DropdownSection /> },
  { id: "gallery", label: "Gallery", render: () => <GallerySection /> },
  { id: "images", label: "Images", render: () => <ImagesSection /> },
  { id: "lists", label: "Lists", render: () => <ListsSection /> },
  { id: "modal", label: "Modal", render: () => <ModalSection /> },
  { id: "pagination", label: "Pagination", render: () => <PaginationSection /> },
  { id: "progress", label: "Progress", render: () => <ProgressSection /> },
  { id: "tabs", label: "Tabs", render: () => <TabsSection /> },
  { id: "tooltips", label: "Tooltips", render: () => <TooltipsSection /> },
  { id: "forms", label: "Forms", render: () => <FormsSection /> },
  { id: "tables", label: "Tables", render: () => <TablesSection /> },
  { id: "navbar", label: "Navbar", render: () => <NavbarSection /> },
  { id: "sidebar", label: "Sidebar", render: () => <SidebarSection /> },
  { id: "footer", label: "Footer", render: () => <FooterSection /> }
];

export function ComponentsCatalog() {
  const { componentId } = useParams();
  const sectionIds = useMemo(() => componentSections.map((section) => section.id), []);
  const fallbackId = componentSections[0]?.id ?? "buttons";
  const activeId = sectionIds.includes(componentId ?? "") ? (componentId as string) : fallbackId;

  useEffect(() => {
    const target = document.getElementById(activeId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [activeId]);

  return (
    <div className="space-y-10 pb-16">
      {componentSections.map(({ id, render }) => (
        <section key={id} id={id} className="scroll-mt-28">
          {render()}
        </section>
      ))}
    </div>
  );
}

export default ComponentsCatalog;
