/* global google */
import { insertGoogleMapsScript } from "../../Checkout/Fulfillment/DeliveryAutocomplete/autocomplete";
import OrderStore from "../OrderStore";

const openingHours = {
  0: {
    // Sunday
    open: 24,
    closes: 0
  },
  1: {
    // Monday
    open: 11,
    close: 21
  },
  2: {
    // Tuesday
    open: 11,
    close: 21
  },
  3: {
    // Wednesday
    open: 11,
    close: 21
  },
  4: {
    // Thursday
    open: 11,
    close: 21
  },
  5: {
    // Friday
    open: 11,
    close: 22
  },
  6: {
    // Saturday
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

const yyyMMDD = date => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const getNextAvailableFulfillmentDate = () => {
  const today = new Date();
  const leadTimeHours =
    leadTimesInHours[OrderStore.orderType][OrderStore.fulfillmentOption];
  if (today.getHours() + leadTimeHours >= openingHours[today.getDay()].close) {
    const nextAvailableDate = new Date();
    nextAvailableDate.setDate(
      today.getDay() !== 6 ? today.getDate() + 1 : today.getDate() + 2
    );
    return yyyMMDD(nextAvailableDate);
  }
  return yyyMMDD(today);
};

export const withinOpeningHours = timeStr => {
  const hour = Number(timeStr.split(":")[0]);
  const dayProposed = new Date(OrderStore.fulfillmentDate).getDay();
  return (
    hour >= openingHours[dayProposed].open &&
    hour < openingHours[dayProposed].close
  );
};

export const withinLeadTime = timeStr => {
  const proposedTimeObj = new Date(`${OrderStore.fulfillmentDate} ${timeStr}`);
  const nextAvailable = new Date(
    `${getNextAvailableFulfillmentDate()} ${getNextAvailableFulfillmentTime()}`
  );
  return proposedTimeObj >= nextAvailable;
};

export const getNextAvailableFulfillmentTime = () => {
  const leadTimeHours =
    leadTimesInHours[OrderStore.orderType][OrderStore.fulfillmentOption];
  const today = new Date();
  today.setHours(today.getHours() + leadTimeHours);
  const nextAvailableToday = roundToNearest15min(
    `${today.getHours()}:${today.getMinutes()}`
  );
  if (withinOpeningHours(nextAvailableToday)) {
    return nextAvailableToday;
  } else {
    return "11:00";
  }
};

export const getOneYearFromTodayStr = () => {
  const dateObj = new Date();
  dateObj.setFullYear(dateObj.getFullYear() + 1);
  return yyyMMDD(dateObj);
};

export const roundToNearest15min = timeStr => {
  const splitTime = timeStr.split(":");
  const minutes = Number(splitTime[1]);
  const nearest15 = Math.ceil(minutes / 15) * 15;
  splitTime[1] = nearest15 === 0 ? "00" : nearest15.toString();
  if (splitTime[1] === "60") {
    splitTime[0] = (Number(splitTime[0]) + 1).toString();
    splitTime[1] = "00";
  }
  return splitTime.join(":");
};

const getDistance = (TMS, deliveryLocation) =>
  new Promise((resolve, reject) => {
    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [TMS],
        destinations: [deliveryLocation],
        travelMode: "DRIVING",
        unitSystem: google.maps.UnitSystem.IMPERIAL
      },
      result => {
        resolve(result);
      }
    );
  });

export const distanceFromTMS = async googlePlacesObj => {
  await insertGoogleMapsScript();

  const TMSLocation = new google.maps.LatLng(28.539307, -81.286839);
  const result = await getDistance(
    TMSLocation,
    googlePlacesObj.geometry.location
  );
  const distanceInMiles = Number(
    result.rows[0].elements[0].distance.text.split(" ")[0]
  );
  return distanceInMiles;
};

export const formatGooglePlacesObj = ({ name, formatted_address }) => {
  if (formatted_address.includes(name)) {
    return formatted_address;
  } else {
    return `${name}, ${formatted_address}`;
  }
};
