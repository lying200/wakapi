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
        'summary.overview': { en: 'Overview', zh: '概览' },
        'summary.dashboard_subtitle': { en: 'A sharper view of your recent coding patterns.', zh: '更聚焦地查看你最近的编码模式。' },
        'summary.time_window': { en: 'Time Window', zh: '时间范围' },
        'summary.after': { en: 'after', zh: '起始于' },
        'summary.after_title': { en: '(your oldest heartbeat in selected range)', zh: '（所选时间范围内你最早的一次 heartbeat）' },
        'summary.category_info': {
            en: 'After the category chart was introduced as a new feature in March \'24, you will have to run "Settings → Danger Zone → Regenerate Summaries" once to have your categories reflected properly. This may take a few minutes.',
            zh: '分类图表于 2024 年 3 月作为新功能引入后，你需要执行一次“设置 → 危险区域 → 重新生成汇总”，分类数据才能正确显示。这个过程可能需要几分钟。'
        },
        'summary.hourly_info': {
            en: 'Only the last 24 hours within the selected interval are shown in this chart. Use Ctrl + wheel to zoom, hold and click to drag. If there are too many small segments to be displayed, chart remains blank on purpose.',
            zh: '该图表仅显示所选时间范围内最近 24 小时的数据。使用 Ctrl + 滚轮可缩放，按住并拖动可平移。如果细小片段过多而无法清晰展示，图表会有意保持空白。'
        },
        'summary.interval_min_3': { en: 'Only available for intervals >= 3 days', zh: '仅适用于大于等于 3 天的时间范围' },
        'summary.interval_max_30': { en: 'Only available for intervals <= 30 days', zh: '仅适用于小于等于 30 天的时间范围' },
        'summary.tooltip.total_time': { en: 'Total Time', zh: '总时间' },
        'summary.tooltip.click_details': { en: 'Click for details', zh: '点击查看详情' },
        'summary.axis.duration': { en: 'Duration (hh:mm:ss)', zh: '时长（hh:mm:ss）' },
        'summary.axis.date': { en: 'Date', zh: '日期' },
        'summary.axis.time': { en: 'Time', zh: '时间' },
        'summary.axis.projects': { en: 'Projects', zh: '项目' },

        // Summary filters / time picker
        'entity_filter.placeholder': { en: 'Filter by {type} ...', zh: '按{type}筛选...' },
        'entity_filter.type.project': { en: 'Project', zh: '项目' },
        'entity_filter.type.language': { en: 'Language', zh: '语言' },
        'entity_filter.type.machine': { en: 'Machine', zh: '机器' },
        'entity_filter.type.label': { en: 'Label', zh: '标签' },
        'entity_filter.type.category': { en: 'Category', zh: '分类' },
        'time_picker.today': { en: 'Today', zh: '今天' },
        'time_picker.yesterday': { en: 'Yesterday', zh: '昨天' },
        'time_picker.week': { en: 'This Week', zh: '本周' },
        'time_picker.month': { en: 'This Month', zh: '本月' },
        'time_picker.year': { en: 'This Year', zh: '今年' },
        'time_picker.last_7_days': { en: 'Past 7 Days', zh: '过去 7 天' },
        'time_picker.last_30_days': { en: 'Past 30 Days', zh: '过去 30 天' },
        'time_picker.last_6_months': { en: 'Past 6 Months', zh: '过去 6 个月' },
        'time_picker.last_12_months': { en: 'Past 12 Months', zh: '过去 12 个月' },
        'time_picker.any': { en: 'All Time', zh: '全部时间' },
        'time_picker.start': { en: 'Start:', zh: '开始：' },
        'time_picker.end': { en: 'End:', zh: '结束：' },

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
        'projects.empty': { en: 'No project data available, yet... Go start coding! 🤓', zh: '还没有项目数据，先开始编码吧！🤓' },
        'projects.no_match_prefix': { en: 'No projects matching', zh: '没有找到匹配' },
        'projects.no_match_suffix': { en: 'found.', zh: '的项目。' },

        // Leaderboard
        'leaderboard.title': { en: 'Leaderboard', zh: '排行榜' },
        'leaderboard.total': { en: 'Total', zh: '总计' },
        'leaderboard.by_language': { en: 'By Language', zh: '按语言' },
        'leaderboard.empty': { en: 'The leaderboard is currently empty ...', zh: '排行榜目前为空...' },
        'leaderboard.last_updated': { en: 'Last Updated:', zh: '最后更新：' },

        // Footer
        'footer.made_with': { en: 'Made with', zh: '用' },
        'footer.by': { en: 'by', zh: '制作 ·' },
        'footer.ui_polish_by': { en: 'UI polish by', zh: '界面调整：' },
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
        'common.apply': { en: 'Apply', zh: '应用' },
        'common.save': { en: 'Save', zh: '保存' },
        'common.generate': { en: 'Generate', zh: '生成' },
        'common.next': { en: 'Next', zh: '下一步' },
        'common.add': { en: 'Add', zh: '添加' },
        'common.submit': { en: 'Submit', zh: '提交' },
        'common.enabled': { en: 'Enabled', zh: '启用' },
        'common.disabled': { en: 'Disabled', zh: '禁用' },
        'common.yes': { en: 'Yes', zh: '是' },
        'common.no': { en: 'No', zh: '否' },
        'common.name': { en: 'Name', zh: '名称' },
        'common.created': { en: 'Created', zh: '创建时间' },
        'common.last_used': { en: 'Last Used', zh: '最后使用' },
        'common.actions': { en: 'Actions', zh: '操作' },
        'common.never_used': { en: 'Never used', zh: '从未使用' },
        'weekday.sunday': { en: 'Sunday', zh: '周日' },
        'weekday.monday': { en: 'Monday', zh: '周一' },
        'weekday.tuesday': { en: 'Tuesday', zh: '周二' },
        'weekday.wednesday': { en: 'Wednesday', zh: '周三' },
        'weekday.thursday': { en: 'Thursday', zh: '周四' },
        'weekday.friday': { en: 'Friday', zh: '周五' },
        'weekday.saturday': { en: 'Saturday', zh: '周六' },

        // Settings
        'settings.title': { en: 'Settings', zh: '设置' },
        'settings.tab.account': { en: 'Account', zh: '账户' },
        'settings.tab.data': { en: 'Data', zh: '数据' },
        'settings.tab.permissions': { en: 'Permissions', zh: '权限' },
        'settings.tab.integrations': { en: 'Integrations', zh: '集成' },
        'settings.tab.subscription': { en: 'Subscription', zh: '订阅' },
        'settings.tab.api_keys': { en: 'API Keys', zh: 'API 密钥' },
        'settings.tab.danger_zone': { en: 'Danger Zone', zh: '危险区域' },
        'settings.permissions.public_leaderboard.title': { en: 'Public Leaderboard', zh: '公开排行榜' },
        'settings.permissions.public_leaderboard.desc': {
            en: 'Opt in to get listed in the <a class="link" href="leaderboard">public leaderboard</a>. It shows aggregated statistics from the past 7 days of your coding.',
            zh: '启用后，你会出现在<a class="link" href="leaderboard">公开排行榜</a>中。排行榜会展示你过去 7 天编码活动的聚合统计。'
        },
        'settings.permissions.public_leaderboard.label': { en: 'Participate in leaderboard', zh: '参与排行榜' },
        'settings.permissions.public_data.title': { en: 'Public Data', zh: '公开数据' },
        'settings.permissions.public_data.desc': {
            en: 'Some features require public access to your data without authentication. This mainly includes badges ("shields" endpoint) and the integration with GitHub Readme Stats ("stats" endpoint). You can choose which data to share publicly through these endpoints.',
            zh: '某些功能需要在无需认证的情况下公开访问你的数据，主要包括徽章（"shields" endpoint）以及 GitHub Readme Stats 集成（"stats" endpoint）。你可以选择通过这些接口公开哪些数据。'
        },
        'settings.permissions.public_data.time_range.label': { en: 'Time Range', zh: '时间范围' },
        'settings.permissions.public_data.time_range.hint': { en: '(in days; 0 = not public, -1 = unlimited)', zh: '（单位：天；0 = 不公开，-1 = 不限）' },
        'settings.permissions.public_data.share_projects': { en: 'Share Projects', zh: '公开项目' },
        'settings.permissions.public_data.share_languages': { en: 'Share Languages', zh: '公开语言' },
        'settings.permissions.public_data.share_editors': { en: 'Share Editors', zh: '公开编辑器' },
        'settings.permissions.public_data.share_oss': { en: 'Share OS\'', zh: '公开操作系统' },
        'settings.permissions.public_data.share_machines': { en: 'Share Machines', zh: '公开机器' },
        'settings.permissions.public_data.share_labels': { en: 'Share Project Labels', zh: '公开项目标签' },
        'settings.permissions.public_data.share_activity_chart': { en: 'Share Activity Chart', zh: '公开活动图表' },
        'settings.integrations.wakatime.title': { en: 'WakaTime', zh: 'WakaTime' },
        'settings.integrations.wakatime.desc': {
            en: 'You can connect Wakapi with the official WakaTime (or another Wakapi instance, when optionally specifying a custom API URL) in a way that all heartbeats sent to Wakapi are relayed. This way, you can use both services at the same time. To get started, get your API key at WakaTime\'s <a class="link" href="https://wakatime.com/settings/account" rel="noopener noreferrer" target="_blank">account settings</a> and paste it here.<br><br>To forward data to another Wakapi instance, use <span class="text-xs font-mono">https://&lt;your-server&gt;/api/compat/wakatime/v1</span> as a URL.<br><br>Please note: When enabling this feature, the operators of this server will, in theory, have unlimited access to your data stored in WakaTime. If you are concerned about your privacy, please do not enable this integration or wait for OAuth 2 authentication (<a class="link" target="_blank" href="https://github.com/muety/wakapi/issues/94" rel="noopener noreferrer">#94</a>) to be implemented.',
            zh: '你可以把 Wakapi 连接到官方 WakaTime，或者在可选地指定自定义 API URL 后连接到另一个 Wakapi 实例，这样发送到 Wakapi 的所有 heartbeat 都会被转发。这样你可以同时使用两个服务。开始前，请到 WakaTime 的 <a class="link" href="https://wakatime.com/settings/account" rel="noopener noreferrer" target="_blank">账户设置</a> 获取 API key 并粘贴到这里。<br><br>如果要把数据转发到另一个 Wakapi 实例，请使用 <span class="text-xs font-mono">https://&lt;your-server&gt;/api/compat/wakatime/v1</span> 作为 URL。<br><br>请注意：启用此功能后，理论上本服务器的运营者将能无限制访问你存储在 WakaTime 中的数据。如果你担心隐私，请不要启用该集成，或者等待 OAuth 2 认证（<a class="link" target="_blank" href="https://github.com/muety/wakapi/issues/94" rel="noopener noreferrer">#94</a>）实现后再使用。'
        },
        'settings.integrations.wakatime.use_legacy_importer': { en: 'Use legacy importer', zh: '使用旧版导入器' },
        'settings.integrations.wakatime.use_legacy_importer_hint': {
            en: 'If WakaTime import fails repeatedly, you may want to fall back to an older, less efficient importer mechanism',
            zh: '如果 WakaTime 导入持续失败，你可以退回到旧版但效率更低的导入机制'
        },
        'settings.integrations.wakatime.api_key_placeholder': { en: 'WakaTime API key', zh: 'WakaTime API 密钥' },
        'settings.integrations.wakatime.connect': { en: 'Connect', zh: '连接' },
        'settings.integrations.wakatime.import': { en: 'Import Data', zh: '导入数据' },
        'settings.integrations.wakatime.disconnect': { en: 'Disconnect', zh: '断开连接' },
        'settings.integrations.badges.title': { en: 'Badges', zh: '徽章' },
        'settings.integrations.badges.desc': {
            en: 'This integration with allows to generate badges for README pages or forums. To enable this feature, you need to grant public, unauthorized access to the respective endpoints. See <a class="link" href="settings#permissions">Permissions</a>. Adapt the URL\'s <i>label</i> and <i>color</i> parameters for customized badges.<br><br>In addition, there is an endpoint compatible with <a class="link" href="https://shields.io" target="_blank" rel="noreferrer noopener">Shields.IO</a> to allow for even more customization (e.g. different <a class="link" href="https://shields.io/#styles" target="_blank" rel="noreferrer noopener">styles</a>). Only available on public instances, not on localhost.',
            zh: '这个集成可以为 README 页面或论坛生成徽章。要启用该功能，你需要为对应接口授予公开的匿名访问权限。参见 <a class="link" href="settings#permissions">权限</a>。你还可以调整 URL 中的 <i>label</i> 和 <i>color</i> 参数来自定义徽章。<br><br>此外，还提供了一个兼容 <a class="link" href="https://shields.io" target="_blank" rel="noreferrer noopener">Shields.IO</a> 的接口，以支持更多定制（例如不同的 <a class="link" href="https://shields.io/#styles" target="_blank" rel="noreferrer noopener">样式</a>）。该功能仅在公共实例上可用，本地 localhost 不支持。'
        },
        'settings.integrations.readme_stats.title': { en: 'GitHub Readme Stats', zh: 'GitHub Readme Stats' },
        'settings.integrations.readme_stats.desc': {
            en: 'Wakapi intregrates with <a class="link" href="https://github.com/anuraghazra/github-readme-stats#wakatime-week-stats" target="_blank" rel="noreferrer noopener">GitHub Readme Stats</a> to generate fancy cards for you. To enable this feature, you need to grant public, unauthorized access to the respective endpoints. See <a class="link" href="settings#permissions">Permissions</a>.<br><br>Share data for &gt;= 7 days → weekly summary card<br>Share data for &gt;= 366 days → yearly summary card<br>Share all data (-1) → all-time summary card<br><br>Only available on public instances, not on localhost.',
            zh: 'Wakapi 可以与 <a class="link" href="https://github.com/anuraghazra/github-readme-stats#wakatime-week-stats" target="_blank" rel="noreferrer noopener">GitHub Readme Stats</a> 集成，为你生成精美卡片。要启用该功能，你需要为对应接口授予公开的匿名访问权限。参见 <a class="link" href="settings#permissions">权限</a>。<br><br>公开数据范围 &gt;= 7 天 → 周汇总卡片<br>公开数据范围 &gt;= 366 天 → 年度汇总卡片<br>公开全部数据（-1）→ 全时期汇总卡片<br><br>该功能仅在公共实例上可用，本地 localhost 不支持。'
        },
        'settings.integrations.readme_stats.custom_base_url': { en: 'Custom github-readme-stats base URL', zh: '自定义 github-readme-stats 基础 URL' },
        'settings.api_keys.reset_primary.title': { en: 'Reset primary API key', zh: '重置主 API 密钥' },
        'settings.api_keys.reset_primary.desc': {
            en: 'Please note that resetting your API key requires you to update your <code>.wakatime.cfg</code> files on all of your computers to make the WakaTime client send heartbeats again.',
            zh: '请注意，重置 API 密钥后，你需要在所有电脑上的 <code>.wakatime.cfg</code> 文件中更新该密钥，WakaTime 客户端才能继续发送 heartbeat。'
        },
        'settings.api_keys.reset_primary.action': { en: 'Reset API key', zh: '重置 API 密钥' },
        'settings.api_keys.add.title': { en: 'Add API keys', zh: '添加 API 密钥' },
        'settings.api_keys.add.desc': {
            en: 'Besides the primary (aka. <i>main</i>) API key, which always exists, you can create additional API keys for different applications to access Wakapi. You can either grant read-only access or read-write access, which additionally allows to ingest heartbeats.',
            zh: '除了一直存在的主 API 密钥（也就是 <i>main</i>）外，你还可以为不同应用创建额外的 API 密钥来访问 Wakapi。你可以授予只读权限，或授予读写权限，后者还允许写入 heartbeat。'
        },
        'settings.api_keys.add.name_placeholder': { en: 'Key Name', zh: '密钥名称' },
        'settings.api_keys.add.read_write': { en: 'Read / write', zh: '读 / 写' },
        'settings.api_keys.add.read_only': { en: 'Read only', zh: '只读' },
        'settings.api_keys.list.title': { en: 'API Keys', zh: 'API 密钥' },
        'settings.api_keys.table.key': { en: 'Key', zh: '密钥' },
        'settings.api_keys.table.type': { en: 'Type', zh: '类型' },
        'settings.api_keys.list.read_only': { en: 'Read-Only', zh: '只读' },
        'settings.api_keys.list.full_access': { en: 'Full Access', zh: '完全访问' },
        'settings.api_keys.delete_title': { en: 'Delete API Key', zh: '删除 API 密钥' },
        'settings.danger.regenerate.title': { en: 'Regenerate Summaries', zh: '重新生成汇总' },
        'settings.danger.regenerate.desc': {
            en: 'Regenerate all pre-computed summaries from raw heartbeat data. This may be useful if, for some reason, summaries are faulty or preconditions have change (e.g. you modified language mappings retrospectively). This may take some time. Be careful and only run this action if you know, what your are doing, as data loss might occur.',
            zh: '根据原始 heartbeat 数据重新生成所有预计算汇总。如果汇总异常，或前提条件发生了变化，例如你事后修改了语言映射，这会很有用。该过程可能需要一些时间。请谨慎操作，仅在你明确了解影响时执行，因为可能造成数据丢失。'
        },
        'settings.danger.regenerate.action': { en: 'Clear and regenerate', zh: '清空并重新生成' },
        'settings.danger.clear_data.title': { en: 'Clear Data', zh: '清空数据' },
        'settings.danger.clear_data.desc': {
            en: 'Clear all your time tracking data from Wakapi. This cannot be undone. Be careful!',
            zh: '清空你在 Wakapi 中的全部时间追踪数据。此操作无法撤销，请谨慎执行。'
        },
        'settings.danger.clear_data.action': { en: 'Clear data', zh: '清空数据' },
        'settings.danger.change_username.title': { en: 'Change Username', zh: '更改用户名' },
        'settings.danger.change_username.desc': {
            en: 'You can change your username, even though it is not recommended. Afterwards, you will only be able to log in via the new user name. Also, all externally referenced URLs etc. must be updated. This may take up to a few minutes.',
            zh: '你可以更改用户名，但并不推荐。修改后你只能使用新用户名登录，同时所有对外引用的 URL 等也需要更新。这个过程可能需要几分钟。'
        },
        'settings.danger.change_username.placeholder': { en: 'Choose new username ...', zh: '输入新用户名...' },
        'settings.danger.delete_account.title': { en: 'Delete Account', zh: '删除账户' },
        'settings.danger.delete_account.desc': {
            en: 'Deleting your account will cause all data, including all your heartbeats, to be erased from the server immediately. This action is irreversible. Be careful!',
            zh: '删除账户会立即从服务器清除你的全部数据，包括所有 heartbeat。该操作不可恢复，请谨慎执行。'
        },
        'settings.danger.delete_account.action': { en: 'Delete account', zh: '删除账户' },
        'settings.account.timezone.label': { en: 'Time Zone', zh: '时区' },
        'settings.account.timezone.desc': { en: 'Time Zone, which you are located in. Relevant for displaying daily statistics.', zh: '你所在的时区，用于展示每日统计。' },
        'settings.account.start_of_week.label': { en: 'Start of Week', zh: '每周开始日' },
        'settings.account.start_of_week.desc': { en: 'Choose which day your week starts on. This affects "This Week" and "Last Week" intervals.', zh: '选择每周从哪一天开始。这会影响“本周”和“上周”区间。' },
        'settings.account.email.label': { en: 'E-Mail Address', zh: '邮箱地址' },
        'settings.account.email.desc': { en: 'Optional in general, but required for weekly reports and for resetting your password.', zh: '通常为可选项，但每周报告和重置密码需要邮箱。' },
        'settings.account.email.placeholder': { en: 'Enter your e-mail address', zh: '输入你的邮箱地址' },
        'settings.account.weekly_reports.label': { en: 'Weekly E-Mail Reports', zh: '每周邮件报告' },
        'settings.account.weekly_reports.desc': { en: 'Opt in to receive a summary of your coding activity once a week.', zh: '启用后，你每周会收到一份编码活动摘要。' },
        'settings.account.password.current': { en: 'Current Password', zh: '当前密码' },
        'settings.account.password.current_desc': { en: 'Enter your old password for verification.', zh: '输入旧密码以进行验证。' },
        'settings.account.password.old_placeholder': { en: 'Old password', zh: '旧密码' },
        'settings.account.password.new': { en: 'New Password', zh: '新密码' },
        'settings.account.password.new_desc': { en: 'Choose a new password. Preferably, it is at least 8 characters long and contains letters, digits and special chars.', zh: '设置一个新密码。建议至少 8 位，并包含字母、数字和特殊字符。' },
        'settings.account.password.new_placeholder': { en: 'New password', zh: '新密码' },
        'settings.account.password.repeat': { en: 'Repeat Password', zh: '重复密码' },
        'settings.account.password.repeat_desc': { en: 'Once again ...', zh: '再输入一次...' },
        'settings.account.password.repeat_placeholder': { en: 'Repeat your password', zh: '再次输入你的密码' },
        'settings.account.passkeys.title': { en: 'Passkeys', zh: '通行密钥' },
        'settings.account.passkeys.delete_title': { en: 'Delete passkey', zh: '删除通行密钥' },
        'settings.account.passkeys.add_title': { en: 'Add Passkey', zh: '添加通行密钥' },
        'settings.account.passkeys.add_desc': { en: 'Register a new security key or biometric passkey to your account.', zh: '为你的账户注册新的安全密钥或生物识别通行密钥。' },
        'settings.account.passkeys.authenticator_placeholder': { en: 'Authenticator Name', zh: '认证器名称' },
        'settings.account.invites.title': { en: 'Invite Friends', zh: '邀请好友' },
        'settings.account.invites.desc': { en: 'You can invite new users to Wakapi with an exclusive code. Click to generate one and then send the link to your friend. Thanks for spreading Wakapi to the world!', zh: '你可以使用专属邀请码邀请新用户加入 Wakapi。点击生成后，把链接发送给你的朋友。感谢帮助传播 Wakapi。' },
        'settings.account.invites.success': { en: 'Success! Here\'s your invite link:', zh: '成功，下面是你的邀请链接：' },
        'settings.data.unknown_projects.title': { en: 'Unknown Projects', zh: '未知项目' },
        'settings.data.unknown_projects.desc': { en: 'You can choose to exclude and ignore coding stats from unknown projects. Changing this setting will require to recompute your statistics.', zh: '你可以选择排除并忽略来自未知项目的编码统计。修改此设置后需要重新计算统计数据。' },
        'settings.data.unknown_projects.exclude_label': { en: 'Exclude unknown projects', zh: '排除未知项目' },
        'settings.data.aliases.title': { en: 'Aliases', zh: '别名' },
        'settings.data.aliases.desc': { en: 'You can specify aliases for any type of entity. For instance, you can define a rule, that both "myapp-frontend" and "myapp-backend" are combined under a project called "myapp".', zh: '你可以为任意类型的实体设置别名。例如，可以定义一条规则，把 “myapp-frontend” 和 “myapp-backend” 合并到名为 “myapp” 的项目下。' },
        'settings.data.rules': { en: 'Rules', zh: '规则' },
        'settings.data.delete_rule_title': { en: 'Delete rule', zh: '删除规则' },
        'settings.data.add_rule': { en: 'Add Rule', zh: '添加规则' },
        'settings.data.aliases.map': { en: 'Map', zh: '将' },
        'settings.data.aliases.named': { en: 'named', zh: '名称为' },
        'settings.data.aliases.to': { en: 'to', zh: '映射为' },
        'settings.data.aliases.original_name': { en: 'Original name', zh: '原始名称' },
        'settings.data.aliases.replacement': { en: 'Replacement', zh: '替换名称' },
        'settings.data.aliases.wildcard_prefix': { en: 'Wildcard patterns are supported, see', zh: '支持通配符模式，见' },
        'settings.data.here': { en: 'here', zh: '这里' },
        'settings.data.project_labels.title': { en: 'Project Labels', zh: '项目标签' },
        'settings.data.project_labels.desc': { en: 'You can assign labels (aka. tags) to projects to group them together, e.g. by "private" and "work".', zh: '你可以给项目分配标签（也可理解为 tag），用于按 “private” 或 “work” 等方式分组。' },
        'settings.data.project_labels.your_labels': { en: 'Your labels', zh: '你的标签' },
        'settings.data.project_labels.delete_label_title': { en: 'Delete label', zh: '删除标签' },
        'settings.data.project_labels.bulk_association': { en: 'Bulk association', zh: '批量关联' },
        'settings.data.project_labels.bulk_desc': { en: 'Associate a label with multiple projects', zh: '将一个标签关联到多个项目' },
        'settings.data.project_labels.label_placeholder': { en: 'Label', zh: '标签' },
        'settings.data.project_labels.no_projects': { en: 'You don\'t have any projects, yet. Start out by sending a few heartbeats before you can then assign labels.', zh: '你还没有任何项目。先发送一些 heartbeat，之后才能分配标签。' },
        'settings.data.language_mappings.title': { en: 'Language Mappings', zh: '语言映射' },
        'settings.data.language_mappings.desc': { en: 'You can specify custom mapping from file extensions to programming languages, for instance a ".jsx" file could be mapped to the "React" language.', zh: '你可以自定义文件扩展名到编程语言的映射，例如把 “.jsx” 文件映射为 “React” 语言。' },
        'settings.data.language_mappings.when_filename_ends_in': { en: 'When filename ends in', zh: '当文件名以以下后缀结尾时' },
        'settings.data.language_mappings.change_language_to': { en: 'change language to', zh: '将语言改为' },
        'settings.data.heartbeats_timeout.title': { en: 'Heartbeats Timeout', zh: 'Heartbeat 超时' },
        'settings.data.heartbeats_timeout.desc': {
            en: 'This parameter affects the heuristic based on which a series of consecutive heartbeats sent by your IDE are aggregated to total coding time. Please see the <i>"How are durations calculated?"</i> section in our <a class="link" href="https://github.com/lying200/wakapi?tab=readme-ov-file#-faqs" rel="noreferrer noopener" target="_blank">FAQs</a> as well as the discussion in <a class="link" href="https://github.com/muety/wakapi/issues/156" rel="noreferrer noopener" target="_blank">#156</a>.',
            zh: '该参数会影响 Wakapi 将 IDE 连续发送的一组 heartbeat 聚合为总编码时长时所采用的启发式规则。请参阅 FAQ 中的 <i>“如何计算时长？”</i> 一节，以及 <a class="link" href="https://github.com/lying200/wakapi?tab=readme-ov-file#-faqs" rel="noreferrer noopener" target="_blank">FAQs</a> 和 <a class="link" href="https://github.com/muety/wakapi/issues/156" rel="noreferrer noopener" target="_blank">#156</a> 中的讨论。'
        },
        'settings.data.heartbeats_timeout.label': { en: 'Timeout / offset (minutes)', zh: '超时 / 偏移（分钟）' },
        'settings.data.heartbeats_timeout.hint': { en: '(min. 1 min, max. 60 min)', zh: '（最小 1 分钟，最大 60 分钟）' },
        'settings.data.vibrant_colors.title': { en: 'Vibrant Colors', zh: '鲜艳配色' },
        'settings.data.vibrant_colors.desc': { en: 'You can view the entire summary in vibrant colors similar to the "Languages" chart. Note that this setting is saved in your web browser only.', zh: '你可以让整个 Summary 使用类似 “Languages” 图表的鲜艳配色。注意，此设置仅保存在当前浏览器中。' },
        'settings.confirm.change_username': { en: 'Are you sure? This cannot be undone.', zh: '确认继续吗？此操作无法撤销。' },
        'settings.confirm.regenerate': { en: 'Are you sure?', zh: '确认继续吗？' },
        'settings.confirm.wakatime_import': { en: 'Are you sure? The import can not be undone.', zh: '确认继续吗？导入操作无法撤销。' },
        'settings.confirm.clear_data': { en: 'Are you sure? This can not be undone!', zh: '确认继续吗？此操作无法撤销！' },
        'settings.confirm.delete_account': { en: 'Are you sure? This can not be undone!', zh: '确认继续吗？此操作无法撤销！' },
    };

    function getLang() {
        const stored = localStorage.getItem(LANG_KEY);
        if (stored === 'en' || stored === 'zh') return stored;
        // Auto-detect from browser
        const browserLang = navigator.language || navigator.userLanguage || '';
        return browserLang.startsWith('zh') ? 'zh' : DEFAULT_LANG;
    }

    function t(key, params) {
        const entry = translations[key];
        if (!entry) return key;
        const lang = getLang();
        let value = entry[lang] || entry[DEFAULT_LANG] || key;
        if (params && typeof value === 'string') {
            Object.entries(params).forEach(function ([name, replacement]) {
                value = value.replaceAll(`{${name}}`, replacement);
            });
        }
        return value;
    }

    function getLocale() {
        return getLang() === 'zh' ? 'zh-CN' : 'en-US';
    }

    function parseDateValue(value) {
        if (value === null || value === undefined || value === '') return null;

        const stringValue = String(value).trim();
        const dateOnlyMatch = stringValue.match(/^(\d{4})-(\d{2})-(\d{2})$/);
        if (dateOnlyMatch) {
            return new Date(
                Number(dateOnlyMatch[1]),
                Number(dateOnlyMatch[2]) - 1,
                Number(dateOnlyMatch[3])
            );
        }

        const dateTimeMatch = stringValue.match(/^(\d{4})-(\d{2})-(\d{2})[ T](\d{2}):(\d{2})(?::(\d{2}))?$/);
        if (dateTimeMatch) {
            return new Date(
                Number(dateTimeMatch[1]),
                Number(dateTimeMatch[2]) - 1,
                Number(dateTimeMatch[3]),
                Number(dateTimeMatch[4]),
                Number(dateTimeMatch[5]),
                Number(dateTimeMatch[6] || 0)
            );
        }

        const numericValue = Number(stringValue);
        if (!Number.isNaN(numericValue) && stringValue !== '') {
            return new Date(numericValue > 1e12 ? numericValue : numericValue * 1000);
        }

        const date = new Date(stringValue);
        return Number.isNaN(date.getTime()) ? null : date;
    }

    function formatDateValue(value, mode) {
        const date = parseDateValue(value);
        if (!date) return value || '';

        const lang = getLang();
        const locale = getLocale();
        let options;

        switch (mode) {
            case 'datetime':
                options = lang === 'zh'
                    ? { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false }
                    : { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' };
                break;
            case 'datetimetz':
                options = lang === 'zh'
                    ? { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false, timeZoneName: 'short' }
                    : { year: 'numeric', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit', timeZoneName: 'short' };
                break;
            case 'time':
                options = { hour: '2-digit', minute: '2-digit', hour12: false };
                break;
            case 'date':
            default:
                options = lang === 'zh'
                    ? { year: 'numeric', month: '2-digit', day: '2-digit' }
                    : { year: 'numeric', month: 'short', day: '2-digit' };
                break;
        }

        return new Intl.DateTimeFormat(locale, options).format(date);
    }

    function formatDateRange(from, to, mode) {
        return `${formatDateValue(from, mode)} - ${formatDateValue(to, mode)}`;
    }

    function applyLocalizedDates() {
        document.querySelectorAll('[data-localize-date]').forEach(function (el) {
            el.textContent = formatDateValue(el.getAttribute('data-localize-date'), 'date');
        });

        document.querySelectorAll('[data-localize-datetime]').forEach(function (el) {
            el.textContent = formatDateValue(el.getAttribute('data-localize-datetime'), 'datetime');
        });

        document.querySelectorAll('[data-localize-datetimetz]').forEach(function (el) {
            el.textContent = formatDateValue(el.getAttribute('data-localize-datetimetz'), 'datetimetz');
        });

        document.querySelectorAll('[data-localize-range-from][data-localize-range-to]').forEach(function (el) {
            const mode = el.getAttribute('data-localize-range-mode') || 'date';
            el.textContent = formatDateRange(
                el.getAttribute('data-localize-range-from'),
                el.getAttribute('data-localize-range-to'),
                mode
            );
        });
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

        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            const key = el.getAttribute('data-i18n-html');
            const translated = t(key);
            if (translated !== key) {
                el.innerHTML = translated;
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

        applyLocalizedDates();
    }

    function shouldTranslateNode(node) {
        if (node.nodeType !== Node.ELEMENT_NODE) return false;
        return (
            node.hasAttribute('data-i18n') ||
            node.hasAttribute('data-i18n-html') ||
            node.hasAttribute('data-i18n-placeholder') ||
            node.hasAttribute('data-i18n-title') ||
            node.hasAttribute('data-localize-date') ||
            node.hasAttribute('data-localize-datetime') ||
            node.hasAttribute('data-localize-datetimetz') ||
            node.hasAttribute('data-localize-range-from') ||
            node.querySelector('[data-i18n], [data-i18n-html], [data-i18n-placeholder], [data-i18n-title], [data-localize-date], [data-localize-datetime], [data-localize-datetimetz], [data-localize-range-from]')
        );
    }

    function startTranslationObserver() {
        if (!document.body) return;

        let scheduled = false;
        const scheduleTranslations = function () {
            if (scheduled) return;
            scheduled = true;
            requestAnimationFrame(function () {
                scheduled = false;
                applyTranslations();
            });
        };

        const observer = new MutationObserver(function (mutations) {
            const needsTranslation = mutations.some(function (mutation) {
                if (mutation.type === 'attributes') {
                    return true;
                }

                return Array.from(mutation.addedNodes).some(shouldTranslateNode);
            });

            if (needsTranslation) {
                scheduleTranslations();
            }
        });

        observer.observe(document.body, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ['data-i18n', 'data-i18n-html', 'data-i18n-placeholder', 'data-i18n-title', 'data-localize-date', 'data-localize-datetime', 'data-localize-datetimetz', 'data-localize-range-from', 'data-localize-range-to'],
        });
    }

    function setLang(lang) {
        localStorage.setItem(LANG_KEY, lang);
        applyTranslations();
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }

    window.toggleLang = function () {
        const current = getLang();
        setLang(current === 'en' ? 'zh' : 'en');
    };

    window.t = t;
    window.getLang = getLang;
    window.getLocale = getLocale;
    window.formatDateValue = formatDateValue;
    window.formatDateRange = formatDateRange;
    window.applyTranslations = applyTranslations;

    // Apply translations on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function () {
            applyTranslations();
            startTranslationObserver();
        });
    } else {
        applyTranslations();
        startTranslationObserver();
    }
})();
