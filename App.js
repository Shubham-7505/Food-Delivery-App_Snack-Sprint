import React from "react"
import ReactDOM from "react-dom/client"
import logo from './logo.png';
import food from './food.png';

/**
 * Layout---------
 * Header
 *   logo
 *   home, about us, contact us, cart
 * Body
 *   Search
 *   Restaurent Container
 *      Restaurent card
 *        img
 *        name, star rating, delivery time
 * 
 * 
 * Footer
 * 
 */

const Header = () =>{
  return (
    <div className="header">
       <div className="logo-container">
          <img className="logo"
             src={logo} alt="SnackSprint Logo"
          />
       </div>
       <div className="navitems">

         <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
         </ul>

       </div>
    </div>
  );
}

const resData = [
  {
    id: 1,
    name: "The Gourmet Kitchen",
    cuisine: "Italian",
    location: "123 Main Street, New York, NY",
    rating: 4.5,
    priceRange: "$$$",
    menu: [
      { itemName: "Margherita Pizza", price: 12.99 },
      { itemName: "Lasagna", price: 14.99 },
    ],
    image: food,
  },
  {
    id: 2,
    name: "Sushi World",
    cuisine: "Japanese",
    location: "456 Elm Street, Los Angeles, CA",
    rating: 4.8,
    priceRange: "$$$",
    menu: [
      { itemName: "California Roll", price: 8.99 },
      { itemName: "Spicy Tuna Roll", price: 9.99 },
      { itemName: "Dragon Roll", price: 10.99 },
    ],
    image: food,
  },
  {
    id: 3,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    location: "789 Pine Avenue, Austin, TX",
    rating: 4.2,
    priceRange: "$$",
    menu: [
      { itemName: "Chicken Tacos", price: 5.99 },
      { itemName: "Beef Tacos", price: 6.99 },
    ],
    image: food,
  },
  {
    id: 4,
    name: "Burger Bliss",
    cuisine: "American",
    location: "321 Oak Lane, Chicago, IL",
    rating: 4.6,
    priceRange: "$$",
    menu: [
      { itemName: "Cheeseburger", price: 10.99 },
      { itemName: "Veggie Burger", price: 9.99 },
    ],
    image: food,
  },
  {
    id: 5,
    name: "Spice Symphony",
    cuisine: "Indian",
    location: "654 Maple Drive, Houston, TX",
    rating: 4.7,
    priceRange: "$$$",
    menu: [
      { itemName: "Butter Chicken", price: 12.99 },
      { itemName: "Paneer Tikka", price: 11.99 },
    ],
    image: food,
  },
  {
    id: 6,
    name: "Pasta Paradise",
    cuisine: "Italian",
    location: "987 Willow Street, San Francisco, CA",
    rating: 4.4,
    priceRange: "$$$",
    menu: [
      { itemName: "Spaghetti Carbonara", price: 13.99 },
      { itemName: "Fettuccine Alfredo", price: 12.99 },
    ],
    image: food,
  },
  {
    id: 7,
    name: "Dragon's Breath",
    cuisine: "Chinese",
    location: "543 Cedar Road, Seattle, WA",
    rating: 4.3,
    priceRange: "$$$",
    menu: [
      { itemName: "Kung Pao Chicken", price: 11.99 },
      { itemName: "Sweet and Sour Pork", price: 10.99 },
    ],
    image: food,
  },
  {
    id: 8,
    name: "Green Delight",
    cuisine: "Vegan",
    location: "432 Birch Avenue, Portland, OR",
    rating: 4.9,
    priceRange: "$$",
    menu: [
      { itemName: "Vegan Burger", price: 8.99 },
      { itemName: "Quinoa Salad", price: 7.99 },
    ],
    image: food,
  },
  {
    id: 9,
    name: "Seafood Shack",
    cuisine: "Seafood",
    location: "678 Ocean Blvd, Miami, FL",
    rating: 4.6,
    priceRange: "$$$",
    menu: [
      { itemName: "Grilled Salmon", price: 15.99 },
      { itemName: "Lobster Tail", price: 20.99 },
    ],
    image: food,
  },
  {
    id: 10,
    name: "Pizza Palace",
    cuisine: "Italian",
    location: "345 Park Avenue, Boston, MA",
    rating: 4.8,
    priceRange: "$$$",
    menu: [
      { itemName: "Pepperoni Pizza", price: 11.99 },
      { itemName: "Margherita Pizza", price: 10.99 },
    ],
    image: food,
  },
];


const RestaurentCard = (props)=>{
  const {resobj} = props;
  return (
    <div className="res-card">
      <img className="card-img" src= {resobj.image}/>
      <h3>{resobj.name}</h3>
      <h5>{resobj.rating}star</h5>
      <h4>{resobj.cuisine}</h4>
      {
        resobj.menu.map((item)=>(<h4>{item.itemName} ${item.price}</h4>))
      }
    </div>
  );
}

const Body = () =>{
   return (
    <div className="body">
       <div className="search">
           Search
       </div>
       <div className="res-container">
          {resData.map((restaurent) => (<RestaurentCard key={restaurent.id} resobj={restaurent}/>))}
       </div>
    </div>
   )
}
const AppLayout = () =>{
 return (
 <div className="app">
   <Header/>
   <Body/>
 </div>
 );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);