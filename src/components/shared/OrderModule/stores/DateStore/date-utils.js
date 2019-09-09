import {
  addDays,
  addHours,
  addYears,
  format,
  getHours,
  isSunday,
  parse,
  roundToNearestMinutes,
  startOfToday,
  startOfTomorrow,
  isAfter,
  isEqual
} from "date-fns";

import OrderStore from "../OrderStore";

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
  format(parseHTMLTimeStr(militaryTime, "HH:mm"), "h:mm aa");

export const extendedDateFormat = htmlDate =>
  format(parseHTMLDateStr(htmlDate), "EEEE, MMMM do y");

export const parseHTMLDateStr = htmlDate =>
  parse(htmlDate, "yyyy-MM-dd", new Date());

export const parseHTMLTimeStr = htmlTime =>
  parse(htmlTime, "HH:mm", new Date());

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

export const withinOpeningHours = dateObj => {
  const dayProposed = getDayOfWeekStr(dateObj);
  const hour = getHours(dateObj);
  return (
    hour >= openingHours[dayProposed].open &&
    hour < openingHours[dayProposed].close
  );
};

export const getNextAvailableFulfillmentTimeStr = () => {
  const leadTimeHours =
    leadTimesInHours[OrderStore.orderType][OrderStore.fulfillmentOption];
  const now = new Date();
  const roundedPlusLeadTime = roundToNearestMinutes(
    addHours(now, leadTimeHours),
    { nearestTo: 5 }
  );
  if (withinOpeningHours(roundedPlusLeadTime)) {
    return format(roundedPlusLeadTime, "HH:mm");
  } else {
    return "11:00";
  }
};
export const getOneYearFromTodayStr = () =>
  convertToHTMLDateStr(addYears(startOfToday(), 1));

export const parseHTMLDateAndTime = (proposedDateStr, proposedTimeStr) =>
  parse(
    `${proposedDateStr} ${proposedTimeStr}`,
    "yyyy-MM-dd HH:mm",
    new Date()
  );

export const withinLeadTime = proposedDateObj => {
  const nextAvailableTime = parseHTMLDateAndTime(
    getNextAvailableFulfillmentDateStr(),
    getNextAvailableFulfillmentTimeStr()
  );
  return (
    isAfter(proposedDateObj, nextAvailableTime) ||
    isEqual(proposedDateObj, nextAvailableTime)
  );
};
