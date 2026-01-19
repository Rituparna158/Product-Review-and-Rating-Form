export let records: any[] = [];
export let editid: number = -1;

export function setEditId(id:number):void{
    editid=id;
}

export function resetEditId():void{
    editid=-1;
}
