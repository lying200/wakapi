/**
 * Wakapi Theme System
 * Linear-style dark-mode-first with light mode toggle.
 * Must load synchronously in <head> to prevent FOUC.
 */
(function () {
    'use strict';

    const THEME_KEY = 'wakapi_theme';
    const DARK = 'dark';
    const LIGHT = 'light';

    function getPreferredTheme() {
        const stored = localStorage.getItem(THEME_KEY);
        if (stored === DARK || stored === LIGHT) return stored;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? LIGHT : DARK;
    }

    function applyTheme(theme) {
        const root = document.documentElement;
        if (theme === LIGHT) {
            root.classList.add('light');
            root.classList.remove('dark');
        } else {
            root.classList.add('dark');
            root.classList.remove('light');
        }
        root.setAttribute('data-theme', theme);
        localStorage.setItem(THEME_KEY, theme);
    }

    // Apply immediately to prevent flash
    applyTheme(getPreferredTheme());

    // Listen for system preference changes
    window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', function (e) {
        if (!localStorage.getItem(THEME_KEY)) {
            applyTheme(e.matches ? LIGHT : DARK);
        }
    });

    // Global toggle function
    window.toggleTheme = function () {
        const current = document.documentElement.getAttribute('data-theme') || DARK;
        applyTheme(current === DARK ? LIGHT : DARK);
    };

    window.getCurrentTheme = function () {
        return document.documentElement.getAttribute('data-theme') || DARK;
    };
})();
