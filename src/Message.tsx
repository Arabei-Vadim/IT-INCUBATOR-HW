import React from 'react'

type MessagePropsType = {
    avatar1: string
    name1: string
    message1: string
    time1: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div>
            <div><img src={props.avatar1} alt={'avo'}/>
                <span>{props.name1}</span>
            </div>
            <div><p>{props.message1}</p>
                <b>{props.time1}</b>
            </div>

        </div>
    )
}

