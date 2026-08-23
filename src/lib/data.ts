// Static content for the Hope for the Poorest (HP) website, derived from the
// organizational brief provided by the client. No backend / database.

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Mission & Vision', href: '#mission' },
  { label: 'Programs', href: '#programs' },
  { label: 'Notice Board', href: '#notice' },
  { label: 'News', href: '#news' },
  { label: 'Downloads', href: '#downloads' },
  { label: 'Contact', href: '#contact' },
];

export type Slide = {
  image: string;
  eyebrow: string;
  title: string;
  description: string;
  cta: { label: string; href: string }[];
};

export const HERO_SLIDES: Slide[] = [
  {
    image:
      'https://images.pexels.com/photos/35124585/pexels-photo-35124585/free-photo-of-fishermen-on-tranquil-river-in-bangladesh.jpeg',
    eyebrow: 'Nationwide NGO · Since 2004',
    title: 'Hope for the Poorest — standing with Bangladesh\u2019s most marginalized.',
    description:
      'HP works in all 64 districts delivering primary healthcare, water, sanitation, hygiene and menstrual hygiene services — empowering the poor and ultra-poor through community-led, sustainable development.',
    cta: [
      { label: 'Explore our programs', href: '#programs' },
      { label: 'About HP', href: '#about' },
    ],
  },
  {
    image:
      'https://images.pexels.com/photos/34172771/pexels-photo-34172771/free-photo-of-children-gathering-water-from-a-communal-tap.jpeg',
    eyebrow: 'WASH Services · 64 Districts',
    title: 'Safe water & sanitation for every community.',
    description:
      'From the Sundarbans to the haors of Sylhet, HP builds flood-resilient water options, sanitation enterprises and hygiene awareness — reaching the communities mainstream development often leaves behind.',
    cta: [
      { label: 'See WASH projects', href: '#programs' },
      { label: 'Our mission', href: '#mission' },
    ],
  },
  {
    image:
      'https://images.pexels.com/photos/27170623/pexels-photo-27170623/free-photo-of-fish-farming-in-tropical-scenery.jpeg',
    eyebrow: 'Climate Resilient · Sustainable',
    title: 'Building resilience against a changing climate.',
    description:
      'Rooftop rainwater harvesting, climate-resilient sanitation and livelihood support — HP helps vulnerable families adapt and thrive in the face of floods, salinity and natural disasters.',
    cta: [
      { label: 'Climate initiatives', href: '#programs' },
      { label: 'Partner with us', href: '#contact' },
    ],
  },
  {
    image:
      'https://images.pexels.com/photos/13613219/pexels-photo-13613219.jpeg',
    eyebrow: 'Menstrual Hygiene Management',
    title: 'Dignity and health for adolescent girls.',
    description:
      'Through the Khishory social business, HP produces and markets low-cost sanitary napkins while raising awareness — making menstrual hygiene affordable and accessible for low-income communities.',
    cta: [
      { label: 'MHM programs', href: '#programs' },
      { label: 'Get in touch', href: '#contact' },
    ],
  },
];

export const STATS = [
  { value: '64', label: 'Districts of Operation', suffix: '' },
  { value: '2004', label: 'Founded', suffix: '' },
  { value: '11', label: 'Projects Delivered', suffix: '+' },
  { value: '45', label: 'Districts Reached by JISWS', suffix: '' },
];

export const FOCUS_AREAS = [
  'Primary Healthcare',
  'Water Supply',
  'Sanitation',
  'Hygiene Facilities',
  'Menstrual Hygiene Management',
  'Climate Resilient WASH',
  'Advocacy & Human Rights',
  'Good Governance',
  'Gender Equity',
  'Waste Management',
  'Food Security',
  'Livelihood',
];

export const FOUNDER = {
  name: 'Md. Shafiqual Haque Choudhury',
  lifespan: '1st January 1949 – 12th February 2021',
  role: 'Founder & First Chairperson, Hope for the Poorest (HP)',
  paragraphs: [
    'Md. Shafiqual Haque Choudhury was the founder and first chairperson of Hope for the Poorest (HP). He was born on 1st January 1949 at Naropati, Habiganj District, Sylhet Division in Bangladesh. He founded ASA in 1978. He was the advisor to the caretaker government of Bangladesh from 2006 to 2007 in the Ministry of Agriculture, Ministry of Youth and Sports, and Ministry of Cultural Affairs.',
    'He played a pioneering role in the development of Bangladesh\u2019s microfinance sector by introducing a simple, cost-effective, and sustainable model aimed at empowering the poor. Through his visionary leadership, ASA grew into one of the largest and most efficient microfinance institutions in the world.',
    'With an aim to provide a lasting contribution to poverty alleviation and inclusive development in Bangladesh he founded Hope for the Poorest (HP) in 2004, addressing the needs of the most marginalized people who are often left out of mainstream development efforts.',
  ],
};

export const EXECUTIVE_BODY = [
  { name: 'Mrs. Rabeya Akhter', designation: 'Chairperson' },
  { name: 'Md. Ariful Haque Choudhury', designation: 'Vice Chairperson' },
  { name: 'Md. Enamul Haque', designation: 'Member Secretary' },
  { name: 'Mohammed Azim Hossain', designation: 'Treasurer' },
  { name: 'Md. Taufiqul Islam Chowdhury', designation: 'Member' },
  { name: 'Md. Ashraful Haq Chowdhury', designation: 'Member' },
  { name: 'A. K. M. Aminur Rashid', designation: 'Member' },
  { name: 'Eftekher Ahmed Khan', designation: 'Executive Director, HP' },
];

export const GENERAL_BOARD = [
  { name: 'Mrs. Rabeya Akhter', designation: 'Chairperson' },
  { name: 'Md. Ariful Haque Choudhury', designation: 'Vice Chairperson' },
  { name: 'Md. Enamul Haque', designation: 'Member Secretary' },
  { name: 'Mohammed Azim Hossain', designation: 'Treasurer' },
  { name: 'Md. Taufiqul Islam Chowdhury', designation: 'Member' },
  { name: 'Md. Ashraful Haq Chowdhury', designation: 'Member' },
  { name: 'A. K. M. Aminur Rashid', designation: 'Member' },
  { name: 'Mr. Sushil Roy', designation: 'Member' },
  { name: 'Ms. Rafeza Begum', designation: 'Member' },
  { name: 'Ms. Khurshida Khatun', designation: 'Member' },
  { name: 'Ms. Sharmin Dayzee', designation: 'Member' },
];

export const SENIOR_PERSONNEL = [
  { name: 'Eftekher Ahmed Khan', designation: 'Executive Director, HP' },
  { name: 'Md. Nahidul Islam', designation: 'Finance & Admin Manager' },
  { name: 'Md. Mahfusul Alam', designation: 'Project Coordinator — JISWS' },
  { name: 'H.M. Solaiman Kabir', designation: 'Training Officer — JISWS' },
  { name: 'Md. Wahidur Rahman', designation: 'Training Officer — JISWS' },
  { name: 'Md. Kayuim', designation: 'Office Assistant' },
];

export const MISSION =
  'To ensure wellbeing of the poor through employing the community led approach and ensure the community ownership, participation, transparency and accountability, equality, gender and social justice and consider sustainability in all aspect of development.';

export const VISION =
  'HP envisages a society which would be just and democratic, healthy and enlightened, economically empowered, free from all forms of violence and legally secured, environmentally safe and climate resilient.';

export type Project = {
  name: string;
  donor: string;
  duration: string;
  category: string;
  activities: string;
  objectives?: string;
  budget: string;
  areas: string;
  beneficiary: string;
  image: string;
};

export const ONGOING_PROJECTS: Project[] = [
  {
    name: 'Sanitary Napkin Project (SNP)',
    image: 'https://images.pexels.com/photos/7692284/pexels-photo-7692284.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'ASA (Micro-finance Institute)',
    duration: '2015–2019 (continuing as social business entity \u201CKhishory\u201D)',
    category: 'Menstrual Hygiene Management (MHM)',
    activities:
      'Low-cost sanitary napkin production & marketing, raising awareness.',
    objectives:
      'Affordable and accessible low-cost sanitary napkin options for the low-income community.',
    budget: '—',
    areas: 'Dhaka, Bangladesh (1 District)',
    beneficiary: 'Community people, adolescent girls.',
  },
  {
    name: 'Pilot Project on Climate Resilient Water and Sanitation in Gaibandha',
    image: 'https://images.pexels.com/photos/32782556/pexels-photo-32782556.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'WASTE Netherlands',
    duration: '2026',
    category: 'WASH (Water & Sanitation)',
    activities:
      'Flood resilient water and sanitation entrepreneurship development, demand creation, financial inclusion.',
    objectives: undefined,
    budget: 'BDT 26,42,750',
    areas: 'Gaibandha, Bangladesh',
    beneficiary: 'Community people, WaSH entrepreneurs, MFI.',
  },
  {
    name: 'Joint Initiative for Sustainable Water and Sanitation (JISWS)',
    image: 'https://images.pexels.com/photos/34935520/pexels-photo-34935520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'Water.org',
    duration: '2022–2026',
    category: 'WASH (Water Credit)',
    activities:
      'WASH entrepreneurship development, financial linkage for water and sanitation users and entrepreneurs.',
    objectives: 'To make available sustainable water and sanitation services.',
    budget: 'BDT 3,72,08,327',
    areas:
      'Rajbari, Satkhira, Norshindi (Shibpur), Chittagong (Potiya), Norail, Natore, Rangpur (Mithapukur), Bagerhat, Meherpur, Sherpur, Lukshmipur, Cox\u2019s Bazar (Chawkoria), Madaripur, Habiganj, Sunamganj, Sirajganj (Sadar), Kurigram (Sadar), Mymensingh (Fulpur), Jamalpur (Sadar), Joypurhat, Bagura (Shibganj), Jhinaidaha (Kaliganj), Naogaon (Sadar), Gopalganj, Kustia-Bheramara, Chandpur (Sadar & Hajiganj), Chuadanga, Takurgaon-Ranishankoil, Chapainobabganj, Tangail-Sadar, Kishorganj-Sadar, Pabna-Sadar, Shariyatpur, Magura, Patuakhali-Sadar, Gaibandha-Palashbari, Netrokona-Barhatta, Dinajpur-Birganj, Jhalokati, Faridpur-Bualmari, Comilla-Chandina, Panchagar, Barguna, Pirojpur, Nilphamari-Sadar — 45 Districts, Bangladesh.',
    beneficiary: 'Community people, WaSH entrepreneurs, Microfinance institute staff.',
  },
];

export const IMPLEMENTED_PROJECTS: Project[] = [
  {
    name: 'FINISH Mondial',
    image: 'https://images.pexels.com/photos/25461701/pexels-photo-25461701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'WASTE Netherlands',
    duration: '2020',
    category: 'WASH (Sanitation)',
    activities:
      'Business and financial feasibility assessment of collection, transportation, treatment and reuse of fecal sludge and solid waste; business and financial feasibility study on the development of locally-made desludging equipment.',
    objectives: 'Studying diamond approach to sanitation business.',
    budget: 'EUR 34,061',
    areas: 'Satkhira, Bangladesh',
    beneficiary: 'WaSH entrepreneurs.',
  },
  {
    name: 'Better Life Initiative',
    image: 'https://images.pexels.com/photos/38215752/pexels-photo-38215752.png?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'Micro-finance Institution',
    duration: '2020',
    category: 'WASH (Water), Climate Justice',
    activities: 'Rooftop rainwater harvesting plant promotion.',
    objectives: 'To make climate-resilient water options available.',
    budget: 'BDT 15,00,000',
    areas: 'Satkhira, Kalaroa, Barguna — Bangladesh (3 Districts)',
    beneficiary: 'Community people, WaSH entrepreneurs.',
  },
  {
    name: 'WAI WASH SDG Bangladesh Implementation (WASH SDG)',
    image: 'https://images.pexels.com/photos/36384099/pexels-photo-36384099.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'Simavi Netherlands',
    duration: '2018–2024',
    category: 'Water, Sanitation and Hygiene (WASH)',
    activities: 'WASH entrepreneurship / private sector development.',
    objectives:
      'Affordable and accessible WASH services by local entrepreneurship development.',
    budget: 'BDT 6,35,22,091',
    areas: 'Satkhira, Kalaroa, Barguna, Kalapara, Sreemangal — Bangladesh.',
    beneficiary: 'Community people, WaSH entrepreneurs, local government representatives.',
  },
  {
    name: 'Humanitarian Support for Flood Victims in Satkhira Municipality',
    image: 'https://images.pexels.com/photos/32682425/pexels-photo-32682425.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'German Embassy',
    duration: '2016–2017',
    category: 'Humanitarian Action',
    activities: 'Resilient water option installation, healthcare services.',
    objectives: 'Humanitarian support for flood victims.',
    budget: 'EUR 50,000',
    areas: 'Satkhira, Bangladesh',
    beneficiary: 'Community people.',
  },
  {
    name: 'Capacity Building and Marketing Support (CBMS)',
    image: 'https://images.pexels.com/photos/7181105/pexels-photo-7181105.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'The World Bank (WSP)',
    duration: '2013–2015',
    category: 'WASH (Sanitation)',
    activities:
      'Sanitation entrepreneurship development, financial linkage for sanitation users and entrepreneurs.',
    objectives: 'To make available improved hygienic toilets for all.',
    budget: '—',
    areas: 'All districts of Bangladesh',
    beneficiary: '—',
  },
  {
    name: 'Sanitation for Technical Entrepreneurs (SANTE)',
    image: 'https://images.pexels.com/photos/17527938/pexels-photo-17527938.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'WASTE Netherlands',
    duration: '2013',
    category: 'WASH (Sanitation)',
    activities: 'Piloting four types of improved latrines.',
    objectives: 'Improved latrine promotion.',
    budget: '—',
    areas: 'Habigonj, Bangladesh',
    beneficiary: 'Community people, WaSH entrepreneurs.',
  },
  {
    name: 'Primary Healthcare',
    image: 'https://images.pexels.com/photos/8248293/pexels-photo-8248293.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'ASA (Micro-finance Institute)',
    duration: '2012–2014',
    category: 'Health',
    activities: 'Primary healthcare services.',
    objectives:
      'To provide affordable healthcare services for the poor and ultra-poor.',
    budget: '—',
    areas:
      'B.Baria, Satkhira, Bagerhat, Gaibandha, Netrokona, Kishoreganj, Jamalpur, Kurigram, Dhaka, Sherpur — Bangladesh (10 Districts)',
    beneficiary: 'Community people.',
  },
  {
    name: 'WASH for All',
    image: 'https://images.pexels.com/photos/16566547/pexels-photo-16566547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'WASTE Netherlands',
    duration: '2011–2016 (incl. one-year extension)',
    category: 'Water, Sanitation and Hygiene (WASH)',
    activities:
      'Sanitation entrepreneurship development, awareness raising of community people including students, installation of safe water options, promotion of low-cost sanitary napkins for adolescents.',
    objectives:
      'To achieve increased sustainable access and use of safe water and sanitation services and improved hygiene practices for women and marginalized people.',
    budget: 'BDT 2,69,32,829',
    areas: 'Satkhira and Bagerhat Municipality — Bangladesh.',
    beneficiary: 'Community people, WaSH entrepreneurs, local government representatives.',
  },
  {
    name: 'Steps for Sustainable Sanitation Services (4S)',
    image: 'https://images.pexels.com/photos/20068076/pexels-photo-20068076.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    donor: 'The World Bank (WSP)',
    duration: '2010–2013',
    category: 'WASH (Sanitation)',
    activities:
      'Sanitation entrepreneurship development, financial linkage for sanitation users and entrepreneurs.',
    objectives: 'To make available improved hygienic toilets for all.',
    budget: '—',
    areas: 'Habigonj, Tangail — Bangladesh (2 Districts)',
    beneficiary: 'Community people, WaSH entrepreneurs.',
  },
];

export type Notice = {
  date: string;
  title: string;
  tag: string;
};

export const NOTICES: Notice[] = [
  {
    date: '2026-02-12',
    title: '5th Death Anniversary of Founder Md. Shafiqual Haque Choudhury observed',
    tag: 'Commemoration',
  },
  {
    date: '2026-01-10',
    title: 'JISWS phase-II review meeting with Water.org partners, Dhaka',
    tag: 'Program',
  },
  {
    date: '2025-12-20',
    title: 'Annual General Meeting (AGM) of Hope for the Poorest held at head office',
    tag: 'Governance',
  },
  {
    date: '2025-11-05',
    title: 'New pilot on climate-resilient WASH launched in Gaibandha',
    tag: 'New Project',
  },
  {
    date: '2025-09-28',
    title: 'Khishory sanitary napkin distribution camp for adolescent girls',
    tag: 'MHM',
  },
];

export type NewsItem = {
  date: string;
  title: string;
  excerpt: string;
  tag: string;
  image: string;
};

export const NEWS: NewsItem[] = [
  {
    date: '2026-02-01',
    title: 'HP signs partnership with WASTE Netherlands for Gaibandha climate-resilient WASH pilot',
    excerpt:
      'The one-year pilot will develop flood-resilient water and sanitation enterprises, create demand and strengthen financial inclusion for vulnerable communities in Gaibandha.',
    tag: 'Partnership',
    image: 'https://images.pexels.com/photos/36733334/pexels-photo-36733334.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200',
  },
  {
    date: '2025-12-15',
    title: 'JISWS reaches 45 districts with sustainable water & sanitation services',
    excerpt:
      'Supported by Water.org, the Joint Initiative for Sustainable Water and Sanitation has now expanded WASH entrepreneurship and financial linkage across 45 districts of Bangladesh.',
    tag: 'Milestone',
    image: 'https://images.pexels.com/photos/34935520/pexels-photo-34935520.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200',
  },
  {
    date: '2025-10-10',
    title: 'Khishory social business crosses 10 years of low-cost napkin production',
    excerpt:
      'Continuing from the original Sanitary Napkin Project (2015\u20132019), the Khishory brand keeps delivering affordable menstrual hygiene products to low-income communities.',
    tag: 'MHM',
    image: 'https://images.pexels.com/photos/4492077/pexels-photo-4492077.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200',
  },
  {
    date: '2025-08-22',
    title: 'HP team joins national WASH SDG closing reflection with Simavi Netherlands',
    excerpt:
      'Marking the end of the 2018\u20132024 WASH SDG implementation, HP shared learnings on local entrepreneurship development across Satkhira, Kalaroa, Barguna, Kalapara and Sreemangal.',
    tag: 'Event',
    image: 'https://images.pexels.com/photos/7643862/pexels-photo-7643862.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200',
  },
];

export type DownloadItem = {
  title: string;
  type: 'Annual Report' | 'Circular' | 'ICBC / BCC Document';
  year: string;
};

export const DOWNLOADS: DownloadItem[] = [
  { title: 'HP Annual Report 2024', type: 'Annual Report', year: '2024' },
  { title: 'HP Annual Report 2023', type: 'Annual Report', year: '2023' },
  { title: 'HP Annual Report 2022', type: 'Annual Report', year: '2022' },
  { title: 'General Circular — AGM 2025', type: 'Circular', year: '2025' },
  { title: 'Internal Circular — HR Policy Update', type: 'Circular', year: '2024' },
  { title: 'ICBC Strategy Brief — WASH Entrepreneurship', type: 'ICBC / BCC Document', year: '2024' },
  { title: 'BCC Materials — Menstrual Hygiene Management', type: 'ICBC / BCC Document', year: '2023' },
];

export const CONTACT = {
  org: 'Hope for the Poorest (HP)',
  address: 'House # 1, Road # 2, Block # C, Mirpur, Dhaka, Bangladesh',
  phone: '+880 2 5500 0000',
  email: 'info@hp-bd.org',
  hours: 'Sunday – Thursday, 9:00 AM – 5:00 PM',
  socials: [
    { label: 'Facebook', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
};
