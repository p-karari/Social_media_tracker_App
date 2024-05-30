const btn = document.getElementById('button');
let mode = document.getElementById('modeTxt');
let clicked = 2;
function changeBackground() {
    if(document.body.style.backgroundColor = "var(--Very-Dark-Blue)") {

        document.documentElement.style.setProperty('--Very-Dark-Blue', "hsl(0, 0%, 100%)");
        document.documentElement.style.setProperty('--Very-Dark-Blue-top', "hsl(225, 100%, 98%)");
        document.documentElement.style.setProperty('--Dark-Desaturated-Blue', "hsl(227, 47%, 96%)");
        document.documentElement.style.setProperty('--Desaturated-Blue', "hsl(228, 12%, 44%)");
        document.documentElement.style.setProperty('--White-text', "hsl(230, 17%, 14%)")
        document.documentElement.style.setProperty('--grayish-text', "rgba(0, 0, 0, 0.661)")
        document.documentElement.style.setProperty('--on-hover', "hsl(228, 34%, 66%)")

        mode.textContent = "Light Mode"
        btn.style.marginLeft = "63%"
    } 
    if (clicked % 2 != 0){

        document.documentElement.style.setProperty('--Very-Dark-Blue', "hsl(230, 17%, 14%)");
        document.documentElement.style.setProperty('--Very-Dark-Blue-top', "hsl(232, 19%, 15%");
        document.documentElement.style.setProperty('--Dark-Desaturated-Blue', "hsl(228, 28%, 20%)");
        document.documentElement.style.setProperty('--Desaturated-Blue', "hsl(228, 34%, 66%)");
        document.documentElement.style.setProperty('--White-text', "hsl(0, 0%, 100%)");
        document.documentElement.style.setProperty('--grayish-text', "rgba(226, 225, 225, 0.712)")
        document.documentElement.style.setProperty('--on-hover', "hsl(228, 12%, 44%)")
        mode.textContent = "Dark Mode"
        btn.style.marginLeft = "0"
    }
    clicked += 1
}

btn.addEventListener('click', function() {
    changeBackground()
})