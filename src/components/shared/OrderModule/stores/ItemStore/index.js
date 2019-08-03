import { observable, decorate, computed } from "mobx";

function countChoices(choices, type) {
  return Object.values(choices).filter(
    choicesArr => choicesArr.filter(choice => choice[type]).length
  ).length;
}

class ItemStore {
  dishName;
  basePrice;
  choices = {};
  selectionsRequired = 0;
  additionsRequired = 0;

  get total() {
    const extraCosts = Object.values(this.choices)
      .flat()
      .filter(choice => choice.extra)
      .reduce((acc, curr) => acc + curr.extra, 0);
    return this.basePrice + extraCosts;
  }

  get readyForCart() {
    const selections = countChoices(this.choices, "selection");
    const additions = countChoices(this.choices, "addition");
    return (
      this.selectionsRequired === selections &&
      this.additionsRequired <= additions
    );
  }
}

decorate(ItemStore, {
  dishName: observable,
  selectionsRequired: observable,
  additionsRequired: observable,
  total: computed,
  readyForCart: computed,
  choices: observable
});

export default ItemStore;
