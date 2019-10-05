import React, {useEffect, useState} from 'react';
import {Avatar, Checkbox, Icon, IconButton, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import ReactTable from "react-table";
import * as Actions from './store/actions';
import membersDB from './store/actions/memberDB'
// import membersMultiSelectMenu from './MembersMultiSerlectMenu';

function MembersList(props)
{

    const dispatch = useDispatch();
    const members = membersDB.members;//useSelector(({membersApp}) => membersApp.members.entities);
    const selectedmemberIds = useSelector(({membersApp}) => membersApp.members.selectedMemberIds);
    const searchText = useSelector(({membersApp}) => membersApp.members.searchText);


    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        function getFilteredArray(entities, searchText)
        {
            const arr = Object.keys(entities).map((id) => entities[id]);
            if ( searchText.length === 0 )
            {
                return arr;
            }
            return FuseUtils.filterArrayByString(arr, searchText);
        }

        if ( members )
        {
            setFilteredData(getFilteredArray(members, searchText));
        }
    }, [members, searchText]);


    if ( !filteredData )
    {
        return null;
    }

    if ( filteredData.length === 0 )
    {
        return (
            <div className="flex flex-1 items-center justify-center h-full">
                <Typography color="textSecondary" variant="h5">
                    There are no members!
                </Typography>
            </div>
        );
    }

    return (
        <FuseAnimate animation="transition.slideUpIn" delay={300}>
            <ReactTable
                className="-striped -highlight h-full sm:rounded-16 overflow-hidden"
                getTrProps={(state, rowInfo, column) => {
                    return {
                        className: "cursor-pointer",
                        // onClick  : (e, handleOriginal) => {
                        //     if ( rowInfo )
                        //     {
                        //         dispatch(Actions.openEditMemberDialog(rowInfo.original));
                        //     }
                        // }
                    }
                }}
                data={filteredData}
                columns={[
                    {
                        Header   : () => (
                            <Checkbox
                                onClick={(event) => {
                                    event.stopPropagation();
                                }}
                                onChange={(event) => {
                                    event.target.checked ? dispatch(Actions.selectAllMembers()) : dispatch(Actions.deSelectAllMembers());
                                }}
                                checked={selectedmemberIds.length === Object.keys(members).length && selectedmemberIds.length > 0}
                                indeterminate={selectedmemberIds.length !== Object.keys(members).length && selectedmemberIds.length > 0}
                            />
                        ),
                        accessor : "",
                        Cell     : row => {
                            return (<Checkbox
                                    onClick={(event) => {
                                        event.stopPropagation();
                                    }}
                                    checked={selectedmemberIds.includes(row.value.id)}
                                    onChange={() => dispatch(Actions.toggleInSelectedMembers(row.value.id))}
                                />
                            )
                        },
                        className: "justify-center",
                        sortable : false,
                        width    : 64
                    },
                    {
                        Header    : "اسم التصنيف",
                        accessor  : "fname",
                        filterable: true,
                        className : "font-bold"
                    },
                    {
                        Header: "",
                        width : 128,
                        Cell  : row => (
                            <div className="flex items-center">
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.openEditMemberDialog(row.original))
                                    }}
                                >

                                        <Icon>edit</Icon>
                                </IconButton>
                                <IconButton
                                    onClick={(ev) => {
                                        ev.stopPropagation();
                                        dispatch(Actions.removeMember(row.original.id));
                                    }}
                                >
                                    <Icon>delete</Icon>
                                </IconButton>
                            </div>
                        )
                    }
                ]}
                defaultPageSize={10}
                noDataText="No members found"
            />
        </FuseAnimate>
    );
}

export default MembersList;
