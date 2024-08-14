import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleDarkModeClick() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
    <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
    <ShoppingList 
      items={itemData} 
      selectedCategory={selectedCategory} 
      onCategoryChange={handleCategoryChange} 
    />
  </div>
  );
}

export default App;