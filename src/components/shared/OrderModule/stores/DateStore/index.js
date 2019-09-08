import { observable, decorate, computed, reaction } from "mobx";

class DateStore {
  constructor() {
    reaction(
      () => this.fulfillmentDate,
      () => {
        // need to do verifications here
        if (this.fulfillmentTime) this.fulfillmentTime = this.fulfillmentTime;
      }
    );
    reaction(
      () => this.fulfillmentOption,
      () => {
        // if (this.fulfillmentTime) this.fulfillmentTime = this.fulfillmentTime;
      }
    );
  }

  fulfillmentDateError = false;
  fulfillmentDate;

  // set fulfillmentDate(proposedDateStr) {
  // this._sanitizedfulfillmentDate = proposedDateStr;
  // if (
  //   !this._sanitizedfulfillmentDate ||
  //   convertYYYYMMDD(proposedDateStr) <
  //     convertYYYYMMDD(getNextAvailableFulfillmentDate()) ||
  //   convertYYYYMMDD(proposedDateStr).getDay() === 0
  // ) {
  //   this.fulfillmentDateError = true;
  // } else {
  //   this.fulfillmentDateError = false;
  // }
  // }

  fulfillmentTimeError = false;
  fulfillmentTime;
  // set fulfillmentTime(proposedTimeStr) {
  //   this._sanitizedTime = proposedTimeStr;
  //   if (
  //     !withinOpeningHours(proposedTimeStr) ||
  //     !withinLeadTime(proposedTimeStr)
  //   ) {
  //     this.fulfillmentTimeError = true;
  //   } else {
  //     this.fulfillmentTimeError = false;
  //   }
  // }
}

decorate(DateStore, {
  fulfillmentDate: observable,
  fulfillmentDateError: observable,
  fulfillmentTime: observable,
  fulfillmentTimeError: observable
});

export default DateStore;
