const cart = [];
const cartList = document.getElementById("cart-list");
const cartPanel = document.getElementById("cart");

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    cartList.innerHTML = "";
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.product} - $${item.price}`;
        cartList.appendChild(li);
    });
}

document.getElementById("cart-btn").onclick = () => {
    cartPanel.classList.add("open");
};

document.getElementById("close-cart").onclick = () => {
    cartPanel.classList.remove("open");
};
