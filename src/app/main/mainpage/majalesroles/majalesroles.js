import React, {useEffect} from 'react';
import {Typography, Icon, withStyles} from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import {fade} from '@material-ui/core/styles/colorManipulator';
import {FuseAnimateGroup, FuseAnimate} from '@fuse';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import withReducer from 'app/store/withReducer';
import * as Actions from '../store/actions';
import reducer from '../store/reducers';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root    : {
        background: theme.palette.primary.main,
        color     : theme.palette.getContrastText(theme.palette.primary.main)
    },
    board   : {
        cursor                  : 'pointer',
        boxShadow               : theme.shadows[0],
        transitionProperty      : 'box-shadow border-color',
        transitionDuration      : theme.transitions.duration.short,
        transitionTimingFunction: theme.transitions.easing.easeInOut,
        background              : theme.palette.primary.dark,
        color                   : theme.palette.getContrastText(theme.palette.primary.dark),
        '&:hover'               : {
            boxShadow: theme.shadows[6]
        }
    },
    margin: {
        margin: theme.spacing(2),
    },
    newBoard: {
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.6),
        '&:hover'  : {
            borderColor: fade(theme.palette.getContrastText(theme.palette.primary.main), 0.8)
        }
    }
}));

function Majalesroles(props)
{
    const dispatch = useDispatch();
    const majalesroles = useSelector(({MajalesRoles}) => MajalesRoles.majalesroles);

    const classes = useStyles(props);

    useEffect(() => {

        return () => {
            dispatch(Actions.getMajalesRoles());
        }
    }, [dispatch]);

    return (
        <div className={clsx(classes.root, "flex flex-grow flex-shrink-0 flex-col items-center")}>

            <div className="flex flex-grow flex-shrink-0 flex-col items-center container px-16 md:px-24">

                <FuseAnimate>
                    <Typography className="mt-44 sm:mt-88 sm:py-24 text-32 sm:text-40 font-300" color="inherit">المجالس</Typography>
                </FuseAnimate>

                <div>
                    <FuseAnimateGroup
                        className="flex flex-wrap w-full justify-center py-32 px-16"
                        enter={{
                            animation: "transition.slideUpBigIn",
                            duration : 300
                        }}
                    >

                            <div className="w-224 h-224 p-16" key="secretary">
                                <Badge className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded")} badgeContent={10} color="secondary">
                                <Link className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded py-24")}
                                    to={'/majlesroles/secretary'}

                                    role="button"
                                >
                                    <Icon className="text-56">people_outline</Icon>
                                    <Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">سكرتير</Typography>
                                </Link>
                                </Badge>
                            </div>

                        <div className="w-224 h-224 p-16" key='trustworthy'>
                            <Badge className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded")} badgeContent={10} color="secondary">
                            <Link
                                to={'/majlesroles/trustworthy'}
                                className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded py-24")}
                                role="button"
                            >
                                <Icon className="text-56">supervisor_account</Icon>
                                <Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">أمين</Typography>
                            </Link>
                            </Badge>
                        </div>
                        <div className="w-224 h-224 p-16" key='president'>
                            <Badge className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded ")} badgeContent={10} color="secondary">
                            <Link
                                to={'/majlesroles/president'}
                                className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded py-24")}
                                role="button"
                            >
                                <Icon className="text-56">account_balance</Icon>
                                <Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">رئيس</Typography>
                            </Link>
                            </Badge>
                        </div>
                        <div className="w-224 h-224 p-16" key='member'>
                            <Badge className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded")} badgeContent={10} color="secondary">
                            <Link
                                to={'/majlesroles/member'}
                                className={clsx(classes.board, "flex flex-col items-center justify-center w-full h-full rounded py-24")}
                                role="button"
                            >
                                <Icon className="text-56">account_circle</Icon>
                                <Typography className="text-16 font-300 text-center pt-16 px-32" color="inherit">عضو</Typography>
                            </Link>
                            </Badge>
                        </div>

                    </FuseAnimateGroup>
                </div>
            </div>
        </div>
    );
}

 export default withReducer('MajalesRoles', reducer)(Majalesroles);
