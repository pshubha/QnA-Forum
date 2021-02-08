//change color on click
import React, { useState, useEffect } from 'react'

function useDarkMode(status) {
    const [mode, setMode] = useState('')
    const [font, setFont] = useState('')
    const [isClick, setClick] = useState(false)

    useEffect(() => {
        if (status) {
            setMode('Black')
            setFont('#e2e2e2')
            setClick(true)
        } else {
            setMode('#e2e2e2')
            setFont('Black')
            setClick(false)
        }
    })
    return [mode, font, isClick]
}

export default useDarkMode
