import React from 'react'

const Section = props => {
    return (
        <div className={!props.marginTop ? 'section' : 'section marginTop'} >
            {props.children}
        </div>
    )
}

export const SectionTitle = props => {
    return (
        <div className="section__title">
            {props.children}
        </div>
    )
}

export const SectionBody = props => {
    return (
        <div className="section__body">
            {props.children}
        </div>
    )
}

export default Section