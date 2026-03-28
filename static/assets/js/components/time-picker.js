function TimePicker({ fromDate, toDate, timeSelection }) {
    return {
        $template: '#time-picker-template',
        $delimiters: ['${', '}'],
        state: {
            showDropdownTimepicker: false
        },
        fromDate: fromDate,
        toDate: toDate,
        timeSelection: timeSelection,
        intervalLabel(interval) {
            return window.t ? window.t(`time_picker.${interval}`) : interval
        },
        fieldLabel(field) {
            return window.t ? window.t(`time_picker.${field}`) : field
        },
        applyLabel() {
            return window.t ? window.t('common.apply') : 'Apply'
        },
        intervalLink(interval) {
            const queryParams = new URLSearchParams(window.location.search)
            queryParams.set('interval', interval)
            return `summary?${queryParams.toString()}`
        },
        onDateUpdated() {
            document.getElementById('time-picker-form').submit()
        },
        mounted() {
            window.addEventListener('click', (e) => {
                const skip = findParentAttribute(e.target, 'data-trigger-for')?.value
                Object.keys(this.state).filter(k => k !== skip).forEach(k => this.state[k] = false)
            })

            const query = new URLSearchParams(window.location.search)
            if (query.has('interval')) {
                const interval = query.get('interval')
                this.timeSelection = this.intervalLabel(interval)
            }

            // Time picker keyboard shortcuts
            document.addEventListener('keyup', e => {
                if (e.target !== document.body) return
                const optionEl = document.querySelector(`a[data-hotkey="${e.key}"]`)
                if (optionEl) optionEl.click()
            })
        }
    }
}
