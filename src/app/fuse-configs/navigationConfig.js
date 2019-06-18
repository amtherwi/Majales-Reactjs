const navigationConfig = [
    {
        'id'      : 'applications',
        'title'   : 'Applications',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'example-component',
                'title': 'Example',
                'type' : 'item',
                'icon' : 'whatshot',
                'url'  : '/example'
            },
            {
                'id'   : 'example2-component',
                'title': 'Example2',
                'type' : 'item',
                'icon' : 'accessible',
                'url'  : '/example2'
            }
        ]
    }
];

export default navigationConfig;
