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
