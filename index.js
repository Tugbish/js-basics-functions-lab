function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42)
}

function distanceFromHqInFeet(someValue) {
    let block = distanceFromHqInBlocks(someValue);
    return block * 264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264
}

function calculatesFarePrice(startBlock, endBlock) {
    let distance = distanceTravelledInFeet(startBlock, endBlock);
    if (distance < 400) {
        return 0;
    }
    else if (distance > 400 && distance < 2000) {
        return (distance - 400) * 0.02;
    }
    else if (distance > 2000 && distance < 2500) {
        return 25;
    } else if (distance > 2500) {
        return 'cannot travel that far';
    }
}


