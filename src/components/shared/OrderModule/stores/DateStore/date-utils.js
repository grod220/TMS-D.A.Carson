import parse from "date-fns/parse";
import format from "date-fns/format";
import isSunday from "date-fns/isSunday";
import getHours from "date-fns/getHours";
import addDays from "date-fns/addDays";
import startOfTomorrow from "date-fns/startOfTomorrow";
import startOfToday from "date-fns/startOfToday";

import OrderStore from "../OrderStore";
import {
  convertYYYYMMDD,
  roundToNearest15min,
  withinOpeningHours
} from "../OrderStore/order-utils";

const openingHours = {
  Sunday: {
    open: 24,
    close: 0
  },
  Monday: {
    open: 11,
    close: 21
  },
  Tuesday: {
    open: 11,
    close: 21
  },
  Wednesday: {
    open: 11,
    close: 21
  },
  Thursday: {
    open: 11,
    close: 21
  },
  Friday: {
    open: 11,
    close: 22
  },
  Saturday: {
    open: 11,
    close: 22
  }
};

const leadTimesInHours = {
  normal: {
    pickup: 1
  },
  catering: {
    delivery: 3,
    pickup: 2
  }
};

export const convert24HourTo12Format = militaryTime =>
  format(parse(militaryTime, "HH:mm", new Date()), "h:mm aa");

export const extendedDateFormat = htmlDate =>
  format(parseHTMLDateStr(htmlDate), "EEEE, MMMM do y");

export const parseHTMLDateStr = htmlDate =>
  parse(htmlDate, "yyyy-MM-dd", new Date());

const convertToHTMLDateStr = dateObj => format(dateObj, "yyyy-MM-dd");

export const isOpenOnDay = dateObj => !isSunday(dateObj);

const getDayOfWeekStr = dateObj => format(dateObj, "EEEE");

export const getNextAvailableFulfillmentDate = () => {
  const today = new Date();
  const leadTimeHours =
    leadTimesInHours[OrderStore.orderType][OrderStore.fulfillmentOption];
  if (
    getHours(today) + leadTimeHours <
    openingHours[getDayOfWeekStr(today)].close
  ) {
    return startOfToday();
  } else {
    return isSunday(startOfTomorrow())
      ? addDays(startOfToday(), 2)
      : startOfTomorrow();
  }
};

export const getNextAvailableFulfillmentDateStr = () =>
  convertToHTMLDateStr(getNextAvailableFulfillmentDate());

export const getNextAvailableFulfillmentTime = () => {
  const leadTimeHours =
    leadTimesInHours[OrderStore.orderType][OrderStore.fulfillmentOption];
  const today = new Date();
  today.setHours(today.getHours() + leadTimeHours);
  const nextAvailableToday = roundToNearest15min(
    `${today.getHours()}:${today.getMinutes()}`
  );
  if (
    new Date().getDay() ===
      convertYYYYMMDD(OrderStore.dateStore.fulfillmentDate).getDay() &&
    withinOpeningHours(nextAvailableToday)
  ) {
    return nextAvailableToday;
  } else {
    return "11:00";
  }
};
