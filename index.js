var nycPlaces = ["Statue of Liberty", "Empire State Building", "The Vessel", "MET Museum", "MOMA", "Natural History Museum"];
var nycPlaces2 = {"Statue of Liberty": "./statue.jpg", "Empire State Building" : "./empire.jpg",
 "The Vessel": "./vessel.jpg", "MET Museum": "./met.jpg", "MOMA": "./moma.jpg",
 "Natural History Museum": "./amnh.jpeg"};
var dcPlaces = ["The White House", "Lincoln Memorial", "Washington Monument", "Smithsonian National Zoo", "United States Capitol",
"Smithsonian National Museum of Natural History"];
var dcPlaces2 = {"The White House": "./wh.jpg", "Lincoln Memorial": "./lm.jpg",
"Washington Monument": "./wm.jpg", "Smithsonian National Zoo": "./zoo.jpg",
"United States Capitol": "./capitol.jpg", "Smithsonian National Museum of Natural History": "./museum.jpg"};
var bostonPlaces = ["Boston Common", "Freedom Trail", "Boston Harbor", "Harvard University",
"Massachussetts University of Technology", "Yale University"];
var bostonPlaces2 = {"Boston Common": "./common.jpg", "Freedom Trail": "./freedom.jpg",
"Boston Harbor": "./harbor.jpg", "Harvard University": "./harvard.jpg",
"Massachussetts University of Technology": "./mit.jpeg", "Yale University": "./yale.jpg"};
var mainePlaces = ["Portland Head Lighthouse", "Acadia National Park", "Cadillac Mountain", "Victoria Mansion",
"Portland Museum of Art", "Mount Katahdin"];
var mainePlaces2 = {"Portland Head Lighthouse": "./light.jpg", "Acadia National Park": "./acadia.jpg",
"Cadillac Mountain": "./mount.jpg", "Victoria Mansion": "./house.jpg",
"Portland Museum of Art": "./art.jpg", "Mount Katahdin": "./kata.jpg"};
var tenPlaces = ["Ruby Falls", "Lookout Mountain", "Cherokee National Forest", "Gatlinburg Skylift Park", "Rock City Gardens",
"Memphis Zoo"];
var tenPlaces2 = {"Ruby Falls": "./ruby.jpg", "Lookout Mountain": "./lookout.jpg",
"Cherokee National Forest": "./forest.jpg", "Gatlinburg Skylift Park": "./skylift.jpg",
"Rock City Gardens": "./rock.jpg", "Memphis Zoo": "./memphis.jpeg"};

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
  Pick(bostonPlaces, bostonPlaces2);
}

function mainePick(){
  event.preventDefault();
  Pick(mainePlaces, mainePlaces2);
}

function dcPick(){
  event.preventDefault();
  Pick(dcPlaces, dcPlaces2);
}

function tennesseePick(){
  event.preventDefault();
  Pick(tenPlaces, tenPlaces2);
}
