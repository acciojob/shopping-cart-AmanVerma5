//your code here
let name=document.getElementById('item-name-input')
let price=document.getElementById('item-price-input')
let qty=document.getElementById('item-qty-input')
let button=document.getElementById('add')

button.addEventListener('click',()=>{
    let item_price=parseFloat(price.value);
    let item_name=name.value;
   
    let tr=document.createElement('tr');
    tr.innerHTML=`<td>${item_name}</td>
                  <td>${item_price}</td>
                  <td>${qty.value}</td>`;

    let table=document.getElementsByTagName('table')[0];
    table.append(tr);
})

