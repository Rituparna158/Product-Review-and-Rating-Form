export function initValidation() {
    const productName = document.getElementById("pname");
    const sku = document.getElementById("sku");
    const purchaseDate = document.getElementById("dt");
    const reviewTitle = document.getElementById("review-title");
    const detailedReview = document.getElementById("detailed-review");
    const recommendprod = document.querySelectorAll('input[name="recommendproduct"]');
    const makeReviewPublic = document.getElementById("Make-Review-Public");
    const agreeTerms = document.getElementById("Agree-to-Terms");
    const wouldBuyAgain = document.getElementById("Would-Buy-Again");
    const nameError = document.getElementById("nameError");
    const skuError = document.getElementById("skuError");
    const dateError = document.getElementById("dateError");
    const titleError = document.getElementById("titleError");
    const reviewError = document.getElementById("reviewError");
    const recommendError = document.getElementById("recommendError");
    const termsError = document.getElementById("termsError");
    productName.addEventListener("input", () => {
        const val = productName.value.trim();
        if (val === "") {
            nameError.innerText = "";
            return;
        }
        if (!/^[a-zA-Z0-92 ]+$/.test(val)) {
            nameError.innerText = "Only Alphabets and spaces are allowed";
        }
        else {
            nameError.innerText = "";
        }
    });
    sku.addEventListener("input", () => {
        if (!/^[a-zA-Z0-9]*$/.test(sku.value)) {
            skuError.innerText = "only letters and numbers are allowed";
        }
        else {
            skuError.innerText = "";
        }
    });
    purchaseDate.addEventListener("blur", () => {
        if (purchaseDate.value === "") {
            dateError.innerText = "Purchase date is required";
        }
    }, true);
    purchaseDate.addEventListener("input", () => {
        dateError.innerText = "";
    });
    reviewTitle.addEventListener("blur", () => {
        if (reviewTitle.value.length < 10 || reviewTitle.value.length > 100) {
            titleError.innerText = " Title must be in between 10 to 100 characters ";
        }
    }, true);
    reviewTitle.addEventListener("input", () => {
        if (reviewTitle.value.length >= 10 && reviewTitle.value.length <= 100) {
            titleError.innerText = "";
        }
    });
    detailedReview.addEventListener("blur", () => {
        if (detailedReview.value.length < 30 || detailedReview.value.length > 1000) {
            reviewError.innerText = "Review must be in between 30 to 1000 characters";
        }
    }, true);
    detailedReview.addEventListener("input", function () {
        if (detailedReview.value.length >= 30 && detailedReview.value.length <= 1000) {
            reviewError.innerText = "";
        }
    });
    recommendprod.forEach((radio) => {
        radio.addEventListener("change", () => {
            recommendError.innerText = "";
        });
    });
    makeReviewPublic.onchange = function () {
        if (makeReviewPublic.checked && agreeTerms.checked) {
            const er = document.getElementById("termsError");
            if (er)
                er.innerText = "";
        }
    };
    agreeTerms.onchange = function () {
        if (makeReviewPublic.checked && agreeTerms.checked) {
            const er = document.getElementById("termsError");
            if (er)
                er.innerText = "";
        }
    };
}
//# sourceMappingURL=validation.js.map