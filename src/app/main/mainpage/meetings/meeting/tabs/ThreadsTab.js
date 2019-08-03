import React, {useEffect, useState} from 'react';
import {withStyles, makeStyles } from '@material-ui/core/styles';
import {
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Typography, Button
} from '@material-ui/core';
import {FuseAnimateGroup} from '@fuse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.background.default,
        },
    },
}))(TableRow);

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    paper: {
        marginTop: theme.spacing(3),
        width: '100%',
        overflowX: 'auto',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
    tablelink: {
        color: 'inherit',
        "&:visited, &:hover ,&:active": {
            color:'inherit'
        }
    }
}));

function createData(threadname, comment, input) {
    return { threadname, comment, input};
}

const rows1 = [
    createData('النظر في إقرار نتيجة الطالب في مرحلة الماجستير/ فيصل بن مسعود الخنفري', 0, 0),
    createData('النظر في إقرار نتيجة الطالب في مرحلة الماجستير/ محمد القحطاني', 2, 0)
];
const rows2 = [
    createData('النظر في طلب التأجيل المقدم من الدارس في مرحلة الدكتوراه /تركي بن زيد آل عسكر', 6, 0),
    createData('النظر في طلب التأجيل المقدم من الدارس في مرحلة الدكتوراه /تركي بن زيد آل عسكر', 2, 0)
];
function ThreadsTab()
{
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState('threadid1');
    const handleChangeMeetingPanel = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <div className="md:flex max-w-2xl">

            <div className="flex flex-col flex-1 md:pr-32">

                <FuseAnimateGroup
                    enter={{
                        animation: "transition.slideUpBigIn"
                    }}
                >
                    <ExpansionPanel expanded={expanded === 'threadid1'} onChange={handleChangeMeetingPanel('threadid1')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className="">إقرار النتيجة</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Paper className={classes.paper}>
                            <Table className={classes.table}>
                                <TableHead>
                                    <StyledTableRow>
                                        <StyledTableCell>عنوان الموضوع</StyledTableCell>
                                        <StyledTableCell align="right">التعليقات</StyledTableCell>
                                        <StyledTableCell align="right">المداخلات</StyledTableCell>
                                    </StyledTableRow>
                                </TableHead>
                                <TableBody>
                                    {rows1.map(row => (
                                        <StyledTableRow key={row.threadname}>
                                            <StyledTableCell  component="th"  scope="row">
                                                <Link className={classes.tablelink} to="/majalesroles/thread/120/view" role="button">{row.threadname}</Link>
                                            </StyledTableCell>
                                            <StyledTableCell align="right">{row.comment}</StyledTableCell>
                                            <StyledTableCell align="right">{row.input}</StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                            </Paper>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel expanded={expanded === 'threadid2'} onChange={handleChangeMeetingPanel('threadid2')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography className="">تأجيلات</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Paper className={classes.paper}>
                                <Table className={classes.table}>
                                    <TableHead>
                                        <StyledTableRow>
                                            <StyledTableCell>عنوان الموضوع</StyledTableCell>
                                            <StyledTableCell align="right">التعليقات</StyledTableCell>
                                            <StyledTableCell align="right">المداخلات</StyledTableCell>
                                        </StyledTableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows2.map(row => (
                                            <StyledTableRow key={row.threadname}>
                                                <StyledTableCell  component="th"  scope="row">
                                                    <Link className={classes.tablelink} to="/majalesroles/thread/120/view" role="button">{row.threadname}</Link>
                                                </StyledTableCell>
                                                <StyledTableCell align="right">{row.comment}</StyledTableCell>
                                                <StyledTableCell align="right">{row.input}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </FuseAnimateGroup>

            </div>

        </div>
    );
}

export default ThreadsTab;
