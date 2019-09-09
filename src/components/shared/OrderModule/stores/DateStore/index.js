import { observable, decorate, reaction } from "mobx";
import { isBefore } from "date-fns";
import {
  getNextAvailableFulfillmentDate,
  isOpenOnDay,
  parseHTMLDateStr,
  withinOpeningHours,
  withinLeadTime,
  parseHTMLDateAndTime
} from "./date-utils";

class DateStore {
  fulfillmentDate;
  fulfillmentDateError = false;
  fulfillmentTime;
  fulfillmentTimeError = false;

  constructor() {
    reaction(
      () => this.fulfillmentDate,
      htmlDateStr => {
        const proposedDate = parseHTMLDateStr(htmlDateStr);
        this.fulfillmentDateError =
          !isOpenOnDay(proposedDate) ||
          isBefore(proposedDate, getNextAvailableFulfillmentDate());
        this.validateTime();
      }
    );

    reaction(() => this.fulfillmentTime, () => this.validateTime());
  }

  validateTime() {
    const proposedDateObj = parseHTMLDateAndTime(
      this.fulfillmentDate,
      this.fulfillmentTime
    );
    this.fulfillmentTimeError = !!(
      this.fulfillmentTime &&
      (!withinOpeningHours(proposedDateObj) || !withinLeadTime(proposedDateObj))
    );
  }
}

decorate(DateStore, {
  fulfillmentDate: observable,
  fulfillmentDateError: observable,
  fulfillmentTime: observable,
  fulfillmentTimeError: observable
});

export default DateStore;
