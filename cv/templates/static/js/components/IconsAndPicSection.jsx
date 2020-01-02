import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


const IconsSection = ({facts}) => {

    return (
        <table>
            <tbody>
               {facts.map((item, index) =>
                   <tr key={index} className={'fact-item'}>
                       <td><FontAwesomeIcon icon={item.icon} /></td>
                       <td><span className={'fact'}>{item.fact}</span></td>
                    </tr>)}
            </tbody>
        </table>
    )
};

const IconsAndPicSection = ({infoArr, picPath, altText, idName}) => {
    return (
        <div className={'iconlistpic-row'} id={idName}>
            <div className={'left-side'}>
                <IconsSection facts={infoArr}/>
            </div>
            <div className={'right-side'}>
                <img src={picPath} alt={altText} />
            </div>
        </div>
    )
};

export default IconsAndPicSection;
