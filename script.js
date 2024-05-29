const btn = document.getElementById('button');
let mode = document.getElementById('modeTxt');
let clicked = 2;
function changeBackground() {
    if(document.body.style.backgroundColor = "var(--Very-Dark-Blue)") {
        // document.body.style.backgroundColor = "hsl(0, 0%, 100%)";
        // document.body.style.color = "black"

        document.documentElement.style.setProperty('--Very-Dark-Blue', "hsl(0, 0%, 100%)");
        document.documentElement.style.setProperty('--Very-Dark-Blue-top', "hsl(225, 100%, 98%)");
        document.documentElement.style.setProperty('--Dark-Desaturated-Blue', "hsl(227, 47%, 96%)");
        document.documentElement.style.setProperty('--Desaturated-Blue', "hsl(228, 12%, 44%)");
        document.documentElement.style.setProperty('--White-text', "hsl(230, 17%, 14%)")
        document.documentElement.style.setProperty('--grayish-text', "rgba(0, 0, 0, 0.661)")
        mode.textContent = "Light Mode"
        btn.style.marginLeft = "63%"
    } 
    if (clicked % 2 != 0){
        // document.body.style.backgroundColor = "hsl(230, 17%, 14%)";
        // document.body.style.color = "white"

        document.documentElement.style.setProperty('--Very-Dark-Blue', "hsl(230, 17%, 14%)");
        document.documentElement.style.setProperty('--Very-Dark-Blue-top', "hsl(232, 19%, 15%");
        document.documentElement.style.setProperty('--Dark-Desaturated-Blue', "hsl(228, 28%, 20%)");
        document.documentElement.style.setProperty('--Desaturated-Blue', "hsl(228, 34%, 66%)");
        document.documentElement.style.setProperty('--White-text', "hsl(0, 0%, 100%)");
        document.documentElement.style.setProperty('--grayish-text', "rgba(226, 225, 225, 0.712)")
        mode.textContent = "Dark Mode"
        btn.style.marginLeft = "0"
    }
    clicked += 1
}

btn.addEventListener('click', function() {
    changeBackground()
    // alert("dgdgdg")
})