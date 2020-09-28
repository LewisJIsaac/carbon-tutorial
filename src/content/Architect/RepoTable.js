import React from 'react';
import {
  DataTable,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableExpandHeader,
  TableHeader,
  TableBody,
  TableExpandRow,
  TableCell,
  TableExpandedRow,
} from 'carbon-components-react';

const RepoTable = ({ rows, headers }) => {
  return (
    <DataTable
      isSortable
      rows={rows}
      headers={headers}
      render={({
        rows,
        headers,
        getHeaderProps,
        getRowProps,
        getTableProps,
      }) => (
        <TableContainer
          title="DevOps Architect"
          description="A DevOps Architect role is able to design complete systems or solutions that are favourable for the DevOps culture and this means that they need to have a basic understanding of the technologies and principles of DevOps.">
          <Table size="" {...getTableProps()}>
            <TableHead>
              <TableRow>
                <TableExpandHeader />
                {headers.map(header => (
                  <TableHeader {...getHeaderProps({ header })}>
                    {header.header}
                  </TableHeader>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                <React.Fragment key={row.id}>
                  <TableExpandRow {...getRowProps({ row })}>
                    {row.cells.map(cell => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableExpandRow>
                  <TableExpandedRow colSpan={headers.length + 1}>
                    <p>Row descriptions</p>
                  </TableExpandedRow>
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    />
  );
};

export default RepoTable;
