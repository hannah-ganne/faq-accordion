import { SectionContext } from '../context/Context'
import { useState } from 'react'

export default function Section({ children, disabled }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <SectionContext.Provider value={{ disabled, isOpen, setIsOpen}}>
            <div data-section>{children}</div>
        </SectionContext.Provider>
    )
    }