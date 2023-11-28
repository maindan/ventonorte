

const listProducts = document.getElementById("list-products")
const products = document.getElementById("products")
const dialog = document.querySelector("dialog");
const bt = document.getElementsByClassName("comprar")
const btClose = document.getElementById('modalClose')

products.addEventListener('mouseover', showList);
products.addEventListener('mouseout', closeList);
for(let i = 0; i < bt.length; i++) {
    bt[i].addEventListener('click', openModal);
}
btClose.addEventListener('click', closeModal);

function showList() {
    listProducts.style.display = 'flex';
}
function closeList() {
    listProducts.style.display = 'none';
}

function openModal() {
    dialog.showModal();
    dialog.style.visibility = 'visible';
}

function closeModal() {
    dialog.close();
    dialog.style.visibility = 'hidden'
}