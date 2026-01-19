import { records } from "../state/records.state.js";
import { renderTable } from "./table.js";
const successDialog = document.getElementById("successDialog");
const dialogMessage = document.getElementById("dialogMessage");
const okbtn = document.getElementById("okbutton");
export function showSuccess(msg) {
    dialogMessage.innerText = msg;
    successDialog.showModal();
}
okbtn.onclick = function () {
    successDialog.close();
};
const deleteDialog = document.getElementById("deleteDialog");
const dialogdeleteMessage = document.getElementById("dialogdeleteMessage");
const yesbtn = document.getElementById("yesbutton");
const nobtn = document.getElementById("nobutton");
let deleteIndex = -1;
export function showDelete(index) {
    deleteIndex = index;
    dialogdeleteMessage.innerText = "Are you sure you want to delete this record?";
    deleteDialog.showModal();
}
yesbtn.onclick = () => {
    if (deleteIndex != -1) {
        records.splice(deleteIndex, 1);
        renderTable();
        deleteIndex = -1;
    }
    deleteDialog.close();
};
nobtn.onclick = () => {
    deleteIndex = -1;
    deleteDialog.close();
};
//# sourceMappingURL=dialogs.js.map