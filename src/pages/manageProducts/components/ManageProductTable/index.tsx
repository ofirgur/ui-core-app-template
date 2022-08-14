import React from 'react';
import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ProductList } from '../../types';
import STRINGS from '../../strings';
import { StyledTableCell, StyledTableRow } from './styled';

type ManageProductTableProps = {
  products: ProductList;
};

const ManageProductTable = (props: ManageProductTableProps) => {
  const { products } = props;
  const navigate = useNavigate();

  const handleRowClick = (productId: string) => {
    navigate(productId);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{STRINGS.ProductName}</StyledTableCell>
            <StyledTableCell>{STRINGS.Sizes}</StyledTableCell>
            <StyledTableCell>{STRINGS.LastRun}</StyledTableCell>
            <StyledTableCell>{STRINGS.LastSync}</StyledTableCell>
            <StyledTableCell>{STRINGS.SKU}</StyledTableCell>
            <StyledTableCell>{STRINGS.Description}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <StyledTableRow key={row.id} onClick={() => handleRowClick(row.id)}>
              <StyledTableCell>{row.name}</StyledTableCell>
              <StyledTableCell>{row.sizes}</StyledTableCell>
              <StyledTableCell>{row.lastRun}</StyledTableCell>
              <StyledTableCell>{row.lastSync}</StyledTableCell>
              <StyledTableCell>{row.sku}</StyledTableCell>
              <StyledTableCell>{row.description}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageProductTable;
