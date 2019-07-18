import React, {useRef} from 'react';
import {Button, Icon,RootRef, Card, CardContent, CardActions,Typography} from '@material-ui/core';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {makeStyles} from '@material-ui/styles';
import {Draggable, Droppable} from 'react-beautiful-dnd';
import clsx from 'clsx';
import MeetingCard from './MeetingCard';

const useStyles = makeStyles(theme => ({
    list: {
        backgroundColor         : darken(theme.palette.background.default, theme.palette.type === 'light' ? 0.02 : .4),
        transitionProperty      : 'box-shadow',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut
    }
}));

function MeetingList(props)
{
    const classes = useStyles(props);
    const contentScrollEl = useRef(null);

    return (
        <div>
                    <Card
                        className={clsx(classes.list, "w-256 sm:w-320 ml-16 sm:ml-24 max-h-full flex flex-col")}
                        square={true}
                    >
                        <div className="flex items-center justify-between h-64 pr-16 pl-8">
                            <div className="flex items-center min-w-0">
                                <Typography className="text-16 font-600 cursor-pointer">
                                    اسم الموضوع
                                </Typography>
                            </div>
                        </div>

                        <RootRef rootRef={contentScrollEl}>
                            <CardContent className="flex flex-col flex-1 flex-auto h-full min-h-0 w-full p-0 overflow-auto">
                                        <div className="flex flex-col w-full h-full p-16">

                                        </div>
                            </CardContent>
                        </RootRef>

                        <CardActions className="p-0 flex-shrink-0">
                            <Button classes={{
                                    root : "normal-case font-600 w-full rounded-none h-48",
                                    label: "justify-start"
                                }}
                            >
                                <Icon className="text-20 ml-8">open_in_new</Icon>
                                مشاهدة الاجتماع
                            </Button>
                        </CardActions>
                    </Card>
                </div>

    );
}

export default MeetingList;
