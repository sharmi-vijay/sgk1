import React from 'react';
import './Category.css'; // Import CSS for styling

const Category = () => {
    const dressCategories = ['Casual', 'Formal', 'Party Wear', 'Ethnic', 'Sportswear', 'Kids'];

    return (
        <header className="category-header">
            <nav className="category-nav">
                <ul className="category-list">
                    {dressCategories.map((category, index) => (
                        <li key={index} className="category-item">
                            <a href={`/${category.toLowerCase().replace(' ', '-')}`} className="category-link">
                                {category}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Category;
