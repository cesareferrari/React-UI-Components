import React from 'react';
import './App.css';
import ImageThumbnail from '../src/components/HeaderComponents/ImageThumbnail';
import HeaderTitle from '../src/components/HeaderComponents/HeaderTitle';
import HeaderContent from '../src/components/HeaderComponents/HeaderContent';
 
const App = () => {
  return (
    <div>
    <ImageThumbnail />
    <HeaderTitle />
    <HeaderContent />
    </div>
  )
}

export default App;
