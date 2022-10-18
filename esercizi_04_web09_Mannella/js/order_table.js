let table = document.getElementById("people-table");
let tbody = table.getElementsByTagName("tbody").item(0);

let direction = 1;

const BTN = document.getElementById("order-btn");

BTN.addEventListener("click", () => {
    orderTable(direction);

    /**
     * Invert the direction
     */
    direction = direction === 1 ? -1 : 1;
});

function orderFunc(a, b) {
    let aCol = a.getElementsByTagName("td").item(0);
    let bCol = b.getElementsByTagName("td").item(0);

    if (aCol.textContent < bCol.textContent) {
        return -1;
    }
    if (aCol.textContent > bCol.textContent) {
        return 1;
    }
    return 0;
}

function orderTable(direction) {
    /**
     * HTML Collection to JS Array
     */
    let rows = Array.prototype.slice.call(tbody.getElementsByTagName("tr"));

    /**
     * Sort the rows with the order func based on the direction given
     */
    let orderedRows = direction === 1 ? rows.sort(orderFunc) : rows.sort(orderFunc).reverse();

    /**
     * Clear the table body and insert the ordered items
     */
    tbody.innerHTML = "";
    for (const row of orderedRows) {
        tbody.appendChild(row);
    }
}