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
          projects: [
            'aashish22bansal/angular-quickstart-2',
            'aashish22bansal/awesome-gcp-certifications',
            'aashish22bansal/awesome-machine-learning-interpretability',
            'aashish22bansal/awesome-os',
            'aashish22bansal/awesome-pentest',
            'aashish22bansal/awesome-pentester',
            'aashish22bansal/awesome-web-hacking',
            'aashish22bansal/awesome-web-security',
            'aashish22bansal/Blog-Website',
            'aashish22bansal/bmi',
            'aashish22bansal/bmi-1',
            'aashish22bansal/Cheatsheets---Machine-Learning',
            'aashish22bansal/coding-interview-university',
            'aashish22bansal/Coursera-HTML-CSS-and-Javascript-for-Web-Developers-Johns-Hopkins-University',
            'aashish22bansal/COURSERA-Machine-Learning-with-Python-Capstone-Project',
            'aashish22bansal/Coursera-Professional-Certificate---IBM-Data-Science',
            'aashish22bansal/Coursera-Professional-Certificate---Meta-iOS-Developer',
            'aashish22bansal/design-resources-for-developers',
            'aashish22bansal/developer-roadmap',
            'aashish22bansal/django-adminlte',
            'aashish22bansal/Flutter',
            'aashish22bansal/free-programming-books',
            'aashish22bansal/Learn-Flask',
            'aashish22bansal/learn_flutter',
            'aashish22bansal/Learn-JavaScript',
            'aashish22bansal/Learn-Kotlin',
            'aashish22bansal/List-of-web-application-security',
            'aashish22bansal/materio-mui-react-nextjs-admin-template-free',
            'aashish22bansal/Microsoft-Student-Partner-Workshop-Learning-Materials-AI-NLP',
            'aashish22bansal/Network-Programming',
            'aashish22bansal/Penetration-Testing',
            'aashish22bansal/PentestTools',
            'aashish22bansal/PHP-Blog-Admin',
            'aashish22bansal/php-laravel-docker',
            'aashish22bansal/PortfolioFlutterMacBookPro',
            'aashish22bansal/PortfolioMacBookPro',
            'aashish22bansal/Portfolio-Test-Website',
            'aashish22bansal/REST-API',
            'aashish22bansal/Spring-Boot-Application',
            'aashish22bansal/Test',
            'aashish22bansal/UbuntuOSPortfolio',
            'aashish22bansal/UNIX-Concepts-and-Applications',
            'aashish22bansal/vovacodes'
          ], // These projects will not be displayed. example: ['aashish22bansal/my-project1', 'aashish22bansal/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [
          'aashish22bansal/gitprofile', 
          'aashish22bansal/Learn-Spring-Boot', 
          'aashish22bansal/Spring-Boot-Unit-Testing-with-JUnit-Mockito-and-MockMvc', 
          'aashish22bansal/Java-Programming'
        ], // List of repository names to display. example: ['aashish22bansal/my-project1', 'aashish22bansal/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Text Summarizer',
          description:
            '',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/aashish22bansal/Text-Summarizer',
        },
        {
          title: 'SMS-Spam-Detection-using-Machine-Learning-Techniques',
          description:
            '',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/aashish22bansal/SMS-Spam-Detection-using-Machine-Learning-Techniques',
        },
        {
          title: 'Breast-Cancer-Detection-Using-Machine-Learning-Techniques',
          description:
            '',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/aashish22bansal/Breast-Cancer-Detection-Using-Machine-Learning-Techniques',
        },
        {
          title: 'Twitter-Sentiment-Analysis-Using-Bi-LSTM',
          description:
            '',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/aashish22bansal/Twitter-Sentiment-Analysis-Using-Bi-LSTM',
        },
        {
          title: 'Fake-News-Detection',
          description:
            'This is a simple model which first vectorizes the training data using TF-IDF and then uses Passive Aggressive Classifier to train on the input data.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/aashish22bansal/Fake-News-Detection',
        },
        {
          title: 'ITE1015-Soft-Computing-Project-Skin-Cancer-Detection',
          description:
            'The project is a Transfer Learning and CNN trained model which can predict whether the patient has a suffering from Cancer or not by checking the images of the infected areas on the body. The model has been trained on a variety of images through which it predicts the required. In this project, the image file of the patient is upload into a software, which is GUI-based interface, developed with the help of Tkinter, and it consists of the model saved as a file and the software uses that to analyze the image and give the prediction which can help doctors to start with the medication way faster instead of waiting for the laboratory reports for the confirmation.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/aashish22bansal/ITE1015-Soft-Computing-Project-Skin-Cancer-Detection',
        },
        {
          title: 'ITE2013-Big-Data-Analytics-Credit-Card-Fraud-Detection',
          description:
            '',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/aashish22bansal/ITE2013-Big-Data-Analytics-Credit-Card-Fraud-Detection',
        },
        {
          title: 'ITE1008-Open-Source-Programming-E-Commerce-Website-Project ',
          description:
            'This website is built using PHP and is integrated with a database using MySQL. The website was tested using the XAMPP Server.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://github.com/aashish22bansal/ITE1008-Open-Source-Programming-E-Commerce-Website-Project',
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
    description: 'My name is Aashish Bansal and I am a Software Engineer.',
    imageURL: 'public\Aashish.jpeg',
  },
  social: {
    linkedin: 'aashish22bansal',
    twitter: 'aashish22bansal',
    mastodon: 'aashish22bansal@mastodon.social',
    researchGate: '',
    facebook: '',
    instagram: 'theinfinitelearner',
    youtube: 'aashish22bansal', // example: 'pewdiepie'
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
      'https://drive.google.com/file/d/1rs8ZMKscFZMCs7mmMZzMg1uTMLsEQE6W/view', // Empty fileUrl will hide the `Download Resume` button.
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
    {
      company: 'River Bend Data Solutions',
      position: 'Jr. Developer',
      from: 'June 2022',
      to: 'August 2022',
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
    id: 'G-0FTEKJL2DS', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
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
