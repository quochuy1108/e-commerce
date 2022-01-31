import React from 'react'

const PolicyCard = ({icon,name,description}) => {
    return (
        <div className="policy-card">
            <div className="policy-card__icon">
                <i className={icon}></i>
            </div>
            <div className="policy-card__info">
                <div className="policy-card__info__name">
                    {name}
                </div>
                <div className="policy-card__info__description">
                    {description}
                </div>
            </div>
        </div>
    )
}



export default PolicyCard