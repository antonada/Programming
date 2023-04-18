const table = document.getElementById('multiplication-table');

for (let i = 1; i <= 10; i++) {
  const row = document.createElement('tr');
  
  for (let j = 1; j <= 10; j++) {
    const cell = document.createElement('td');
    const product = i * j;
    const text = document.createTextNode(product);
    cell.appendChild(text);
    row.appendChild(cell);
  }
  
  table.appendChild(row);
}