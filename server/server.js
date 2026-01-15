const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// In-memory database
let items = [
    {
        id: 1,
        name: 'Wireless Headphones',
        description: 'Premium noise-cancelling wireless headphones with 30-hour battery life',
        price: 299.99,
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
        category: 'Electronics'
    },
    {
        id: 2,
        name: 'Smart Watch',
        description: 'Fitness tracking smartwatch with heart rate monitor and GPS',
        price: 399.99,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
        category: 'Electronics'
    },
    {
        id: 3,
        name: 'Laptop Backpack',
        description: 'Water-resistant backpack with padded laptop compartment',
        price: 79.99,
        image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500',
        category: 'Accessories'
    },
    {
        id: 4,
        name: 'Mechanical Keyboard',
        description: 'RGB mechanical gaming keyboard with customizable keys',
        price: 149.99,
        image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500',
        category: 'Electronics'
    },
    {
        id: 5,
        name: 'Portable Charger',
        description: '20000mAh power bank with fast charging support',
        price: 49.99,
        image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500',
        category: 'Accessories'
    },
    {
        id: 6,
        name: 'Wireless Mouse',
        description: 'Ergonomic wireless mouse with precision tracking',
        price: 59.99,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
        category: 'Electronics'
    },
    {
        id: 7,
        name: 'Bluetooth Speaker',
        description: 'Portable waterproof speaker with 360-degree sound',
        price: 129.99,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
        category: 'Electronics'
    },
    {
        id: 8,
        name: 'USB-C Hub',
        description: '7-in-1 USB-C hub with HDMI, USB 3.0, and SD card reader',
        price: 45.99,
        image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500',
        category: 'Accessories'
    },
    {
        id: 9,
        name: 'Webcam HD',
        description: '1080p HD webcam with auto-focus and built-in microphone',
        price: 89.99,
        image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500',
        category: 'Electronics'
    },
    {
        id: 10,
        name: 'Phone Stand',
        description: 'Adjustable aluminum phone stand for desk',
        price: 24.99,
        image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=500',
        category: 'Accessories'
    },
    {
        id: 11,
        name: 'Laptop Sleeve',
        description: 'Premium leather laptop sleeve with magnetic closure',
        price: 39.99,
        image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500',
        category: 'Accessories'
    },
    {
        id: 12,
        name: 'Desk Lamp',
        description: 'LED desk lamp with adjustable brightness and color temperature',
        price: 54.99,
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500',
        category: 'Home & Living'
    }
];

// Get all items
app.get('/api/items', (req, res) => {
    res.json(items);
});

// Get single item
app.get('/api/items/:id', (req, res) => {
    const item = items.find(i => i.id === parseInt(req.params.id));
    if (!item) return res.status(404).json({ message: 'Item not found' });
    res.json(item);
});

// Add new item
app.post('/api/items', (req, res) => {
    const newItem = {
        id: items.length + 1,
        ...req.body
    };
    items.push(newItem);
    res.status(201).json(newItem);
});

// For local development
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
}

// Export for Vercel
module.exports = app;
