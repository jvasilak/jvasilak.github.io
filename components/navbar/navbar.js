// TODO: move variables that are hard coded to a constants.js file
const navigationvalues = ["Home", "Resume", "Career", "Interests"];
const destinationvalues = ["index.html", "resume.html", "experience.html", "interests.html"];
const indexFileName = "index.html";
const sourcePath = window.location.pathname;

var navbar = document.getElementById("navbar");
var navList = document.createElement("ul");
navList.className = "navigation";
for (let i = 0; i < navigationvalues.length; i++) {
    var navbarItem = document.createElement("li");
    var itemLink = document.createElement("a");
    itemLink.textContent = navigationvalues.at(i);
    itemLink.href = getRelativePath(destinationvalues[i], splitSourceString(sourcePath));
    navbarItem.appendChild(itemLink);
    navList.appendChild(navbarItem);
}
navbar.appendChild(navList)

function getRelativePath(destination, source) {
    /*
        Need to address the following cases:
        - Moving from index to index
        - Moving from index to other page
        - Moving from other page to index
        - Moving from other page to index

        1) Is destination index
        2) Is source index
    */
    if (destination == indexFileName) {
        if (source == indexFileName) {
            return destination;
        } else {
            return "../" + destination;
        }
    } else {
        if (source == indexFileName) {
            return splitDestinationString(destination) + destination;
        } else {
            return "../" + splitDestinationString(destination) + destination;
        }

    }
}

function splitDestinationString (destination) {
    const splitString = destination.split(".");
    return splitString.at(0) + "/";
}

function splitSourceString (source) {
    const splitString = source.split("/");
    return splitString.at(-1);
}