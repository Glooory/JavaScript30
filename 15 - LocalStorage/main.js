const localCacheName = 'plates';
const addItemForm = document.querySelector('form.add-items');
const platesList = document.querySelector('ul.plates');
const clearBtn = document.querySelector('button.clear');
const items = JSON.parse(localStorage.getItem(localCacheName)) || [];

function saveItem(e) {
    e.preventDefault();
    const text = this.querySelector('input[name="item"]').value;
    let item = {
        text: text,
        done: false
    }
    items.push(item);
    populateItemList(items, platesList);
    addItemForm.reset();
    saveToLocalCache(items, localCacheName);
}

function populateItemList(data = [], listToPopulate) {
    const content = data.map((data, i) => {
        return `
            <li>
                <input type= checkbox name="item${i}" ${data.done ? "checked" : ""}>
                <label for="item${i}" data-index="${i}">${data.text}</label>
            </li>
        `;
    }).join('');
    listToPopulate.innerHTML = content;
}

function toggleItemChecked(e) {
    const index = e.target.dataset.index;
    items[index].done = !items[index].done;
    populateItemList(items, platesList);
    saveToLocalCache(items, localCacheName);
}

function saveToLocalCache(data, cacheName) {
    localStorage.setItem(cacheName, JSON.stringify(data));
}

function loadItemsFormCache() {
    items = JSON.parse(localStorage.getItem(localCacheName));
}

function clearPlatesData(e) {
    localStorage.removeItem(localCacheName);
    items.length = 0;
    populateItemList(items, platesList);
}

addItemForm.addEventListener('submit', saveItem);
platesList.addEventListener('click', toggleItemChecked);
clearBtn.addEventListener('click', clearPlatesData);
populateItemList(items, platesList);