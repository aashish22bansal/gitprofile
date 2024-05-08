// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'aashish22bansal', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/aashish22bansal/aashish22bansal.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/aashish22bansal/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['aashish22bansal/my-project1', 'aashish22bansal/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['aashish22bansal/gitprofile', 'aashish22bansal/Learn-Spring-Boot', 'aashish22bansal/Spring-Boot-Unit-Testing-with-JUnit-Mockito-and-MockMvc', 'aashish22bansal/Java-Programming'], // List of repository names to display. example: ['aashish22bansal/my-project1', 'aashish22bansal/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'SMS-Spam-Detection-using-Machine-Learning-Techniques',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Breast-Cancer-Detection-Using-Machine-Learning-Techniques',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Twitter-Sentiment-Analysis-Using-Bi-LSTM',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Fake-News-Detection',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'ITE1015-Soft-Computing-Project-Skin-Cancer-Detection',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'ITE2013-Big-Data-Analytics-Credit-Card-Fraud-Detection',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'ITE1008-Open-Source-Programming-E-Commerce-Website-Project ',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        // {
        //   title: 'Project Name',
        //   description:
        //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
        //   imageUrl:
        //     'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
        //   link: 'https://example.com',
        // },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Aashish Bansal',
    description: '',
    imageURL: 'public\Aashish.jpeg',
  },
  social: {
    linkedin: 'aashish22bansal',
    twitter: 'aashish22bansal',
    mastodon: 'aashish22bansal@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: 'theinfinitelearner',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: 'aashish22bansal',
    dev: 'aashish22bansal',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://www.aashish22bansal.github.io',
    phone: '',
    email: 'analyst.aashish@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Java',
    'Python',
    'Angular',
    'PHP',
    'TypeScript',
    'MySQL',
    'PL/SQL',
    'Informatica',
    'Git',
    'HTML',
    'CSS',
    'Bootstrap',
  ],
  experiences: [
    {
      company: 'Bank of America Continnum India',
      position: 'Software Engineer 1-B',
      from: 'July 2023',
      to: 'Present',
      // companyLink: 'https://example.com',
    },
    {
      company: 'Bank of America Continnum India',
      position: 'Academic Intern Tech',
      from: 'January 2023',
      to: 'July 2023',
      // companyLink: 'https://example.com',
    },
  ],
  certifications: [
    {
      name: 'Microsoft Technology Associate',
      body: 'Python',
      year: 'February 2022',
      link: 'https://www.credly.com/badges/0f5f8c8b-3f71-4ade-bced-547dd8e9307f?source=linked_in_profile',
    },
    {
      name: 'Java (Intermediate)',
      body: 'HackerRank',
      year: 'September 2020',
      link: 'https://www.hackerrank.com/certificates/902cef9d017a',
    },
    {
      name: 'Java (Beginner)',
      body: 'HackerRank',
      year: 'September 2020',
      link: 'https://www.hackerrank.com/certificates/61db7e957c6a',
    },
  ],
  educations: [
    {
      institution: 'Vellore Institute of Technology, Vellore',
      degree: 'B.Tech. Information Technology',
      from: '2019',
      to: '2023',
    },
    // {
    //   institution: 'Institution Name',
    //   degree: 'Degree',
    //   from: '2012',
    //   to: '2014',
    // },
  ],
  publications: [
    {
      title: 'Skin Cancer Detection using Transfer Learning and Ensemble Modelling - An Assessment',
      conferenceName: '',
      journalName: 'Springer Science and Business Media Deutschland GmbH',
      authors: 'Aashish Bansal, Agilandeeswari L, Keerthi Yasasvi, Perumalla Sasank',
      link: 'https://link.springer.com/chapter/10.1007/978-3-030-96302-6_50',
      description:
        'This article investigates and describes a Transfer Learning and Ensemble Learning trained model within the medical field of Skin cancer detection. The study examines the use of the MobileNet, Inception, and Xception Learning on pre-trained models for the prediction of Skin Cancer based on the image scans of the infected part of the body. The need for early detection of Skin Cancer has become a crucial need in the medical industry and a very demanding application in need, this article examines the use of a Skin cancer prediction software for the public to alert through an early prediction.',
    },
    {
      title: 'Deep Learning and Machine Learning-Based Lung Nodule Detection Systems – An Analysis',
      conferenceName: 'Proceedings of the 14th International Conference on Soft Computing and Pattern Recognition (SoCPaR 2022)',
      journalName: 'Springer',
      authors: 'Aashish Bansal, S Dhurga Sree, Agilandeeswari L',
      link: 'https://link.springer.com/chapter/10.1007/978-3-031-27524-1_21',
      description:
        'We assess the efficiency of existing state-of-the-art approaches with the datasets used, and challenges faced, and recommend a path forward for high-impact future research.',
    },
    {
      title: 'Vision Transformer-Based Watermark Generation for Authentication and Tamper Detection Using Schur Decomposition and Hybrid Transforms',
      conferenceName: '',
      journalName: 'International Journal of Computer Information Systems and Industrial Management Applications',
      authors: 'Agilandeeswari L et. al.',
      link: 'https://example.com',
      description:
        'ISSN 2150-7988 Volume 15 (2023) pp. 107-121',
    },
    {
      title: 'Blind Non-linear Unmixing using Non-negative Matrix Factorization-based Bi-objective Autoencoder',
      conferenceName: '',
      journalName: 'Indonesian Journal of Electrical Engineering and Computer Science',
      authors: 'Agilandeeswari L et. al.',
      link: 'https://ijeecs.iaescore.com/index.php/IJEECS',
      description:
        'Vol. 31, No. 2, August 2023, pp. 1070~1079. ISSN: 2502-4752, DOI: 10.11591/ijeecs.v31.i2.pp1070-1079. Hyperspectral image processing is one of the trending techniques used in many fields such as remote sensing, medical, agriculture, food processing, and military. The unique discrimination of hyperspectral images can be used for object identification, classification, and prediction. One of the main challenges of these tasks is the mixed pixel problem. Hyperspectral unmixing is the process of identifying the endmembers and their abundance in pixels. In linear unmixing, the mixture of the endmembers is assumed to be linear homogenous patches. Even though these models are simple and faster in performance, most of the real-world images are not linear. A modified nonlinear mixture-based sparsity regularized bi-objective autoencoder model based on nonnegative matrix factorization (NMF-BOA) is proposed in this article. The performance analysis shows that our model gives competitive results compared to the state-of-the-art models.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'aashish22bansal', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'winter',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/aashish22bansal/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
