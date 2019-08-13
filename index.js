var nycPlaces = ["Statue of Liberty", "Empire State Building", "The Vessel", "MET Museum", "MOMA", "Natural History Museum"];
var nycPlaces2 = {"Statue of Liberty": "./Images/statue.jpg", "Empire State Building" : "./Images/empire.jpg",
 "The Vessel": "./Images/vessel.jpg", "MET Museum": "./Images/met.jpg", "MOMA": "./Images/moma.jpg",
 "Natural History Museum": "./Images/amnh.jpeg"};
var dcPlaces = ["The White House", "Lincoln Memorial", "Washington Monument", "Smithsonian National Zoo", "United States Capitol",
"Smithsonian National Museum of Natural History"];
var bostonPlaces = ["Boston Common", "Freedom Trail", "Boston Harbor", "Harvard University",
"Massachussetts University of Technology", "Yale University"];
var mainePlaces = ["Portland Head Lighthouse", "Acadia National Park", "Cadillac Mountain", "Victoria Mansion",
"Portland Museum of Art", "Mount Katahdin"];
var mainePlaces2 = {"Portland Head Lighthouse": "./Images/light.jpg", "Acadia National Park": "./Images/acadia.jpg",
"Cadillac Mountain": "./Images/mount.jpg", "Victoria Mansion": "./Images/house.jpg",
"Portland Museum of Art": "./Images/art.jpg", "Mount Katahdin": "./Images/kata.jpg"};
var tenPlaces = ["Ruby Falls", "Lookout Mountain", "Cherokee National Forest", "Gatlinburg Skylift Park", "Rock City Gardens",
"Memphis Zoo"];

var nyc = $('#nyc');
var dc = $('#dc');
var maine = $('#maine');
var boston = $('#boston');
var tennessee = $('#tennessee');
var header2 = $('.header2');
var image = $('.backimg');

console.log(nyc);
console.log(dc);
console.log(maine);
console.log(boston);
console.log(tennessee);

nyc.on("click", nycPick);
dc.on("click", dcPick);
maine.on("click", mainePick);
boston.on("click", bostonPick);
tennessee.on("click", tennesseePick);

function Pick(place, place2){
  event.preventDefault();
  var random = Math.random() * place.length;
  var randInt = Math.floor(random);
  var pick = place[randInt];
  console.log("yay");
  header2.text(pick);
  var image2 = place2[pick];
  console.log(image2);
  document.getElementById('backimg').src = image2;
}

function nycPick(){
  event.preventDefault();
  Pick(nycPlaces, nycPlaces2);
}

function bostonPick(){
  event.preventDefault();
  Pick(bostonPlaces);
}

function mainePick(){
  event.preventDefault();
  Pick(mainePlaces, mainePlaces2);
}

function dcPick(){
  event.preventDefault();
  Pick(dcPlaces);
}

function tennesseePick(){
  event.preventDefault();
  Pick(tenPlaces);
}
