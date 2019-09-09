/* global google */
import { insertGoogleMapsScript } from "../../Checkout/Fulfillment/DeliveryAutocomplete/autocomplete";
import OrderStore from "../OrderStore";
import {
  getNextAvailableFulfillmentDateStr,
  getNextAvailableFulfillmentTime
} from "../DateStore/date-utils";

const openingHours = {
  0: {
    // Sunday
    open: 24,
    close: 0
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

const yyyMMDD = date => {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

export const withinOpeningHours = timeStr => {
  if (!OrderStore.dateStore.fulfillmentDate) return false;
  const hour = Number(timeStr.split(":")[0]);
  const dayProposed = convertYYYYMMDD(
    OrderStore.dateStore.fulfillmentDate
  ).getDay();
  return (
    hour >= openingHours[dayProposed].open &&
    hour < openingHours[dayProposed].close
  );
};

export const convertYYYYMMDD = dateStr => {
  const dateArr = dateStr.split("-");
  const year = dateArr[0];
  const month = dateArr[1];
  const day = dateArr[2];
  return new Date(year, parseInt(month) - 1, day);
};

export const withinLeadTime = timeStr => {
  const proposedTimeObj = new Date(
    `${OrderStore.dateStore.fulfillmentDate} ${timeStr}`
  );
  const nextAvailable = new Date(
    `${getNextAvailableFulfillmentDateStr()} ${getNextAvailableFulfillmentTime()}`
  );
  return proposedTimeObj >= nextAvailable;
};

export const getOneYearFromTodayStr = () => {
  const dateObj = new Date();
  dateObj.setFullYear(dateObj.getFullYear() + 1);
  return yyyMMDD(dateObj);
};

export const roundToNearest15min = timeStr => {
  const splitTime = timeStr.split(":");
  const minutes = Number(splitTime[1]);
  const nearest5 = Math.ceil(minutes / 5) * 5;
  splitTime[1] = nearest5 === 0 ? "00" : nearest5.toString();
  if (splitTime[1] === "60") {
    splitTime[0] = (Number(splitTime[0]) + 1).toString();
    splitTime[1] = "00";
  }
  if (splitTime[1].length === 1) {
    splitTime[1] = "0" + splitTime[1];
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
