import { useEffect, useMemo, useState } from "react";

type ThemeKey = "default" | "aurora" | "sunset";

type ThemeDefinition = {
  label: string;
  description: string;
  variables: Record<string, string>;
};

const THEMES: Record<ThemeKey, ThemeDefinition> = {
  default: {
    label: "Default",
    description: "Use package defaults",
    variables: {}
  },
  aurora: {
    label: "Aurora",
    description: "Cool blues and teals",
    variables: {
      "--color-primary-500": "#2563eb",
      "--color-primary-700": "#1d4ed8",
      "--color-primary-800": "#1e40af",
      "--color-secondary-500": "#06b6d4",
      "--color-tertiary-500": "#7c3aed",
      "--font-sans": '"Manrope", "Inter", system-ui, sans-serif'
    }
  },
  sunset: {
    label: "Sunset",
    description: "Warm oranges and reds",
    variables: {
      "--color-primary-500": "#f97316",
      "--color-primary-700": "#ea580c",
      "--color-primary-800": "#c2410c",
      "--color-secondary-500": "#ec4899",
      "--color-tertiary-500": "#facc15",
      "--font-sans": '"Poppins", "Inter", system-ui, sans-serif'
    }
  }
};

const THEME_BUTTON_STYLES: Record<ThemeKey, { active: string; idle: string }> = {
  default: { active: "button button-primary", idle: "button button-primary-outline" },
  aurora: { active: "button button-secondary", idle: "button button-secondary-outline" },
  sunset: { active: "button button-tertiary", idle: "button button-tertiary-outline" }
};

const ALL_VARIABLE_KEYS = Array.from(
  new Set(
    Object.values(THEMES)
      .map((theme) => Object.keys(theme.variables))
      .flat()
  )
);

function applyThemeVariables(themeKey: ThemeKey) {
  const theme = THEMES[themeKey];
  const root = document.documentElement;

  root.dataset.niuTheme = themeKey;

  for (const key of ALL_VARIABLE_KEYS) {
    const value = theme.variables[key];
    if (value) {
      root.style.setProperty(key, value);
    } else {
      root.style.removeProperty(key);
    }
  }
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeKey>("default");

  useEffect(() => {
    applyThemeVariables(theme);
  }, [theme]);

  const themeEntries = useMemo(() => Object.entries(THEMES) as [ThemeKey, ThemeDefinition][], []);

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm text-slate-600">Theme</span>
      <div className="flex gap-2 flex-wrap">
        {themeEntries.map(([key, value]) => (
          <button
            key={key}
            type="button"
            className={`${
              theme === key ? THEME_BUTTON_STYLES[key].active : THEME_BUTTON_STYLES[key].idle
            } text-sm`}
            onClick={() => setTheme(key)}
            aria-pressed={theme === key}
            title={value.description}
          >
            {value.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default ThemeSwitcher;
