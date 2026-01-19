import{setRatings,getRating} from "../state/ratings.state.js";

export function applyStarRating(
    containerId:string,
    ratingName:"overall"|"quality"|"value"|"delivery"|"service",
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
           setRatings(ratingName,i+1);
            if(errorSpan){
                errorSpan.innerHTML="";

            }
            
        };
        stars[i]!.onmouseout=function():void{
            resetStars(stars);

            const ratingValue=getRating(ratingName);
            for(let j=0;j<ratingValue;j++){
                stars[j]!.classList.add("active");
            }
        };
    }
}


export function resetStars(stars:NodeListOf<HTMLElement>):void{
    for(let i=0;i<stars.length;i++){
        stars[i]!.classList.remove("active");
    }
}

export  function fillStars(containerId:string,count:number):void{
        const stars=
        document.querySelectorAll("#" + containerId + " .fa-star") as NodeListOf<HTMLElement>;
        for(let i=0;i<count;i++){
            stars[i]!.classList.add("active")

            }
            
        }


