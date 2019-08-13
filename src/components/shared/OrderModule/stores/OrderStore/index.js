import { observable, decorate, computed, reaction } from "mobx";
import {
  withinOpeningHours,
  distanceFromTMS,
  getNextAvailableFulfillmentDate,
  withinLeadTime
} from "./order-utils";
import * as Sentry from "@sentry/browser";
import addZero from "../../../../../sharedUtilities/addZero";

class OrderStore {
  constructor() {
    reaction(
      () => this.deliveryLocation,
      this.handleDeliverLocationUpdate.bind(this)
    );
    reaction(
      () => this.fulfillmentDate,
      () => {
        if (this.fulfillmentTime) this.fulfillmentTime = this.fulfillmentTime;
      }
    );
    reaction(
      () => this.fulfillmentOption,
      () => {
        if (this.fulfillmentTime) this.fulfillmentTime = this.fulfillmentTime;
      }
    );
  }

  orderType;
  activeTab;
  fulfillmentOption;

  fulfillmentDateError = false;
  _sanitizedfulfillmentDate;
  get fulfillmentDate() {
    return this._sanitizedfulfillmentDate;
  }
  set fulfillmentDate(proposedDateStr) {
    this._sanitizedfulfillmentDate = proposedDateStr;
    if (
      new Date(proposedDateStr) < new Date(getNextAvailableFulfillmentDate()) ||
      new Date(proposedDateStr).getDay() === 0
    ) {
      this.fulfillmentDateError = true;
    } else {
      this.fulfillmentDateError = false;
    }
  }

  fulfillmentTimeError = false;
  _sanitizedTime;
  get fulfillmentTime() {
    return this._sanitizedTime;
  }
  set fulfillmentTime(proposedTimeStr) {
    this._sanitizedTime = proposedTimeStr;
    if (
      !withinOpeningHours(proposedTimeStr) ||
      !withinLeadTime(proposedTimeStr)
    ) {
      this.fulfillmentTimeError = true;
    } else {
      this.fulfillmentTimeError = false;
    }
  }

  _validatedNumberOfGuests = 0;
  get numberOfGuests() {
    return this._validatedNumberOfGuests;
  }
  set numberOfGuests(num) {
    if (num > 0) {
      this._validatedNumberOfGuests = num;
    }
  }

  contactName;
  contactNumber;
  specialInstructions;
  shoppingCart = [];
  tip = 0;

  get tipPercent() {
    return ((this.tip / Number(this.subTotal)) * 100).toFixed();
  }

  get subTotal() {
    return addZero(
      this.shoppingCart.reduce((acc, item) => acc + item.total, 0).toFixed(2)
    );
  }

  get tax() {
    return addZero((Number(this.subTotal) * 0.07).toFixed(2));
  }

  deliveryLocation; // Google Places obj
  _deliveryMiles;
  _loadingMiles = false;
  _errorFromGoogle = false;

  handleDeliverLocationUpdate(googlePlacesObj) {
    this._loadingMiles = true;
    distanceFromTMS(googlePlacesObj)
      .then(miles => {
        this._deliveryMiles = miles;
        this._loadingMiles = false;
      })
      .catch(e => {
        console.log(e);
        Sentry.init({
          dsn: "https://37c553e6cb9c4d7b91443519ccd448a9@sentry.io/1514998"
        });
        Sentry.captureException(e);
        this._loadingMiles = false;
        this._errorFromGoogle = true;
      });
  }

  get deliveryFee() {
    if (this._loadingMiles) {
      return "Calculating cost ⌛";
    }

    if (!this.deliveryLocation) {
      return "Select delivery location";
    }

    if (this._errorFromGoogle) {
      return "🚫 error with Google Maps";
    }

    if (this._deliveryMiles < 10) {
      if (Number(this.subTotal) >= 150) {
        return 20;
      } else {
        return "⚠️ Minimum cart total for this distance is $150";
      }
    } else if (this._deliveryMiles < 15) {
      if (Number(this.subTotal) >= 175) {
        return 25;
      } else {
        return "⚠️ Minimum cart total for this distance is $175";
      }
    } else if (this._deliveryMiles < 21) {
      if (Number(this.subTotal) >= 200) {
        return 40;
      } else {
        return "⚠️ Minimum cart total for this distance is $200";
      }
    } else {
      return "🚫 Distance too far for delivery 😢";
    }
  }

  get grandTotal() {
    let total = Number(this.subTotal) + Number(this.tip) + Number(this.tax);
    if (
      this.fulfillmentOption === "delivery" &&
      typeof this.deliveryFee === "number"
    ) {
      total += this.deliveryFee;
    }
    return addZero(total.toFixed(2));
  }

  get inputFieldsReady() {
    const baseQualificationsSatisfied =
      Boolean(this.contactName) &&
      Boolean(this.contactNumber) &&
      Boolean(this._sanitizedfulfillmentDate) &&
      !this.fulfillmentDateError &&
      Boolean(this._sanitizedTime) &&
      !this.fulfillmentTimeError;
    if (
      this.orderType === "normal" ||
      (this.orderType === "catering" && this.fulfillmentOption === "pickup")
    ) {
      return baseQualificationsSatisfied;
    } else {
      return (
        baseQualificationsSatisfied &&
        Boolean(this.deliveryLocation) &&
        typeof this.deliveryFee === "number" &&
        Number(this.numberOfGuests) > 0
      );
    }
  }
}

decorate(OrderStore, {
  activeTab: observable,
  orderType: observable,
  shoppingCart: observable,
  fulfillmentOption: observable,
  _sanitizedfulfillmentDate: observable,
  fulfillmentDate: computed,
  fulfillmentDateError: observable,
  _sanitizedTime: observable,
  fulfillmentTime: computed,
  fulfillmentTimeError: observable,
  contactName: observable,
  contactNumber: observable,
  deliveryLocation: observable,
  subTotal: computed,
  tip: observable,
  grandTotal: computed,
  tax: computed,
  tipPercent: computed,
  specialInstructions: observable,
  inputFieldsReady: computed,
  deliveryFee: computed,
  _deliveryMiles: observable,
  _loadingMiles: observable,
  _errorFromGoogle: observable,
  _validatedNumberOfGuests: observable,
  numberOfGuests: computed
});

export default new OrderStore();
