import React from 'react'
import {AffairType} from './HW2';

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (mID: number) => {
        props.deleteAffairCallback(mID)
    }// need to fix

    return (
        <div>
            {props.affair.name}
            <button onClick={() => deleteCallback(props.affair._id)}>X</button>

        </div>
    )
}

export default Affair
