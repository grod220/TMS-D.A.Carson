import { observable, decorate, reaction } from "mobx";
import {
  convertYYYYMMDD,
  getNextAvailableFulfillmentDate,
  withinOpeningHours,
  withinLeadTime
} from "../OrderStore/order-utils";

class DateStore {
  fulfillmentDate;
  fulfillmentDateError = false;
  fulfillmentTime;
  fulfillmentTimeError = false;

  constructor() {
    reaction(
      () => this.fulfillmentDate,
      dateStr => {
        this.fulfillmentDateError =
          convertYYYYMMDD(dateStr) <
            convertYYYYMMDD(getNextAvailableFulfillmentDate()) ||
          convertYYYYMMDD(dateStr).getDay() === 0;
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
