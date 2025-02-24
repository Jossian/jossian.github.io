function loadPage(page) {
    console.log("Intentando cargar:", page);  // Ver qué página intenta cargar
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar la página");
            }
            return response.text();
        })
        .then(data => {
            document.getElementById("content").innerHTML = data;
            localStorage.setItem("lastPage", page);
        })
        .catch(error => console.error("Error:", error));
}
