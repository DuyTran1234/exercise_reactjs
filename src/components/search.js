import data from '../data/data.json';

function Search(props) {
    const [currentVal, setCurrentVal] = props.stateAppSearch;
    let newData = data;
    newData = addPriceType(data);
    newData = addAreaType(data);


    let valueClick = () => {
        let dataFilter = searchData(currentVal, newData);
        
    };


    return <div>
        <button onClick={valueClick}>Lọc tin</button>
    </div>;
}

function addPriceType(arr) {
    return arr.map((item) => {
        item['priceType'] = "-1";
        if (item['price'] < 1000000) {
            item['priceType'] = "0";
        }
        else if (item['price'] >= 1000000 && item['price'] < 2000000) {
            item['priceType'] = "1";
        }
        else if (item['price'] >= 2000000 && item['price'] < 3000000) {
            item['priceType'] = "2";
        }
        else if (item['price'] >= 3000000 && item['price'] < 5000000) {
            item['priceType'] = "3";
        }
        else if (item['price'] >= 5000000 && item['price'] < 7000000) {
            item['priceType'] = "4";
        }
        else if (item['price'] >= 7000000 && item['price'] < 10000000) {
            item['priceType'] = "5";
        }
        return item;
    });
}

function addAreaType(arr) {
    return arr.map((item) => {
        item['areaType'] = "-1";
        if (item['area'] < 20) {
            item['areaType'] = "0";
        }
        else if (item['area'] >= 20 && item['area'] < 30) {
            item['areaType'] = "1";
        }
        else if (item['area'] >= 30 && item['area'] < 50) {
            item['areaType'] = "2";
        }
        else if (item['area'] >= 50 && item['area'] < 60) {
            item['areaType'] = "3";
        }
        else if (item['area'] >= 60 && item['area'] < 70) {
            item['areaType'] = "4";
        }
        else if (item['area'] >= 70 && item['area'] < 80) {
            item['areaType'] = "5";
        }
        return item;
    });
}

function searchData(currentVal, newData) {
    if (currentVal.provinceCode === "-1") {
        if (currentVal.priceType !== "-1" && currentVal.areaType !== '-1') {
            return newData.filter((item) => item['priceType'] === currentVal.priceType && item['areaType'] === currentVal.areaType);
        }
        if (currentVal.priceType !== "-1" && currentVal.areaType === '-1') {
            return newData.filter((item) => item['priceType'] === currentVal.priceType);
        }
        if (currentVal.priceType === "-1" && currentVal.areaType !== '-1') {
            return newData.filter((item) => item['areaType'] === currentVal.areaType);
        }
        return newData;
    }
    else {
        if (currentVal.districtCode !== "-1") {
            if (currentVal.priceType !== "-1" && currentVal.areaType !== "-1") {
                return newData.filter((item) => item['city'] === currentVal.provinceCode
                    && item['district'] === currentVal.districtCode
                    && item['priceType'] === currentVal.priceType
                    && item['areaType'] === currentVal.areaType);
            }
            if (currentVal.priceType !== "-1" && currentVal.areaType === "-1") {
                return newData.filter((item) => item['city'] === currentVal.provinceCode
                    && item['district'] === currentVal.districtCode
                    && item['priceType'] === currentVal.priceType);
            }
            if (currentVal.priceType === "-1" && currentVal.areaType !== "-1") {
                return newData.filter((item) => item['city'] === currentVal.provinceCode
                    && item['district'] === currentVal.districtCode
                    && item['areaType'] === currentVal.areaType);
            }
            return newData.filter((item) => item['city'] === currentVal.provinceCode
                && item['district'] === currentVal.districtCode);
        }
        else {
            if (currentVal.priceType !== "-1" && currentVal.areaType !== "-1") {
                return newData.filter((item) => item['city'] === currentVal.provinceCode
                    && item['priceType'] === currentVal.priceType
                    && item['areaType'] === currentVal.areaType);
            }
            if (currentVal.priceType !== "-1" && currentVal.areaType === "-1") {
                return newData.filter((item) => item['city'] === currentVal.provinceCode
                    && item['priceType'] === currentVal.priceType);
            }
            if (currentVal.priceType === "-1" && currentVal.areaType !== "-1") {
                return newData.filter((item) => item['city'] === currentVal.provinceCode
                    && item['areaType'] === currentVal.areaType);
            }
            return newData.filter((item) => item['city'] === currentVal.provinceCode);
        }
    }
}

export default Search;

// provinceCode: obj.provinceCode,
//     districtCode: obj.districtCode,
//         priceType: obj.priceType,
//             areaType: areaRef.value,