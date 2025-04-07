const teamData = [
  {
    id: 'john-doe',
    name: 'John Doe',
    role: 'Lead Developer',
    description: 'Passionate about creating scalable and efficient solutions.',
    image: '/images/Odnid.jpg',
    skills: {
      technical: [
        'Full-stack Development (Node.js, React, Python)',
        'Database Design & Management',
        'Cloud Infrastructure (AWS, Azure)'
      ],
      soft: [
        'Team Leadership',
        'Project Management',
        'Communication'
      ]
    },
    projects: [
      {
        title: 'E-commerce Platform',
        description: 'Led the development of a scalable e-commerce platform serving over 100k monthly users.',
        technologies: ['React', 'Node.js', 'MongoDB']
      },
      {
        title: 'Analytics Dashboard',
        description: 'Designed and implemented a real-time analytics dashboard for business intelligence.',
        technologies: ['Vue.js', 'Python', 'PostgreSQL']
      }
    ]
  },
  {
    id: 'jane-smith',
    name: 'Jane Smith',
    role: 'UI/UX Designer',
    description: 'Creating beautiful and intuitive user experiences.',
    image: '/images/Adrianne.jpg',
    skills: {
      design: [
        'User Interface Design',
        'User Research & Testing',
        'Wireframing & Prototyping'
      ],
      tools: [
        'Figma & Adobe XD',
        'Sketch & InVision',
        'Adobe Creative Suite'
      ]
    },
    projects: [
      {
        title: 'Health App Redesign',
        description: 'Led the complete redesign of a healthcare application, improving user satisfaction by 45%.',
        technologies: ['UI Design', 'User Research', 'Prototyping']
      },
      {
        title: 'E-commerce UX Optimization',
        description: 'Optimized the checkout process for an e-commerce platform, resulting in a 25% increase in conversion rate.',
        technologies: ['UX Design', 'A/B Testing', 'Analytics']
      }
    ]
  },
  {
    id: 'mike-johnson',
    name: 'Mike Johnson',
    role: 'Backend Developer',
    description: 'Building robust and scalable backend solutions.',
    image: '/images/bolyanw.jpg',
    skills: {
      technical: [
        'API Development',
        'Database Optimization',
        'Microservices Architecture'
      ],
      tools: [
        'Node.js & Express',
        'Python & Django',
        'Docker & Kubernetes'
      ]
    },
    projects: [
      {
        title: 'Payment Processing System',
        description: 'Developed a secure payment processing system handling thousands of transactions daily.',
        technologies: ['Node.js', 'MongoDB', 'Redis']
      },
      {
        title: 'Content Management API',
        description: 'Built a scalable API for content management used by multiple client applications.',
        technologies: ['Python', 'PostgreSQL', 'GraphQL']
      }
    ]
  },
  {
    id: 'sarah-wilson',
    name: 'Sarah Wilson',
    role: 'Frontend Developer',
    description: 'Crafting responsive and user-friendly interfaces.',
    image: '/images/Francis.jpg',
    skills: {
      technical: [
        'Modern JavaScript Frameworks',
        'Responsive Web Design',
        'Performance Optimization'
      ],
      tools: [
        'React & Redux',
        'CSS Preprocessors',
        'Testing Frameworks'
      ]
    },
    projects: [
      {
        title: 'Social Media Dashboard',
        description: 'Created an interactive dashboard for social media management and analytics.',
        technologies: ['React', 'Redux', 'Chart.js']
      },
      {
        title: 'E-learning Platform',
        description: 'Developed the frontend for an interactive e-learning platform with real-time features.',
        technologies: ['Vue.js', 'Vuex', 'Socket.io']
      }
    ]
  },
  {
    id: 'alex-chen',
    name: 'Alex Chen',
    role: 'DevOps Engineer',
    description: 'Ensuring smooth and efficient deployment processes.',
    image: '/images/morant.jpg',
    skills: {
      technical: [
        'CI/CD Pipeline Implementation',
        'Infrastructure as Code',
        'Cloud Services Management'
      ],
      tools: [
        'Jenkins & GitHub Actions',
        'Terraform & Ansible',
        'AWS & Azure Services'
      ]
    },
    projects: [
      {
        title: 'Automated Deployment System',
        description: 'Implemented a fully automated deployment system reducing deployment time by 70%.',
        technologies: ['Jenkins', 'Docker', 'Kubernetes']
      },
      {
        title: 'Cloud Migration Project',
        description: 'Led the migration of on-premise infrastructure to cloud services with zero downtime.',
        technologies: ['AWS', 'Terraform', 'Ansible']
      }
    ]
  }
];

export default teamData;