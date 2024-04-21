function decodeEmail(encodedString, className) {
    const decodedEmail = atob(encodedString);
    const elements = document.getElementsByClassName(className);

    // Since getElementsByClassName returns a HTMLCollection, we loop through all elements
    for (const element of elements) {
        element.href = "mailto:" + decodedEmail;
        element.textContent = decodedEmail;
    }
}

window.onload = function () {
    decodeEmail("Y29udGFjdEBwaXhlbGNyYXRlLmdhbWVz", "email-link");
};
