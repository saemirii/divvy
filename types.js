/**
 * @namespace Divvy
 */

/**
 * @typedef {Object} Divvy.Member
 * @property {string} id - The unique ID of this member
 * @property {string} name - The name of this member
 * @property {Array<string>} expenses - An array containing expense ID's assigned to this member
 */

/**
 * @typedef {Object} Divvy.Expense
 * @property {string} id - The unique ID of this expense
 * @property {string} title - The title of this expense
 * @property {number} amount - The expense amount
 * @property {Array<string>} members - An array containing member ID's assigned to this expense
 */