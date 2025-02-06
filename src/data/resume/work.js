/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Amazon',
    position: 'Apprenticeship',
    url: 'https://www.amazon.science/academic-engagements/amazon-launches-annual-ml-summer-school-in-india',
    startDate: '2024-07-01',
    endDate: '2024-08-01',
    summary: 'I was selected as a trainee for the Amazon ML Summer School 2024, where I gained insights into Amazon work culture and learned various machine learning and AI concepts through exposure to ongoing projects.',
    highlights: [],
  },
  {
    name: 'Geeks for Geeks',
    position: 'Technical Content Writer',
    url: 'https://www.geeksforgeeks.org/',
    startDate: '2023-11-01',
    endDate: '2024-05-01',
    summary: 'I verified and enhanced technical articles for accuracy and clarity, ensuring adherence to editorial guidelines. Authored original articles on various programming and technology topics, contributing significantly to the content library. Collaborated with the editorial team to update and improve existing content with relevant examples and explanations, demonstrating strong technical knowledge and writing skills.',
    highlights: [],
  },
];

export default work;
