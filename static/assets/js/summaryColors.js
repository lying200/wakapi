// Colors extracted from reference infographic
// #1: clean warm gray, #2: contrast neutral (white/black)
// Red tones pushed down to avoid overwhelming.

const baseColorsLight = [
    '#2a2626', // Warm stone gray (clean, premium)
    '#628141', // Charcoal black (contrast)
    '#c47c38', // Golden amber
    '#D4A76A', // Warm tan
    '#F2C46D', // Soft gold
    '#E0734A', // Salmon terra-cotta
    '#E84527', // Bright red-orange
    '#F5DEB3', // Warm cream/wheat
    '#C23018', // Deep crimson
    '#A8A29E', // Warm silver
    '#8B2500', // Dark burnt sienna
    '#E8622A', // Warm orange
    '#A03A12', // Chestnut
    '#6B1D0E', // Mahogany dark
    '#FFF5E1', // Pale cream
];

const baseColorsDark = [
    '#e3e3e3', // Warm stone silver (clean on dark bg)
    '#3f6539', // Off-white (contrast)
    '#9CAB84', // Golden amber
    '#89986D', // Warm tan
    '#F2C46D', // Soft gold
    '#E0734A', // Salmon terra-cotta
    '#E84527', // Bright red-orange
    '#F5DEB3', // Warm cream/wheat
    '#C23018', // Deep crimson
    '#D6D3D1', // Light warm gray
    '#E8622A', // Warm orange
    '#A03A12', // Chestnut
    '#FFF5E1', // Pale cream
    '#8B2500', // Dark burnt sienna
    '#D4A76A', // Warm tan
];

// Theme-aware getter
function getBaseColors() {
    const isLight = document.documentElement.classList.contains('light');
    return isLight ? baseColorsLight : baseColorsDark;
}

// Backward compat — default to dark
const baseColors = baseColorsDark;
