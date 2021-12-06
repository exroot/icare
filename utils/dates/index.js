import moment from "moment";

const tomorrow = moment().add(1, 'days').format("YYYY-MM-DD");
const amonthAgo = moment().add(-28, 'days').format("YYYY-MM-DD");

export const tomorrowsDate = tomorrow
export const amonthAgoDate = amonthAgo
