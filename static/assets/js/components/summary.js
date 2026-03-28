document.addEventListener('DOMContentLoaded', function () {
    PetiteVue.createApp({
        $delimiters: ['${', '}'],
        activityChartSvg: '',
        get currentInterval() {
            const urlParams = new URLSearchParams(window.location.search)
            if (urlParams.has('interval')) return urlParams.get('interval')
            if (!urlParams.has('from') && !urlParams.has('to')) return 'today'
            return null
        },
        fetchActivityChart(userId) {
            const isDark = !document.documentElement.classList.contains('light');
            const themeParam = isDark ? 'dark' : 'light';
            fetch(`api/activity/chart/${userId}.svg?${themeParam}&noattr`)
                .then(res => res.text())
                .then(data => this.activityChartSvg = data);
        },
        mounted({userId}) {
            this.fetchActivityChart(userId);
            window.addEventListener('themeChanged', () => {
                this.fetchActivityChart(userId);
            });
        }
    }).mount('#summary-page')
})