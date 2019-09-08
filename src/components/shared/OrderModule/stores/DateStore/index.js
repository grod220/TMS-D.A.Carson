import { observable, decorate, reaction } from "mobx";
import {
  convertYYYYMMDD,
  getNextAvailableFulfillmentDate,
  withinOpeningHours,
  withinLeadTime
} from "../OrderStore/order-utils";

class DateStore {
  constructor() {
    reaction(
      () => this.fulfillmentDate,
      dateStr => {
        if (
          convertYYYYMMDD(dateStr) <
            convertYYYYMMDD(getNextAvailableFulfillmentDate()) ||
          convertYYYYMMDD(dateStr).getDay() === 0
        ) {
          this.fulfillmentDateError = true;
        } else {
          this.fulfillmentDateError = false;
        }
        this.validateTime();
      }
    );

    reaction(() => this.fulfillmentTime, () => this.validateTime());
  }

  fulfillmentDateError = false;
  fulfillmentDate;
  fulfillmentTimeError = false;
  fulfillmentTime;

  validateTime() {
    if (
      this.fulfillmentTime &&
      (!withinOpeningHours(this.fulfillmentTime) ||
        !withinLeadTime(this.fulfillmentTime))
    ) {
      this.fulfillmentTimeError = true;
    } else {
      this.fulfillmentTimeError = false;
    }
  }
}

decorate(DateStore, {
  fulfillmentDate: observable,
  fulfillmentDateError: observable,
  fulfillmentTime: observable,
  fulfillmentTimeError: observable
});

export default DateStore;
