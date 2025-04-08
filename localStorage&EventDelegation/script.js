const addItems = document.querySelector('.add-item');
const itemList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];

const deleteAllButton = document.querySelector('.delete-all');
const checkAllButton = document.querySelector('.check-all');
const uncheckAllButton = document.querySelector('.uncheck-all')

function addItem(e) {
    e.preventDefault();
   const text = (this.querySelector('[name=item]')).value;
   const item = {
    text,
    done: false
   };

   items.push(item);
   populateList(items, itemList);
   localStorage.setItem('items',JSON.stringify(items));
   this.reset();
}

function populateList(plates = [], platesList) {
    if (plates.length === 0) {
        platesList.innerHTML = `<li>Loading TAPAS...</li>`; 
        return; 
    }
    platesList.innerHTML = plates.map((plates, i) => {
        return `
        <li>
        <input type='checkbox' data-index=${i} id='item${i}' ${plates.done ? 'checked' : ''} />
        <label for='item${i}'>${plates.text}</label>
        </li>
        `;
    }).join('');
}

function toggleDone(e){
    if(!e.target.matches('input')) return;
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemList);
}

function deleteAllItems() {
    items.length = 0; 
    localStorage.removeItem('items'); 
    populateList(items, itemList); 
}

function checkAllItems() {
    items.forEach(item => item.done = true); 
    localStorage.setItem('items', JSON.stringify(items)); 
    populateList(items, itemList); 
}

function uncheckAllItems() {
    items.forEach(item => item.done = false); 
    localStorage.setItem('items', JSON.stringify(items)); 
    populateList(items, itemList); 
}

addItems.addEventListener('submit', addItem);
itemList.addEventListener('click', toggleDone);

deleteAllButton.addEventListener('click', deleteAllItems);
checkAllButton.addEventListener('click', checkAllItems);
uncheckAllButton.addEventListener('click', uncheckAllItems);

populateList(items, itemList);