import React, { createRef, useEffect } from 'react';
import dataProvince from '../data/tinh_tp.json';

function Province(props) {
  let provinceRef = createRef();
  let arrayProvince = [];

  for (let key in dataProvince) {
    arrayProvince.push(dataProvince[key]);
  }
  let options = arrayProvince.map((item) => {
    return <option value={item.code}>{item.name}</option>;
  });
  const [currentVal, setCurrentVal] = props.stateAppProvince;

  useEffect(() => {
    document.title = `${currentVal.provinceCode} + ${currentVal.districtCode} + ${currentVal.priceType} + ${currentVal.areaType}`;
  });
  return (
    <div>
      <h4>Tỉnh thành</h4>
      <select id="dropdown-province" ref={(input) => provinceRef = input} onChange={() => {
        setCurrentVal({
          provinceCode: provinceRef.value,
          districtCode: '-1',
          priceType: '-1',
          areaType: '-1',
        });
      }}>
        <option value="-1">Tỉnh thành</option>
        {options}
      </select>
    </div>
  );
}

export default Province;