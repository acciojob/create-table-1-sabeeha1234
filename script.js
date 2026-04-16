function insert_Row() {
    //Writ
    const table = document.getElementById("sampleTable")

    const newRow = document.createElement("tr")

    const cell1 = document.createElement("td")
    const cell2 = document.createElement("td")

    cell1.innerText = "New Cell1"
    cell2.innerText = "New Cell2"

    newRow.appendChild(cell1)
    newRow.appendChild(cell2)

    // ✅ correct way to insert at top
    table.insertBefore(newRow, table.rows[0])
  
  
}
