import { observable, decorate, reaction } from "mobx";
import isBefore from "date-fns/isBefore";
import { withinOpeningHours, withinLeadTime } from "../OrderStore/order-utils";
import {
  getNextAvailableFulfillmentDate,
  isOpenOnDay,
  parseHTMLDateStr
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
    this.fulfillmentTimeError = !!(
      this.fulfillmentTime &&
      (!withinOpeningHours(this.fulfillmentTime) ||
        !withinLeadTime(this.fulfillmentTime))
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
