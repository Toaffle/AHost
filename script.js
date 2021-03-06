/**
 * Open menu bar on hamburger menu clicked.
 */
document.querySelector(".OPEN_MENU_BAR").addEventListener("click", () => {
    var elemENTo = document.querySelector(".DOCUMENT_SIDEBAR");

    if(elemENTo.style.display == "none") {
        elemENTo.style.display = "block";
    } else {
        elemENTo.style.display = "none";
    }
});

/**
 * Open search dialog instead of opening the context menu.
 */

document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    

    callSearchDialog();
    
});

/**
 * Functions.
 */

// Check isEmpty

function isEmpty(element) {
    if(element == "") {
        return true;
    } else {
        return false;
    }
};

// Call redirect

function redirect(response, url) {
    document.body.innerHTML = response.html;
    document.title = response.pageTitle;
    window.history.pushState({
        "html": response.html,
        "pageTitle": response.pageTitle
    }, "", url);
}

// Call callSearchDialog

function callSearchDialog() {
    var SQ_PROMPT = prompt("¿Qué canción deseas buscar?");
    console.log(SQ_PROMPT)

    if (isEmpty(SQ_PROMPT)) {
        alert("Por favor ingresa algo para buscar.");
        callSearchDialog();
    } else {
        
    }
};

// Call executeQuery

function executeQuery(q) {
    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
}