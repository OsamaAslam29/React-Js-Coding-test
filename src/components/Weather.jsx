import React, { useState, useEffect } from 'react';

function FetchAndListItems() {
    const [items, setItems] = useState([]);
    const [filteredItems, setFilteredItems] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://api.example.com/items');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const result = await response.json();
                setItems(result);
                setFilteredItems(result);
                // Extract unique categories from the fetched data
                const uniqueCategories = Array.from(
                    new Set(result.map(item => item.category))
                );
                setCategories(['All', ...uniqueCategories]);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const handleCategoryChange = category => {
        setSelectedCategory(category);
        if (category === 'All') {
            setFilteredItems(items);
        } else {
            setFilteredItems(items.filter(item => item.category === category));
        }
    };

    const handleSortByPrice = () => {
        const sortedItems = [...filteredItems].sort((a, b) => a.price - b.price);
        setFilteredItems(sortedItems);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Items</h1>
            <div>
                <label htmlFor="category">Filter by Category:</label>
                <select
                    id="category"
                    value={selectedCategory}
                    onChange={e => handleCategoryChange(e.target.value)}
                >
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            <button onClick={handleSortByPrice}>Sort by Price</button>
            <ul>
                {filteredItems.map(item => (
                    <li key={item.id}>
                        <div>{item.name}</div>
                        <div>{item.category}</div>
                        <div>{item.price}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FetchAndListItems;
