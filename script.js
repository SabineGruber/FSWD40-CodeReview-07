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
    function Location(Name, City, ZIPcode, Address, Image) {
        this.Name = Name;
        this.City = City;
        this.ZIPcode = ZIPcode;
        this.Address = Address;
        this.Image = Image;
    }
    return Location;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(Name, City, ZIPcode, Address, Image, Telephone, Type, Webaddress) {
        var _this = _super.call(this, Name, City, ZIPcode, Address, Image) || this;
        _this.Telephone = Telephone;
        _this.Type = Type;
        _this.Webaddress = Webaddress;
        return _this;
    }
    return Restaurant;
}(Location));
var Event = /** @class */ (function (_super) {
    __extends(Event, _super);
    function Event(Name, City, ZIPcode, Address, Image, EventDate, EventTime, Price) {
        var _this = _super.call(this, Name, City, ZIPcode, Address, Image) || this;
        _this.EventDate = EventDate;
        _this.EventTime = EventTime;
        _this.Price = Price;
        return _this;
    }
    return Event;
}(Location));
var location1 = new Location("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "img/Karlskirche.jpg");
var location2 = new Location("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "img/ZooVienna.jpg");
var restaurant1 = new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "img/LemonLeaf.png", "+43(1)5812308", "asia", "www.lemonleaf.at");
var restaurant2 = new Restaurant("Sixta", "Vienna", "1050", "Schönbrunner Straße 21", "img/Sixta.png", "+43 1 58 528 56", "viennese", "www.sixta-restaurant.at");
var event1 = new Event("Kris Kristofferson", "Vienna", "1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/Kris_Kristofferson.jpeg", "Fr, 15.06.2018", "20:00", "€ 58,50");
var event2 = new Event("Lenny Krevitz", "Vienna", "1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/Lenny_Kravitz.jpg", "Sat, 09.06.2018", "19:30", "€ 47,80");
var cityguide_data = [];
cityguide_data.push(location1, location2, restaurant1, restaurant2, event1, event2);
function render() {
    for (i = 0; i < cityguide_data.length; i++) {
        blogEntry = document.createElement("div");
        blogEntry.classList.add("col-lg-3");
        blogEntry.classList.add("col-md-6");
        blogEntry.classList.add("col-sm-12");
        var rowEntry = document.getElementById("container");
        rowEntry.appendChild(blogEntry);
        var headline = document.createElement("h4");
        var headline_text = document.createTextNode(cityguide_data[i].Name);
        headline.appendChild(headline_text);
        blogEntry.appendChild(headline);
        var address = document.createElement("p");
        var address_text = document.createTextNode(cityguide_data[i].Address);
        address.appendChild(address_text);
        blogEntry.appendChild(address);
        var zipcode = document.createElement("p");
        var zipcode_text = document.createTextNode(cityguide_data[i].ZIPcode);
        zipcode.appendChild(zipcode_text);
        blogEntry.appendChild(zipcode);
    }
}
