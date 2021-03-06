import i18next from 'i18next';
import en from './navigation-i18n/en';
import tr from './navigation-i18n/tr';
import ar from './navigation-i18n/ar';

i18next.addResourceBundle('en', 'navigation', en);
i18next.addResourceBundle('tr', 'navigation', tr);
i18next.addResourceBundle('ar', 'navigation', ar);

const navigationConfig = [
    {
        'id'      : 'main-nav-bar',
        'title'   : 'القائمة الرئيسية',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
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
                                'url'  : '/admin/majales/all'
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
                                'url'  : '/admin/members/all'
                            },
                            {
                                'id'   : 'add-member',
                                'title': 'إضافة عضو',
                                'type' : 'item',
                                'url'  : '/admin/members/add'
                            }
                        ]
                    },
                    {
                        'id'      : 'majlestypes',
                        'title'   : 'تصنيفات المجالس',
                        'type'    : 'collapse',
                        'icon'    : 'category',
                        'children': [
                            {
                                'id'   : 'view-majlestypes',
                                'title': 'أنواع المجالس',
                                'type' : 'item',
                                'url'  : '/admin/majlestypes',
                                'exact': true
                            },
                            // {
                            //     'id'   : 'view-classifications',
                            //     'title': 'عرض التصنيفات',
                            //     'type' : 'item',
                            //     'url'  : '/admin/majlestypes/classifications',
                            //     'exact': true
                            // },
                            {
                                'id'   : 'new-majlestypes',
                                'title': 'التصنيفات',
                                'type' : 'item',
                                'url'  : '/admin/majlestypes/classifications',
                                'exact': true
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
                        'url'  : '/majalesroles'
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
        ]
    }
];

export default navigationConfig;

