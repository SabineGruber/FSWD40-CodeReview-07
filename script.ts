class Location {
	constructor(public Name, public City, public ZIPcode, public Address, public Image) {
	}
}

class Restaurant extends Location {
	constructor(Name, City, ZIPcode, Address, Image, Telephone, Type, Webaddress) {
		super(Name, City, ZIPcode, Address, Image);
		this.Telephone = Telephone;
		this.Type = Type;
		this.Webaddress = Webaddress;
	}
}

class Event extends Location {
	constructor(Name, City, ZIPcode, Address, Image, EventDate, EventTime, Price) {
		super(Name, City, ZIPcode, Address, Image);
		this.EventDate = EventDate;
		this.EventTime = EventTime;
		this.Price = Price;
	}
}

let location1 = new Location("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "img/Karlskirche.jpg")
let location2 = new Location("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "img/ZooVienna.jpg")
let location3 = new Location("Nationalbibliothek", "Vienna", "1010", "Josefsplatz 1", "img/NB.jpg")
let restaurant1 = new Restaurant("Lemon Leaf", "Vienna", "1050", "Kettenbrückengasse 19", "img/LemonLeaf.jpg", "+43 15812308", "Asian", "www.lemonleaf.at")
let restaurant2 = new Restaurant("Sixta", "Vienna", "1050", "Schönbrunner Straße 21", "img/Sixta.jpg", "+43 158528 56", "Viennese", "www.sixta-restaurant.at")
let restaurant3 = new Restaurant("Pizza Randale", "Vienna", "1050", "Kettenbrückengasse 1", "img/PizzaRandale.jpg", "+43 6508550772", "Pizza", "www.facebook.com/pizzarandale")
let event1 = new Event("Kris Kristofferson", "Vienna", "1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/Kris_Kristofferson.jpg", "Fr, 15.06.2018", "20:00", "€ 58,50")
let event2 = new Event("Lenny Krevitz", "Vienna", "1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/Lenny_Kravitz.jpg", "Sat, 09.06.2018", "19:30", "€ 47,80")

let cityguide_data = []
	cityguide_data.push(location1, location2, location3, restaurant1, restaurant2, restaurant3, event1, event2);

$(document).ready(function() {

for (i = 0; i < cityguide_data.length; i++) {
        $(".card-img").eq(i).append('<img src="' + cityguide_data[i].Image + '">');
        $(".card-title").eq(i).append(cityguide_data[i].Name);
        $(".card-address").eq(i).append(cityguide_data[i].Address);
        $(".card-zipcode").eq(i).append(cityguide_data[i].ZIPcode);
        $(".card-city").eq(i).append(cityguide_data[i].City);    

        $(".card-type").eq(i).append(cityguide_data[i].Type);  
        $(".card-date").eq(i).append(cityguide_data[i].EventDate);  
        $(".card-time").eq(i).append(cityguide_data[i].EventTime);  
        $(".card-price").eq(i).append(cityguide_data[i].Price); 
    };

});

// function render (){
// 	for (i=0; i<cityguide_data.length; i++){
// 	blogEntry = document.createElement("div");
//  	blogEntry.classList.add("col-lg-3");
//  	blogEntry.classList.add("col-md-6");
//  	blogEntry.classList.add("col-sm-12");
//  	var row = document.getElementById("container_full");
//  	row.appendChild(blogEntry);
//  	var headline = document.createElement("h4");
//  	var headline_text = document.createTextNode(cityguide_data[i].Name);
//  	headline.appendChild(headline_text);
//  	blogEntry.appendChild(headline);
//  	var address = document.createElement("p");
//  	var address_text = document.createTextNode(cityguide_data[i].Address);
//  	address.appendChild(address_text);
//  	blogEntry.appendChild(address);
//  	var zipcode = document.createElement("p");
//  	var zipcode_text = document.createTextNode(cityguide_data[i].ZIPcode);
//  	zipcode.appendChild(zipcode_text);
//  	blogEntry.appendChild(zipcode);
 	
//  }
// }