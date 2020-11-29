import React from 'react';

import {useData} from "../context/DataContext";

import {makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        maxWidth: 650,
    },
});

function Success({handleReset, resetChecked, setIsNewSubgenre}) {
    const classes = useStyles();
    const {data, resetValues} = useData();
    console.log(data);

    const andAnotherBook = () => {
        setIsNewSubgenre(false);
        resetValues();
        resetChecked();
        handleReset();
    };

    return (
        <div className='success'>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableBody>
                        <TableRow>
                            <TableCell component="th" scope="row">Book genre</TableCell>
                            <TableCell>{data.genre}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Book subgenre</TableCell>
                            <TableCell>{data.subgenre}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Book title</TableCell>
                            <TableCell>{data.title}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Book author</TableCell>
                            <TableCell>{data.author}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">ISBN</TableCell>
                            <TableCell>{data.isbn}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Publisher</TableCell>
                            <TableCell>{data.publisher}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Date published</TableCell>
                            <TableCell>{data.date}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Number of pages</TableCell>
                            <TableCell>{data.num_pages}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Format</TableCell>
                            <TableCell>{data.format}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Edition</TableCell>
                            <TableCell>{data.edition}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Language</TableCell>
                            <TableCell>{data.language}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell component="th" scope="row">Description</TableCell>
                            <TableCell>{data.description}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <p>Book added successfully</p>
            <button className='next-btn' onClick={andAnotherBook}>Add another book</button>
        </div>
    )
        ;
}

export default Success;
