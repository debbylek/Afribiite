import React, { useState } from "react";
import breakfastBurritoImg from '../assets/breakfast/breakfast-burrito.jpg';
import englishMuffinSandwichImg from '../assets/breakfast/english-muffin-sandwich.jpg';
import hashBrownPotatoImg from '../assets/breakfast/hash-brown-potato.jpg';
import oatmealWithToppingsImg from '../assets/breakfast/oatmeal-with-toppings.jpg';
import scrambledEggToastImg from '../assets/breakfast/scrambled-egg-toast.jpg';
import wafflesWithScrambledEggsImg from '../assets/breakfast/waffles-with-scrambled-eggs.jpg';
import eggsAndPlantainImg from '../assets/breakfast/eggs-and-plantain.jpg';
import friedYamPlantainAndEggsImg from '../assets/breakfast/fried-yam-plaintain-and-eggs.jpg';
import pancakeWithChocolateSyrupImg from '../assets/breakfast/pancake-with-chocolate-syrup-and-hazel-nut-toppings.jpg';
import yamPottageImg from '../assets/lunch/yam-pottage.jpg';
import afangSoupSemovitaImg from '../assets/lunch/afang-soup-semovita.jpg';
import nkwobiCowFeetImg from '../assets/lunch/nkwobi-cow-feet.jpg';
import amalaEweduImg from '../assets/lunch/amala-ewedu.jpg';
import friedRiceChickenImg from '../assets/lunch/fried-rice-chicken.jpg';
import beansPlantainImg from '../assets/lunch/beans-plantain.jpg';
import egusiSoupSemovitaImg from '../assets/lunch/egusi-soup-semovita.jpg';
import catfishPepperSoupRiceImg from '../assets/lunch/catfish-pepper-soup-rice.jpg';
import jollofRicePlantainChickenImg from '../assets/lunch/jollof-rice-plantain-chicken.jpg';
import coconutRiceMackerelImg from '../assets/dinner/coconut-rice-smoked-mackerel.jpg';
import suyaImg from '../assets/dinner/suya.jpg';
import whiteRiceMeatballsImg from '../assets/dinner/white-rice-meatballs.jpg';
import spaghettiBeefStewImg from '../assets/dinner/spaghetti-beef-stew.jpg';
import plantainPorridgeImg from '../assets/dinner/plantain-porridge.jpg';
import catfishYamPepperSoupImg from '../assets/dinner/catfish-yam-peppersoup.jpg';
import chocolateBiscuitImg from '../assets/desert/chocolate-biscuit.jpg';
import vanillaCakeImg from '../assets/desert/vanilla-cake.jpg';
import cakeParfaitImg from '../assets/desert/cake-parfait.jpg';
import chocolateChipBananaBreadImg from '../assets/desert/chocolate-chip-banana-bread.jpg';
import milkshakeImg from '../assets/desert/milkshake.jpg';
import greekYoghurtParfaitImg from '../assets/desert/greek-yoghurt-parfait.jpg';
import pineappleJuiceImg from '../assets/drinks/freshly-squeezed-pineapple-juice.jpg';
import grapeJuiceImg from '../assets/drinks/grape-juice.jpg';
import grapefruitJuiceImg from '../assets/drinks/grapefruit-juice.jpg';
import orangeJuiceImg from '../assets/drinks/orange-juice.jpg';
import appleJuiceImg from '../assets/drinks/apple-juice.jpg';
import palmwineImg from '../assets/drinks/freshly-tapped-palmwine.jpg';
import koreanBibimbapImg from '../assets/this-week/korean-bibimbap-with-egg-sunny-side-up-close-up.jpg';
import minestroneSoupImg from '../assets/this-week/minestrone-soup.webp';
import mushroomSoupImg from '../assets/this-week/mushroom-soup.jpg';
import savouryMeatballNoodleSoupImg from '../assets/this-week/savoury-meatball-noodle-soup-delight.jpg';
import creamyTomatoBasilSoupImg from '../assets/this-week/creamy-tomato-basil-soup-with-rustic-bread.jpg';
import flavorfulShrimpFeastImg from '../assets/this-week/flavorful-shrimp-feast-with-lemon-and-corn.jpg';
import heartySweetPotatoChiliBowlImg from '../assets/this-week/hearty-sweet-potato-chili-bowl-with-fresh-toppings.jpg';
import grilledSalmonBowlImg from '../assets/this-week/grilled-salmon-bowl-with-quinoa-and-colorful-veggies.jpg';
import mediterraneanMeatballsImg from '../assets/this-week/mediterranean-meatballs-with-rice-and-fresh-vegetables.jpg';
import cashewChickenImg from '../assets/specials/cashew-chicken.jpg';
import chickenMarsalaStripsImg from '../assets/specials/chicken-marsala-strips.jpg';
import crabShrimpSeafoodBisqueImg from '../assets/specials/crab-shrimp-seafood-bisque.jpg';
import redWineBraisedShortRibsImg from '../assets/specials/red-wine-braised-short-ribs.jpg';
import stripSteakImg from '../assets/specials/strip-steak.jpg';
import tandooriChickenBiriyaniImg from '../assets/specials/tandoori-chicken-biriyani.jpg';
import CoverDomeLogo from "./CoverDomeLogo";


const foodImages = {
  breakfast: [
    { src: breakfastBurritoImg, title: "Breakfast Burrito", description: "A hearty burrito filled with eggs, cheese, and veggies.", price: "₦4,500" },
    { src: englishMuffinSandwichImg, title: "English Muffin Sandwich", description: "Classic English muffin with egg, cheese, and sausage.", price: "₦5,000" },
    { src: hashBrownPotatoImg, title: "Hash Brown Potato", description: "Crispy golden hash brown potatoes, perfect for breakfast.", price: "₦2,500" },
    { src: oatmealWithToppingsImg, title: "Oatmeal with Toppings", description: "Warm oatmeal served with assorted fresh toppings.", price: "₦2,000" },
    { src: scrambledEggToastImg, title: "Scrambled Egg Toast", description: "Fluffy scrambled eggs served on toasted bread.", price: "₦2,500" },
    { src: wafflesWithScrambledEggsImg, title: "Waffles with Scrambled Eggs", description: "Crispy waffles paired with creamy scrambled eggs.", price: "₦4,000" },
    { src: eggsAndPlantainImg, title: "Eggs and Plantain", description: "Fried eggs served with sweet ripe plantains.", price: "₦1,300" },
    { src: friedYamPlantainAndEggsImg, title: "Fried Yam, Plantain and Eggs", description: "A delicious combo of fried yam, plantain, and eggs.", price: "₦1,600" },
    { src: pancakeWithChocolateSyrupImg, title: "Pancake with Chocolate Syrup & Hazelnut Toppings", description: "Fluffy pancakes topped with chocolate syrup and hazelnuts.", price: "₦1,800" },
  ],
  lunch: [
    { src: yamPottageImg, title: "Yam Pottage", description: "Rich yam pottage cooked with vegetables and spices.", price: "₦4,000" },
    { src: afangSoupSemovitaImg, title: "Afang Soup with Semovita", description: "Traditional Afang soup served with soft semovita.", price: "₦4,500" },
    { src: nkwobiCowFeetImg, title: "Nkwobi with Cow Feet", description: "Spicy Nkwobi (cow feet) delicacy, a Nigerian favorite.", price: "₦5,000" },
    { src: amalaEweduImg, title: "Amala and Ewedu", description: "Soft amala served with ewedu soup and assorted meats.", price: "₦3,500" },
    { src: friedRiceChickenImg, title: "Fried Rice and Chicken", description: "Classic fried rice served with tasty chicken.", price: "₦3,700" },
    { src: beansPlantainImg, title: "Beans and Plantain", description: "Steamed beans served with sweet fried plantain.", price: "₦2,500" },
    { src: egusiSoupSemovitaImg, title: "Egusi Soup with Semovita", description: "Melon seed soup served with soft semovita.", price: "₦4,500" },
    { src: catfishPepperSoupRiceImg, title: "Catfish Pepper Soup and Rice", description: "Spicy catfish pepper soup served with white rice.", price: "₦4,000" },
    { src: jollofRicePlantainChickenImg, title: "Jollof Rice with Plantain and Chicken", description: "Classic jollof rice with plantain and chicken.", price: "₦3,500" },
  ],
  dinner: [
    { src: coconutRiceMackerelImg, title: "Coconut Rice with Smoked Mackerel", description: "Fragrant coconut rice served with smoked mackerel.", price: "₦2,500" },
    { src: suyaImg, title: "Suya", description: "Spicy grilled beef skewers, a Nigerian street food favorite.", price: "₦1,800" },
    { src: whiteRiceMeatballsImg, title: "White Rice and Meatballs", description: "Steamed white rice served with juicy meatballs.", price: "₦2,200" },
    { src: spaghettiBeefStewImg, title: "Spaghetti with Beef Stew", description: "Classic spaghetti topped with rich beef stew.", price: "₦2,000" },
    { src: plantainPorridgeImg, title: "Plantain Porridge", description: "Sweet plantain porridge cooked with vegetables.", price: "₦1,900" },
    { src: catfishYamPepperSoupImg, title: "Catfish & Yam Peppersoup", description: "Spicy catfish and yam peppersoup, perfect for dinner.", price: "₦2,700" },
  ],
  desert: [
    { src: chocolateBiscuitImg, title: "Chocolate Biscuit", description: "Rich chocolate biscuits, perfect for dessert.", price: "₦800" },
    { src: vanillaCakeImg, title: "Vanilla Cake", description: "Soft and moist vanilla cake slice.", price: "₦1,200" },
    { src: cakeParfaitImg, title: "Cake Parfait", description: "Layered cake parfait with cream and fruits.", price: "₦1,500" },
    { src: chocolateChipBananaBreadImg, title: "Chocolate Chip Banana Bread", description: "Banana bread with chocolate chips for extra delight.", price: "₦1,000" },
    { src: milkshakeImg, title: "Milkshake", description: "Creamy milkshake in your favorite flavor.", price: "₦900" },
    { src: greekYoghurtParfaitImg, title: "Greek Yoghurt Parfait", description: "Greek yoghurt parfait with granola and berries.", price: "₦1,300" },
  ],
  drinks: [
    { src: pineappleJuiceImg, title: "Freshly Squeezed Pineapple Juice", description: "Refreshing pineapple juice made from fresh pineapples.", price: "₦1,200" },
    { src: grapeJuiceImg, title: "Freshly Squeezed Grape Juice", description: "Sweet and tangy grape juice, served chilled.", price: "₦1,000" },
    { src: grapefruitJuiceImg, title: "Freshly Squeezed Grapefruit Juice", description: "Zesty grapefruit juice, full of vitamin C.", price: "₦1,100" },
    { src: orangeJuiceImg, title: "Freshly Squeezed Orange Juice", description: "Classic orange juice, freshly squeezed.", price: "₦1,000" },
    { src: appleJuiceImg, title: "Freshly Squeezed Apple Juice", description: "Crisp and sweet apple juice, served cold.", price: "₦1,000" },
    { src: palmwineImg, title: "Freshly Tapped Palmwine", description: "Traditional palmwine, freshly tapped and served cool.", price: "₦1,500" },
  ],
  specials: [
    { src: cashewChickenImg, title: "Cashew Chicken", description: "Tender chicken stir-fried with cashew nuts and vegetables.", price: "₦6,500" },
    { src: chickenMarsalaStripsImg, title: "Chicken Marsala Strips", description: "Chicken strips cooked in a rich Marsala wine sauce.", price: "₦7,000" },
    { src: crabShrimpSeafoodBisqueImg, title: "Crab & Shrimp Seafood Bisque", description: "Creamy bisque with crab, shrimp, and seafood medley.", price: "₦8,000" },
    { src: redWineBraisedShortRibsImg, title: "Red Wine Braised Short Ribs", description: "Short ribs slow-cooked in red wine and herbs.", price: "₦9,500" },
    { src: stripSteakImg, title: "Strip Steak", description: "Juicy grilled strip steak, perfectly seasoned.", price: "₦10,000" },
    { src: tandooriChickenBiriyaniImg, title: "Tandoori Chicken Biriyani", description: "Aromatic biriyani with tandoori chicken and spices.", price: "₦7,500" },
  ],
  thisWeek: [
    { src: koreanBibimbapImg, title: "Korean Bibimbap with Egg Sunny Side Up", description: "A vibrant Korean rice bowl topped with veggies and a sunny side up egg.", price: "₦6,000" },
    { src: minestroneSoupImg, title: "Minestrone Soup", description: "Classic Italian vegetable soup with beans and pasta.", price: "₦3,500" },
    { src: mushroomSoupImg, title: "Mushroom Soup", description: "Creamy soup made with fresh mushrooms and herbs.", price: "₦3,200" },
    { src: savouryMeatballNoodleSoupImg, title: "Savoury Meatball Noodle Soup Delight", description: "Hearty noodle soup with juicy meatballs and vegetables.", price: "₦4,000" },
    { src: creamyTomatoBasilSoupImg, title: "Creamy Tomato Basil Soup with Rustic Bread", description: "Rich tomato basil soup served with rustic bread.", price: "₦3,000" },
    { src: flavorfulShrimpFeastImg, title: "Flavorful Shrimp Feast with Lemon and Corn", description: "Succulent shrimp with lemon and corn on the cob.", price: "₦7,000" },
    { src: heartySweetPotatoChiliBowlImg, title: "Hearty Sweet Potato Chili Bowl with Fresh Toppings", description: "Sweet potato chili bowl loaded with fresh toppings.", price: "₦4,200" },
    { src: grilledSalmonBowlImg, title: "Grilled Salmon Bowl with Quinoa and Colorful Veggies", description: "Grilled salmon served with quinoa and veggies.", price: "₦8,000" },
    { src: mediterraneanMeatballsImg, title: "Mediterranean Meatballs with Rice and Fresh Vegetables", description: "Mediterranean-style meatballs with rice and veggies.", price: "₦5,500" },
  ],
};

const categories = [
  { label: "Breakfast", key: "breakfast" },
  { label: "Lunch", key: "lunch" },
  { label: "Dinner", key: "dinner" },
  { label: "Desert", key: "desert" },
  { label: "Drinks", key: "drinks" },
];
const specials = [
  { label: "This Week", key: "thisWeek" },
  { label: "Specials", key: "specials" },
];

function FoodGallery() {
  const [activeMenu, setActiveMenu] = useState("breakfast");
  const [menuOpen, setMenuOpen] = useState(false);
  const [specialsOpen, setSpecialsOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleMenuClick = () => {
    setMenuOpen((open) => !open);
    setSpecialsOpen(false);
  };
  const handleSpecialsClick = () => {
    setSpecialsOpen((open) => !open);
    setMenuOpen(false);
  };
  const handleCategorySelect = (key) => {
    setActiveMenu(key);
    setMenuOpen(false);
    setSpecialsOpen(false);
  };

  
  const filteredImages = foodImages[activeMenu].filter((img) =>
    img.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-leftside">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-8 py-4 bg-white shadow">
        {/* Logo and Afribite */}
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center mr-2">
            <CoverDomeLogo className="h-10 w-10" size={40} />
            <span className="font-bold text-[#FE5D26] text-lg leading-none">AB</span>
          </div>
          <span className="font-extrabold text-2xl text-[#FE5D26] tracking-widest">
            AFRIBITE
          </span>
        </div>
        {/* Menu & Specials */}
        <div className="flex gap-4">
          <div className="relative">
            <button
              className="font-bold text-[#FE5D26] px-4 py-2 rounded hover:bg-orange-50"
              onClick={handleMenuClick}
            >
              Menu
            </button>
            {menuOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow z-20">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    className="block w-full text-left px-4 py-2 hover:bg-orange-100 text-[#FE5D26]"
                    onClick={() => handleCategorySelect(cat.key)}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              className="font-bold text-[#FE5D26] px-4 py-2 rounded hover:bg-orange-50"
              onClick={handleSpecialsClick}
            >
              Specials
            </button>
            {specialsOpen && (
              <div className="absolute left-0 mt-2 bg-white border rounded shadow z-20">
                {specials.map((sp) => (
                  <button
                    key={sp.key}
                    className="block w-full text-left px-4 py-2 hover:bg-orange-100 text-[#FE5D26]"
                    onClick={() => handleCategorySelect(sp.key)}
                  >
                    {sp.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
        {/* Search, User, Cart */}
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-3 py-1 focus:outline-none focus:ring-2 focus:ring-[#FE5D26]"
          />
          {/* User icon (SVG) */}
          <span className="inline-block w-7 h-7" title="User">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#FE5D26"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z"
              />
            </svg>
          </span>
          {/* Cart icon (emoji) */}
          <span className="text-2xl cursor-pointer" title="Cart">
            🛒
          </span>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="foodgallery-sidebar w-48 flex flex-col p-4 bg-[#FE5D26] text-white">
          {/* Collapsible Menu */}
          <button
            className="mb-2 font-bold text-lg flex items-center justify-between w-full focus:outline-none"
            onClick={handleMenuClick}
          >
            Menu
            <span>{menuOpen ? '▲' : '▼'}</span>
          </button>
          {menuOpen && (
            <div className="flex flex-col mb-4">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  className={`text-left px-2 py-1 rounded hover:bg-orange-400 mb-2 ${
                    activeMenu === cat.key ? "bg-orange-700" : ""
                  }`}
                  onClick={() => handleCategorySelect(cat.key)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          )}
          {/* Collapsible Specials */}
          <button
            className="mt-4 mb-2 font-bold text-lg flex items-center justify-between w-full focus:outline-none"
            onClick={handleSpecialsClick}
          >
            Specials
            <span>{specialsOpen ? '▲' : '▼'}</span>
          </button>
          {specialsOpen && (
            <div className="flex flex-col">
              {specials.map((sp) => (
                <button
                  key={sp.key}
                  className={`text-left px-2 py-1 rounded hover:bg-orange-400 mb-2 ${
                    activeMenu === sp.key ? "bg-orange-700" : ""
                  }`}
                  onClick={() => handleCategorySelect(sp.key)}
                >
                  {sp.label}
                </button>
              ))}
            </div>
          )}
        </div>
        {/* Gallery */}
        <div className="foodgallery-main flex-1 p-8 bg-leftside min-h-screen">
          <div className="foodgallery-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredImages.length > 0 &&
              filteredImages.map((img, idx) => (
                <div
                  key={idx}
                  className="foodgallery-card bg-white rounded-lg shadow p-4 flex flex-col items-center"
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="h-56 w-full object-cover rounded mb-6"
                  />
                  <div className="font-semibold text-gray-700 mt-4">{img.title}</div>
                  <div className="text-gray-500 text-sm mb-1 text-center">{img.description}</div>
                  <div className="text-[#FE5D26] font-bold mb-2">
                    {img.price}
                  </div>
                  <button className="bg-[#FE5D26] text-white px-4 py-1 rounded hover:bg-orange-600 font-semibold">
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodGallery;
