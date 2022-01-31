import React from 'react'

const Button = ({background,icon,children,size,animate,onClick}) => {

    const bg = background ? 'bg-' + background : 'bg-main' 

    const sizeBtn = size ? 'btn-' + size : ''

    const animateBtn = animate ? 'btn-animate' : ''

    return (
        <button
                className={`btn ${bg} ${sizeBtn} ${animateBtn}`}
                onClick={onClick ? () => onClick() : null}
        >
            <span className="btn__txt">
                {children}
            </span>
            {
                icon? (
                    <span className="btn__icon">
                        <i className={`${icon} bx-tada`}></i>
                    </span>
                ) : null
            }

        </button>
    )
}

export default Button
