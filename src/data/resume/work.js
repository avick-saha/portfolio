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
    name: 'PantaPulao',
    position: 'Co-founder & C.T.O.',
    url: 'https://pantapulao.com',
    startDate: '2020-10-08',
    summary: 'PantaPulao is a food delivery company. It also makes its own food and provides grocery to some rural areas. A growing company, trusted by 1000+ customers. Having a vision to bring quality food in common folks life.',
    highlights: [
      'Makes fresh and quality food.',
      'Easy to use app',
      'Affordable Price',
      'Takes customized order',
    ],
  },
];

export default work;
