var overallRating=0;
var qualityRating=0;
var valueFormoneyRating=0;
var deliveryRating=0;
var customerServiceRating=0;

function applyStarRating(containerId,ratingName){
    var stars= document.querySelectorAll("#" + containerId + " .fa-star");

    for(let i=0;i<stars.length;i++){
        stars[i].onmouseover=function(){
            resetStars(stars);
            for (let j=0; j<= i;j++){
                stars[j].classList.add("active")
            }
        };
        stars[i].onclick=function(){
            if(ratingName ==="overall"){
                overallRating=i+1;

            }
            if(ratingName ==="quality"){
                qualityRating=i+1;

            }
            if(ratingName ==="value"){
                valueFormoneyRating=i+1;

            }
            if(ratingName ==="delivery"){
                deliveryRating=i+1;

            }
            if(ratingName ==="service"){
                customerServiceRating=i+1;

            }
        };
        stars[i].onmouseout=function(){
            resetStars(stars);

            var ratingValue = 0;

            if (ratingName === "overall"){
                ratingValue = overallRating;
            }
            if (ratingName === "quality"){
                ratingValue = qualityRating;
            }
            if (ratingName === "value"){
                ratingValue = valueFormoneyRating;
            }
            if (ratingName === "delivery"){
                ratingValue = deliveryRating;
            }
            if (ratingName === "service"){
                ratingValue = customerServiceRating;
            }
            for(let j=0;j<ratingValue;j++){
                stars[j].classList.add("active");
            }
        };
    }
}
function resetStars(stars){
    for(let i=0;i<stars.length;i++){
        stars[i].classList.remove("active")
     }
}
applyStarRating("overallRating","overall");
applyStarRating("qualityRating","quality");
applyStarRating("valueFormoneyRating","value");
applyStarRating("deliveryRating","delivery");
applyStarRating("customerServiceRating","service");

var form=document.querySelector("form");
form.onsubmit=function(){
    if(overallRating === 0){
        alert("Please select Overall Rating");
        return false;
    }
    if(qualityRating === 0){
        alert("Please select Quality Rating");
        return false;
    }
    if(valueFormoneyRating === 0){
        alert("Please select Value for Money Rating");
        return false;
    }
    alert("Form Submitted sucessfully!")
    return true;
};
