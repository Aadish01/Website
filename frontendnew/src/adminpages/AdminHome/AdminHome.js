import React from 'react'
import classes from './adminhome.module.css'
import { Link , useParams } from 'react-router-dom';

function AdminHome() {

  const { id , name} = useParams();

  return (
    <div className={classes.content}>
      <div className={classes.homecontainer}>
        <Link to={`/a/${name}/${id}/Admin/Orders`} className={classes.block}>
          Orders
        </Link>
        <Link to={`/a/${name}/${id}/Admin/UpdateMenu`}  className={classes.block}>
          Update Menu
        </Link>
        <Link to={`/a/${name}/${id}/Admin/UpdateRestaurant`}  className={classes.block}>
          Update Restaurant
        </Link>
        <Link to={`/a/${name}/${id}/Admin/UpdateAdds`}  className={classes.block}>
          Update Adds
        </Link>
      </div>
    </div>
  )
}

export default AdminHome