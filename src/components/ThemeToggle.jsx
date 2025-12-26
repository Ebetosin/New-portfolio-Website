import React, { useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 
        (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    } catch (e) {
      return 'light'
    }
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    console.debug('[ThemeToggle] applied theme:', theme)
    try { localStorage.setItem('theme', theme) } catch (e) {}
  }, [theme])

  function toggle() {
    setTheme((t) => t === 'dark' ? 'light' : 'dark')
  }

  return (
    <button
      aria-label="Toggle color theme"
      title="Toggle color theme"
      onClick={toggle}
      className="btn ghost theme-toggle"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  )
}

export default ThemeToggle
