document.addEventListener('DOMContentLoaded', function () {
    PetiteVue.createApp({
        $delimiters: ['${', '}'],
        activityChartSvg: '',
        formatActivityDate(dateText) {
            if (!window.formatDateValue) return dateText;
            return window.formatDateValue(dateText, 'date');
        },
        formatActivityDuration(durationText) {
            if (!window.getLang || window.getLang() !== 'zh') return durationText;

            const match = durationText.match(/^(\d+)\s+hrs?\s+(\d+)\s+mins?$/i);
            if (!match) return durationText;
            return `${match[1]} 小时 ${match[2]} 分钟`;
        },
        localizeActivityChartSvg(svgText) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(svgText, 'image/svg+xml');
            const svg = doc.querySelector('svg');

            if (!svg) return svgText;

            const width = parseFloat(svg.getAttribute('width') || '0');
            const height = parseFloat(svg.getAttribute('height') || '0');
            if (width > 0 && height > 0) {
                svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
                svg.setAttribute('width', '100%');
                svg.removeAttribute('height');
                svg.setAttribute('preserveAspectRatio', 'xMinYMin meet');
                svg.setAttribute('style', `display:block;width:100%;max-width:${width}px;height:auto;`);
            }

            if (!window.getLang || window.getLang() !== 'zh' || !svgText) {
                return new XMLSerializer().serializeToString(doc);
            }

            const rangeText = svg.querySelector(':scope > text');
            if (rangeText && rangeText.textContent.includes(' to ')) {
                const [from, to] = rangeText.textContent.split(' to ');
                rangeText.textContent = `${this.formatActivityDate(from)} 至 ${this.formatActivityDate(to)}`;
            }

            doc.querySelectorAll('title').forEach((title) => {
                const text = title.textContent || '';
                const match = text.match(/^(.*)\s+on\s+(.+)$/);
                if (!match) return;

                const duration = this.formatActivityDuration(match[1].trim());
                const date = this.formatActivityDate(match[2].trim());
                title.textContent = `${duration} · ${date}`;
            });

            return new XMLSerializer().serializeToString(doc);
        },
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
                .then(data => this.activityChartSvg = this.localizeActivityChartSvg(data));
        },
        mounted({userId}) {
            this.fetchActivityChart(userId);
            window.addEventListener('themeChanged', () => {
                this.fetchActivityChart(userId);
            });
            window.addEventListener('languageChanged', () => {
                this.fetchActivityChart(userId);
            });
        }
    }).mount('#summary-page')
})
