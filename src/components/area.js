import React from 'react';

function Area(props) {
    const [currentVal, setCurrentVal] = props.stateAppArea;
    let obj = currentVal;
    let areaRef = props.areaRef;
    return <div>
        <h4>Diện tích</h4>
        <select ref={(input) => areaRef = input} onChange={() => {
            setCurrentVal({
                provinceCode: obj.provinceCode,
                districtCode: obj.districtCode,
                priceType: obj.priceType,
                areaType: areaRef.value,
            });
        }}>
            <option value="-1">Chọn diện tích</option>
            <option value="0">Dưới 20 m2</option>
            <option value="1">20 m2 - 30 m2</option>
            <option value="2">30 m2 - 50 m2</option>
            <option value="3">50 m2 - 60 m2</option>
            <option value="4">60 m2 - 70 m2</option>
            <option value="5">70 m2 - 80 m2</option>
        </select>
    </div>;
}

export default Area;