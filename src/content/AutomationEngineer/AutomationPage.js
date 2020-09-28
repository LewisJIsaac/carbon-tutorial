import React from 'react';
import AutomationTable from './Automation';

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
    id: '1',
    level: 'Level 1',
    capability: '',
    module: '',
  },
  {
    id: '',
    level: '',
    capability: '',
    module: '',
  },
];

const rows = [
  {
    id: '1',
    name: 'Level 1',
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

const AutomationPage = () => {
  return (
    <div className="bx--grid bx--grid--full-width bx--grid--no-gutter repo-page">
      <div className="bx--row repo-page__r1">
        <div className="bx--col-lg-16">
          <AutomationTable headers={headers} rows={rows} />
        </div>
      </div>
    </div>
  );
};

export default AutomationPage;
