import React, { useState } from 'react'
import View from '../components/View'
import Add from '../components/Add'


function Home() {
  const [uploadStatusRecipe,setUploadStatusRecipe] = useState({})
  return (
    <>
    <div className='bg-wheat align-items-center ' style={{backgroundColor:'white' ,padding:'20px'}}>
        <div className='container mt-5 rounded'  style={{ backgroundColor: 'grey', width: '100%',padding:'30px' }}>
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6  text-center">
                    <img width={'250px'} height={'300px'} src="https://m.media-amazon.com/images/I/71nIiJO1uQL._AC_UF1000,1000_QL80_.jpg" alt="" />
                </div>
                <div className="col-md-6" >

                    <p className='text-light fs-5 fw-bolder'>“Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”</p>
                   
                    <Add setUploadStatusRecipe={setUploadStatusRecipe}/>

                 
                </div>

             
            </div>
            </div>
            <div className='container-fluid  mt-5  mb-5 d-flex justify-content-center' style={{marginLeft:'78px',width:'1320px'}}>
                 <div className='all-videos col-lg-12'>
                    <h3 className='mb-5 ms-5 text-danger text-center fw-bold fs-2' >ALL RECEPIES</h3>
                      <View   uploadStatusRecipe={uploadStatusRecipe}/>
                 </div>
           </div>
    </div>

            
  </>
  )
}

export default Home