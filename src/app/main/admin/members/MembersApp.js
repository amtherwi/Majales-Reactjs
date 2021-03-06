import React from 'react';
import {FusePageCarded} from '@fuse';
import withReducer from 'app/store/withReducer';

import MembersTable from './components/MembersTable';
import MembersHeader from './components/MembersHeader';
import reducer from './store/reducers';

function MembersApp()
{
    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <MembersHeader/>
            }
            content={
                <MembersTable/>
            }
            innerScroll
        />
    );
}

export default withReducer('membersApp', reducer)(MembersApp);
