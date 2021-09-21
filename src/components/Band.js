import React from 'react';
// export default class Band extends Component{

const Band = props => {
    return (
        <li>
            <span>{props.band.name}</span>
            <button onClick={()=> props.deleteBand(props.band.id)}>DELETE</button>
        </li>
    )
}
export default Band;
