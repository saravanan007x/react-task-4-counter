function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2v2" />
        <path d="M12 20v2" />
        <path d="M4.93 4.93l1.41 1.41" />
        <path d="M17.66 17.66l1.41 1.41" />
        <path d="M2 12h2" />
        <path d="M20 12h2" />
        <path d="M6.34 17.66l-1.41 1.41" />
        <path d="M19.07 4.93l-1.41 1.41" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path
        d="M20.5 14.5A8.5 8.5 0 1 1 9.5 3.5a7 7 0 0 0 11 11Z"
        fill="currentColor"
      />
    </svg>
  );
}

function ThemeToggle({ isDark, onToggle }) {
  return (
    <div className="theme-toggle">
      <span className="theme-toggle__caption">Current theme</span>

      <button
        type="button"
        className="theme-toggle__button"
        onClick={onToggle}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        aria-pressed={isDark}
      >
        <span className="theme-toggle__icon">
          {isDark ? <SunIcon /> : <MoonIcon />}
        </span>

        <span className="theme-toggle__name">
          {isDark ? "Dark Mode" : "Light Mode"}
        </span>

        <span
          className={`theme-toggle__switch ${
            isDark ? "theme-toggle__switch--on" : ""
          }`}
          aria-hidden="true"
        >
          <span className="theme-toggle__thumb" />
        </span>
      </button>
    </div>
  );
}

export default ThemeToggle;
