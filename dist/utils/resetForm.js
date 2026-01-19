import { resetRatings } from "../state/ratings.state.js";
import { resetEditId } from "../state/records.state.js";
export function resetForm() {
    const form = document.querySelector("form");
    form.reset();
    resetRatings();
    resetEditId();
    document.querySelectorAll('input[name="productTags"]').forEach((checkbox) => {
        const cb = checkbox;
        cb.checked = false;
    });
    document.querySelectorAll(".fa-star").forEach(function (star) {
        star.classList.remove("active");
    });
}
//# sourceMappingURL=resetForm.js.map