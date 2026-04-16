function insert_Row() {

    const table = document.getElementById("sampleTable")
    const tbody = table.getElementsByTagName("tbody")[0]

    const newRow = document.createElement("tr")

    const cell1 = document.createElement("td")
    const cell2 = document.createElement("td")

    cell1.innerText = "New Cell1"
    cell2.innerText = "New Cell2"

    newRow.appendChild(cell1)
    newRow.appendChild(cell2)

    // ✅ insert at top inside tbody
    tbody.insertBefore(newRow, tbody.rows[0])
}