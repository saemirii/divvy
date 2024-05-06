import {nanoid} from 'nanoid';

export const splitEvenly = {
  /**
   * An array of objects containing member id's and name
   * @type {Array<{mem_id: String, mem_name: String}>}
   */
  members: [],

  /**
   * An array of objects containing expense id's, title, and amount
   * @type {Array<{exp_id: String, exp_name: String, exp_amount: Number}>}
   */
  expenses: [],

  /**
   * This function creates a new member object and appends it to the members state array
   * @param {HTMLInputElement} inputEl
   * @return null
   */
  addNewMember(inputEl) {
    // Validate name to make sure it doesn't start with empty spaces
    if (inputEl.value.trim() === '') {
      return null;
    }

    const newMember = {
      mem_id: nanoid(7),
      mem_name: inputEl.value.trim()
    };
    this.members.push(newMember);
    inputEl.value = '';

  },

  /**
   * This function creates a new expenses object and appends it to the expenses state array
   * @param {HTMLInputElement} inputNameEl
   * @param {HTMLInputElement} inputAmountEl
   */
  addNewExpense(inputNameEl, inputAmountEl) {
    // Validate name to make sure it doesn't start with empty spaces
    if (inputNameEl.value.trim() === '' || inputAmountEl.value.trim() === '') {
      return null;
    }

    // Validate amount to make sure it's a numerical value
    if (isNaN(parseFloat(inputAmountEl.value.trim()))) {
      return null;
    }

    const newExpense = {
      exp_id: nanoid(7),
      exp_name: inputNameEl.value.trim(),
      exp_amount: parseFloat(inputAmountEl.value.trim())
    };
    this.expenses.push(newExpense);
    inputNameEl.value = '';
    inputAmountEl.value = '';
  },

  sayHello() {
    console.log(this.expenses)
  }
}