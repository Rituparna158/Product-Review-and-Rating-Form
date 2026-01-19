import { records, setEditId } from "../state/records.state.js";
import { setRatings } from "../state/ratings.state.js";
import { fillStars } from "../ui/starRating.js";
export function editRecord(index) {
    const rec = records[index];
    setEditId(index);
    const productName = document.getElementById("pname");
    const sku = document.getElementById("sku");
    const purchaseDate = document.getElementById("dt");
    const reviewTitle = document.getElementById("review-title");
    const detailedReview = document.getElementById("detailed-review");
    productName.value = rec.pname;
    sku.value = rec.sku;
    purchaseDate.value = rec.date;
    reviewTitle.value = rec.title;
    detailedReview.value = rec.detailreview;
    setRatings("overall", rec.overall);
    setRatings("quality", rec.overall);
    setRatings("value", rec.overall);
    setRatings("delivery", rec.overall);
    setRatings("service", rec.overall);
    document.querySelectorAll(".fa-star").forEach(star => {
        star.classList.remove("active");
    });
    fillStars("overallRating", rec.overall);
    fillStars("qualityRating", rec.quality);
    fillStars("valueFormoneyRating", rec.value);
    fillStars("deliveryRating", rec.delivery);
    fillStars("customerServiceRating", rec.service);
    document.querySelectorAll('input[name="reviewtype"]').forEach((radio) => {
        const r = radio;
        r.checked = r.value === rec.type;
    });
    document.querySelectorAll('input[name="productTags"]').forEach((checkbox) => {
        const cb = checkbox;
        cb.checked = rec.tags.includes(cb.value);
    });
    document.querySelectorAll('input[name="recommendproduct"]').forEach((radio) => {
        const r = radio;
        r.checked = r.value === rec.recommend;
    });
    document.getElementById("Would-Buy-Again").checked = rec.buyAgain === "Yes";
    document.getElementById("Make-Review-Public").checked = rec.public === "Yes";
    document.getElementById("Agree-to-Terms").checked = rec.agree === "Yes";
    document.querySelector('input[type="submit"]').value = "Update";
    document.getElementById("formSection")?.scrollIntoView({
        behavior: "smooth"
    });
}
//# sourceMappingURL=editRecord.js.map