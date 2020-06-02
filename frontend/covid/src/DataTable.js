import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(Country, Population, Confirmed, Recovered, Deaths) {
  return { Country, Population, Confirmed, Recovered, Deaths };
}

const rows = [
  createData('Brazil', "209,5 mi", 6.0, 24, 4.0),
  // createData('Italia',  "209,5 mi", 37, 4.3),
  // createData('China',  "20 mi", 16.0, 24, 6.0),
  // createData('United Kingdom',  "105,5 mi", 3.7, 67, 4.3),
  // createData('United States',  "335 mi", 16.0, 49, 3.9),
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Country</TableCell>
            <TableCell>Population</TableCell>
            <TableCell>Confirmed</TableCell>
            <TableCell>Recovered</TableCell>
            <TableCell>Deaths</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.Country}</TableCell>
              <TableCell>{row.Population}</TableCell>
              <TableCell>{row.Confirmed}</TableCell>
              <TableCell>{row.Recovered}</TableCell>
              <TableCell>{row.Deaths}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}