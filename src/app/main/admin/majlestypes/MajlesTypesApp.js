import React from 'react';
import {FusePageCarded} from '@fuse';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';
import MajlesTypeDialog from './components/MajlesTypeDialog';
import MajlesTypesHeader from './components/MajlesTypesHeader';
import MajlesTypes from './components/MajlesTypes'


function MajlesTypesApp(props)
{
   
    return (
        <React.Fragment>
        <FusePageCarded
            classes={{
                content: "flex",
                header : "min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <MajlesTypesHeader/>
            }
            content={
                <MajlesTypes />
                
            }
        />
        <MajlesTypeDialog/>
    </React.Fragment>
    );
}

export default withReducer('majlestypesApp', reducer)(MajlesTypesApp);
