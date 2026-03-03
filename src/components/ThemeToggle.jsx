import { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    try {
      const storedTheme = localStorage.getItem('theme')
      if (storedTheme) {
        return storedTheme
      }

      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    } catch {
      // Fall back to light mode when localStorage is unavailable.
    }

    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Ignore storage failures.
    }
  }, [theme])

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={() => setTheme((current) => (current === 'dark' ? 'light' : 'dark'))}
      className="btn ghost theme-toggle"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  )
}

export default ThemeToggle
