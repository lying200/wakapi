/**
 * Wakapi i18n System
 * Lightweight client-side internationalization for Chinese/English switching.
 * Translates only static UI text (not dynamic backend data).
 */
(function () {
    'use strict';

    const LANG_KEY = 'wakapi_lang';
    const DEFAULT_LANG = 'en';

    const translations = {
        // Navigation
        'nav.dashboard': { en: 'Dashboard', zh: '仪表盘' },
        'nav.leaderboard': { en: 'Leaderboard', zh: '排行榜' },
        'nav.projects': { en: 'Projects', zh: '项目' },
        'nav.resources': { en: 'Resources', zh: '资源' },
        'nav.settings': { en: 'Settings', zh: '设置' },
        'nav.logout': { en: 'Logout', zh: '退出登录' },
        'nav.show_api_key': { en: 'Show API Key', zh: '显示 API 密钥' },
        'nav.invite_friend': { en: 'Invite Friend', zh: '邀请好友' },
        'nav.api_key': { en: 'API Key', zh: 'API 密钥' },

        // Resources submenu
        'res.github': { en: 'GitHub', zh: 'GitHub' },
        'res.initial_setup': { en: 'Initial setup', zh: '初始设置' },
        'res.api_docs': { en: 'API Docs', zh: 'API 文档' },
        'res.wakatime': { en: 'WakaTime', zh: 'WakaTime' },
        'res.donate': { en: 'Donate', zh: '捐赠' },

        // Landing page
        'landing.title_1': { en: 'Keep Track of', zh: '追踪记录' },
        'landing.title_2': { en: 'Your', zh: '你的' },
        'landing.title_3': { en: 'Coding Time', zh: '编程时间' },
        'landing.subtitle': {
            en: 'Wakapi is an open-source tool that helps you keep track of the time you have spent coding on different projects in different programming languages and more. Ideal for statistics freaks and anyone else.',
            zh: 'Wakapi 是一个开源工具，帮助你追踪在不同项目、不同编程语言上花费的编码时间。非常适合数据爱好者和所有开发者。'
        },
        'landing.lets_go': { en: "Let's Go!", zh: '开始使用！' },
        'landing.get_your_own': { en: 'Get Your Own', zh: '自行部署' },
        'landing.support_us': { en: 'Support Us', zh: '支持我们' },
        'landing.hours_coding': { en: 'hours of coding from', zh: '小时编码来自' },
        'landing.users': { en: 'users.', zh: '位用户。' },
        'landing.currently_active': { en: 'currently active users', zh: '位当前活跃用户' },
        'landing.features': { en: 'Features', zh: '特性' },
        'landing.feature_1': { en: '100 % free and open-source', zh: '100% 免费开源' },
        'landing.feature_2': { en: 'Built by developers for developers', zh: '由开发者为开发者打造' },
        'landing.feature_3': { en: 'Fancy statistics and plots', zh: '精美的统计信息和图表' },
        'landing.feature_4': { en: 'Public leaderboards', zh: '公开排行榜' },
        'landing.feature_5': { en: 'Cool badges for readmes', zh: '炫酷的自述文件徽章' },
        'landing.feature_6': { en: 'Weekly e-mail reports', zh: '每周邮件报告' },
        'landing.feature_7': { en: 'Intuitive REST API', zh: '直观的 REST API' },
        'landing.feature_8': { en: 'Compatible with', zh: '兼容' },
        'landing.feature_9': { en: 'metrics', zh: '监控指标' },
        'landing.feature_10': { en: 'Lightning fast', zh: '极速响应' },
        'landing.feature_11': { en: 'GDPR-compliant', zh: '符合 GDPR' },
        'landing.feature_12': { en: 'Self-hosted', zh: '可自托管' },

        // Login page
        'login.welcome': { en: 'Welcome!', zh: '欢迎！' },
        'login.subtitle': { en: 'Log in to continue using Wakapi.', zh: '登录以继续使用 Wakapi。' },
        'login.first_time': { en: 'First time? Check out the', zh: '第一次来？查看' },
        'login.setup_instructions': { en: 'setup instructions', zh: '设置说明' },
        'login.local_signon': { en: 'Local Sign-On', zh: '本地登录' },
        'login.username': { en: 'Username', zh: '用户名' },
        'login.password': { en: 'Password', zh: '密码' },
        'login.forgot_password': { en: 'Forgot password?', zh: '忘记密码？' },
        'login.signup': { en: 'Sign up', zh: '注册' },
        'login.login': { en: 'Log in', zh: '登录' },
        'login.webauthn': { en: 'WebAuthn Login', zh: 'WebAuthn 登录' },
        'login.passkey': { en: 'Login with passkey', zh: '使用通行密钥登录' },
        'login.sso': { en: 'Single Sign-On', zh: '单点登录' },

        // Signup page
        'signup.title': { en: 'Sign up to Wakapi', zh: '注册 Wakapi' },
        'signup.choose_username': { en: 'Choose a username', zh: '选择用户名' },
        'signup.email': { en: 'Your e-mail address', zh: '你的邮箱地址' },
        'signup.email_hint': { en: 'E-Mail address is optional, but required for some weekly reports and password reset.', zh: '邮箱地址为可选项，但每周报告和密码重置需要邮箱。' },
        'signup.choose_password': { en: 'Choose a password', zh: '选择密码' },
        'signup.confirm_password': { en: 'And again...', zh: '再次输入...' },
        'signup.create_account': { en: 'Create Account', zh: '创建账户' },

        // Summary / Dashboard
        'summary.total_time': { en: 'Total Time', zh: '总时间' },
        'summary.total_heartbeats': { en: 'Total Heartbeats', zh: '总心跳数' },
        'summary.top_project': { en: 'Top Project', zh: '最多项目' },
        'summary.top_language': { en: 'Top Language', zh: '最多语言' },
        'summary.top_os': { en: 'Top OS', zh: '最多系统' },
        'summary.top_editor': { en: 'Top Editor', zh: '最多编辑器' },
        'summary.projects': { en: 'Projects', zh: '项目' },
        'summary.branches': { en: 'Branches', zh: '分支' },
        'summary.languages': { en: 'Languages', zh: '语言' },
        'summary.editors': { en: 'Editors', zh: '编辑器' },
        'summary.operating_systems': { en: 'Operating Systems', zh: '操作系统' },
        'summary.machines': { en: 'Machines', zh: '机器' },
        'summary.labels': { en: 'Labels', zh: '标签' },
        'summary.files': { en: 'Files', zh: '文件' },
        'summary.categories': { en: 'Categories', zh: '分类' },
        'summary.timeline': { en: 'Timeline', zh: '时间线' },
        'summary.hourly_breakdown': { en: 'Hourly Breakdown', zh: '每小时统计' },
        'summary.activity': { en: 'Activity', zh: '活动' },
        'summary.no_data': { en: 'No data', zh: '暂无数据' },
        'summary.loading_activity': { en: 'Loading activity chart ...', zh: '加载活动图表中...' },

        // Projects page
        'projects.title': { en: 'Your Projects', zh: '你的项目' },
        'projects.description': {
            en: 'This is an overview of all your projects, ordered by recent activity.',
            zh: '这是你所有项目的概览，按最近活动时间排序。'
        },
        'projects.search': { en: 'Search projects...', zh: '搜索项目...' },
        'projects.search_btn': { en: 'Search', zh: '搜索' },
        'projects.clear': { en: 'Clear', zh: '清除' },
        'projects.previous': { en: 'Previous', zh: '上一页' },
        'projects.next': { en: 'Next', zh: '下一页' },

        // Leaderboard
        'leaderboard.title': { en: 'Leaderboard', zh: '排行榜' },
        'leaderboard.total': { en: 'Total', zh: '总计' },
        'leaderboard.by_language': { en: 'By Language', zh: '按语言' },
        'leaderboard.empty': { en: 'The leaderboard is currently empty ...', zh: '排行榜目前为空...' },
        'leaderboard.last_updated': { en: 'Last Updated:', zh: '最后更新：' },

        // Footer
        'footer.made_with': { en: 'Made with', zh: '用' },
        'footer.by': { en: 'by', zh: '制作 ·' },
        'footer.open_source': { en: 'Open source on', zh: '开源于' },
        'footer.hosted_in': { en: 'Hosted securely in', zh: '安全托管于' },
        'footer.imprint': { en: 'Imprint, Cookies & Data Privacy', zh: '版权信息、Cookie 与隐私政策' },

        // Theme & Language toggles
        'toggle.theme': { en: 'Toggle theme', zh: '切换主题' },
        'toggle.lang': { en: '中文', zh: 'EN' },

        // Common
        'common.top': { en: 'Top', zh: '前' },
        'common.of': { en: 'of', zh: '共' },
        'common.welcome': { en: 'Welcome to Wakapi!', zh: '欢迎来到 Wakapi！' },
    };

    function getLang() {
        const stored = localStorage.getItem(LANG_KEY);
        if (stored === 'en' || stored === 'zh') return stored;
        // Auto-detect from browser
        const browserLang = navigator.language || navigator.userLanguage || '';
        return browserLang.startsWith('zh') ? 'zh' : DEFAULT_LANG;
    }

    function t(key) {
        const entry = translations[key];
        if (!entry) return key;
        const lang = getLang();
        return entry[lang] || entry[DEFAULT_LANG] || key;
    }

    function applyTranslations() {
        const lang = getLang();
        document.documentElement.setAttribute('lang', lang);

        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            const key = el.getAttribute('data-i18n');
            const translated = t(key);
            if (translated !== key) {
                el.textContent = translated;
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-placeholder');
            const translated = t(key);
            if (translated !== key) {
                el.setAttribute('placeholder', translated);
            }
        });

        document.querySelectorAll('[data-i18n-title]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-title');
            const translated = t(key);
            if (translated !== key) {
                el.setAttribute('title', translated);
            }
        });
    }

    function setLang(lang) {
        localStorage.setItem(LANG_KEY, lang);
        applyTranslations();
    }

    window.toggleLang = function () {
        const current = getLang();
        setLang(current === 'en' ? 'zh' : 'en');
    };

    window.t = t;
    window.getLang = getLang;

    // Apply translations on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', applyTranslations);
    } else {
        applyTranslations();
    }
})();
