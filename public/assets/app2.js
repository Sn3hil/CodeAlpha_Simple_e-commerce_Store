document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Exchange rate: 1 USD = 85 INR
    const exchangeRate = 85;

    // Example electronic products with prices in INR
    const products = [
        { id: 1, name: 'Smartphone', price: 699 * exchangeRate, image: 'assets/smartphone.jpg' },
        { id: 2, name: 'Laptop', price: 999 * exchangeRate, image: 'assets/laptop.jpg' },
        { id: 3, name: 'Smartwatch', price: 199 * exchangeRate, image: 'assets/smartwatch.jpg'},
        { id: 4, name: 'Wireless Earbuds', price: 129 * exchangeRate, image: 'assets/wireless earbuds.jpg' },
        { id: 5, name: '4K TV', price: 1499 * exchangeRate, image: 'assets/4k tv.jpg' },
        { id: 6, name: 'Bluetooth Speaker', price: 99 * exchangeRate, image: 'assets/speaker.jpg' },
        { id: 7, name: 'Gaming Console', price: 499 * exchangeRate, image: 'assets/console.jpg' },
        { id: 8, name: 'VR Headset', price: 299 * exchangeRate, image: 'assets/vr headset.jpg' },
        { id: 9, name: 'DSLR Camera', price: 799 * exchangeRate, image: 'assets/dslr camera.jpg' },
        { id: 10, name: 'External Hard Drive', price: 89 * exchangeRate, image: 'assets/hdd.jpg' }
    ];

    // Function to display products
    if (productList) {
        products.forEach(product => {
            const div = document.createElement('div');
            div.className = 'product';
            div.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <h2>${product.name}</h2>
                <p>Price: ₹${product.price.toFixed(2)}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productList.appendChild(div);
        });
    }

    // Function to add product to cart
    window.addToCart = (id) => {
        const product = products.find(p => p.id === id);
        cartItems.push(product);
        localStorage.setItem('cart', JSON.stringify(cartItems));
        alert(`${product.name} added to cart`);
    };

    // Display cart items on the cart page
    const cartPage = document.getElementById('cart-items');
    if (cartPage) {
        let total = 0;
        cartItems.forEach(item => {
            const div = document.createElement('div');
            div.className = 'cart-item';
            div.innerText = `${item.name} - ₹${item.price.toFixed(2)}`;
            cartPage.appendChild(div);
            total += item.price;
        });
        document.getElementById('total-cost').innerText = `Total: ₹${total.toFixed(2)}`;
    }

    // Function to handle checkout
    const checkoutButton = document.getElementById('checkout');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            localStorage.removeItem('cart');  // Clear the cart
            alert('Checkout successful! Redirecting to home page...');
            window.location.href = 'index.html';  // Redirect to home page
        });
    }
});
