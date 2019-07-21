import React, {useEffect, useState} from 'react';
import {Avatar, AppBar, Button, Card, CardContent, Icon, IconButton, List, ListItem, ListItemText, Toolbar, Typography} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import axios from 'axios';

function AboutTab()
{

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
                                    تفاصيل الإجتماع
                                </Typography>
                            </Toolbar>
                        </AppBar>

                        <CardContent>
                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">العنوان</Typography>
                                <Typography>جلسة القسم 23</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">التاريخ</Typography>
                                <Typography>الأثنين 18 مارس 2019</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">الساعه</Typography>
                                <Typography>09:00 ص</Typography>
                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">المكان</Typography>

                                    <div className="flex items-center" key="Riyadh">
                                        <Icon className="text-16 ml-4" color="action">location_on</Icon>
                                        <Typography>مجلس قسم الحسبة والرقابة</Typography>
                                    </div>

                            </div>

                            <div className="mb-24">
                                <Typography className="font-bold mb-4 text-15">الحاله</Typography>
                                <Typography>مغلق</Typography>
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
                                    الاعضاء المدعوون
                                </Typography>
                                <Button className="normal-case" color="inherit" size="small">شاهد المزيد</Button>
                            </Toolbar>
                        </AppBar>
                        <CardContent className="p-0">
                            <List className="p-0">
                                <ListItem key="asda">
                                    <Avatar alt="ahmad">أ</Avatar>
                                    <ListItemText
                                        primary={(
                                            <div className="">
                                                <Typography className="inline font-medium pr-5" color="secondary" paragraph={false}>
                                                    أحمد
                                                </Typography>
                                                <Typography className="inline mr-4" paragraph={false}>
                                                    سهيل ابوصاع
                                                </Typography>
                                            </div>
                                        )}
                                        secondary={(
                                            <div className="">
                                                <Typography className="inline font-medium pr-5" color="secondary" paragraph={false}>
                                                    رئيس
                                                </Typography>
                                            </div>
                                        )}
                                    />
                                </ListItem>
                                <ListItem key="asda">
                                    <Avatar alt="ahmad">ع</Avatar>
                                    <ListItemText
                                        primary={(
                                            <div className="">
                                                <Typography className="inline font-medium pr-5" color="secondary" paragraph={false}>
                                                    عبد الملك
                                                </Typography>
                                                <Typography className="inline mr-4" paragraph={false}>
                                                    السبر
                                                </Typography>
                                            </div>
                                        )}
                                        secondary={(
                                            <div className="">
                                                <Typography className="inline font-medium pr-5" color="secondary" paragraph={false}>
                                                    أمين
                                                </Typography>
                                            </div>
                                        )}
                                    />
                                </ListItem>
                            </List>
                        </CardContent>
                    </Card>

                    <Card className="w-full mb-16">
                        <AppBar position="static" elevation={0}>
                            <Toolbar className="pr-16 pl-8">
                                <Typography variant="subtitle1" color="inherit" className="flex-1">
                                    الحاضرون من المدعوين
                                </Typography>
                                <Button className="normal-case" color="inherit" size="small">شاهد المزيد</Button>
                            </Toolbar>
                        </AppBar>
                        <CardContent className="p-0">
                            <List className="p-0">
                                    <ListItem key="asda">
                                        <Avatar alt="ahmad">أ</Avatar>
                                        <ListItemText
                                            primary={(
                                                <div className="">
                                                    <Typography className="inline font-medium pr-5" color="secondary" paragraph={false}>
                                                        أحمد
                                                    </Typography>
                                                    <Typography className="inline mr-4" paragraph={false}>
                                                        سهيل ابوصاع
                                                    </Typography>
                                                </div>
                                            )}
                                            secondary={(
                                                <div className="">
                                                    <Typography className="inline font-medium pr-5" color="secondary" paragraph={false}>
                                                        رئيس
                                                    </Typography>
                                                </div>
                                            )}
                                        />
                                    </ListItem>
                            </List>
                        </CardContent>
                    </Card>
                </FuseAnimateGroup>
            </div>
        </div>
    );
}

export default AboutTab;
