import React from 'react';
import {useParams} from "react-router-dom";
const Card = ()=>{
    let {user}  = useParams();
    console.log(useParams);
    return(
        <div className='ui raised very padded text container segment' style={{marginTop:'30px'}}>
            <h3 className= 'ui header'> user = { user }</h3>
        </div>
    )
}
export default Card

/*class Card extends React.Component {
    componentDidMount() {
    }
    render() {
    return(
        <div className='ui raised very padded text container segment' style={{marginTop:'30px'}}>
            <h3 className= 'ui header'>Card</h3>
        </div>
    )
}
}*/
