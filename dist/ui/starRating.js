import { setRatings, getRating } from "../state/ratings.state.js";
export function applyStarRating(containerId, ratingName, errorId) {
    const stars = document.querySelectorAll("#" + containerId + " .fa-star");
    const errorSpan = document.getElementById(errorId);
    for (let i = 0; i < stars.length; i++) {
        stars[i].onmouseover = function () {
            resetStars(stars);
            for (let j = 0; j <= i; j++) {
                const hoverStar = stars[j];
                if (hoverStar) {
                    hoverStar.classList.add("active");
                }
            }
        };
        stars[i].onclick = function () {
            setRatings(ratingName, i + 1);
            if (errorSpan) {
                errorSpan.innerHTML = "";
            }
        };
        stars[i].onmouseout = function () {
            resetStars(stars);
            const ratingValue = getRating(ratingName);
            for (let j = 0; j < ratingValue; j++) {
                stars[j].classList.add("active");
            }
        };
    }
}
export function resetStars(stars) {
    for (let i = 0; i < stars.length; i++) {
        stars[i].classList.remove("active");
    }
}
export function fillStars(containerId, count) {
    const stars = document.querySelectorAll("#" + containerId + " .fa-star");
    for (let i = 0; i < count; i++) {
        stars[i].classList.add("active");
    }
}
//# sourceMappingURL=starRating.js.map