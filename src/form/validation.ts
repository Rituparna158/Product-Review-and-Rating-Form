export function initValidation():void{
    const productName=document.getElementById("pname") as HTMLInputElement;
    const sku = document.getElementById("sku") as HTMLInputElement;
    const purchaseDate=document.getElementById("dt") as HTMLInputElement;
    const reviewTitle=document.getElementById("review-title") as HTMLInputElement;
    const detailedReview=document.getElementById("detailed-review") as HTMLTextAreaElement;
    const recommendprod=document.querySelectorAll('input[name="recommendproduct"]') as NodeListOf<HTMLInputElement>;
    const makeReviewPublic=document.getElementById("Make-Review-Public") as HTMLInputElement;
    const agreeTerms=document.getElementById("Agree-to-Terms") as HTMLInputElement;
    const wouldBuyAgain=document.getElementById("Would-Buy-Again") as HTMLInputElement;

    const nameError = document.getElementById("nameError") as HTMLElement;
    const skuError = document.getElementById("skuError") as HTMLElement;
    const dateError = document.getElementById("dateError") as HTMLElement;
    const titleError = document.getElementById("titleError") as HTMLElement;
    const reviewError = document.getElementById("reviewError") as HTMLElement;
    const recommendError = document.getElementById("recommendError") as HTMLElement;
    const termsError = document.getElementById("termsError") as HTMLElement;

    productName.addEventListener("input",()=>{
    const val: string=productName.value.trim();
    if (val === ""){
        nameError.innerText=""
        return;
    }
  
    if(!/^[a-zA-Z0-92 ]+$/.test(val)){
        nameError.innerText="Only Alphabets and spaces are allowed"
    }
    else{
        nameError.innerText="";

    }
});

    sku.addEventListener("input",()=>{
        if(!/^[a-zA-Z0-9]*$/.test(sku.value)){
            skuError.innerText="only letters and numbers are allowed";
        }
        else{
            skuError.innerText="";
        }
    });

    purchaseDate.addEventListener("blur",()=>{
        if(purchaseDate.value === ""){
            dateError.innerText="Purchase date is required";
        }
    },true);

    purchaseDate.addEventListener("input",()=>{
        dateError.innerText="";
    });

    reviewTitle.addEventListener("blur",()=>{
        if(reviewTitle.value.length<10 || reviewTitle.value.length>100){
            titleError.innerText=" Title must be in between 10 to 100 characters ";
        }
    },true);

    reviewTitle.addEventListener("input",()=>{
        if(reviewTitle.value.length>=10 && reviewTitle.value.length<=100){
            titleError.innerText="";
        }

    });

    detailedReview.addEventListener("blur",()=>{
        if(detailedReview.value.length<30 || detailedReview.value.length>1000){
            reviewError.innerText="Review must be in between 30 to 1000 characters";
        }
    },true);

    detailedReview.addEventListener("input",function(){
        if(detailedReview.value.length>=30 && detailedReview.value.length<=1000){
            reviewError.innerText="";
        }
    });

    recommendprod.forEach((radio:HTMLInputElement)=>{
        radio.addEventListener("change", ()=>{
            recommendError.innerText="";
        });
    });


    makeReviewPublic.onchange=function():void{
        if(makeReviewPublic.checked && agreeTerms.checked){
            const er = document.getElementById("termsError");
            if(er) er.innerText="";
        }
    };

    agreeTerms.onchange=function():void{
        if(makeReviewPublic.checked && agreeTerms.checked){
            const er=document.getElementById("termsError")
            if(er) er.innerText="";
        }
    };
}