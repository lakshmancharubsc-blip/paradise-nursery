# e-plantShopping

e-plantShopping is a React and Redux-based web application for browsing and purchasing houseplants from Paradise Nursery. The application provides an intuitive shopping experience where users can explore plants by category, add items to a cart, manage quantities, and view the total purchase amount.

## Project Overview

The Paradise Nursery application allows users to:

* Browse a collection of houseplants organized into categories
* View plant names, images, and prices
* Add plants to a shopping cart
* Track the total number of items in the cart
* Increase or decrease product quantities
* Remove products from the cart
* View the total cost of all items in the cart
* Navigate between the Home, Products, and Cart pages

## Features

### Landing Page

* Displays the Paradise Nursery company name
* Includes an attractive background image
* Provides a "Get Started" button for navigation to the product catalog

### Product Listing

* Multiple plant categories
* At least six unique plants in each category
* Product thumbnails, names, and prices
* Add to Cart functionality
* Disabled Add to Cart button after adding an item

### Shopping Cart

* Displays selected products
* Shows quantity controls for each item
* Calculates item totals and overall cart total
* Remove item functionality
* Checkout button with "Coming Soon" message
* Continue Shopping button

### Navigation

* Navbar available on Product Listing and Cart pages
* Links to Home, Plants, and Cart
* Dynamic cart icon displaying total item count

## Technologies Used

* React
* Redux Toolkit
* React Router
* JavaScript (ES6+)
* CSS3

## Project Structure

* `App.jsx` – Main application component and routing
* `AboutUs.jsx` – Company information page
* `ProductList.jsx` – Product catalog and cart integration
* `CartItem.jsx` – Shopping cart page
* `CartSlice.jsx` – Redux state management for the cart
* `App.css` – Styling and landing page background image

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/lakshmancharubsc-blip/e-plantShopping.git
   ```

2. Navigate to the project directory:

   ```bash
   cd e-plantShopping
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

## Author

Lakshman

## Repository

e-plantShopping – Paradise Nursery Plant Shopping Application
