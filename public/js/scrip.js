





    const setup = () => {
    const getTheme = () => {
        if (window.localStorage.getItem('dark')) {
        return JSON.parse(window.localStorage.getItem('dark'))
        }
        return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    }

    const setTheme = (value) => {
        window.localStorage.setItem('dark', value)
    }

    return {
        loading: true,
        isDark: getTheme(),
        toggleTheme() {
        this.isDark = !this.isDark
        setTheme(this.isDark)
        },
        setLightTheme() {
        this.isDark = false
        setTheme(this.isDark)
        },
        setDarkTheme() {
        this.isDark = true
        setTheme(this.isDark)
        },
        watchScreen() {
        if (window.innerWidth <= 1024) {
            this.isSidebarOpen = false
        } else if (window.innerWidth >= 1024) {
            this.isSidebarOpen = true
        }
        },
        isSidebarOpen: window.innerWidth >= 1024 ? true : false,
        toggleSidbarMenu() {
        this.isSidebarOpen = !this.isSidebarOpen
        },
        isNotificationsPanelOpen: false,
        openNotificationsPanel() {
        this.isNotificationsPanelOpen = true
        this.$nextTick(() => {
            this.$refs.notificationsPanel.focus()
        })
        },
        isSettingsPanelOpen: false,
        openSettingsPanel() {
        this.isSettingsPanelOpen = true
        this.$nextTick(() => {
            this.$refs.settingsPanel.focus()
        })
        },
        isSearchPanelOpen: false,
        openSearchPanel() {
        this.isSearchPanelOpen = true
        this.$nextTick(() => {
            this.$refs.searchInput.focus()
        })
        },
    }
    }


<script src="https://cdn.jsdelivr.net/gh/alpine-collective/alpine-magic-helpers@0.6.x/dist/component.min.js"></script>
<script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.0/dist/alpine.min.js" defer></script>
