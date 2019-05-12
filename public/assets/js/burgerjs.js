$(document).on("click", ".devoured", function (event) {
    event.preventDefault();
    console.log("Burger has been devoured")
})

$(document).on("click", "addBurger", function (event) {
    event.preventDefault();
    console.log("Burger has been added")
})