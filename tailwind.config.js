const colors = require('tailwindcss/colors')

module.exports = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
            },
            colors: {
                green: colors.emerald,
                background: 'rgb(var(--background) / <alpha-value>)',
                'surface-0': 'rgb(var(--surface-0) / <alpha-value>)',
                card: 'rgb(var(--card) / <alpha-value>)',
                'surface-2': 'rgb(var(--surface-2) / <alpha-value>)',
                muted: 'rgb(var(--muted) / <alpha-value>)',
                secondary: 'rgb(var(--secondary) / <alpha-value>)',
                primary: 'rgb(var(--primary) / <alpha-value>)',
                foreground: 'rgb(var(--foreground) / <alpha-value>)',
                focused: 'rgb(var(--focused) / <alpha-value>)',
                accent: 'rgb(var(--accent) / <alpha-value>)',
                'accent-hover': 'rgb(var(--accent-hover) / <alpha-value>)',
                danger: 'rgb(var(--danger) / <alpha-value>)',
                success: 'rgb(var(--success) / <alpha-value>)',
                warning: 'rgb(var(--warning) / <alpha-value>)',
            },
            borderRadius: {
                'sm': '6px',
                'md': '8px',
                'lg': '12px',
                'xl': '16px',
            },
            boxShadow: {
                'glass': '0 4px 12px rgba(0, 0, 0, 0.08)',
                'glass-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
                'glow': '0 0 20px rgba(99, 102, 241, 0.15)',
            },
            animation: {
                'fadein': 'fadein 0.4s ease-out forwards',
                'slideup': 'slideup 0.4s ease-out forwards',
                'float': 'aurora-float 20s ease-in-out infinite',
            },
            keyframes: {
                fadein: {
                    'from': { opacity: '0', transform: 'translateY(8px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                slideup: {
                    'from': { opacity: '0', transform: 'translateY(20px)' },
                    'to': { opacity: '1', transform: 'translateY(0)' },
                },
                'aurora-float': {
                    '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
                    '25%': { transform: 'translate(30px, -20px) scale(1.05)' },
                    '50%': { transform: 'translate(-20px, 30px) scale(0.95)' },
                    '75%': { transform: 'translate(10px, 10px) scale(1.02)' },
                },
            },
            width: {
                '16': '4rem',
            }
        }
    },
    content: [
        './views/*.tpl.html',
    ],
    safelist: [
        'newsbox-default',
        'newsbox-warning',
        'newsbox-danger',
        'leaderboard-self',
        'leaderboard-default',
        'leaderboard-gold',
        'leaderboard-silver',
        'leaderboard-bronze',
        'glass-card',
        'glass-nav',
        'glass-input',
        'aurora-bg',
        'bento-card',
        'kpi-card',
        'animate-fadein',
        'animate-slideup',
    ]
}
