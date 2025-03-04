import { useState } from 'react';

const items = [
    { id: 1, name: "Marketing Strategy", details: "A plan to reach potential clients." },
    { id: 2, name: "SEO Optimization", details: "Improving website visibility." },
    { id: 3, name: "Social Media Ads", details: "Targeted ads for engagement." },
];

function Home() {
    const [selectedItem, setSelectedItem] = useState(null);

    return (
        <div className="grid grid-cols-2 gap-4">
            <ul className="border-r p-4">
                {items.map((item) => (
                    <li 
                        key={item.id} 
                        className="p-2 cursor-pointer hover:bg-gray-200"
                        onMouseEnter={() => setSelectedItem(item)}
                    >
                        {item.name}
                    </li>
                ))}
            </ul>
            <div className="p-4">
                {selectedItem ? (
                    <p className="text-lg font-semibold">{selectedItem.details}</p>
                ) : (
                    <p className="text-gray-500">Hover over an item to see details.</p>
                )}
            </div>
        </div>
    );
}

export default Home;
