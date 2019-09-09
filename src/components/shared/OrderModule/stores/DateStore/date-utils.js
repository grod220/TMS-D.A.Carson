import parse from "date-fns/parse";
import format from "date-fns/format";

export const convert24HourTo12Format = militaryTime => {
  return format(parse(militaryTime, "HH:mm", new Date()), "h:mm aa");
};

export const extendedDateFormat = htmlDate => {
  return format(parse(htmlDate, "yyyy-MM-dd", new Date()), "EEEE, MMMM do y");
};
