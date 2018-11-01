function produceDrivingRange (blockRange) {
    return function (start, finish) {
        let difference = (parseInt(finish) - parseInt(start))
        if (difference > blockRange){
            return `${difference - blockRange} blocks out of range`
        } else {
            return `within range by ${blockRange - difference}`
        }
    } 
}

function produceTipCalculator (percentInDecimal) {
    return function (amount) {
        return amount * percentInDecimal
    }
}

function createDriver () {
    let driverId = 0
    return class {
        constructor(name) {
          this.id = ++driverId
          this.name = name
        }
    }
}