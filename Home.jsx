import React from 'react';
import './style.css';

function Home() {
    return (
      
      <div>
        <nav className="navbar">
          <img
            src="public/GR logo.png"
            className="logo"
            alt="logo"
          />
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Recipes</a>
            <a href="#">Ingredients</a>
            <a href="#">Occasions</a>
            <a href="#">About</a>
          </div>
          <i className="fa fa-user" aria-hidden="true"></i>
          <a href="/login" className="login">Log in</a>
        </nav>
  
        <form className="search-bar">
          <input type="text" placeholder="What are you looking for?" name="search" />
          <button type="submit" aria-label="Search">
            <i className="fa fa-search"></i>
          </button>
        </form>

        <div className="round-images">
          <img
            className="tomato"
            src="public/sliced tomatoes with ground pork.jpg"
            alt="sliced tomatoes with ground pork"
          />
          <img
            className="seeds"
            src="public/two sauces topped with seeds.jpg"
            alt="two sauces topped with seeds"
          />
          <img
            className="salmon"
            src="public/bowl of stew salmon.jpg"
            alt="bowl of stew salmon"
          />
          <img
            className="sandwich"
            src="public/sandwich with boiled egg.jpg"
            alt="sandwich with boiled egg"
          />
          <img
            className="bread"
            src="public/toast bread with blueberry.jpg"
            alt="toast bread with blueberry"
          />
          <img
            className="dessert"
            src="public/dessert.jpg"
            alt="dessert"
          />
        </div>
  
        <div>
          <p id="intro">
            Welcome to Good Recipes, where flavor meets simplicity! Discover a world of delicious, easy-to-follow recipes crafted for every occasion. Whether you're a beginner or a seasoned chef, we provide step-by-step instructions, helpful tips, and a variety of dishes to inspire your culinary adventures. Let’s make cooking fun and delicious together!
          </p>
        </div>
  
        <div className="festive">
          <h1>Winter Specials</h1>
          <div className="festive-grid">
            <div className="cake">
              <img
                className="festive-food"
                src="public/Brown Christmas Cake.jpg"
                alt="log cake"
              />
              <p>The Log Cake</p>
            </div>
            <div className="train">
              <img
                className="festive-food"
                src="public/Gingerbread Train.jpg"
                alt="gingy train"
              />
              <p>Gingerbread Train</p>
            </div>
            <div className="snowmen">
              <img
                className="festive-food"
                src="public/Marshmallow Chocolate coated Snowmen.jpg"
                alt="snowmen"
              />
              <p>Choco Mallow Snowmen</p>
            </div>
            <div className="cupcake">
              <img
                className="festive-food"
                src="public/christmas cupcake.jpg"
                alt="christmas cupcake"
              />
              <p>Christmas Tree Cupcake</p>
            </div>
            <div className="cookies">
              <img
                className="festive-food"
                src="public/cookies.jpg"
                alt="cookies"
              />
              <p>Winter Cookies</p>
            </div>
            <div className="pasta">
              <img
                className="festive-food"
                src="public/Christmas Pasta.jpg"
                alt="pasta"
              />
              <p>Festive White Pasta</p>
            </div>
          </div>
        </div>
  
        <div className="recipes-grid">
          <h1>Our Recipes</h1>
          <div>
            <img
              className="recipes-food"
              src="public/Fried Rice Broccoli.jpg"
              alt="fried rice broccoli"
            />
            <p>Fried Rice Broccoli</p>
          </div>
          <div>
            <img
              className="recipes-food"
              src="public/Meat & Veggies.jpg"
              alt="meat and veggies"
            />
            <p>Meat & Veggies</p>
          </div>
          <div>
            <img
              className="recipes-food"
              src="public/Cinnamon Rolls.jpg"
              alt="cinnamon rolls"
            />
            <p>Cinnamon Rolls</p>
          </div>
          <div>
            <img
              className="recipes-food"
              src="public/Omelette Bowl.jpg"
              alt="omelette bowl"
            />
            <p>Omelette Bowl</p>
          </div>
          <div>
            <img
              className="recipes-food"
              src="public/creme brulee.jpg"
              alt="creme brulee"
            />
            <p>Crème Brûlée</p>
          </div>
        </div>
  
        <div className="advice">
          <img
            className="person"
            src="public/GR pic.jpg"
            alt="a person and nature"
          />
          <div className="advice-text">
            <h2>Chef’s Corner: Pro Cooking</h2>
            <p>by David Bizarre</p>
            <p>
              Discover practical cooking tips and tricks straight from the kitchen of an experienced chef! From mastering the basics to perfecting advanced techniques, this guide will help you save time, enhance flavors, and cook with confidence. Let's make every meal a masterpiece!
            </p>
            <button className="read">Read More &gt;</button>
          </div>
        </div>

        <div className="follow-us-newsletter">
          <div className="follow-us-left">
            <h3>FOLLOW US</h3>
          </div>
          <div className="social-media-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              X
            </a>
          </div>
          <div className="newsletter-right">
            <p>Newsletter</p>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact Us</a>
          </div>
          <p>&copy; 2025 Good Recipes. All rights reserved.</p>
        </footer>
      </div>
    );
}

export default Home;
