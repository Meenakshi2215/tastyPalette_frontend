import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { deleteARecipe } from '../services/allAPI';
import Comments from './Comments';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function ViewCard({displayRecipe,setDeleteRecipeStatus,setUploadCommentStatus}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [open, setOpen] = useState(false);

  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true)

  // remove recipe
  const removeRecipe = async(id)=>{
    const response = await deleteARecipe(id)
    setDeleteRecipeStatus(true)
  }
  
  return (
    <>
      <div class="card mb-3 shadow ms-2 " style={{backgroundColor:'black',color:'white',height:'340px'}}  >
    <div class="row g-0">
      <div class="col-md-4">
        <img width={'280px'} height={'330px'} src={displayRecipe.url} class="" alt="..."/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h4 class="card-title fw-bolder text-warning">{displayRecipe.caption}</h4>
          <h5>How to Cook :</h5>
          <p  class="card-text">{displayRecipe.description.slice(0,200)}....  <a href='#' onClick={handleShow2} className='ms-1 ' style={{backgroundColor:'black',color:'white'}}>read more</a></p>
          <div className=' d-flex align-items-center justify-content-between p-2 rounded ms-3'>
         
          <button className='btn btn-outline-light' onClick={handleShow}><i class="fa-brands fa-youtube  text-danger fa-2x"></i></button>
          <Comments setUploadCommentStatus={setUploadCommentStatus} displayRecipe={displayRecipe}/>
          <button className='btn btn-outline-light' onClick={()=>removeRecipe(displayRecipe?.id)}><i class="fa-solid fa-trash text-danger fa-2x"></i></button>
          </div>
          <Modal
        show={show2}
        onHide={handleClose2}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title><span className='text-warning'>{displayRecipe.caption}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body style={{color:'balck'}}>
          {displayRecipe.description}
        </Modal.Body>
        <Modal.Footer>
          
          
        </Modal.Footer>
      </Modal>

      {displayRecipe?.Comment?

<div className='mt-2 text-center ms-4'>
<Button
onClick={() => setOpen(!open)}
aria-controls="example-collapse-text"
aria-expanded={open}
>
View Comments
<i class="fa-solid fa-angle-down ms-4"></i>
</Button>
<div style={{ minHeight: '150px' }}>
<Collapse in={open} dimension="width">
<div id="example-collapse-text">
  <Card className='mt-2' body style={{ width: '400px' ,height:'50px', marginLeft:'160px',color:'green',fontWeight:'bolder'}}>
    {displayRecipe.Comment}
    {/* <button className='btn btn-outline-light' ><i class="fa-solid fa-trash text-danger"></i></button> */}

  </Card>
</div>
</Collapse>
</div>
</div>

:
<p></p>

}
        </div>
      </div>
    </div>
      </div>
      <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>{displayRecipe.caption}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <iframe width="100%" height="400" allow='autoplay;' src={ `${displayRecipe.embedLink}?autoplay=1`}  allowfullscreen></iframe>
          </Modal.Body>
          <Modal.Footer>
           
          </Modal.Footer>
        </Modal>
    </>
  )
}

export default ViewCard