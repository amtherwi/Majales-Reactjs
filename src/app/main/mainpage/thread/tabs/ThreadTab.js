import React, {useEffect, useState} from 'react';
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import {Grid, AppBar, Button, Card, CardContent, Icon, IconButton, List, ListItem, ListItemText, Toolbar, Typography,LinearProgress,Divider} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import clsx from 'clsx';
import {Link} from "react-router-dom";


const BorderLinearProgress = withStyles({
    root: {
        height: 10,
        backgroundColor: lighten('#ff6c5c', 0.5),
    },
    bar: {
        borderRadius: 20,
        backgroundColor: '#ff6c5c',
    },
})(LinearProgress);

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    margin: {
        margin: theme.spacing(1),
    },
    divider: {
        margin: theme.spacing(2, 0),
    },
}));

function ThreadTab()
{
    const classes = useStyles();
    return (
        <div className="md:flex max-w-2xl">

            <div className="flex flex-col flex-1 md:pl-32">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pl-16 pr-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    تصويت
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <CardContent>

                            <Typography className={clsx(classes.margin, "font-bold mb-4 text-15 mb-10")}>هل توافق ؟</Typography>
                            <Grid container spacing={3}>
                                <Grid item xs={2}>
                                    <Typography className={clsx(classes.margin, "font-bold mb-4 text-12")}>موافق</Typography>
                                </Grid>
                                <Grid item xs={10}>
                                    <BorderLinearProgress
                                        className={classes.margin}
                                        variant="determinate"
                                        color="primary"
                                        value={70}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography className={clsx(classes.margin, "font-bold mb-4 text-12")}>لا اوافق</Typography>
                                </Grid>
                                <Grid item xs={10}>
                                    <BorderLinearProgress
                                        className={classes.margin}
                                        variant="determinate"
                                        color="primary"
                                        value={20}
                                    />
                                </Grid>
                                <Grid item xs={2}>
                                    <Typography className={clsx(classes.margin, "font-bold mb-4 text-12")}>امتنع عن التصويت</Typography>
                                </Grid>
                                <Grid item xs={10}>
                                    <BorderLinearProgress
                                        className={classes.margin}
                                        variant="determinate"
                                        color="primary"
                                        value={10}
                                    />
                                </Grid>
                            </Grid>
                            <div className="flex items-center justify-end">
                                <Button to="/" component={Link} className="ml-8 normal-case" variant="contained" color="primary" aria-label="Follow">تعديل السؤال</Button>
                            </div>
                            <Divider className={classes.divider} />
                            <div className="mb-24">
                                <Button size="small" className={classes.button}>
                                    <Icon className="text-16 ml-4" color="action">add_circle</Icon>
                                    إضافة تصويت جديد
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </FuseAnimateGroup>
            </div>

            <div className="flex flex-col md:w-320">
                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pr-16 pl-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    حول الموضوع
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <CardContent className="p-8">
                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">الموضوع</Typography>
                                <Typography>النظر في إقرار نتيجة الطالب في مرحلة الماجستير/ فيصل بن مسعود الخنفري</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">التصنيف</Typography>
                                <Typography>إقرار النتيجة</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">تفاصيل</Typography>
                                <Typography>- تقييم الوضع الراهن <br/>
                                    - اعتماد الوضع الجديد</Typography>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pr-16 pl-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    الوقت المقترح للنقاش
                                </Typography>
                            </Toolbar>
                        </AppBar>
                        <CardContent className="p-8 text-center">
                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-36">00:00</Typography>
                            </div>
                        </CardContent>
                    </Card>
                </FuseAnimateGroup>
            </div>
        </div>
    );
}

export default ThreadTab;
