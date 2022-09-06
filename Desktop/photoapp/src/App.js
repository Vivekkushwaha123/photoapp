import { Navbar, Search, Category, Body } from "./components/index";
import { useState } from "react";

function App() {
  const [imageList, setImageList] = useState([]);
  const [searchedImage, setSearchedImage] = useState([]);

  return (
    <div className="App bg-dark">
      <Navbar setImageList={setImageList} />
      <Search
        searchedImage={searchedImage}
        setSearchedImage={setSearchedImage}
        imageList={imageList}
      />
      <Category />
      <Body imageList={imageList} searchedImage={searchedImage} />
    </div>
  );
}

export default App;
