import React, { useState } from 'react';

export default function FoodLandingpage() {
  const [view, setView] = useState('home');
  const [search, setSearch] = useState('');

  const handleButtonClick = (section) => {
    setView(section);
  };

  const handleSearch = () => {
    const lowercasedSearch = search.toLowerCase();
    if (['home', 'recipes', 'blog', 'about us', 'contact'].includes(lowercasedSearch)) {
      setView(lowercasedSearch);
    } else {
      setView('recipes');
    }
    setSearch('');
  };

  return (
    <div className="flex flex-col min-h-screen p-6 bg-gray-100">
      <div className="flex w-full justify-between items-center mb-9">
        <p className="text-4xl font-bold text-red-600 mr-auto">Abela Hotel</p>
        <div className="flex-grow flex justify-center">
          <button onClick={() => handleButtonClick('home')} className="bg-blue-500 text-white py-2 px-9 rounded mx-2">home</button>
          <button onClick={() => handleButtonClick('recipes')} className="bg-blue-500 text-white py-2 px-9 rounded mx-2">recipes</button>
          <button onClick={() => handleButtonClick('blog')} className="bg-blue-500 text-white py-2 px-9 rounded mx-2">blog</button>
          <button onClick={() => handleButtonClick('aboutUs')} className="bg-blue-500 text-white py-2 px-9 rounded mx-2">about us</button>
          <button onClick={() => handleButtonClick('contact')} className="bg-blue-500 text-white py-2 px-9 rounded mx-2">contact</button>
        </div>
        <div className="relative w-64 ml-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="search"
            className="w-full py-2 px-4 border rounded"
          />
          <span
            onClick={handleSearch}
            className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
          >
            <svg
              className="h-5 w-5 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
          </span>
        </div>
      </div>
      <hr className="my-4" />
      <div className="flex-grow flex flex-col items-center">
        {view === 'home' && (
          <div className="text-center">
            <p className="mb-8 text-lg">
              Welcome to Abela Hotel, where we offer the best drinks and foods. Enjoy our exquisite
              services and make unforgettable memories with our special offerings.
            </p>
            <div className="flex flex-col items-center mb-8">
              <h2 className="text-xl font-bold mb-4">Best Drinks</h2>
              <div className="flex space-x-4 mb-8">
                <div className="w-64 h-32 bg-gray-200 flex items-center justify-center">
                  <img src="/best-wine.jpg" alt="Best Wine" className="w-full h-full object-cover" />
                </div>
                <div className="w-64 h-32 bg-gray-200 flex items-center justify-center">
                  <img src="/best-vodka.jpg" alt="Best Vodka" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="w-64 h-24 bg-gray-200 mb-8 flex items-center justify-center">
                <img src="/people-drinking-beer.jpg" alt="People Drinking Beer" className="w-full h-full object-cover" />
              </div>
              <h2 className="text-xl font-bold mb-4">Special Foods</h2>
              <div className="flex space-x-4">
                <div className="w-64 h-32 bg-gray-200 flex items-center justify-center">
                  <img src="/pizza.jpg" alt="Pizza" className="w-full h-full object-cover" />
                </div>
                <div className="w-64 h-32 bg-gray-200 flex items-center justify-center">
                  <img src="/chicken-sandwich.jpg" alt="Chicken Sandwich" className="w-full h-full object-cover" />
                </div>
                <div className="w-64 h-32 bg-gray-200 flex items-center justify-center">
                  <img src="/burger.jpg" alt="Burger" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        )}

        {view === 'recipes' && (
          <>
            <h2 className="text-xl font-bold mb-4">Best Drinks</h2>
            <table className="w-full border-collapse mb-8">
              <thead>
                <tr>
                  <th className="border p-2">Type</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {['Wine', 'Vodka', 'Whiskey', 'Gin', 'Rum', 'Tequila', 'Beer', 'Champagne', 'Cider', 'Liqueur'].map((drink, index) => (
                  <tr key={index}>
                    <td className="border p-2">{drink}</td>
                    <td className="border p-2">Description for {drink}</td>
                    <td className="border p-2">${(10 + index * 2).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h2 className="text-xl font-bold mb-4">Special Foods</h2>
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="border p-2">Type</th>
                  <th className="border p-2">Description</th>
                  <th className="border p-2">Price</th>
                </tr>
              </thead>
              <tbody>
                {['Pizza', 'Sandwich', 'Burger', 'Pasta', 'Salad', 'Sushi', 'Steak', 'Tacos', 'Burritos', 'Soup'].map((food, index) => (
                  <tr key={index}>
                    <td className="border p-2">{food}</td>
                    <td className="border p-2">Description for {food}</td>
                    <td className="border p-2">${(8 + index * 3).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {view === 'blog' && (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Our Blog</h2>
            <p className="text-lg">
              Stay tuned for our latest updates and stories about our hotel, events, and much more. 
              We share interesting insights and tips on enjoying your stay with us.
            </p>
          </div>
        )}

        {view === 'aboutUs' && (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-lg">
              Abela Hotel is renowned for its luxurious accommodations and exceptional service. 
              Our dedicated team ensures that every guest enjoys a memorable experience. 
              We pride ourselves on our fine dining options, premium drinks, and unparalleled hospitality.
            </p>
          </div>
        )}

        {view === 'contact' && (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg">
              Phone: +4766
            </p>
            <p className="text-lg">
              Website: <a href="http://www.abelahotel.com" className="text-blue-500">www.abelahotel.com</a>
            </p>
            <p className="text-lg">
              Developer Telegram: <a href="https://t.me/abela_messi101" className="text-blue-500">@abela_messi101</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
