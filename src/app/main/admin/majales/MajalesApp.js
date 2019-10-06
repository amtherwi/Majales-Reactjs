import React from 'react';
import {FusePageCarded} from '@fuse';
import withReducer from 'app/store/withReducer';

import MajalesTable from './components/MajalesTable';
import MajalesHeader from './components/MajalesHeader';
import reducer from './store/reducers';

function MajalesApp()
{
    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <MajalesHeader/>
            }
            content={
                <MajalesTable/>
            }
            innerScroll
        />
    );
}

export default withReducer('majalesApp', reducer)(MajalesApp);
