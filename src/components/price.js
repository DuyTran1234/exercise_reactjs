import React from 'react';

function Price(props) {
    const [currentVal, setCurrentVal] = props.stateAppPrice;
    let obj = currentVal;
    let priceRef = props.priceRef;
    return <div>
        <h4>Khoảng giá</h4>
        <select ref={(input) => priceRef = input} onChange={() => {
            setCurrentVal({
                provinceCode: obj.provinceCode,
                districtCode: obj.districtCode,
                priceType: priceRef.value,
                areaType: obj.area,
            });
        }}>
            <option value="-1">Chọn mức giá</option>
            <option value="0">Dưới 1 triệu</option>
            <option value="1">1 triệu - 2 triệu</option>
            <option value="2">2 triệu - 3 triệu</option>
            <option value="3">3 triệu - 5 triệu</option>
            <option value="4">5 triệu - 7 triệu</option>
            <option value="5">7 triệu - 10 triệu</option>
        </select>
    </div>;
}

export default Price;