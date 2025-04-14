const teamData = [
  {
    id: 'd-dominguez',
    name: 'Dindo Dominguez',
    role: 'Project Manager',
    description: 'Passionate about Web Development, User Experience, and design',
    image: '/img/dominguez.jpg',
    social: {
      github: 'https://github.com/Odnid',
      facebook: 'https://www.facebook.com/dindo.dominguez.2024',

    },
    skills: {
      technical: [
        { name: 'Front-End Development', mastery: 85 },
        { name: 'UI/UX Design', mastery: 80 },
        { name: 'Git Version Control', mastery: 75 }
      ],
      soft: [
        'Team Leadership',
        'Project Management',
        'Communication'
      ],
      tools: [
        { name: 'Figma', mastery: 80 },
        { name: 'Canva', mastery: 85 },
        { name: 'VS Code', mastery: 75 }
      ]
    },
    projects: [
      {
        title: 'Keyboard-Racer',
        description: 'A keyboard WPM tester inspired by Monkeytype and Typeracer',
        technologies: ['HTML', 'CSS', 'Javascript'],
        date: '2025 - Present'
      },
      {
        title: 'Bookhub - Library Management System',
        description: 'Currently an ongoing 3rd Year project for our Human Computer Interaction subject in CvSU - Imus.',
        date: '2024 - Present',
        technologies: ['PHP', 'HTML/CSS', 'Bootstrap']
      },
      {
        title: 'Personal Portfolio Page',
        description: 'Created a professional-looking portfolio page with smooth animations and gorgeous designs that highlights my skills',
        technologies: ['HTML', 'CSS', 'Javascript'],
        date: '2025 - Present'
      }
    ]
  },
  {
    id: 'a-aguilon',
    name: 'Adriane Aguilon',
    role: 'UI/UX Designer',
    description: 'Creating beautiful and intuitive user experiences.',
    image: '/img/aguilon.jpg',
    social: {
      github: 'https://github.com/adriane-aguilon',
      facebook: 'https://facebook.com/adriane.aguilon',
      
      
    },
    skills: {
      design: [
        { name: 'User Interface Design', mastery: 90 },
        { name: 'User Research & Testing', mastery: 85 },
        { name: 'User Experience', mastery: 80 }
      ],
      tools: [
        { name: 'Figma & Adobe XD', mastery: 90 },
        { name: 'Tailwind', mastery: 85 },
        { name: 'Bootstrap', mastery: 80 }
      ]
    },
    projects: [
      {
        title: 'Bookhub - Library Management System',
        description: 'Currently an ongoing 3rd Year project for our Human Computer Interaction subject in CvSU - Imus.',
        date: '2024 - Present',
        technologies: ['PHP', 'HTML/CSS', 'Bootstrap']
      }
    ]
  },
  {
    id: 'g-dawal',
    name: 'Giullian Marco Dawal',
    role: 'Fullstack Web Developer',
    description: 'Building one app at a time.',
    image: '/img/dawal.jpg',
    social: {
      github: 'https://github.com/R-A9',
      facebook: 'https://www.facebook.com/srtnin4r',

    },
    skills: {
      technical: [
        { name: 'Cybersecurity', mastery: 75 },
        { name: 'Network Management', mastery: 70 },

      ],
      tools: [
        { name: 'Pure PHP', mastery: 85 },
        { name: 'TailwindCSS', mastery: 75 },
        { name: 'React', mastery: 65 }
      ]
    },
    projects: [
      {
        title: 'Theretalk',
        description: 'Backend Developer of a mental health project during SHS years',
        date: '2021 - 2022',
        technologies: ['PHP', 'HTML/CSS']
      },
      {
        title: 'Bookhub - Library Management System',
        description: 'Currently an ongoing 3rd Year project for our Human Computer Interaction subject in CvSU - Imus.',
        date: '2024 - Present',
        technologies: ['PHP', 'HTML/CSS', 'Bootstrap']
      }
    ]
  },
  {
    id: 'f-factor',
    name: 'Francis Factor',
    role: 'Frontend Developer',
    description: 'Crafting responsive and user-friendly interfaces.',
    image: '/img/factor.jpg',
    social: {
      github: 'https://github.com/francis-factor',
      facebook: 'https://facebook.com/francis.factor',

    },
    skills: {
      technical: [
        { name: 'Modern JavaScript Frameworks', mastery: 90 },
        { name: 'Responsive Web Design', mastery: 85 },
        { name: 'Performance Optimization', mastery: 80 }
      ],
      tools: [
        { name: 'React & Redux', mastery: 90 },
        { name: 'CSS Preprocessors', mastery: 85 },
        { name: 'Testing Frameworks', mastery: 80 }
      ]
    },
    projects: [
      {
        title: 'Social Media Dashboard',
        description: 'Created an interactive dashboard for social media management and analytics.',
        technologies: ['React', 'Redux', 'Chart.js'],
        date: '2024 - 2025'
      },
      {
        title: 'Bookhub - Library Management System',
        description: 'Currently an ongoing 3rd Year project for our Human Computer Interaction subject in CvSU - Imus.',
        date: '2024 - Present',
        technologies: ['PHP', 'HTML/CSS', 'Bootstrap']
      }
    ]
  },
  {
    id: 'a-moral',
    name: 'Andrie Moral',
    role: 'DevOps Engineer',
    description: 'Ensuring smooth and efficient deployment processes.',
    image: '/img/moral.jpg',
    social: {
      github: 'https://github.com/andriemoral27',
      facebook: 'https://facebook.com/andrie.moral',

     
    },
    skills: {
      technical: [
        { name: 'CI/CD Pipeline Implementation', mastery: 90 },
        { name: 'Infrastructure as Code', mastery: 85 },
        { name: 'Cloud Services Management', mastery: 80 }
      ],
      tools: [
        { name: 'Jenkins & GitHub Actions', mastery: 90 },
        { name: 'Terraform & Ansible', mastery: 85 },
        { name: 'AWS & Azure Services', mastery: 80 }
      ]
    },
    projects: [
      {
        title: 'Automated Deployment System',
        description: 'Implemented a fully automated deployment system reducing deployment time by 70%.',
        technologies: ['Jenkins', 'Docker', 'Kubernetes'],
        date: '2024 - 2025'
      },
      {
        title: 'Bookhub - Library Management System',
        description: 'Currently an ongoing 3rd Year project for our Human Computer Interaction subject in CvSU - Imus.',
        date: '2024 - Present',
        technologies: ['PHP', 'HTML/CSS', 'Bootstrap']
      }
    ]
  },
  {
    id: 'h-hernandez',
    name: 'Harold Hernandez',
    role: 'Front-end Developer',
    description: 'Specializes in creating beautiful and responsive user interfaces.',
    image: '/img/hernandez.jpg',
    social: {
      github: 'https://github.com/harold-hernandez',
      facebook: 'https://facebook.com/harold.hernandez',

      
    },
    skills: {
      technical: [
        { name: 'Modern JavaScript Frameworks', mastery: 90 },
        { name: 'Responsive Web Design', mastery: 85 },
        { name: 'Performance Optimization', mastery: 80 }
      ],
      tools: [
        { name: 'React & Redux', mastery: 90 },
        { name: 'CSS Preprocessors', mastery: 85 },
        { name: 'Testing Frameworks', mastery: 80 }
      ]
    },
    projects: [
      {
        title: 'Social Media Dashboard',
        description: 'Created an interactive dashboard for social media management and analytics.',
        technologies: ['React', 'Redux', 'Chart.js'],
        date: '2024 - 2025'
      },
      {
        title: 'Bookhub - Library Management System',
        description: 'Currently an ongoing 3rd Year project for our Human Computer Interaction subject in CvSU - Imus.',
        date: '2024 - Present',
        technologies: ['PHP', 'HTML/CSS', 'Bootstrap']
      }
    ]
  },
  {
    id: 'j-dawal',
    name: 'John Dawal',
    role: 'Backend Developer',
    description: 'Focused on building secure and scalable server-side applications.',
    image: '/img/dawal.jpg',
    social: {
      github: 'https://github.com/john-dawal',
      facebook: 'https://facebook.com/john.dawal',


    },
    skills: {
      technical: [
        { name: 'Cybersecurity', mastery: 75 },
        { name: 'Network Management', mastery: 70 },
        { name: 'Microservices Architecture', mastery: 75 }
      ],
      tools: [
        { name: 'Pure PHP', mastery: 85 },
        { name: 'TailwindCSS', mastery: 75 },
        { name: 'React', mastery: 65 }
      ]
    },
    projects: [
      {
        title: 'Theretalk',
        description: 'Backend Developer of a mental health project during SHS years',
        date: '2021 - 2022',
        technologies: ['PHP', 'HTML/CSS']
      },
      {
        title: 'Bookhub - Library Management System',
        description: 'Currently an ongoing 3rd Year project for our Human Computer Interaction subject in CvSU - Imus.',
        date: '2024 - Present',
        technologies: ['PHP', 'HTML/CSS', 'Bootstrap']
      }
    ]
  }
];

export default teamData;