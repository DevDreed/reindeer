var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var hohohoElement = document.getElementById("coloredReindeer");

let string = "<ul>";
for (let x = 0; x < reindeer.length; x++){
	string += "<li>" + colors[x] + " " + reindeer[x] + "</li>";
}
string += "</ul>";

hohohoElement.innerHTML = string;
