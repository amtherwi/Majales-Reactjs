
const membersDB = {
    members: [
        {
            'id'        : '1',
            'fname'     : 'مجلس الجمعية العمومية لجمعية المخترعين السعوديين',
            'mname'     : 'اجتماع لمناقشة جدول أعمال جمعية المخترعين السعوديين',
            'lname'     : 'الاربعاء 17 يوليو 2019',
            'avatar'    : 'assets/images/avatars/SaudiAvatar.gif',
            'nid'       : '1054544343',
            'employer'  : 'مفعل',
            'jobTitle'  : 'وكيل الكلية',
            'degree'    : 'استاذ مشارك',
            'email'     : 'ahmed@imamu.edu.sa',
            'phone'     : '0533434423',
            'address'   : ' الرياض، جامعة الامام، كليه اللغة العربية',
            'date'      : new Date(),
            'notes'     : ''
        },
        {
            'id'        : '2',
            'fname'     : 'مجلس قسم أصول التربية',
            'mname'     : '\tمجلس يضم أعضاء هيئة التدريس بقسم أصول التربية لمناقشة الموضوعات المتعلقة بالعمل الأكاديمي والإداري في القسم.',
            'lname'     : 'الثلاثاء 16 يوليو 2019',
            'avatar'    : 'assets/images/avatars/SaudiAvatar.gif',
            'nid'       : '1054544343',
            'employer'  : 'غير مفعل ',
            'jobTitle'  : 'عضو هيئة تدريس',
            'degree'    : 'استاذ مساعد',
            'email'     : 'hassan@imamu.edu.sa',
            'phone'     : '0533434433',
            'address'   : 'الرياض، جامعة الامام، كليه اللغات والترجمة',
            'date'      : new Date(),
            'notes'     : ''
        },
        {
            'id'        : '2',
            'fname'     : 'مجلس قسم أصول التربية',
            'mname'     : '\tمجلس يضم أعضاء هيئة التدريس بقسم أصول التربية لمناقشة الموضوعات المتعلقة بالعمل الأكاديمي والإداري في القسم.',
            'lname'     : 'الثلاثاء 16 يوليو 2019',
            'avatar'    : 'assets/images/avatars/SaudiAvatar.gif',
            'nid'       : '1054544343',
            'employer'  : 'غير مفعل ',
            'jobTitle'  : 'عضو هيئة تدريس',
            'degree'    : 'استاذ مساعد',
            'email'     : 'hassan@imamu.edu.sa',
            'phone'     : '0533434433',
            'address'   : 'الرياض، جامعة الامام، كليه اللغات والترجمة',
            'date'      : new Date(),
            'notes'     : ''
        },
        {
            'id'        : '2',
            'fname'     : 'مجلس قسم أصول التربية',
            'mname'     : '\tمجلس يضم أعضاء هيئة التدريس بقسم أصول التربية لمناقشة الموضوعات المتعلقة بالعمل الأكاديمي والإداري في القسم.',
            'lname'     : 'الثلاثاء 16 يوليو 2019',
            'avatar'    : 'assets/images/avatars/SaudiAvatar.gif',
            'nid'       : '1054544343',
            'employer'  : 'غير مفعل ',
            'jobTitle'  : 'عضو هيئة تدريس',
            'degree'    : 'استاذ مساعد',
            'email'     : 'hassan@imamu.edu.sa',
            'phone'     : '0533434433',
            'address'   : 'الرياض، جامعة الامام، كليه اللغات والترجمة',
            'date'      : new Date(),
            'notes'     : ''
        },
    ],
    boardMembership: [
        {
        Chairman: ['10','1','2']
        ,
        Supervised:['1','2','3']
        ,
        Securtary:['4','6','7','8']
        } 
    ],
    Membership: [
        {
            'id': '12345',
            'title': 'مجلس الجامعة',
            'bmembers': [
                {
                    'chairman':'10'
                },
                {
                    'supervisor': '1'
                },
                {
                    'Secretary':['2','3']        
                },
                {
                    'cmembers':[
                        '8',
                        '4',
                        '5',
                        '6',
                        '7',
                        '9'
                    ]
                }
            ],
        },
        {
            'id': '12375',
            'title': 'اللجنة الفنية العليا',
            'bmembers': [
                {
                    'chairman':'10'
                },
                {
                    'supervisor': '4'
                },
                {
                    'Secretary':['2']        
                },
                {
                    'cmembers':[
                        '8',
                        '1',
                        '5',
                        '6',
                        '7',
                        '9'
                    ]
                }
            ],
        },
    ],
};




export default membersDB;
