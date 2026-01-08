var overallRating=0;
var qualityRating=0;
var valueFormoneyRating=0;
var deliveryRating=0;
var customerServiceRating=0;

// STAR RATING VALIDATION
function applyStarRating(containerId,ratingName,errorId){
    var stars= document.querySelectorAll("#" + containerId + " .fa-star");
    var errorSpan=document.getElementById(errorId);


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
            errorSpan.innerText="";
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
applyStarRating("overallRating","overall","overallError");
applyStarRating("qualityRating","quality","qualityError");
applyStarRating("valueFormoneyRating","value","valueError");
applyStarRating("deliveryRating","delivery","deliveryError");
applyStarRating("customerServiceRating","service","serviceErro");

var productName=document.getElementById("pname");
productName.addEventListener("keydown",function(e){
    if(
        e.key === "Backspace" || e.key === "Delete" || e.key === "Tab" || e.key.startsWith("Arrow")
    ) return;
    if(!/^[a-zA-Z]+$/.test(productName.value.trim())){
        document.getElementById("nameError").innerText="Only Alphabets and spaces are allowed"
    }
    else{
        document.getElementById("nameError").innerText="";

    }
    
});

var sku = document.getElementById("sku");

sku.addEventListener("input",function(){
    if(!/^[a-zA-Z0-9]*$/.test(sku.value)){
        document.getElementById("skuError").innerText="only letters and numbers are allowed";
    }
    else{
        document.getElementById("skuError").innerText="";
    }
});

var purchaseDate=document.getElementById("dt");
purchaseDate.addEventListener("blur",function(){
    if(purchaseDate.value === ""){
        document.getElementById("dateError").innerText="Purchase date is required";
    }
},true);

purchaseDate.addEventListener("input",function(){
    document.getElementById("dateError").innerText="";
});

var reviewTitle=document.getElementById("review-title");
reviewTitle.addEventListener("blur",function(){
    if(reviewTitle.value.length<10 || reviewTitle.value.length>100){
        document.getElementById("titleError").innerText=" Title must be in between 10 to 100 characters ";
    }
},true);

reviewTitle.addEventListener("input",function(){
    if(reviewTitle.value.length>=10 && reviewTitle.value.length<=100){
        document.getElementById("titleError").innerText="";
    }

});
var detailedReview=document.getElementById("detailed-review");
detailedReview.addEventListener("blur",function(){
    if(detailedReview.value.length<30 || detailedReview.value.length>1000){
        document.getElementById("reviewError").innerText="Review must be in between 30 to 1000 characters";
    }
},true);

detailedReview.addEventListener("input",function(){
    if(detailedReview.value.length>=30 && detailedReview.value.length<=1000){
        document.getElementById("reviewError").innerText="";
    }
});

var recommendprod=document.querySelectorAll('input[name="recommendproduct"]');
recommendprod.forEach(function(radio){
    radio.onchange=function(){
        document.getElementById("recommendError").innerText="";

    };
});

var makeReviewPublic=document.getElementById("Make-Review-Public");
var agreeTerms=document.getElementById("Agree-to-Terms");
var termsError=document.getElementById("termsError")

makeReviewPublic.onchange=function(){
    if(makeReviewPublic.checked && agreeTerms.checked){
        termsError.innerText="";
    }
};

agreeTerms.onchange=function(){
    if(makeReviewPublic.checked && agreeTerms.checked){
        termsError.innerText="";
    }
};

//SCROLLS PAGE TO THE FIRST VISIBLE ERROR
function scrollToError(){
    var errors=document.getElementsByClassName("error");
    for (let i=0;i<errors.length;i++){
        if (errors[i].innerHTML!=""){
            errors[i].scrollIntoView(true)
            break;
        }
    }
}

//FORM SUBMIT VALIDATION
var form=document.querySelector("form");
form.onsubmit=function(e){
    e.preventDefault();
    var valid=true;
    

    if(purchaseDate.value === ""){
        document.getElementById("dateError").innerText="Purchase Date is required";
        valid=false;

    }
    
    if(overallRating === 0){
        document.getElementById("overallError").innerText="Overall Rating is required"
        valid=false
    }
    if(qualityRating === 0){
        document.getElementById("qualityError").innerText="Quality Rating is required"
        valid=false
    }
    if(valueFormoneyRating === 0){
        document.getElementById("valueError").innerText="ValueForMoney Rating is required"
        valid=false
    }
    
    if(reviewTitle.value.length<10 || reviewTitle.value.length>100){
        document.getElementById("titleError").innerText="Title must be 10-100 characters";
        valid=false;
    }
  
    
    if(detailedReview.value.length<30 || detailedReview.value.length>1000){
        document.getElementById("reviewError").innerText="Review must be 30-1000 characters";
        valid=false;
    }
   
    if(!document.querySelector('input[name="recommendproduct"]:checked')){
        document.getElementById("recommendError").innerText="Please select an option";
        valid=false;

    }
   
    
    if(!(makeReviewPublic.checked && agreeTerms.checked)){
        document.getElementById("termsError").innerText="Please accept rquired terms";
        valid=false;

    }
    else{
        document.getElementById("termsError").innerText="";
    }

    // IF VALIDATION FAILS , SCROLL TO ERROR
    if(!valid){
        scrollToError();
        return false;
    }
        // I ALL VALIDATION PASS
        alert("Form Submitted sucessfully!")
        form.reset();

        overallRating=0;
        qualityRating=0;
        valueFormoneyRating=0;
        deliveryRating=0;
        customerServiceRating=0;

        document.querySelectorAll(".fa-star").forEach(function(star){
            star.classList.remove("active");
        });
    
    
    return false;
};

