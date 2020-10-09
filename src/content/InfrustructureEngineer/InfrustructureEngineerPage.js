import React from 'react';
import InfrustructureEngineerTable from './InfrustructureEngineerTable';

const headers = [
  {
    key: 'level',
    header: 'Level',
  },
  {
    key: 'capability',
    header: 'Capability',
  },
  {
    key: 'id',
    header: 'Module',
  },
  {
    key: 'moduleLink',
    header: 'Module Link',
  },
];

const rows = [
  // {
  //   title: 'DevOps Architect',
  //   objectives: {
  //     '1':
  //       'Design complete systems or solutions that are favourable for the DevOps culture',
  //     '2':
  //       'Designing systems which are production ready: considering NFRs such as performance, security and release processes',
  //     '3':
  //       'Being able to make decisions to create the correct solution for a client: Container Mgmt, Monitoring, Databases',
  //     '4':
  //       'Gain depth in certain technologies that are key to building cloud infrastructure: Infrastructure as Code',
  //   },
  //   id: "https://www.youtube.com/",
  //   description:
  //     'A DevOps Architect role is able to design complete systems or solutions that are favourable for the DevOps culture and this means that they need to have a basic understanding of the technologies and principles of DevOps.',
  //   capabilityLevel: [
  {
    level: '1',
    id: 'Test Automation Advanced',
    capability: 'Reporting & Dashboard',
    moduleLink: <a href="https://www.google.com/">Linux Academy: Git Intro</a>,
  },
  {
    level: '2',
    id: 'Test Automation',
    capability: 'Reporting & Dashboard',
    moduleLink: (
      <a href="https://www.bing.com/">Linux Academy: Testing Module</a>
    ),
  },
  {
    level: '1',
    id: 'Automate Test',
    capability: 'Deploy',
    moduleLink: <a href="https://www.yahoo.com/">Deploy Module</a>,
  },
  {
    level: '2',
    id: 'Production Basics',
    capability: 'Production Systems and NFRs',
    moduleLink: <a href="https://www.facebook.com/">Production Module</a>,
  },
  {
    level: '3',
    id: 'Test Automation Advanced 2',
    capability: 'Reporting & Dashboard',
    moduleLink: <a href="https://www.google.com/">Linux Academy: Git Intro</a>,
  },
  {
    level: '3 ',
    id: 'Test Automation 2',
    capability: 'Reporting & Dashboard',
    moduleLink: (
      <a href="https://www.bing.com/">Linux Academy: Testing Module</a>
    ),
  },
  {
    level: '4',
    id: 'Automate Test 2',
    capability: 'Deploy',
    moduleLink: <a href="https://www.yahoo.com/">Deploy Module</a>,
  },
  {
    level: '2',
    id: 'Production Basics 2',
    capability: 'Production Systems and NFRs',
    moduleLink: <a href="https://www.facebook.com/">Production Module</a>,
  },
  // ],
  // },
];

const InfrustructureEngineerPage = () => {
  return <InfrustructureEngineerTable headers={headers} rows={rows} />;
};

export default InfrustructureEngineerPage;
