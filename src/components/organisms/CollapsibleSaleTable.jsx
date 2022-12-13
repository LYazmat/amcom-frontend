import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import CollapsibleSaleRow from "../molecules/CollapsibleSaleRow";

export default function CollapsibleSaleTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Nota Fiscal</TableCell>
            <TableCell align="right">Cliente</TableCell>
            <TableCell align="right">Vendedor</TableCell>
            <TableCell align="right">Data de Venda</TableCell>
            <TableCell align="right">Valor Total</TableCell>
            <TableCell align="right">Opções</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.sales.map((sale) => (
            <CollapsibleSaleRow key={sale.id} sale={sale} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
