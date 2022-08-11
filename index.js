const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(num) {
    return function(fare) {
        return num * fare
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, fn) {
    if (fn === returnFirstTwoDrivers){
        return returnFirstTwoDrivers(arrayOfDrivers)
    } else if (fn === returnLastTwoDrivers){
        return returnLastTwoDrivers(arrayOfDrivers)
    }
}