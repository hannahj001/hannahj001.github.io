document.addEventListener("DOMContentLoaded", function () {
    fetch("general.html")
        .then(response => response.text())
        .then(data => {
            
            let tempDiv = document.createElement("div");
            tempDiv.innerHTML = data;

            document.getElementById("header-placeholder").innerHTML = tempDiv.querySelector("#header").innerHTML;
            document.getElementById("footer-placeholder").innerHTML = tempDiv.querySelector("#footer").innerHTML;
        })
        .catch(error => console.error("Error loading general.html:", error));
});