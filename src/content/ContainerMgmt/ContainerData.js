// Pathways
// This variable is an array of objects (pathways available to engineers). Each object has the following structure
// {
//   title: String,
//   objectives: Array(String),
//   id: String,
//   description: String,
//   capabilityLevel: Array(Object({ capability: String, level: String })), // Array of objects of capability and level IDs that are associated with the pathway
// }

const rows = [
  {
    title: 'DevOps Container and Container Managment Engineer',
    objectives: {
      '1':
        'Design, develop, test and operate containerised applications in complex architectures using this knowledge to advise on the best solutions',
      '2':
        'Understanding how applications are deployed and released into container mgmt technologies, and minimising the impact on the customer',
      '3':
        'Being able to create secure systems for production ready infrastructure and how this impacts container security and packages',
      '4':
        'Monitoring deployed applications to understand network performance, application errors etc',
    },
    id: 'DOCONT',
    description:
      'A DevOps Container and Container Management Engineer is able to design, develop, test and operate containerised applications in complex architectures using this knowledge to advise on the best solutions. This means that they need to have depth in the technologies used for containerisation as well as areas on its peripherals.',
    capabilityLevel: [
      {
        capability: '',
        level: '',
      },
      {
        capability: '',
        level: '',
      },
    ],
  },
];
