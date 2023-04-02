// Code your solution in this file!
function distanceFromHqInBlocks(valueOne){
   let startingPointInBlocks = Math.abs(valueOne - 42);
   return startingPointInBlocks;
};

function distanceFromHqInFeet(valueOne){
    let convertToFeet = distanceFromHqInBlocks(valueOne) * 264;
    return convertToFeet;
};

function distanceTravelledInFeet(start, destination){
    let convertToFeet = Math.abs((destination - start) * 264);
    return convertToFeet;

};

function calculatesFarePrice(start, destination){
    let farePriceDistance = Math.abs(distanceTravelledInFeet(start, destination))
    

    if(farePriceDistance > 2500){
        return 'cannot travel that far'
    } else if(farePriceDistance > 2000){
        return 25
    } else if(farePriceDistance > 400){
        return (farePriceDistance - 400) * 0.02
    } else if(farePriceDistance < 400){
        return 0
    }

};

