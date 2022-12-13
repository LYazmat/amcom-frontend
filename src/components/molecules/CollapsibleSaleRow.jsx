import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function CollapsibleSaleRow(props) {
  const sale = props.sale;
  const [open, setOpen] = React.useState(false);

  const total_price = React.useMemo(() => {
    console.log(sale);
    return sale.items
      .map((item) => item.product.price * item.amount)
      .reduce((total, value) => total + value, 0)
      .toLocaleString("pt-BR", { minimumFractionDigits: 2 });
  }, [sale]);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand sale"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {sale.invoice}
        </TableCell>
        <TableCell align="right">{sale.customer.name}</TableCell>
        <TableCell align="right">{sale.seller.name}</TableCell>
        <TableCell align="right">{sale.sale_datetime}</TableCell>
        <TableCell align="right">{`R$ ${total_price}`}</TableCell>
        <TableCell align="right">{"Opções"}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Customer</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Total price ($)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[1, 2].map((id) => (
                    <TableRow key={id}>
                      <TableCell component="th" scope="row">
                        {"Valor D"}
                      </TableCell>
                      <TableCell>{"Valor A"}</TableCell>
                      <TableCell align="right">{"Valor B"}</TableCell>
                      <TableCell align="right">{"Valor C"}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

{
  /* 
CollapsibleSaleRow.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      })
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};
*/
}
