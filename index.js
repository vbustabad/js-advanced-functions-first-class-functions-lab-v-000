// Code your solution in this file!

const returnFirstTwoDrivers = function (drivers) { return drivers.slice(0, 2) };

const returnLastTwoDrivers = function (drivers) { return drivers.slice(-2) };

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  }
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers, function) {
  if (function === returnFirstTwoDrivers) {
    drivers.slice(0, 2);
  }
  else {
    drivers.slice(-2);
  }
};
