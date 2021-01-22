//https://github.com/niloycj7/assignment-3

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    if(kilometer <= 0){
        console.log("This value Can't measurable");
    }
    else{
        return meter;
    }
}
var output = kilometerToMeter(12);
console.log(output);




function budgetCalculator(watch, phone, laptop){
    var watchCount = watch * 50;
    var phonecount = phone * 100;
    var laptopCount = laptop * 500;
    var totalBudget = watchCount + phonecount + laptopCount;
    if(watch <=0){
        console.log("Negative value");
    }  
    else if(phone <=0){
        console.log("Negative value");
    }
    else if(laptop <=0){
        console.log("Negative value");
    }
    else{
        return totalBudget;
    }
    
}
var result = budgetCalculator(3, 5, 6);
console.log("Total Budget is: ", result);




function hotelCost(days){
    var totalCost = 0;
        if(days <=10){
            totalCost = days * 100;
        }
        else if(days <=20){
            var firstBooking = 10 * 100;
            var remainingDays = days - 10;
            var secondBooking = remainingDays * 80;
            totalCost = firstBooking + secondBooking;
        }
        else{
            var firstBooking = 10 * 100;
            var secondBooking = 10 * 80;
            var remainingDays = days - 20;
            var thirdBooking = remainingDays * 50;
            totalCost = firstBooking + secondBooking + thirdBooking;
        }
        if(totalCost < 0){
            console.log("Negative value doesn't considerable");
        }
        else{
            return totalCost;
        }
    }

var a = hotelCost(3);
console.log(a);




var friends = ["udhas", "saba", "niloy", "saif", "omio", "Faisal Alam"];
function megaFriend(friends) {
    var max = friends[0].length;
    var longName = friends[0];
    for (var i = 0; i < friends.length; i++) {
        if (max < friends[i].length) {
            max = friends[i].length;
        }
    }
    for (var j = 0; j < friends.length; j++) {
        if (friends[j].length == max) {
            longName = friends[j];
        }
    }
    return longName;
}

var name = megaFriend(friends);
console.log(name);

