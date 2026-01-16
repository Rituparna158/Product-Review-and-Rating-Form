let overallRating: number = 0;
let qualityRating: number = 0;
let valueFormoneyRating: number = 0;
let deliveryRating: number = 0;
let customerServiceRating: number = 0;

let records: any[] = [];
let editid: number = -1;

// STAR RATING VALIDATION
function applyStarRating(
    containerId:string,
    ratingName:string,
    errorId:string ):void{

    const stars=document.querySelectorAll("#" + containerId + " .fa-star") as NodeListOf<HTMLElement>;
    const errorSpan=document.getElementById(errorId) as HTMLElement | null;

    for(let i=0;i<stars.length;i++){
        stars[i]!.onmouseover=function():void{
            resetStars(stars);
            for (let j=0; j<= i;j++){
                const hoverStar=stars[j]
                if (hoverStar){
                    hoverStar.classList.add("active")

                }   
            }
        };
    
        stars[i]!.onclick=function():void {
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
        stars[i]!.onmouseout=function():void{
            resetStars(stars);

            let ratingValue: number = 0;

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
                stars[j]!.classList.add("active");
            }
        };
    }
}


function resetStars(stars:NodeListOf<HTMLElement>):void{
    for(let i=0;i<stars.length;i++){
        stars[i]!.classList.remove("active");

        }       
    }
applyStarRating("overallRating","overall","overallError");
applyStarRating("qualityRating","quality","qualityError");
applyStarRating("valueFormoneyRating","value","valueError");
applyStarRating("deliveryRating","delivery","deliveryError");
applyStarRating("customerServiceRating","service","serviceErro");

var submitBtn=document.querySelector('input[type="submit"]');

const form: HTMLFormElement=
    document.querySelector("form") as HTMLFormElement;

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

//SCROLLS PAGE TO THE FIRST VISIBLE ERROR
function scrollToError():void{
    var errors=document.getElementsByClassName("error");
    for (let i=0;i<errors.length;i++){
        if (errors[i]!.innerHTML!=""){
            errors[i]!.scrollIntoView(true)
            break;
        }
    }   
}



form.onsubmit=function(e:Event): boolean {
    e.preventDefault();
    let valid : boolean=true;

    const reviewType=document.querySelector('input[name="reviewtype"]:checked') as HTMLInputElement | null;
    
    const recommendE=document.querySelector('input[name="recommendproduct"]:checked') as HTMLInputElement | null;

    const selectedTags:string[]=[];
    document.querySelectorAll('input[name="productTags"]:checked').forEach((tag)=>{
        selectedTags.push((tag as HTMLInputElement).value)
    });

    if(productName.value===""){
        document.getElementById('nameError')!.innerText="Name is required";
        valid=false;
    }
    if(sku.value===""){
        document.getElementById("skuError")!.innerText="Product sku is required";
        valid=false;
    }

    if(purchaseDate.value === ""){
        document.getElementById("dateError")!.innerText="Purchase Date is required";
        valid=false;

    }
    
    if(overallRating === 0){
        document.getElementById("overallError")!.innerText="Overall Rating is required"
        valid=false
    }
    if(qualityRating === 0){
        document.getElementById("qualityError")!.innerText="Quality Rating is required"
        valid=false
    }
    if(valueFormoneyRating === 0){
        document.getElementById("valueError")!.innerText="ValueForMoney Rating is required"
        valid=false
    }
    
    if(reviewTitle.value.length<10 || reviewTitle.value.length>100){
        document.getElementById("titleError")!.innerText="Title must be 10-100 characters";
        valid=false;
    }
    
    if(detailedReview.value.length<30 || detailedReview.value.length>1000){
        document.getElementById("reviewError")!.innerText="Review must be 30-1000 characters";
        valid=false;
    }
    
    const recommendRadio=document.querySelector('input[name="recommendproduct"]:checked') as HTMLInputElement;
    if(!recommendRadio){
        document.getElementById("recommendError")!.innerText="Please select an option";
        valid=false;

    }
      
    if(!(makeReviewPublic.checked && agreeTerms.checked)){
        document.getElementById("termsError")!.innerText="Please accept rquired terms";
        valid=false;

    }
    else{
        document.getElementById("termsError")!.innerText="";
    }

    if(!valid){
        scrollToError();
        return false;
    }

    const record={
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
        type: reviewType? reviewType.value : "",
        tags:selectedTags,
        recommend:recommendE? recommendE.value:"" ,
        buyAgain:wouldBuyAgain.checked? "Yes" : "No",
        public:makeReviewPublic.checked? "Yes" : "No",
        agree:agreeTerms.checked? "Yes" : "No"
    };

    if(editid===-1){
        records.push(record);
        showSuccess("Form submitted successfully");
    }
    else{
        records[editid]=record;
        showSuccess("Form updated successfully")
        editid=-1;
        (form.querySelector('input[type="submit"]') as HTMLInputElement).value="Submit";
    }
    renderTable()
    resetForm()
    return false;
};


function renderTable():void{
    const tableBody=document.getElementById("recordsTableBody") as HTMLTableSectionElement;
    tableBody.innerHTML="";
    records.forEach((rec,index)=>{
        const row = tableBody.insertRow();
        row.insertCell().innerText=rec.pname;
        row.insertCell().innerText=rec.sku;
        row.insertCell().innerText=rec.date;

        
        row.insertCell().innerText="★".repeat(rec.overall);
        row.insertCell().innerText="★".repeat(rec.quality)
        row.insertCell().innerText="★".repeat(rec.value)
        row.insertCell().innerText=rec.delivery?"★".repeat(rec.delivery):"-";
        row.insertCell().innerText=rec.delivery?"★".repeat(rec.service):"-";


        row.insertCell().innerText=rec.title;
        row.insertCell().innerText=rec.detailreview;
        row.insertCell().innerText=rec.type;
        row.insertCell().innerText=Array.isArray(rec.tags)? rec.tags.join(", "):"";
        row.insertCell().innerText=rec.recommend;
        row.insertCell().innerText=rec.buyAgain;
        row.insertCell().innerText=rec.public;
        row.insertCell().innerText=rec.agree;

        const actionCell=row.insertCell();

        const editBtn=document.createElement("button");
        editBtn.innerText="Edit";
        editBtn.onclick=()=>editRecord(index);
            
        
        const deleteBtn=document.createElement("button");
        deleteBtn.innerText="Delete";
        deleteBtn.onclick=()=>showDelete(index);
        
        actionCell.appendChild(editBtn)
        actionCell.appendChild(deleteBtn)

    });
}
function editRecord(index:number):void{
    const rec=records[index];
    editid=index;
    
    
    productName.value=rec.pname;
    sku.value=rec.sku;
    purchaseDate.value=rec.date;
    reviewTitle.value=rec.title;
    detailedReview.value=rec.detailreview;

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


    document.querySelectorAll('input[name="reviewtype"]').forEach((radio)=> {
        const r=radio as HTMLInputElement;
        r.checked=r.value===rec.type;

    });

    document.querySelectorAll('input[name="productTags"]').forEach((checkbox)=>{
        const cb=checkbox as HTMLInputElement
        cb.checked=rec.tags.includes(cb.value);

    });


    document.querySelectorAll('input[name="recommendproduct"]').forEach((radio)=>{
        const r=radio as HTMLInputElement;
        r.checked=r.value===rec.recommend;
    });

    (document.getElementById("Would-Buy-Again") as HTMLInputElement).checked=rec.buyAgain==="Yes";
    (document.getElementById("Make-Review-Public")as HTMLInputElement).checked=rec.public==="Yes";
    (document.getElementById("Agree-to-Terms")as HTMLInputElement).checked=rec.agree==="Yes";

    
    (document.querySelector('input[type="submit"]')as HTMLInputElement).value="Update";

    document.getElementById("formSection")?.scrollIntoView({
        behavior:"smooth"
    });


}

  function fillStars(containerId:string,count:number):void{
        const stars=
        document.querySelectorAll("#" + containerId + " .fa-star") as NodeListOf<HTMLElement>;
        for(let i=0;i<count;i++){
            stars[i]!.classList.add("active")

            }
            
        }


function resetForm():void{
    form.reset()
    overallRating=0;
    qualityRating=0;
    valueFormoneyRating=0;
    deliveryRating=0;
    customerServiceRating=0;

    editid=-1;

    document.querySelectorAll('input[name="productTags"]').forEach((checkbox)=>{
        const cb=checkbox as HTMLInputElement;
        cb.checked=false;
    })

    document.querySelectorAll(".fa-star").forEach(function(star){
        star.classList.remove("active");
         });
}   

const successDialog=document.getElementById("successDialog") as HTMLDialogElement;
const dialogMessage=document.getElementById("dialogMessage") as HTMLElement;
const okbtn = document.getElementById("okbutton") as HTMLButtonElement;

function showSuccess(msg:string):void{

    dialogMessage.innerText=msg;
    successDialog.showModal();
}
    okbtn.onclick=function(){
        successDialog.close();
    };
const deleteDialog=document.getElementById("deleteDialog") as HTMLDialogElement;
const dialogdeleteMessage=document.getElementById("dialogdeleteMessage") as HTMLElement;
const yesbtn=document.getElementById("yesbutton") as HTMLButtonElement;
const nobtn=document.getElementById("nobutton") as HTMLButtonElement;

let deleteIndex:number=-1;

function showDelete(index:number):void{
    deleteIndex=index
    dialogdeleteMessage.innerText="Are you sure you want to delete this record?";
    deleteDialog.showModal();
}
yesbtn.onclick=():void=>{
    if(deleteIndex!=-1){
        records.splice(deleteIndex,1);
        renderTable();
        deleteIndex=-1;
    }    
        deleteDialog.close();
    };

nobtn.onclick=():void=>{
    deleteIndex=-1
    deleteDialog.close();
    };
    
    
    



