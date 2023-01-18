import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export default function BasicTable({ title, data, format }) {
    return (

        < TableContainer >
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>{title}</TableCell>
                        <TableCell align="center">Stats</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {Object.entries(data).map((d,idx) => {
                        return (
                            <TableRow key={idx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {d[0]}
                                </TableCell>
                                <TableCell align="center">{d[1]}</TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </TableContainer >
    );
}