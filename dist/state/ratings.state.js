export let overallRating = 0;
export let qualityRating = 0;
export let valueFormoneyRating = 0;
export let deliveryRating = 0;
export let customerServiceRating = 0;
export function resetRatings() {
    overallRating = 0;
    qualityRating = 0;
    valueFormoneyRating = 0;
    deliveryRating = 0;
    customerServiceRating = 0;
}
export function getRating(name) {
    if (name === "overall")
        return overallRating;
    if (name === "quality")
        return qualityRating;
    if (name === "value")
        return valueFormoneyRating;
    if (name === "delivery")
        return deliveryRating;
    return customerServiceRating;
}
export function setRatings(name, value) {
    if (name === "overall")
        overallRating = value;
    if (name === "quality")
        qualityRating = value;
    if (name === "value")
        valueFormoneyRating = value;
    if (name === "delivery")
        deliveryRating = value;
    if (name === "service")
        customerServiceRating = value;
}
//# sourceMappingURL=ratings.state.js.map