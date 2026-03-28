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
            en: 'This parameter affects the heuristic based on which a series of consecutive heartbeats sent by your IDE are aggregated to total coding time. Please see the <i>"How are durations calculated?"</i> section in our <a class="link" href="https://github.com/muety/wakapi?tab=readme-ov-file#-faqs" rel="noreferrer noopener" target="_blank">FAQs</a> as well as the discussion in <a class="link" href="https://github.com/muety/wakapi/issues/156" rel="noreferrer noopener" target="_blank">#156</a>.',
            zh: '该参数会影响 Wakapi 将 IDE 连续发送的一组 heartbeat 聚合为总编码时长时所采用的启发式规则。请参阅 FAQ 中的 <i>“如何计算时长？”</i> 一节，以及 <a class="link" href="https://github.com/muety/wakapi?tab=readme-ov-file#-faqs" rel="noreferrer noopener" target="_blank">FAQs</a> 和 <a class="link" href="https://github.com/muety/wakapi/issues/156" rel="noreferrer noopener" target="_blank">#156</a> 中的讨论。'
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
    }

    function shouldTranslateNode(node) {
        if (node.nodeType !== Node.ELEMENT_NODE) return false;
        return (
            node.hasAttribute('data-i18n') ||
            node.hasAttribute('data-i18n-html') ||
            node.hasAttribute('data-i18n-placeholder') ||
            node.hasAttribute('data-i18n-title') ||
            node.querySelector('[data-i18n], [data-i18n-html], [data-i18n-placeholder], [data-i18n-title]')
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
            attributeFilter: ['data-i18n', 'data-i18n-html', 'data-i18n-placeholder', 'data-i18n-title'],
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
