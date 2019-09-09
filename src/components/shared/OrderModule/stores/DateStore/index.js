import { observable, decorate, reaction } from "mobx";
import { isBefore } from "date-fns";
import {
  getNextAvailableFulfillmentDate,
  isOpenOnDay,
  parseHTMLDateStr,
  withinOpeningHours,
  parseHTMLTimeStr, withinLeadTime
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
    const proposedTime = parseHTMLTimeStr(this.fulfillmentTime);
    this.fulfillmentTimeError = !!(
      this.fulfillmentTime &&
      (!withinOpeningHours(proposedTime) || !withinLeadTime(proposedTime))
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
