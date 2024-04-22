import "./style.css";
import Alpine from 'alpinejs';
import "htmx.org";
import {nanoid} from "nanoid";
import {capitalizeFirstLetter, roundUpToNearest} from "./util.js";

/**
 * @typedef {import('./types.js').Divvy} Divvy
 */

window.Alpine = Alpine;

// Alpine.data()
Alpine.store('divvy', {
  members: /** @type {Array<Divvy.Member>} */ [],
  expenses: /** @type {Array<Divvy.Expense>} */ [],

  isSwapVisible: false,
  isSwapError: false,
  swapText: "",
  swapTimeoutId: null,

  /**
   * Returns an array containing all members.
   * @returns {Array<Divvy.Member>} An array of all the members.
   */
  getAllMembers() {
    return this.members;
  },

  /**
   * Retrieves a member by their ID.
   * @param {string} id - The ID of the member.
   * @returns {Divvy.Member} - The member object with the matching ID.
   */
  getMemberById(id) {
    return this.members.find(member => member.id === id);
  },

  addNewMember(refInputEl) {
    if (refInputEl.value.trim() === "") {
      refInputEl.parentElement.classList.add('input-error')
      refInputEl.value = "";
      refInputEl.focus()
      this.showHideSwapEl(true)
      return;
    }
    const newMember = {
      id: nanoid(),
      name: capitalizeFirstLetter(refInputEl.value),
      expenses: []
    };
    this.members.push(newMember);
    this.swapText = newMember.name
    refInputEl.value = '';
    refInputEl.parentElement.classList.remove('input-error')
    refInputEl.focus()
    this.showHideSwapEl(false)
  },

  removeMember(id) {
    this.members = this.members.filter(member => member.id !== id);
  },

  addNewExpense(refTitleInputEl, refAmountInputEl) {
    if (refTitleInputEl.value.trim() === "") {
      refTitleInputEl.parentElement.classList.add('input-error')
      refTitleInputEl.value = "";
      refTitleInputEl.focus()
      this.showHideSwapEl(true)
      return;
    }

    //TODO: Add validation for refAmountInputEl - it should only accept numbers

    const newExpense = {
      id: nanoid(),
      title: capitalizeFirstLetter(refTitleInputEl.value.trim()),
      amount: parseFloat(refAmountInputEl.value.trim()),
      members: []
    };
    this.expenses.push(newExpense);
    refTitleInputEl.parentElement.classList.remove('input-error')
    refTitleInputEl.value = '';
    refAmountInputEl.value = '';
    refTitleInputEl.focus();
    this.swapText = newExpense.title;
    this.showHideSwapEl(false)
  },

  removeExpense(id) {
    this.expenses = this.expenses.filter(expense => expense.id !== id);
  },

  showHideSwapEl(isError) {
    if (this.swapTimeoutId) {
      this.isSwapVisible = false;
      clearTimeout(this.swapTimeoutId);
    }

    this.isSwapError = isError;
    this.isSwapVisible = true;
    this.swapTimeoutId = setTimeout(() => {
      this.isSwapVisible = false;
    }, 3000)
  },

  calcExpenseTotal() {
    let total = 0;
    this.expenses.forEach(expense => {
      total += expense.amount;
    });
    return roundUpToNearest(total);
  },

  reset() {
    this.members = [];
    this.expenses = [];
    this.isSwapVisible = false
    this.isSwapError = false
    this.swapText = ""
    document.getElementById('modal_clear').close()
  }

})

Alpine.start();