import * as React from 'react';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUp from '@material-ui/icons/KeyboardArrowUp';
import { Typography, TableRow, Box, Collapse, IconButton, Table, TableBody, TableCell, TableHead } from '@material-ui/core'
import './ExpandableRow.css';

const ExpandableRow = ({ row }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                    </IconButton>
                </TableCell>
                <TableCell align="centre" component="th" scope="row">
                    {row.title}
                </TableCell>
                <TableCell align="centre">{row.author!==null ? row.author : <div className='unknown'><i>Unknown</i></div>}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Details
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Subjects</TableCell>
                                        <TableCell>Type</TableCell>
                                        <TableCell align="right">Copyrightdate</TableCell>
                                        <TableCell align="right">Biblionumber</TableCell>
                                        <TableCell align="right">ISBN</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {/* {row.history.map((historyRow) => ( */}
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {row.Subjects}
                                        </TableCell>
                                        <TableCell>{row.type}</TableCell>
                                        <TableCell align="right">{row.copyrightdate}</TableCell>
                                        <TableCell align="right">
                                            {row.biblionumber}
                                        </TableCell>
                                        <TableCell align="right">
                                            {row.isbn}
                                        </TableCell>
                                    </TableRow>
                                    {/* ))} */}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
export default ExpandableRow;


//   ExpandableRow.propTypes = {
//     row: PropTypes.shape({
//       calories: PropTypes.number.isRequired,
//       carbs: PropTypes.number.isRequired,
//       fat: PropTypes.number.isRequired,
//       history: PropTypes.arrayOf(
//         PropTypes.shape({
//           amount: PropTypes.number.isRequired,
//           customerId: PropTypes.string.isRequired,
//           date: PropTypes.string.isRequired,
//         }),
//       ).isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       protein: PropTypes.number.isRequired,
//     }).isRequired,
//   };

