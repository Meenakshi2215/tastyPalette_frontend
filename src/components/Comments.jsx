import React from 'react'
import  { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { updateComment } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Comments({ displayRecipe,setUploadCommentStatus }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //to get value from input box
    const [uploadCommment, setUploadComment] = useState("")

    const handleUploadComment = async () => {

        const { id } = displayRecipe
        // console.log(id);
        console.log(uploadCommment);

        let body = {
            //  displayRecipe,
            ...displayRecipe, Comment: uploadCommment

        }


        if (!uploadCommment) {
            toast.error("Enter Comment")
        }
        else {
            const response = await updateComment(id, body)
            console.log(response);
            if (response.status >= 200 && response.status < 300) {
                setUploadCommentStatus(response.data)
                // displayRecipe.comment=uploadCommment
                toast.success('Thank You For Your Comment')
                handleClose()
            }
            else {
                toast.warning('Oops!.. Something went wrong.')
            }
        }
    }
  return (
    <>
       <div className='d-flex'>
        <div className='p-1 bg-warning  rounded' style={{color:'black',marginLeft:'120px'}}>Leave Your Comment         
        <button onClick={handleShow} className='btn btn-outline-light ms-3'><i class="fa-solid fa-plus fa-2x"></i></button>
    </div>
    {/* <i class="fa-solid fa-comment fa-2x"></i> */}
      
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
                    <Modal.Title>Leave Your Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                           
                            <Form.Control  onChange={(e) => setUploadComment(e.target.value)}
                                type="text"
                                placeholder="Your Comment"
                                
                            />
                        </Form.Group>
                     </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleUploadComment} variant="warning">Upload</Button>
                </Modal.Footer>
            </Modal>
            <ToastContainer position='top-center' theme='colored' autoClose={2000} />
         
    </>
    
  )
}

export default Comments