

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import MuiTableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ExpandableRow from "../ExpandableRow/ExpandableRow";

const TableHead = withStyles((theme) => ({
    root: {
        backgroundColor: "orange"
    }
}))(MuiTableHead);

const CollapsableTable = ({ rows, title, author }) => {



    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="centre">Title</TableCell>
                        <TableCell align="centre">Author</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {author==='unknown' && rows.filter(row => row.author===null).map((frow, index) => (
                        <ExpandableRow key={index} row={frow} />
                    ))}
                    {title === '' && author==='' && rows.map((row, index) => (
                        <ExpandableRow key={index} row={row} />
                    ))
                    }
                    {title === '' && author!=='' ? rows.filter(row => row.author.includes(author)).map((frow, index) => (
                        <ExpandableRow key={index} row={frow} />
                    ))
                        : rows.filter(row => row.title.includes(title)).map((frow, index) => (
                        <ExpandableRow key={index} row={frow} />
                    ))
                    }

                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CollapsableTable;

