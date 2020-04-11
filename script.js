let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
  {
    "title" : "alex",
    "picture_url" : "alex.png",
     "city" : "oahu, hawaii",
  },
  {
    "title" : "anri",
    "picture_url" : "anri.png",
    "city" : "san diego, california",
  },
  {
    "title" : "conan",
    "picture_url" : "conan.png",
    "city" : "oahu, hawaii",
  },
  {
    "title" : "eric",
    "picture_url" : "eric.png",
    "city" : "oahu, hawaii",
  },
  {
    "title" : "julian",
    "picture_url" : "julian.png",
    "city" : "oahu, hawaii",
  },
  {
    "title" : "julie",
    "picture_url" : "julie.png",
    "city" : "big island, hawaii",
  },
  {
    "title" : "kahlil",
    "picture_url" : "kahlil.png",
    "city" : "springfield, virginia",
  },
  {
    "title" : "kane",
    "picture_url" : "kane.png",
    "city" : "tempe, arizona",
  },
  {
    "title" : "ken",
    "picture_url" : "ken.png",
    "city" : "yokohama, japan",
  },
  {
    "title" : "kyle",
    "picture_url" : "kyle.png",
    "city" : "orlando, florida",
  },
  {
    "title" : "leo",
    "picture_url" : "leo.png",
    "city" : "oahu, hawaii",
  },
  {
    "title" : "lion",
    "picture_url" : "lion.png",
    "city" : "japan",
  },
  {
    "title" : "mark",
    "picture_url" : "mark.png",
    "city" : "oahu, hawaii",
  },
  {
    "title" : "maya",
    "picture_url" : "maya.png",
    "city" : "oahu, hawaii",
  },
  {
    "title" : "meisa",
    "picture_url" : "meisa.png",
    "city" : "saitama, japan",
  },
  {
    "title" : "mia",
    "picture_url" : "mia.png",
    "city" : "oahu, hawaii",
  },
  {
    "title" : "michael",
    "picture_url" : "michael.png",
    "city" : "big island, hawaii",
  },
  {
    "title" : "phoebe",
    "picture_url" : "phoebe.png",
    "city" : "las vegas, nevada",
  },
  {
    "title" : "remi",
    "picture_url" : "remi.png",
    "city" : "yokohama, japan",
  },
  {
    "title" : "rina",
    "picture_url" : "rina.png",
    "city" : "yokohama, japan",
  },
  {
    "title" : "ryu",
    "picture_url" : "ryu.png",
    "city" : "saitama, japan",
  },
  {
    "title" : "seika",
    "picture_url" : "seika.png",
    "city" : "saitama, japan",
  },
  {
    "title" : "sian",
    "picture_url" : "sian.png",
    "city" : "orange county, california",
  },
  {
    "title" : "somchai",
    "picture_url" : "somchai.png",
    "city" : "sydney, australia",
  },
  {
    "title" : "tasha",
    "picture_url" : "tasha.png",
    "city" : "oahu, hawaii",
  },
  {
    "title" : "toren",
    "picture_url" : "toren.png",
    "city" : "oahu, hawaii",
  }
]

for (var i = 0; i < jsonDatabase.length; i++ ) {
  createElementProper(jsonDatabase[i]);
}

function createElementMessy(incomingJSON) {
  var incompleteHTML = "<div class=\"contentItem\"><h3 class=\"contentTitle\">" + incomingJSON['title'] + "</h3><h4>city:>";
  for (var i = 0; i < incomingJSON['city'].length; i++) {
    var cityString = incomingJSON['city'][i];
    incompleteHTML += cityString;
  }

  incompleteHTML += "</div></div>";
  contentGridElement.innerHTML = incompleteHTML;
}

function createElementProper(incomingJSON) {
let newContentElement = document.createElement("DIV");
newContentElement.classList.add('contentItem');

let newImage = document.createElement("IMG");
newImage.classList.add("profilePicture");
newImage.src = incomingJSON['picture_url'];
newContentElement.appendChild(newImage);
contentGridElement.appendChild(newContentElement);

let newContentHeading = document.createElement("H3");
 // newContentHeading.classList.add('contentTitle');
 newContentHeading.innerHTML = incomingJSON['title'];
 newContentElement.appendChild(newContentHeading);

 let newContentSubheading = document.createElement("H5");
  // newContentHeading.classList.add('contentTitle');
  newContentSubheading.innerHTML = incomingJSON['city'];
  newContentElement.appendChild(newContentSubheading);
}
