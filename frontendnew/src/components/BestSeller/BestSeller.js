import React from "react"
import Thumbnails from "../Thumbnails/Thumbnails"

const BestSeller = ({bestseller}) => {
    return(
        <Thumbnails foods={bestseller} title='BestSellers'/>
    )
}
export default BestSeller
