import { records } from "../state/records.state.js";
import { editRecord } from "../form/editRecord.js";
import { showDelete } from "./dialogs.js";
export function renderTable() {
    const tableBody = document.getElementById("recordsTableBody");
    tableBody.innerHTML = "";
    records.forEach((rec, index) => {
        const row = tableBody.insertRow();
        row.insertCell().innerText = rec.pname;
        row.insertCell().innerText = rec.sku;
        row.insertCell().innerText = rec.date;
        row.insertCell().innerText = "★".repeat(rec.overall);
        row.insertCell().innerText = "★".repeat(rec.quality);
        row.insertCell().innerText = "★".repeat(rec.value);
        row.insertCell().innerText = rec.delivery ? "★".repeat(rec.delivery) : "-";
        row.insertCell().innerText = rec.delivery ? "★".repeat(rec.service) : "-";
        row.insertCell().innerText = rec.title;
        row.insertCell().innerText = rec.detailreview;
        row.insertCell().innerText = rec.type;
        row.insertCell().innerText = Array.isArray(rec.tags) ? rec.tags.join(", ") : "";
        row.insertCell().innerText = rec.recommend;
        row.insertCell().innerText = rec.buyAgain;
        row.insertCell().innerText = rec.public;
        row.insertCell().innerText = rec.agree;
        const actionCell = row.insertCell();
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.onclick = () => editRecord(index);
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = () => showDelete(index);
        actionCell.appendChild(editBtn);
        actionCell.appendChild(deleteBtn);
    });
}
//# sourceMappingURL=table.js.map