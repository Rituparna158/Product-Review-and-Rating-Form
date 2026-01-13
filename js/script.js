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
            if(errorSpan){
                errorSpan.innerHTML="";

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
applyStarRating("overallRating","overall","overallError");
applyStarRating("qualityRating","quality","qualityError");
applyStarRating("valueFormoneyRating","value","valueError");
applyStarRating("deliveryRating","delivery","deliveryError");
applyStarRating("customerServiceRating","service","serviceErro");

var productName=document.getElementById("pname");
productName.addEventListener("input",function(){
    var val=productName.value.trim()
    if (val === ""){
        document.getElementById("nameError").innerText=""
        return;

    }
   
    if(!/^[a-zA-Z0-92 ]+$/.test(productName.value.trim())){
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
var wouldBuyAgain=document.getElementById("Would-Buy-Again")

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
var records=[];
var editid=-1;

var tableBody = document.getElementById("recordsTableBody");
var submitBtn=document.querySelector('input[type="submit"]');

var form=document.querySelector("form");

function stars(count){
    return "★".repeat(count)+"☆".repeat(5-count);
}

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

    var selectedTags=[];
    document.querySelectorAll('input[name="productTags"]:checked').forEach(function(tag){
        selectedTags.push(tag.value)
    });

    // IF VALIDATION FAILS , SCROLL TO ERROR
    if(!valid){
        scrollToError();
        return false;
    }

    var record={
        pname:productName.value,
        sku:sku.value,
        date:purchaseDate.value,

        overall:overallRating,
        quality:qualityRating,
        value:valueFormoneyRating,
        delivery:deliveryRating,
        service:customerServiceRating,

        title:reviewTitle.value,
        detailreview:detailedReview.value,
        type:document.querySelector('input[name="reviewtype"]:checked')?.value || "",
        tags:selectedTags,
        recommend:document.querySelector('input[name="recommendproduct"]:checked')?.value || "" ,
        buyAgain:wouldBuyAgain.checked? "Yes" : "No",
        public:makeReviewPublic.checked? "Yes" : "No",
        agree:agreeTerms.checked? "Yes" : "No"
    };

    if(editid===-1){
        records.push(record);
    }
    else{
        records[editid]=record;
        editid=-1;
        form.querySelector('input[type="submit"]').value="Submit"

    }
    renderTable()
    resetForm()
};


function renderTable(){
    tableBody.innerHTML="";
    records.forEach(function(rec,index){
        var row = tableBody.insertRow();

        row.insertCell().innerText=rec.pname;
        row.insertCell().innerText=rec.sku;
        row.insertCell().innerText=rec.date;

        
        row.insertCell().innerText="★".repeat(rec.overall);
        row.insertCell().innerText="★".repeat(rec.quality)
        row.insertCell().innerText="★".repeat(rec.value)
        row.insertCell().innerText=rec.delivery?"★".repeat(rec.service):"-";
        row.insertCell().innerText=rec.delivery?"★".repeat(rec.service):"-";


        row.insertCell().innerText=rec.title;
        row.insertCell().innerText=rec.detailreview;
        row.insertCell().innerText=rec.type;
        row.insertCell().innerText=Array.isArray(rec.tags)? rec.tags.join(", "):"";
        row.insertCell().innerText=rec.recommend;
        row.insertCell().innerText=rec.buyAgain;
        row.insertCell().innerText=rec.public;
        row.insertCell().innerText=rec.agree;

        var actionCell=row.insertCell();

        var editBtn=document.createElement("button");
        editBtn.innerText="Edit";
        editBtn.onclick=function(){
            editRecord(index);
        };
        
        var deleteBtn=document.createElement("button");
        deleteBtn.innerText="Delete";
        deleteBtn.onclick=function(){
            if(confirm("Are you sure you want to delete this record?")){
                records.splice(index,1);
                renderTable();
            }
        };
        actionCell.appendChild(editBtn)
        actionCell.appendChild(deleteBtn)

    });
}

function editRecord(index){
    editid=index;
    var rec=records[index];
    
    document.getElementById("pname").value=rec.pname;
    document.getElementById("sku").value=rec.sku;
    document.getElementById("dt").value=rec.date;
    document.getElementById("review-title").value=rec.title;
    document.getElementById("detailed-review").value=rec.detailreview;

    overallRating=rec.overall;
    qualityRating=rec.quality;
    valueFormoneyRating=rec.value;
    deliveryRating=rec.delivery;
    customerServiceRating=rec.service;

    document.querySelectorAll(".fa-star").forEach(star=>{
       star.classList.remove("active");
    });


    fillStars("overallRating",overallRating);
    fillStars("qualityRating",qualityRating);
    fillStars("valueFormoneyRating",valueFormoneyRating);
    fillStars("deliveryRating",deliveryRating);
    fillStars("customerServiceRating",customerServiceRating);


    document.querySelectorAll('input[name="reviewtype"]').forEach(radio=> {
        radio.checked=radio.value===rec.type;

    });

    document.querySelectorAll('input[name="productTags"]').forEach(function(checkbox){
        checkbox.checked=Array.isArray(rec.tags)? rec.tags.includes(checkbox.value):false

    });


    document.querySelectorAll('input[name="recommendproduct"]').forEach(radio=>{
        radio.checked=radio.value===rec.recommend;
    });

    document.getElementById("Would-Buy-Again").checked=rec.buyAgain==="Yes";
    document.getElementById("Make-Review-Public").checked=rec.public==="Yes";
    document.getElementById("Agree-to-Terms").checked=rec.agree==="Yes";

    document.querySelector('input[type="submit"]').value="Update";

    document.getElementById("formSection").scrollIntoView();


}

  function fillStars(containerId,count){
        var stars = document.querySelectorAll("#"+ containerId+ " .fa-star");
        for(let i=0;i<count;i++){
            stars[i].classList.add("active")
        }
    }


function resetForm(){
    form.reset()
    overallRating=0;
    qualityRating=0;
    valueFormoneyRating=0;
    deliveryRating=0;
    customerServiceRating=0;

    editid=-1;

    document.querySelectorAll('input[name="productTags"]').forEach(function(checkbox){
        checkbox.checked=false;
    })

    document.querySelectorAll(".fa-star").forEach(function(star){
        star.classList.remove("active");
         });
}   

