import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell, StyledTableRow } from './styled';

type SimpleTableProps = {
  columns: string[];
  rows: object[];
};

export const SimpleTable = (props: SimpleTableProps) => {
  const { columns, rows } = props;

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {columns.map((c, i) => (
              <StyledTableCell key={i}>{c}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: object, i) => (
            <StyledTableRow key={i}>
              {Object.values(row).map((field: JSX.Element, i) => (
                <StyledTableCell key={i}>{field}</StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SimpleTable;
