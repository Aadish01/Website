import React, { useEffect, useReducer, useState } from 'react'
import classes from './updateadds.module.css'
import { uploadAdd } from '../../services/AddService';
import { getAllAdds, removeAdd } from '../../services/AddService';
import { useParams } from 'react-router-dom';
const initialState = {
  Adds : [],
}
const reducer = (state, action) => {
  switch(action.type){
    case 'ADDS_LOADED':
      return {...state,Adds: action.payload};
    default:
      return state ;
  }
}

function UpdateAdds() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { Adds } = state ;
  const [file, setFile] = useState(null);
  const { name , id } = useParams();
  const [relaod, setreload] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    getAllAdds(id).then(Adds => dispatch({type:'ADDS_LOADED',payload: Adds}));
  },[relaod])

  const validateSelectedFile = async () => {
    if(file){
    const size = file.size / 1024 ;
    console.log(size);
    if(size < 100){
      await handleUpload();
    }else{
      window.alert('File size should be less than 100kB.')
      document.getElementById('lodaluseinejbguh454fbgfg').value= '';
    }
  }
  }

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    document.getElementById('lodaluseinejbguh454fbgfg').value= '';
    await uploadAdd(formData)
    setreload(!relaod);
  }
  const handleRemove = async (id) => {
    await removeAdd(id);
    setreload(!relaod)
  }

  function useConfirm(e) {
      if(window.confirm('Are you Sure? '))
        handleRemove(e.target.id);
    }

  return (
    <div className={classes.contain}>
        {
          Adds.map(add => 
            <div key={add._id} className={classes.fileuploadcontainer}>
              <img src={add.image} alt='' height="130px" width="260px" ></img>
              <button className={classes.remove} id={add._id} onClick={useConfirm}>Remove </button>
            </div>
          )
        }
      <div className={classes.fileuploadcontainer}>
        <h2 className={classes.fileuploadcontainerh2}>Add New</h2>
        <input id='lodaluseinejbguh454fbgfg' className={classes.fileuploadcontainerinput} type="file" onChange={handleFileChange} />
        <button className={classes.fileuploadcontainerbutton} onClick={validateSelectedFile}>Upload Image</button>
      </div>
    </div>
  )
}

export default UpdateAdds