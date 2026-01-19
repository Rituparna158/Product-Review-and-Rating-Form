import {records}from "../state/records.state.js";
import {renderTable}from "./table.js"

const successDialog=document.getElementById("successDialog") as HTMLDialogElement;
const dialogMessage=document.getElementById("dialogMessage") as HTMLElement;
const okbtn = document.getElementById("okbutton") as HTMLButtonElement;

export function showSuccess(msg:string):void{

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

export function showDelete(index:number):void{
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
    
    
    



