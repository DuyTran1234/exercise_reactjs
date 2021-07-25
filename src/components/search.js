import { length } from 'stylis';
import data from '../data/data.json';

function Search(props) {
    const [currentVal, setCurrentVal] = props.stateAppSearch;
    console.log(currentVal);
    let functionClick = () => {
        for(let i = 0; i < data.length; ++i) {
            
        }
    };
    return <div>
        <button >Lọc tin</button>
    </div>;
}

export default Search;

// provinceCode: obj.provinceCode,
//     districtCode: obj.districtCode,
//         priceType: obj.priceType,
//             areaType: areaRef.value,