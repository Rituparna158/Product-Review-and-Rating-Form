import {records,editid,resetEditId} from "../state/records.state.js";
import {renderTable} from "../ui/table.js";
import {resetForm} from "../utils/resetForm.js";
import {scrollToError} from "../utils/scroll.js";
import {showSuccess} from "../ui/dialogs.js";
import { getRating } from "../state/ratings.state.js";

export function initFormSubmit(form:HTMLFormElement):void{
    form.onsubmit=function(e:Event): boolean {
    e.preventDefault();
    let valid : boolean=true;

    const productName=document.getElementById("pname") as HTMLInputElement;
    const sku = document.getElementById("sku") as HTMLInputElement;
    const purchaseDate=document.getElementById("dt") as HTMLInputElement;
    const reviewTitle=document.getElementById("review-title") as HTMLInputElement;
    const detailedReview=document.getElementById("detailed-review") as HTMLTextAreaElement;
    const reviewType=document.querySelector('input[name="reviewtype"]:checked') as HTMLInputElement | null;
    const recommendE=document.querySelector('input[name="recommendproduct"]:checked') as HTMLInputElement | null;
    const wouldBuyAgain=document.getElementById("Would-Buy-Again") as HTMLInputElement;
    const makeReviewPublic=document.getElementById("Make-Review-Public") as HTMLInputElement;
    const agreeTerms=document.getElementById("Agree-to-Terms")  as HTMLInputElement;

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
    
    if(getRating("overall") === 0){
        document.getElementById("overallError")!.innerText="Overall Rating is required"
        valid=false
    }
    if(getRating("quality") === 0){
        document.getElementById("qualityError")!.innerText="Quality Rating is required"
        valid=false
    }
    if(getRating("value") === 0){
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

        overall:getRating("overall"),
        quality:getRating("quality"),
        value:getRating("value"),
        delivery:getRating("delivery"),
        service:getRating("service"),

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
        resetEditId();
        (form.querySelector('input[type="submit"]') as HTMLInputElement).value="Submit";
    }
    renderTable()
    resetForm()
    return false;
};
}
