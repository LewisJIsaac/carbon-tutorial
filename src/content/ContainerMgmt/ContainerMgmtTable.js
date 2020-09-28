import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableToolbar,
  TableToolbarAction,
  TableToolbarContent,
  TableToolbarSearch,
  TableToolbarMenu,
  Button,
  SortStates,
} from 'carbon-components-react';

const ContainerMgmtTable = ({ rows, headers }) => {
  return (
    <DataTable isSortable rows={rows} headers={headers}>
      {({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
        onInputChange,
      }) => (
        <TableContainer
          title="Container and Container Management Engineer"
          description="Job description">
          <TableToolbar>
            <TableToolbarContent>
              {/* pass in `onInputChange` change here to make filtering work */}
              <TableToolbarSearch onChange={onInputChange} />
              <TableToolbarMenu>
                <TableToolbarAction onClick={action('Level')} primaryFocus>
                  Action 1
                </TableToolbarAction>
                <TableToolbarAction onClick={action('Action 2 Click')}>
                  Action 2
                </TableToolbarAction>
                <TableToolbarAction onClick={action('Action 3 Click')}>
                  Action 3
                </TableToolbarAction>
              </TableToolbarMenu>
              <Button onClick={action('Button click')}>Primary Button</Button>
            </TableToolbarContent>
          </TableToolbar>
          <Table {...getTableProps()}>
            <TableHead>
              <TableRow>
                {headers.map(header => (
                  <TableHeader key={header.key} {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <TableRow key={row.id} {...getRowProps({ row })}>
                  {row.cells.map(cell => (
                    <TableCell key={cell.id}>{cell.value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </DataTable>
  );
};

export default ContainerMgmtTable;
