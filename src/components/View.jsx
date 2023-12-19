import React, { useEffect, useState } from 'react'
import ViewCard from './ViewCard'
import { Row,Col } from 'react-bootstrap'
import { getAllRecipes } from '../services/allAPI'

function View({uploadStatusRecipe}) {

  const [allRecipes,setAllRecipes] = useState([])

  const [uploadCommentStatus,setUploadCommentStatus] = useState({})


//to create state for delete recipe
  const [deleteRecipeStatus ,setDeleteRecipeStatus] = useState(false)


const getAllUploadedRecipes =async()=>{
  const response = await getAllRecipes()
  // console.log(response);
  const {data} = response
  // console.log(data);
  setAllRecipes(data)
}
console.log(allRecipes);


useEffect(()=>{
  getAllUploadedRecipes()
  setDeleteRecipeStatus(false)
},[uploadStatusRecipe,,uploadCommentStatus, deleteRecipeStatus])

  return (
    <>
      <Row>
        {allRecipes.length>0?
          allRecipes.map((recipe)=>(
           
         <ViewCard  displayRecipe ={recipe} setDeleteRecipeStatus={setDeleteRecipeStatus} setUploadCommentStatus={setUploadCommentStatus}/>
        
          ))
          :

        <p>Nothing to display</p>
       }
     </Row>
  </>
  )
}

export default View