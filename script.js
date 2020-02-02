// variables for each modal
var modal = document.getElementById("modal-abt");
console.log(modal)
var abtBtn = document.getElementById("about");


var openModal = function (nb) {
    console.log(nb)
    document.getElementById("modal" + nb).style.display = "block"

}

var closeModal = (nb) => {
    document.getElementById("modal" + nb).style.display = "none"
}
