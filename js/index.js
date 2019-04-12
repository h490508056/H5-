let ul1 = [...document.querySelectorAll(".ul1 li")];
let ol1 = [...document.querySelectorAll(".ol1 li")];
ul1.forEach(function(item, index) {
    item.onclick = function() {
        ol1.forEach(function(item) {
            item.style.display = "none"
        })
        ol1[index].style.display = "block"
    }
})