import React from 'react'
import  { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { uploadRecipe } from '../services/allAPI';

function Add({setUploadStatusRecipe}) {
  const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Recipes, setRecipes] = useState({
        id: "",
        caption: "",
        url: "",
        description: "",
        embedLink: ""
    })
    // console.log(Recipes);

    const embedVideoLink = (e)=>{
        const {value} = e.target
        console.log(value.slice(-11));
        const link = `https://www.youtube.com/embed/${value.slice(-11)}`
        setRecipes({...Recipes, embedLink:link})
    }
    console.log(Recipes);
    //https://www.youtube.com/watch?v=fLiU5CAmfr4
    //<iframe width="853" height="480" src="https://www.youtube.com/embed/Aaobt7X0-Rw" title="Restaurant Style Chicken Dum Biryani | चिकन बिरयानी | Chicken Biryani | Easy Dum Biryani |Chef Ashok" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    const handleUpload = async ()=>{
        const{ id, caption, url, description, embedLink } = Recipes
        if(!id || !caption || !url || !description ||!embedLink){
            toast.warning("Fill the form completely")
        }
        else{
            const response = await uploadRecipe(Recipes)
            console.log(response);
            if(response.status >= 200 && response.status <300){
                setUploadStatusRecipe(response.data)
                toast.success('Recipe Uploaded Successfully')
                handleClose()
            }
            else{
                toast.error('Oops!.. Something went wrong.')
            }
        }

    }
  return (
    <>
    <div className='shadow rounded p-4 d-flex justify-content-center align-items-center  text-center mt-1' style={{ backgroundColor: 'orange' }}>
                          <h4 style={{ color: 'black', fontWeight: 'bold' }}>Upload New Recipe</h4>
                          <button onClick={handleShow} className='ms-5 btn btn-outline-dark rounded '><i class="fa-solid fa-upload fs-5 "></i>
                          </button>
                      </div>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                // size='lg'
                centered

            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Food Recipe</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                            <Form.Control onChange={(e)=> setRecipes({...Recipes, id:e.target.value})}
                                type="text"
                                placeholder="Enter Food ID"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                            <Form.Control onChange={(e)=> setRecipes({...Recipes,caption:e.target.value})}
                                type="text"
                                placeholder="Enter Food Name"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                            <Form.Control onChange={(e)=>setRecipes({...Recipes,url:e.target.value})}
                                type="text"
                                placeholder="Enter Food Image URL"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                            <Form.Control onChange={(e)=>setRecipes({...Recipes,description:e.target.value})}
                                type="text"
                                placeholder="Enter Cooking Description"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                           <Form.Control onChange={embedVideoLink}
                               type="text"
                               placeholder="Enter Food Video Link"
                           />
                       </Form.Group>
                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUpload} variant="warning">Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />

    </>
  )
}

export default Add