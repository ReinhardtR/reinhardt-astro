import { signal } from "@preact/signals";
import { useEffect } from "preact/hooks";

enum ThemeType {
  DARK = "dark",
  LIGHT = "light",
}

const theme = signal<ThemeType>(ThemeType.DARK);

export default function ThemeSwitch() {
  const toggleTheme = () => {
    window.document.documentElement.classList.toggle(ThemeType.DARK);

    theme.value =
      localStorage.getItem("theme") === ThemeType.DARK
        ? ThemeType.LIGHT
        : ThemeType.DARK;

    // Update Storage
    localStorage.setItem("theme", theme.value);
  };

  useEffect(() => {
    if (
      localStorage.getItem("theme") === ThemeType.DARK ||
      (!("theme" in localStorage) &&
        window.matchMedia(`(prefers-color-scheme: ${ThemeType.DARK})`).matches)
    ) {
      window.document.documentElement.classList.add(ThemeType.DARK);
      theme.value = ThemeType.DARK;
    } else {
      window.document.documentElement.classList.remove(ThemeType.DARK);
      theme.value = ThemeType.LIGHT;
    }
  }, []);

  return (
    <button
      aria-label="Toggle Theme"
      type="button"
      class="w-10 h-10 bg-black/10 dark:bg-white/10  rounded-lg flex items-center justify-center group hover:scale-105 transition-all duration-300"
      onClick={toggleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        class="w-5 h-5 text-gray-800 dark:text-gray-200 group-hover:rotate-[360deg] duration-700 transition-all"
      >
        {theme.value === ThemeType.DARK ? (
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={2}
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        ) : (
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        )}
      </svg>
    </button>
  );
}
