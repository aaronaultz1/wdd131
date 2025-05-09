let selectTheme = document.querySelector("select")

let logo = document.querySelector("img")
let attribute = document.querySelector("alt")

let body = document.querySelector('body')


selectTheme.addEventListener("change", changeTheme);

function changeTheme() {
    let current = selectTheme.value;
    if (current == "dark") {
        // change body to dark
        body.setAttribute("class", "dark")
        // change logo to dark
        logo.setAttribute("src", "byuilogo_dark.png")
        attribute.setAttribute("alt", "Logo Dark")
    } else {
        // remove dark tag
        body.setAttribute("class", "none")
        
        // change logo to white
        logo.setAttribute("src", "byuilogo.webp")
        attribute.setAttribute("alt", "Logo")
    }
}