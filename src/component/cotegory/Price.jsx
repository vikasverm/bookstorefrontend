import  { useState } from 'react';
import { featured } from './Items';

const Price = () => {
    const [range, setRange] = useState({ min: 0, max: 1000 });
    const [query, setQuery] = useState('');

    const handleRangeChange = (e) => {
        setRange({ ...range, [e.target.name]: Number(e.target.value) });
    };

    const handleSearch = (e) => {
        setQuery(e.target.value);
    };

    const filteredData = featured.filter(item => 
        item.price >= range.min && item.price <= range.max && item.name.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="flex flex-col items-center">
            <div className="flex space-x-4 mb-4">
                <input 
                    type="range" 
                    name="min"
                    min="0"
                    max="2000"
                    value={range.min} 
                    onChange={handleRangeChange} 
                    className="p-2"
                />
                <input 
                    type="range" 
                    name="max"
                    min="0"
                    max="2000"
                    value={range.max} 
                    onChange={handleRangeChange} 
                    className="p-2"
                />
                <input 
                    type="text" 
                    value={query} 
                    onChange={handleSearch} 
                    placeholder="Search..." 
                    className="p-2 border border-gray-400 rounded"
                />
            </div>
            <p>Price range: {range.min} - {range.max}</p>
            <div className="flex overflow-x-auto">
                {filteredData.map((item, index) => (
                    <div key={index} className="m-2 p-2 border border-gray-400 rounded">
                        <h2>{item.name}</h2>
                        <img src={item.url} alt={item.name} />
                        <p>{item.Description}</p>
                        <p>{item.Genres}</p>
                        <p>{item.Status}</p>
                        <p>Price: {item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Price;
