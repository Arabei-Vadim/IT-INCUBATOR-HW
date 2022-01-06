import React from 'react'
import {render} from '@testing-library/react'
import {Message} from '../Message'

test('find text "test message name"', () => {
    const {getByText} = render((
        <Message
            avatar1=""
            name1="test message name"
            message1=""
            time1=""
        />
    ))
    const linkElement = getByText(/test message name/i)
    expect(linkElement).toBeInTheDocument()
})
test('find text "test message"', () => {
    const {getByText} = render((
        <Message
            avatar1=""
            name1=""
            message1="test message"
            time1=""
        />
    ))
    const linkElement = getByText(/test message/i)
    expect(linkElement).toBeInTheDocument()
})
test('find text "test message time"', () => {
    const {getByText} = render((
        <Message
            avatar1=""
            name1=""
            message1=""
            time1="test message time"
        />
    ))
    const linkElement = getByText(/test message time/i)
    expect(linkElement).toBeInTheDocument()
})
