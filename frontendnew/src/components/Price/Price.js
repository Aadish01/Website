import React from "react";

export default function Price({price, loacale, currency}){
    const formatPrice = () =>
    new Intl.NumberFormat(loacale, {
        style: 'currency',
        currency,
        maximumSignificantDigits: Math.trunc(Math.abs(price)).toFixed().length,
    }).format(price);
    return (
        <span>{formatPrice()}</span>
    )
}

Price.defaultProps = {
    loacale: 'en-IN',
    currency: 'INR',
}