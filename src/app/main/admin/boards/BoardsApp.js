import React from 'react';
import {FusePageCarded} from '@fuse';
import withReducer from 'app/store/withReducer';
import BoardsTable from './components/BoardsTable';
import BoardsHeader from './components/BoardsHeader';
import reducer from './store/reduces';

function boardsApp()
{
    return (
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <BoardsHeader/>
            }
            content={
                <BoardsTable/>
            }
            innerScroll
        />
    );
}

export default withReducer('boardsApp', reducer)(boardsApp);
