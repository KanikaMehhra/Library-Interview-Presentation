import * as React from 'react';
import { TableRow, Table, TableBody, TableCell, TableContainer, Paper, TableHead } from '@material-ui/core'
import ExpandableRow from '../ExpandableRow/ExpandableRow';

const CollapsableTable = ({ rows }) => {
    return (
        <TableContainer component={Paper}>
            <Table stickyHeader aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Title</TableCell>
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
