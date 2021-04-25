const list = document.getElementById("list");
const output = document.getElementById("output");

let total = 0;
const products = ["Pants:5.88", "Socks:2.24", "Shirt:4.39"];

const df = new DocumentFragment();
for (let i = 0; i < products.length; i++) {
    const name = products[i].split(":")[0];
    const price = Number(products[i].split(":")[1]);
    total += price;
    const item = document.createElement("li");
    item.textContent = `${name} - ${price}`;
    df.appendChild(item);
}

list.appendChild(df);
output.textContent = total.toFixed(2);
