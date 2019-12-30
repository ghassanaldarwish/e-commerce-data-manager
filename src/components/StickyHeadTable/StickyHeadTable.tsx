import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import VisibilityIcon from '@material-ui/icons/Visibility';
import './StickyHeadTable.css';
import { IconButton } from '@material-ui/core';

interface Column {
    // id: 'name' | 'code' | 'population' | 'size' | 'density';
    id: 'name' | 'creator' | 'date' | 'source' | 'actions';

    label: string;
    minWidth?: number;
    align?: 'right';
    //  format?: (value: number) => string;
}

const columns: Column[] = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'creator', label: 'Creator', minWidth: 100 },
    {
        id: 'date',
        label: 'Date',
        minWidth: 170,
        align: 'right',
        //  format: (value: number) => value.toLocaleString(),
    },
    {
        id: 'source',
        label: 'Source',
        minWidth: 170,
        align: 'right',
        // format: (value: number) => value.toLocaleString(),
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 170,
        align: 'right',
        //   format: (value: number) => value.toFixed(2),
    },
];

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function StickyHeadTable(props: any) {
    const classes = useStyles();
    const { rowsData, getProductId } = props;

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const renderActions = (id: any) => {
        return (
            <div>
                <IconButton onClick={() => getProductId(id, 'edit')} aria-label="edit" color="primary">
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => getProductId(id, 'delete')} aria-label="delete" color="secondary">
                    <DeleteIcon />
                </IconButton>
                <IconButton onClick={() => getProductId(id, 'show')} aria-label="show">
                    <VisibilityIcon />
                </IconButton>
            </div>
        );
    };

    return rowsData().length > 0 ? (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map(column => (
                                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowsData()
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row: any) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.creator}>
                                        {columns.map(column => {
                                            const value = row[column.id];

                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.id === 'actions' ? renderActions(row._id) : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rowsData().length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    ) : (
        <div className="NotFound">Products Not Found!</div>
    );
}
