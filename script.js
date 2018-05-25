var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Location = /** @class */ (function () {
    function Location(name, city, ZIPcode, address, image) {
        this.name = name;
        this.city = city;
        this.ZIPcode = ZIPcode;
        this.address = address;
        this.image = image;
    }
    return Location;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(name, city, ZIPcode, address, image, telephone, type, webaddress) {
        var _this = this;
        return _this;
    }
    return Restaurant;
}(Location));
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(name, city, ZIPcode, address, image, EventDate, EventTime, price) {
        var _this = this;
        return _this;
    }
    return Event;
}(Location));
var location1 = new Location("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "img/Karlskirche.jpg");
var location2 = new Location("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "img/ZooVienna.jpg");
var restaurant1 = new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "img/LemonLeaf.png");
var restaurant2 = new Restaurant("Sixta", "Vienna", "1050", "Schönbrunner Straße 21", "img/Sixta.png");
var event1 = new Event("Kris Kristofferson", "Vienna", "1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/Kris_Kristofferson.jpeg");
var event2 = new Event("Lenny Krevitz", "Vienna", "1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/Lenny_Kravitz.jpg");
var cityguide_data = [];
cityguide_data.push(location1, location2, restaurant1, restaurant2, event1, event2);
