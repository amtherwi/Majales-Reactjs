import React, {useRef} from 'react';
import {Button, Icon, RootRef, Card, CardContent, CardActions, Typography, Grid} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {FuseAnimateGroup} from '@fuse';
import {darken} from '@material-ui/core/styles/colorManipulator';
import {makeStyles} from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
    list: {
        backgroundColor         : darken(theme.palette.background.default, theme.palette.type === 'light' ? 0.02 : .4),
        transitionProperty      : 'box-shadow',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut
    }
}));

function MeetingCard(props)
{
    const classes = useStyles(props);
    const contentScrollEl = useRef(null);
    const {majalesroleType} = props;
    return (
        <Grid item>
            <FuseAnimateGroup
                enter={{
                    animation: "transition.flipXIn",
                    duration : 1000
                }}
            >
            <Card
                className={clsx(classes.list, "w-320 mr-5 flex-1")}
                square={true}
            >
                <div className="flex items-center justify-between h-64 pr-16 pl-8">
                    <div className="flex-1 text-center items-center min-w-0">
                        <Typography className="text-16 font-600 cursor-pointer">
                            جلسة القسم 23
                        </Typography>
                    </div>
                </div>

                <RootRef rootRef={contentScrollEl}>
                    <CardContent className="flex flex-col flex-1 flex-auto h-full min-h-0 w-full p-0 overflow-auto">
                        <div className="flex bg-gray-200">
                            <div className="flex-1  text-right  px-4 py-2 m-2">
                                تاريخ الاجتماع
                            </div>
                            <div className="flex-1  text-right  px-4 py-2 m-2">
                                الأثنين 18 مارس 2019
                            </div>
                        </div>
                        <div className="flex bg-gray-200">
                            <div className="flex-1 text-right  px-4 py-2 m-2">
                                الوقت
                            </div>
                            <div className="flex-1 text-right  px-4 py-2 m-2">
                                09:00 ص
                            </div>
                        </div>
                        <div className="flex bg-gray-200">
                            <div className="flex-1  text-right  px-4 py-2 m-2">
                                مكان الاجتماع
                            </div>
                            <div className="flex-1  text-right  px-4 py-2 m-2">
                                مجلس قسم الحسبة والرقابة
                            </div>
                        </div>
                    </CardContent>
                </RootRef>

                <CardActions className="p-0 flex-shrink-0">
                    <Button to={`/majalesroles/meeting/${majalesroleType}/100/view`} component={Link}
                            classes={{
                        root : "normal-case font-600 w-full rounded-none h-48",
                        label: "justify-start"
                    }}
                    >
                        <Icon className="text-20 ml-8">open_in_new</Icon>
                        مشاهدة الاجتماع
                    </Button>
                </CardActions>
            </Card>
            </FuseAnimateGroup>
        </Grid>

    );
}

export default MeetingCard;
