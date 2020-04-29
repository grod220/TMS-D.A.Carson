import {
  addDays,
  addMinutes,
  addYears,
  format,
  getHours,
  setHours,
  isSunday,
  parse,
  roundToNearestMinutes,
  startOfToday,
  isAfter,
  isEqual,
  startOfTomorrow,
  endOfYesterday
} from "date-fns";

import OrderStore from "../OrderStore";

const openingHours = {
  Sunday: {
    open: 24,
    close: 0
  },
  Monday: {
    open: 15,
    close: 21
  },
  Tuesday: {
    open: 15,
    close: 21
  },
  Wednesday: {
    open: 15,
    close: 21
  },
  Thursday: {
    open: 15,
    close: 21
  },
  Friday: {
    open: 11,
    close: 21
  },
  Saturday: {
    open: 11,
    close: 21
  }
};

const leadTimesInMinutes = {
  normal: {
    pickup: 30
  },
  catering: {
    delivery: 180,
    pickup: 120
  }
};

/* All time is adjusted to EST */
export const currentTimeEST = () => new Date(
    new Date().toLocaleString("en-US", {timeZone: "America/New_York"})
);

export const convert24HourTo12Format = militaryTime =>
  format(parseHTMLTimeStr(militaryTime), "h:mm aa");

export const parseHTMLTimeStr = htmlTime =>
  parse(htmlTime, "HH:mm", currentTimeEST());

export const extendedDateFormat = htmlDate =>
  format(parseHTMLDateStr(htmlDate), "EEEE, MMMM do y");

export const parseHTMLDateStr = htmlDate =>
  parse(htmlDate, "yyyy-MM-dd", startOfToday());

const getDayOfWeekStr = dateObj => format(dateObj, "EEEE");

export const isDateInPast = proposedStartOfDay =>
  endOfYesterday() > proposedStartOfDay;

export const getNextAvailableFulfillmentDate = () => {
  const today = currentTimeEST();
  const leadTimeHours =
    leadTimesInMinutes[OrderStore.orderType][OrderStore.fulfillmentOption] / 60;
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

const convertToHTMLDateStr = dateObj => format(dateObj, "yyyy-MM-dd");

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
  const leadTimeMinutes =
    leadTimesInMinutes[OrderStore.orderType][OrderStore.fulfillmentOption];
  const now = currentTimeEST();
  const roundedPlusLeadTime = roundToNearestMinutes(
    addMinutes(now, leadTimeMinutes),
    { nearestTo: 5 }
  );
  if (withinOpeningHours(roundedPlusLeadTime)) {
    return format(roundedPlusLeadTime, "HH:mm");
  } else if (isSunday(startOfTomorrow())) {
    const dayAfterTomorrow = addDays(startOfTomorrow(), 1);
    const dayAfterTomorrowNameStr = getDayOfWeekStr(dayAfterTomorrow);
    const dayAfterTomorrowOpeningHour = openingHours[dayAfterTomorrowNameStr].open
    return format(setHours(startOfTomorrow(), dayAfterTomorrowOpeningHour), "HH:mm")
  } else {
    const tomorrowNameStr = getDayOfWeekStr(startOfTomorrow())
    const tomorrowsOpeningHour = openingHours[tomorrowNameStr].open
    return format(setHours(startOfTomorrow(), tomorrowsOpeningHour), "HH:mm")
  }
};

export const getOneYearFromTodayStr = () =>
  convertToHTMLDateStr(addYears(startOfToday(), 1));

export const parseHTMLDateAndTime = (proposedDateStr, proposedTimeStr) =>
  parse(
    `${proposedDateStr} ${proposedTimeStr}`,
    "yyyy-MM-dd HH:mm",
    currentTimeEST()
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
