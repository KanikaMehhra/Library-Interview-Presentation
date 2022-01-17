

import React from "react";
import {  withStyles } from "@material-ui/core/styles";
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

const CollapsableTable = ({ rows }) => {

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="right">Author</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row, index) => (
                        <ExpandableRow key={index} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default CollapsableTable;

