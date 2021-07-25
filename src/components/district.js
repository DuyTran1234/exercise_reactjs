import React from 'react';
import dataDistrict from '../data/quan_huyen.json';


function District(props) {
    let districtRef = props.districtRef;
    const [currentValue, setCurrentValue] = props.stateAppDistrict;
    let obj = currentValue;
    let arrayDistrict = [];
    for (let key in dataDistrict) {
        arrayDistrict.push(dataDistrict[key]);
    }

    let options = arrayDistrict.filter((element) => {
        return element.parent_code === currentValue.provinceCode;
    }).map((item) => {
        return <option value={item.code}>{item.name_with_type}</option>;
    });
    return <div>
        <h4>Quận huyện</h4>
        <select id="dropdown-district" ref={(input) => districtRef = input} onChange={() => {
            setCurrentValue({
                provinceCode: obj.provinceCode,
                districtCode: districtRef.value,
                priceType: obj.price,
                areaType: obj.area,
            });
        }}>
            <option value="-1">-- Quận/huyện --</option>
            {options}
        </select>
        
    </div>;
}


export default District;