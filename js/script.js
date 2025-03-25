function copyCode(preview_id) {
    // get code preview element
    let codeprev = document.getElementById(preview_id);

    // Copy the text
    navigator.clipboard.writeText(codeprev.textContent);

    // alert
    alert("Code copied");
}