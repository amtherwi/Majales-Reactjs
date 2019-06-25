const navigationConfig = [
    {
        'id'      : 'dashboards',
        'title'   : 'الصفحة الرئيسية',
        'type'    : 'item',
        'icon'    : 'home',
        'url'  : '/example'
    },
    {
        'id'      : 'admin-application',
        'title'   : 'ادارة نظام مجالس',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'      : 'board',
                'title'   : 'مجالس',
                'type'    : 'collapse',
                'icon'    : 'account_balance',
                'children': [
                    {
                        'id'   : 'view-boards',
                        'title': 'عرض المجالس',
                        'type' : 'item',
                        'url'  : '/admin/board/all'
                    },
                    {
                        'id'   : 'add-board',
                        'title': 'إضافة مجلس',
                        'type' : 'item',
                        'url'  : '/admin/board/add'
                    }
                ]
            },
            {
                'id'      : 'member',
                'title'   : 'الأعضاء',
                'type'    : 'collapse',
                'icon'    : 'person_outline',
                'children': [
                    {
                        'id'   : 'view-members',
                        'title': 'عرض الأعضاء',
                        'type' : 'item',
                        'url'  : '/admin/member/all'
                    },
                    {
                        'id'   : 'add-member',
                        'title': 'إضافة عضو',
                        'type' : 'item',
                        'url'  : '/admin/member/add'
                    }
                ]
            },
            {
                'id'      : 'category',
                'title'   : 'التصنيفات',
                'type'    : 'collapse',
                'icon'    : 'category',
                'children': [
                    {
                        'id'   : 'view-categories',
                        'title': 'عرض التصنيفات',
                        'type' : 'item',
                        'url'  : '/admin/category/all'
                    },
                    {
                        'id'   : 'add-category',
                        'title': 'إضافة تصنيف',
                        'type' : 'item',
                        'url'  : '/admin/category/add'
                    }
                ]
            },
            {
                'id'      : 'logsandreports',
                'title'   : 'التقراير والإحصائات',
                'type'    : 'collapse',
                'icon'    : 'transform',
                'children': [
                    {
                        'id'      : 'logs',
                        'title'   : 'التقراير',
                        'type'    : 'collapse',
                        'icon'    : 'vertical_split',
                        'children': [
                            {
                                'id'   : 'view-system-logs',
                                'title': 'عرض تقارير النظام',
                                'type' : 'item',
                                'url'  : '/admin/logs/system/all'
                            },
                            {
                                'id'   : 'view-board-logs',
                                'title': 'عرض تقارير المجالس',
                                'type' : 'item',
                                'url'  : '/admin/logs/system/add'
                            }
                        ]
                    },
                    {
                        'id'   : 'view-stat',
                        'title': 'عرض الاحصائات',
                        'type' : 'item',
                        'url'  : '/admin/stat/all'
                    }
                ]
            }
        ]
    },
    {
        'id'      : 'application',
        'title'   : 'نظام مجالس',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'      : 'myboards',
                'title'   : 'المجالس',
                'type'    : 'item',
                'icon'    : 'accessibility',
                'url'  : '/roles'
            },
            {
                'id'      : 'myrequests',
                'title'   : 'القرارات',
                'type'    : 'item',
                'icon'    : 'cast',
                'url'  : '/requests'
            },
            {
                'id'      : 'guides',
                'title'   : 'دليل المستخدم',
                'type'    : 'collapse',
                'icon'    : 'help_outline',
                'children': [
                    {
                        'id'   : 'member-user-guide',
                        'title': 'عرض المجالس',
                        'type' : 'item',
                        'url'  : '/guide/member'
                    },
                    {
                        'id'   : 'chair-user-guide',
                        'title': ' دليل المستخدم للامين والسكرتير',
                        'type' : 'item',
                        'url'  : '/guide/chair'
                    }
                ]
            },
            {
                'id'      : 'profile',
                'title'   : 'الملف الشخصي',
                'type'    : 'collapse',
                'icon'    : 'person',
                'children': [
                    {
                        'id'   : 'view-profile',
                        'title': 'عرض الملف الشخصي',
                        'type' : 'item',
                        'url'  : '/profile/view'
                    },
                    {
                        'id'   : 'edit-profile',
                        'title': 'تعديل الملف الشخصي',
                        'type' : 'item',
                        'url'  : '/profile/edit'
                    }
                ]
            }
        ]
    }
];

export default navigationConfig;
