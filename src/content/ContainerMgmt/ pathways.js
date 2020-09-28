// Pathways
// This variable is an array of objects (pathways available to engineers). Each object has the following structure
// {
//   title: String,
//   objectives: Array(String),
//   id: String,
//   description: String,
//   capabilityLevel: Array(Object({ capability: String, level: String })), // Array of objects of capability and level IDs that are associated with the pathway
// }

const pathways = [
  {
    title: 'DevOps Architect',
    objectives: {
      '1':
        'Design complete systems or solutions that are favourable for the DevOps culture',
      '2':
        'Designing systems which are production ready: considering NFRs such as performance, security and release processes',
      '3':
        'Being able to make decisions to create the correct solution for a client: Container Mgmt, Monitoring, Databases',
      '4':
        'Gain depth in certain technologies that are key to building cloud infrastructure: Infrastructure as Code',
    },
    id: 'DOARCH',
    description:
      'A DevOps Architect role is able to design complete systems or solutions that are favourable for the DevOps culture and this means that they need to have a basic understanding of the technologies and principles of DevOps.',
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
  {
    title: 'DevOps Automation Engineer',
    objectives: {
      '1':
        'Design, develop, maintain and increment complex systems through CICD and other automation tools',
      '2':
        'Build up experience with multiple CICD tools and automation languages throughout the application lifecycle, for example pipeline builds, infrastructure build and configuration, test automation and monitoring',
      '3':
        'Create systems that are designed to deploy and release applications easily to a customers',
      '4':
        'Being able to advise in all areas of the application lifecycle to establish best practices and assist in creating automation systems',
    },
    id: 'DOAUTO',
    description:
      'A DevOps Automation Engineer is able to design, develop, maintain and increment complex systems through CICD and other automation tools and this means that they need to have an indepth understanding of technologies that are used for automating tasks.',
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
  {
    title: 'DevOps Networking and Infrastructure Engineer',
    objectives: {
      '1':
        'Design, create and monitor complex cloud solutions as well as advise on the best practices when deploying applications to the cloud',
      '2':
        'Using automation to build cloud infrastructure for repeatable and reliable solutions',
      '3': 'Creating secure systems with appropriate networking rules',
      '4':
        'How to use monitoring to easily debug issues in your networks and infrastructure',
    },
    id: 'DONETINFRA',
    description:
      'A DevOps Networking and Infrastructure Engineer is able to design, create and monitor complex cloud solutions as well as advise on the best practices when deploying applications to the cloud. This means that they will need to have an indepth understanding of designing cloud solutions in addition to being able to create them.',
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
  {
    title: 'DevOps Security Engineer',
    objectives: {
      '1':
        'Design, develop and monitor solutions that have been deployed on the cloud as well as guide development teams on security best practices from the inception of ideas',
      '2':
        'Managing security in a production system, from design and development to test and monitoring',
      '3':
        'Building and configuring infrastructure for security from the start of a project',
      '4':
        'Using automation to test the system for vulnerabilities and security failures',
    },
    id: 'DOSEC',
    description:
      'A DevOps Security Engineer is able to design, develop and monitor solutions that have been deployed on the cloud as well as guide development teams on security best practices from the inception of ideas. This means that they will need to have a basic understanding of developing secure apps and infrastructure as well as an indepth understanding of the principles of security.',
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
  {
    title: 'DevOps SysAdmin',
    objectives: {
      '1':
        'Perform complex system maintence actions across the architecture with special expertise in using UNIX and Windows Servers',
      '2':
        'Being able to operate and monitor systems that are live in production and understanding the architecture of such a system',
      '3':
        'Using automation where possible for the maintence of complex systems, for example through IaC or bash scripting',
      '4':
        'Have a basic understanding of the possible ways that applications can be deployed, for example managing virtual machine or containerised infrastructure',
    },
    id: 'DOSYS',
    description:
      'A DevOps SysAdmin is able to perform complex system maintence actions across the architecture with special expertise in using UNIX and Windows Servers. This means that they will need an indepth understanding of a variety of operating systems as well as how the infrastructure is built across the cloud.',
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
  {
    title: 'DevOps Technical PM / Scrum Master',
    objectives: {
      '1':
        'Be a bridge between complex technical subjects and business objectives / what the client values',
      '2':
        'Being able to convey very technical concepts in a way that non-technical stakeholders will be able to understand, thereby seeing the value of DevOps engineers',
      '3':
        'Understanding production requirements from a client, thereby being able to convert these requirements into technical user stories that are understood by engineers',
      '4':
        'Understanding how applications are released to customers and what is needed to reduce customer impact',
    },
    id: 'DOPMSM',
    description:
      'A DevOps Technical PM / Scrum Master is able to be a bridge between complex technical subjects and business objectives / what the client values. This means that they need to have a basic understanding of the majority of concepts, technologies and principles of DevOps so that clients will be able to understand the value engineers bring to the project.',
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
