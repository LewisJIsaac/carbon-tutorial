import React from 'react';
import ContainerMgmtTable from './ContainerMgmtTable';

const headers = [
  {
    key: 'name',
    header: 'Level',
  },
  {
    key: 'createdAt',
    header: 'Capability',
  },
  {
    key: 'updatedAt',
    header: 'Module',
  },
];

const architect = [
  {
    test: 'it worked',
  },
];

const rows = [
  {
    id: '1',
    name: 'test',
    createdAt: 'Test Automation',
    updatedAt: 'Reporting & Dashboard',
  },
  {
    id: '2',
    name: 'Level 2',
    createdAt: 'Test Automation',
    updatedAt: 'DevOps Test Suites',
  },
  {
    id: '3',
    name: 'Level 1',
    createdAt: 'Deploy',
    updatedAt: 'Automated Tests',
  },
  {
    id: '4',
    name: 'Level 2',
    createdAt: 'Test Automation',
    updatedAt: 'Date',
  },
  {
    id: '5',
    name: 'Level 1',
    createdAt: 'Production Systems and NFRs',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '6',
    name: 'Level 2',
    createdAt: 'Test Automation',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '7',
    name: 'Level 1',
    createdAt: 'Production Systems and NFRs',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '8',
    name: 'Level 2',
    createdAt: 'Test Automation',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '9',
    name: 'Level 1',
    createdAt: 'Deploy',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '10',
    name: 'Level 2',
    createdAt: 'Compilence as Code',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
  {
    id: '11',
    name: 'Level 1',
    createdAt: 'Deploy',
    updatedAt: 'Date',
    issueCount: '123',
    stars: '456',
    links: 'Links',
  },
];

const ContainerMgmtPage = () => {
  return <ContainerMgmtTable headers={headers} rows={rows} />;
};

export default ContainerMgmtPage;
