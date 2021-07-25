import './App.css';
import Province from './components/province';
import React, { createRef, useState } from 'react';
import District from './components/district';
import Price from './components/price';
import Area from './components/area';
import Search from './components/search';

function App() {
  const [currentVal, setCurrentVal] = useState({
    provinceCode: '-1',
    districtCode: '-1',
    priceType: '-1',
    areaType: '-1',
  });
  let districtRef = createRef();
  let priceRef = createRef();
  let areaRef = createRef(); 

  console.log(currentVal);
  return (
    <div className="App">
      <Province stateAppProvince={[currentVal, setCurrentVal]} />
      <District stateAppDistrict={[currentVal, setCurrentVal]} districtRef={districtRef} />
      <Price stateAppPrice={[currentVal, setCurrentVal]} priceRef={priceRef} />
      <Area stateAppArea={[currentVal, setCurrentVal]} areaRef = {areaRef} />
      <Search stateAppSearch={[currentVal, setCurrentVal]} />
    </div>
  );
}

export default App;
