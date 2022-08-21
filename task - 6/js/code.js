const table = document.querySelector('table');
for (let i = 0; i < table.rows.length; i++) {
    // for (let j = 0; j < table.rows[i].cells.length; j = j + 2) {
    //   table.rows[i].cells[((i + 1) % 2) + j].style.backgroundColor = 'black';
    // }
    for(let j = 0; j < table.rows[i].cells.length; j = j + 2) {
        table.rows[i].cells[((i + 1) % 2) + j].style.background = 'black'
    }
}

console.log(1)