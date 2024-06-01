document.addEventListener('DOMContentLoaded', function() {
    const products = [
        { name: 'Classic White', price: '$40' },
        { name: 'Elegant Blackout', price: '$60' },
        { name: 'Luxury Velvet', price: '$80' },
        // Add more products as needed
    ];

    const productContainer = document.querySelector('.product-list');
    const productSelect = document.getElementById('product');

    products.forEach(product => {
        // Create product item for the product list
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `<h3>${product.name}</h3><p>Price: ${product.price}</p>`;
        productContainer.appendChild(productItem);

        // Create option for the product select dropdown
        const option = document.createElement('option');
        option.value = product.name;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData(orderForm);
        const orderDetails = {
            name: formData.get('name'),
            email: formData.get('email'),
            product: formData.get('product'),
            quantity: formData.get('quantity')
        };

        console.log('Order submitted:', orderDetails);

        alert('Thank you for your order!');
        alert("Lalelani made this website")
        orderForm.reset();
    });
});
