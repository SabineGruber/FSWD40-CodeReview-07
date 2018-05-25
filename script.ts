class Location {
	constructor(public name, public city, public ZIPcode, public address, public image) {
	}
}

class Restaurant extends Location {
	constructor(name, city, ZIPcode, address, image, telephone, type, webaddress) {
	}
}

class Event extends Location {
	constructor(name, city, ZIPcode, address, image, EventDate, EventTime, price) {
	}
}

let location1 = new Location("St. Charles Church", "Vienna", "1010", "Karlsplatz 1", "img/Karlskirche.jpg")
let location2 = new Location("Zoo Vienna", "Vienna", "1130", "Maxingstraße 13b", "img/ZooVienna.jpg")
let restaurant1 = new Restaurant("Lemon Leaf Thai Restaurant", "Vienna", "1050", "Kettenbrückengasse 19", "img/LemonLeaf.png")
let restaurant2 = new Restaurant("Sixta", "Vienna", "1050", "Schönbrunner Straße 21", "img/Sixta.png")
let event1 = new Event("Kris Kristofferson", "Vienna", "1150", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "img/Kris_Kristofferson.jpeg")
let event2 = new Event("Lenny Krevitz", "Vienna", "1150", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "img/Lenny_Kravitz.jpg")

let cityguide_data = []
	cityguide_data.push(location1, location2, restaurant1, restaurant2, event1, event2);
	