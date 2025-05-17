const NUM_CHECKOUTS = 3;
let checkouts = Array.from({ length: NUM_CHECKOUTS }, () => []);

window.onload = () => {
  renderCheckouts();
};

function handleCustomerAdd() {
  const input = document.getElementById("itemInput");
  const itemCount = parseInt(input.value);
  if (isNaN(itemCount) || itemCount <= 0) {
    alert("Please enter a valid number of items.");
    return;
  }

  let minTotal = Infinity;
  let selectedIndex = 0;

  checkouts.forEach((queue, index) => {
    const totalItems = queue.reduce((sum, item) => sum + item, 0);
    if (totalItems < minTotal) {
      minTotal = totalItems;
      selectedIndex = index;
    }
  });

  checkouts[selectedIndex].push(itemCount);
  input.value = "";
  renderCheckouts();
}

function renderCheckouts() {
  const area = document.getElementById("checkoutArea");
  area.innerHTML = "";

  checkouts.forEach((queue, index) => {
    const totalItems = queue.reduce((sum, items) => sum + items, 0);
    const totalCustomers = queue.length

    const checkoutDiv = document.createElement("div");
    checkoutDiv.className = "checkout";

    const titleDiv = document.createElement("div")
    titleDiv.className = "title"
    const title = document.createElement("h3");
    title.textContent = `Counter ${index + 1}`;
    const p = document.createElement("p")

    p.textContent=`${totalCustomers} customers`
    titleDiv.appendChild(title)
    titleDiv.appendChild(p)
    checkoutDiv.appendChild(titleDiv);

    const queueDiv = document.createElement("div");
    queueDiv.className = "queue";

    queue.forEach(item => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "item";
      itemDiv.textContent = `${item} items`;
      queueDiv.appendChild(itemDiv);
    });

    const totalItemsText = document.createElement("div")
    totalItemsText.id = "totalItems"
    totalItemsText.textContent = `Total items: ${totalItems}`

    checkoutDiv.appendChild(queueDiv);
    checkoutDiv.appendChild(totalItemsText)

    area.appendChild(checkoutDiv);

  });
}
