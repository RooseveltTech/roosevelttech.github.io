import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  aws,
  tailwind,
  azure,
  django,
  git,
  python,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  // carrent,
  // jobit,
  // tripguide,
  redis,
  ar_sharp,
  games,
  whisper,
  libertypay,
  paybox,
  datafestafrica,
  liberty,
  vendboss

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Software Engineer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Programmer",
    icon: creator,
  },
];

const technologies = [
    {
        name: "Python",
        icon: python,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Django",
        icon: django,
    },
    {
        name: "Redis",
        icon: redis,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "Azure",
        icon: azure,
    },
    {
        name: "AWS",
        icon: aws,
    },
    {
        name: "docker",
        icon: docker,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    }

];

const experiences = [
  {
    title: "Software Engineer II",
    company_name: "VendBoss (Liberty Assured Limited)",
    icon: liberty,
    iconBg: "#E6DEDD",
    date: "May 2025 - Present",
    points: [
        "Served as Lead Developer for the value added service (VAS) platform using WhatsApp integration. (https://vendboss.org).",
        "Designed and developed secure automated features for utility bill payments, user onboarding, account funding, and real-time customer support across WhatsApp and Web channels.",
        "Acted as Core Maintainer of the services, implementing automated notifications to drive timely user actions and improve engagement.",
        "Built AI-powered services for payment tracking, customer complaint management, and an intelligent chat interface to deliver seamless client support.",
        "Leveraged asynchronous programming to enable concurrent multi-client interactions, ensuring high responsiveness and scalability.",
        "Developed a commission system with automated withdrawal functionality, boosting user retention and platform loyalty."
    ],
  },
  {
    title: "Software Engineer II",
    company_name: "Paybox360 (Liberty Assured Limited)",
    icon: liberty,
    iconBg: "#E6DEDD",
    date: "April 2023 - Present",
    points: [
        "Led backend development for the full-cycle development of the Paybox360 HR Management Platform (https://home.paybox360.com).",
        "Designed and implemented scalable, secure backend systems with strong emphasis on performance, reliability, and alignment with business objectives with over 10,000 users.",
        "Developed core modules including Time & Attendance, Performance Management, and Payroll to streamline HR operations and improve efficiency.",
        "Built a Geo-fencing service that enables employers to accurately track employee attendance during onsite activities.",
        "Automated Pension and Tax calculators to ensure businesses remain compliant with the latest regulatory policies.",
        "Oversaw the successful disbursement of over 2 billion Naira in payroll payments and over 250 million Naira in salary advance loans through the platform.",
        "Wrote comprehensive unit and integration tests, achieving 98% test coverage as the project benchmark for code quality and reliability."
    ],
  },
  {
    title: "Software Engineer II",
    company_name: "LibertyPay (Liberty Assured Limited)",
    icon: liberty,
    iconBg: "#E6DEDD",
    date: "May 2022 - Present",
    points: [
        "Developed and integrated multiple payment gateways for web and mobile platforms at LibertyPay, increasing transaction success rate by 99.9% and supporting higher daily transaction volume (https://libertypayng.com).",
        "Led the integration of physical and virtual card payment services, expanding payment options and contributing to a 100% growth in card-related transactions.",
        "Integrated third-party notification services (email, SMS, and text) for withdrawals and transfers, resulting in improved user satisfaction and a reduction in failed transaction follow-ups.",
        "Debugged and fixed critical Quality Assurance tickets, enhancing operational performance and reducing system downtime by 99.9%.",
        "Maintained Float account systems to ensure reliable and timely transaction processing.",
        "Implemented face and address verification mechanisms, significantly reducing fraudulent activities and strengthening overall platform security.",
        "Led the platform that has successfully processed over 5 billion naira in total transactions."
    ],
  },
  {
    title: "Full stack Developer (Volunteer)",
    company_name: "DataFestAfrica",
    icon: datafestafrica,
    iconBg: "#383E56",
    date: "March 2022 - November 2024",
    points: [
        "Led the complete redesign of the DataFestAfrica website, delivering a modern, user-friendly platform for the annual event (https://www.datacommunityafrica.org/)",
        "Integrated seamless ticket and merchandise purchasing systems with automated notifications, streamlining yearly event registrations and sales.",
        "Developed key interactive features including a countdown timer, hackathon registration portal, and event policy guidelines to enhance user experience.",
        "Utilized GitHub Actions and Azure Pipelines for efficient CI/CD operations, ensuring reliable deployment and smooth project workflows."
    ],
  }
];


const testimonials = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
];

const projects = [
  {
    name: "AR Sharp",
    description:
      "A framework built from scratch from the C# Programming Language to create a fullstack webpage easily",
    tags: [
      {
        name: "C-Sharp",
        color: "blue-text-gradient",
      },
    //   {
    //     name: "redux",
    //     color: "green-text-gradient",
    //   },
    //   {
    //     name: "tailwind",
    //     color: "pink-text-gradient",
    //   },
    //   {
    //     name: "typescript",
    //     color: "blue-text-gradient",
    //   },
    ],
    image: ar_sharp,
    source_code_link: "https://github.com/RooseveltTech/ARSharp.Net",
  },
  {
    name: "Paybox360",
    description:
      "A web application for to manage employees and payroll",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "blue-text-gradient",
      },
      {
        name: "celery",
        color: "pink-text-gradient",
      },
      {
        name: "api",
        color: "blue-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "ci/cd",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: paybox,
    source_code_link: "https://home.paybox360.com/",
  },
  {
    name: "Wise Winn",
    description:
      "An online jackpot lottery platform, with amazing game options to win cash prize and others",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "redis",
        color: "pink-text-gradient",
      },
      {
        name: "celery",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "ci/cd",
        color: "blue-text-gradient",
      },
      {
        name: "postgres",
        color: "blue-text-gradient",
      },
    ],
    image: games,
    source_code_link: "https://wisewinn.com/",
  },
  {
    name: "Liberty Pay",
    description:
      "A financial application that enables users to make transactions, pay bills, transfer funds, and more",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },

      {
        name: "redis",
        color: "blue-text-gradient",
      },
      {
        name: "celery",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "ci/cd",
        color: "blue-text-gradient",
      },     
    ],
    image: libertypay,
    source_code_link: "https://www.libertypayng.com/",
  },
  {
    name: "VendBoss",
    description:
      "A WhatsApp and web platform for buying Utility bills like airtime, data, power, etc.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "django",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },

      {
        name: "redis",
        color: "blue-text-gradient",
      },
      {
        name: "celery",
        color: "pink-text-gradient",
      },
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "aws",
        color: "blue-text-gradient",
      },
      {
        name: "Git",
        color: "blue-text-gradient",
      },
      {
        name: "ci/cd",
        color: "blue-text-gradient",
      },
      {
        name: "soap",
        color: "greeb-text-gradient",
      },
      {
        name: "restapi",
        color: "blue-text-gradient",
      },
      {
        name: "n8n",
        color: "pink-text-gradient",
      },
      {
        name: "scikit",
        color: "pink-text-gradient",
      },
      {
        name: "whatsapp",
        color: "green-text-gradient",
      },
      {
        name: "mqtt",
        color: "pink-text-gradient",
      },
    ],
    image: vendboss,
    source_code_link: "https://www.vendboss.org/",
  },
];

export { services, technologies, experiences, testimonials, projects };
