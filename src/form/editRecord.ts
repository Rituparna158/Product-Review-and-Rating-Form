import {records,setEditId} from "../state/records.state.js";
import { setRatings } from "../state/ratings.state.js";
import { fillStars } from "../ui/starRating.js";

export function editRecord(index:number):void{
    const rec=records[index];

    setEditId(index);
    
    const productName=document.getElementById("pname") as HTMLInputElement;
    const sku = document.getElementById("sku") as HTMLInputElement;
    const purchaseDate=document.getElementById("dt") as HTMLInputElement;
    const reviewTitle=document.getElementById("review-title") as HTMLInputElement;
    const detailedReview=document.getElementById("detailed-review") as HTMLTextAreaElement;
    productName.value=rec.pname;
    sku.value=rec.sku;
    purchaseDate.value=rec.date;
    reviewTitle.value=rec.title;
    detailedReview.value=rec.detailreview;

    setRatings("overall",rec.overall);
    setRatings("quality",rec.overall);
    setRatings("value",rec.overall);
    setRatings("delivery",rec.overall);
    setRatings("service",rec.overall);
    

    document.querySelectorAll(".fa-star").forEach(star=>{
       star.classList.remove("active");
    });

    fillStars("overallRating",rec.overall);
    fillStars("qualityRating",rec.quality);
    fillStars("valueFormoneyRating",rec.value);
    fillStars("deliveryRating",rec.delivery);
    fillStars("customerServiceRating",rec.service);


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

