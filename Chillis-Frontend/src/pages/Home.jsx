import React from 'react';
import Navbar from '../components/Navbar';
import CategoryMenu from '../components/CategoryMenu';
import FoodItem from '../components/FoodItem';
import Cart from '../components/Cart';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <CategoryMenu/>
            <FoodItem/>
            <Cart/>
        </div>
    );
}

export default Home;
