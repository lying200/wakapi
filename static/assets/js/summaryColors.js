// Colors extracted from reference infographic
// #1: clean warm gray, #2: contrast neutral (white/black)
// Red tones pushed down to avoid overwhelming.

const baseColorsLight = [
    '#35513a',
    '#89a56a',
    '#c47c38',
    '#D4A76A',
    '#F2C46D',
    '#E0734A',
    '#E84527',
    '#F5DEB3',
    '#C23018',
    '#A8A29E',
    '#8B2500',
    '#E8622A',
    '#A03A12',
    '#6B1D0E',
    '#FFF5E1',
];

const baseColorsDark = [
    '#397e44',
    '#cde3ca',
    '#9CAB84',
    '#89986D',
    '#F2C46D',
    '#E0734A',
    '#E84527',
    '#F5DEB3',
    '#C23018',
    '#D6D3D1',
    '#E8622A',
    '#A03A12',
    '#FFF5E1',
    '#8B2500',
    '#D4A76A',
];

// Theme-aware getter
function getBaseColors() {
    const isLight = document.documentElement.classList.contains('light');
    return isLight ? baseColorsLight : baseColorsDark;
}

// Backward compat — default to dark
const baseColors = baseColorsDark;
