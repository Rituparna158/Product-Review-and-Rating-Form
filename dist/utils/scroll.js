export function scrollToError() {
    var errors = document.getElementsByClassName("error");
    for (let i = 0; i < errors.length; i++) {
        if (errors[i].innerHTML != "") {
            errors[i].scrollIntoView(true);
            break;
        }
    }
}
//# sourceMappingURL=scroll.js.map