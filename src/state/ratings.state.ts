export let overallRating: number = 0;
export let qualityRating: number = 0;
export let valueFormoneyRating: number = 0;
export let deliveryRating: number = 0;
export let customerServiceRating: number = 0;

export function resetRatings():void{
    overallRating=0;
    qualityRating=0;
    valueFormoneyRating=0;
    deliveryRating=0;
    customerServiceRating=0;
}
export function getRating(
    name:"overall"|"quality"|"value"|"delivery"|"service",
):number{
    if(name==="overall") return overallRating;
    if(name==="quality") return qualityRating;
    if(name==="value") return valueFormoneyRating;
    if(name==="delivery") return deliveryRating;
    return customerServiceRating
}
export function setRatings(
     name:"overall"|"quality"|"value"|"delivery"|"service",
     value:number
):void{
    if(name==="overall")  overallRating=value;
    if(name==="quality") qualityRating=value;
    if(name==="value")  valueFormoneyRating=value;
    if(name==="delivery") deliveryRating=value;
    if(name==="service") customerServiceRating=value;
}