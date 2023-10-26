import React from "react";

const Home = () => {
    return (
        <div>
            <div className="add-to-cart">
                <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-gifs-and-animations-23.png" alt="cart" />
            </div>
            <h1>Home Component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://img5.gadgetsnow.com/gd/images/products/additional/large/G306162_View_1/mobiles/smartphones/apple-iphone-13-256-gb-blue-4-gb-ram-.jpg" alt="iPhone 13" />
                </div>

                <div className="text-wrapper item">
                    <span>iPhone 13</span>
                    <span>Price: $1000.00</span>
                </div>

                <div className="btn-wrapper item">
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
};

export default Home;