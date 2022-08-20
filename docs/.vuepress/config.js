module.exports = {
    title: 'Something-UI',
    base: '/something-ui/',
    themeConfig: {
        displayAllHeaders: true, // 默认值：false
        sidebarDepth: 2,
        collapsable: false,
        nav: [{
            text: 'Home',
            link: '/'
        }, {
            text: 'Github',
            link: 'https://github.com/129021/something-ui'
        }, {
            text: 'NPM',
            link: 'https://www.npmjs.com/package/something-ui'
        }],
        // sidebar: require('./sidebar.js')
        sidebar: [
            'updatelog',
            {
                title: '开发指南',
                path: '/guide/install',
                sidebarDepth: 0, // 可选的, 默认值是 1
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                    '/guide/install',
                    '/guide/handson'
                ]
            }, {
                title: '组件',
                path: '/componentDocs/s-card',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 0, // 可选的, 默认值是 1
                children: [
                    '/componentDocs/s-card',
                    '/componentDocs/s-button',
                    '/componentDocs/Icon',
                    '/componentDocs/Input',
                    '/componentDocs/inputNumber',
                    '/componentDocs/Radio',
                    '/componentDocs/Checkbox',
                    '/componentDocs/Message',
                    '/componentDocs/MessageBox',
                    '/componentDocs/Modal',
                    '/componentDocs/Toast',
                    '/componentDocs/Uploader',
                ]
            } 
        ]
    }
}