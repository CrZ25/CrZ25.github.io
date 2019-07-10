var = ["Kola Nuts", "Yam Farms", "Wives", "Child Soldiers", "Witch Doctors", "Sacrificial Children", "Bank of Yamerica", "Yamborghini Dealership", "YamX", "Yamazon"];

function Building(name, amount, price, priceIncrease, yps) {
    this.name = name;
    this.amount = amount;
    this.price = price;
    this.priceIncrease = priceIncrease;
    this.yps = yps;
    var yamsTotalPS = this.yps * this.amount;
}
var buildingYam = [];

buildingYam.push(new Building("Kola Nuts", 0, kolaNutPrice(), ));


function kolaNutPrice() {
    return (15 + (kolaNuts * 3));
}

function yamFarmPrice() {
    return (100 + (yamFarm * 15));
}

function wivesPrice() {
    return (1100 + (wives * 165));
}

function childPrice() {
    return (12000 + (child * 1300));
}

function witchPrice() {
    return (130000 + (witch * 19500));
}


function buyUpgrade(num) {
    // kolaNut
    if (num == 1 && (yamCnt >= kolaNutPrice())) {
        yamCnt -= kolaNutPrice();
        kolaNuts += 1;
        update();
    } else if (num == 2 && (yamCnt >= yamFarmPrice())) {
        yamCnt -= yamFarmPrice();
        yamFarm += 1;
        update();
    } else if (num == 3 && (yamCnt >= wivesPrice())) {
        yamCnt -= wivesPrice();
        wives += 1;
        update();
    } else if (num == 4 && (yamCnt >= childPrice())) {
        yamCnt -= childPrice();
        child += 1;
        update();
    } else if (num == 5 && (yamCnt >= witchPrice())) {
        yamCnt -= witchPrice();
        witch += 1;
        update();
    }
}