import React from "react";

function formatTimeDifference(date) {
  console.log("date", date);
  const currentTimestamp = Date.now();
  const differenceInMilliseconds = currentTimestamp - date * 1000;

  const differenceInSeconds = Math.floor(differenceInMilliseconds / 1000);
  const differenceInMinutes = Math.floor(differenceInSeconds / 60);
  const differenceInHours = Math.floor(differenceInMinutes / 60);
  const differenceInDays = Math.floor(differenceInHours / 24);
  const differenceInWeeks = Math.floor(differenceInDays / 7);

  if (differenceInWeeks >= 1) {
    return `${differenceInWeeks} week${differenceInWeeks > 1 ? "s" : ""}`;
  } else if (differenceInDays >= 1) {
    return `${differenceInDays} day${differenceInDays > 1 ? "s" : ""}`;
  } else if (differenceInHours >= 1) {
    return `${differenceInHours} hour${differenceInHours > 1 ? "s" : ""}`;
  } else {
    return `${differenceInMinutes} minute${differenceInMinutes > 1 ? "s" : ""}`;
  }
}

const AverageTimeCalculator = ({ date }) => {
  const formattedDifference = formatTimeDifference(date);

  return <div>{formattedDifference}</div>;
};

const result = formatTimeDifference(1685673402);
console.log("Formatted Time Difference:", result);

export default AverageTimeCalculator;
