import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

export type DesignTheme = 'obsidian' | 'vision-pro';

interface ThemeContextType {
  theme: DesignTheme;
  setTheme: (t: DesignTheme) => void;
  toggleTheme: () => void;
  crtHudMode: boolean;
  toggleCrtHudMode: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'obsidian',
  setTheme: () => {},
  toggleTheme: () => {},
  crtHudMode: false,
  toggleCrtHudMode: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme] = useState<DesignTheme>('obsidian');
  const [crtHudMode, setCrtHudMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('cdc_crt_hud_mode') === 'true';
    } catch {
      return false;
    }
  });

  const setTheme = (_t: DesignTheme) => {
    // Dark mode only is enforced
  };

  const toggleTheme = () => {
    // Dark mode only is enforced
  };

  const toggleCrtHudMode = () => {
    setCrtHudMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('cdc_crt_hud_mode', String(next));
      } catch {}
      if (next) {
        document.documentElement.classList.add('crt-mode');
      } else {
        document.documentElement.classList.remove('crt-mode');
      }
      return next;
    });
  };

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark', 'theme-obsidian');
    root.classList.remove('theme-vision-pro');
    if (crtHudMode) {
      root.classList.add('crt-mode');
    } else {
      root.classList.remove('crt-mode');
    }
  }, [crtHudMode]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme, crtHudMode, toggleCrtHudMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

// eslint-disable-next-line react/only-export-components
export function useTheme() {
  return useContext(ThemeContext);
}
