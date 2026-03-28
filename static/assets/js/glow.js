document.addEventListener('DOMContentLoaded', () => {
    // Attach a single listener to the body for performance
    document.body.addEventListener('mousemove', (e) => {
        // Find if we are hovering over any card that should have the glow effect
        const target = e.target.closest('.bento-card, .kpi-card, .glass-card, .projects-item a');
        
        if (!target) return;
        
        // Calculate mouse position relative to the element
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Set variables to be picked up by CSS
        target.style.setProperty('--mouse-x', `${x}px`);
        target.style.setProperty('--mouse-y', `${y}px`);
    });
});
