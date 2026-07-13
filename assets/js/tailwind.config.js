// Shared Tailwind (Play CDN) configuration for every page on atusell.com.
// Loaded right after cdn.tailwindcss.com so the same theme applies site-wide.
tailwind.config = {
  theme: {
    extend: {
      colors: {
        navy: '#04162c', 'navy-hover': '#02172a',
        gold: '#A68966', 'gold-hover': '#e2c19b',
        cream: '#F9F8F6', ink: '#1a1c1b', slate: '#4A5D73',
        sec: '#44474d', muted: '#74777e', line: '#E2E2E2', band: '#f4f3f1', onnavy: '#b6c7e5'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Hanken Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: { card: '0 4px 12px rgba(26,43,66,0.05)' },
      maxWidth: { container: '1140px' }
    }
  }
};
