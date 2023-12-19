import React from 'react';
import video from '../assets/video.mp4';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
import video3 from '../assets/video3.mp4';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './landing.css'
function LandingPage() {
  return (
    <>
    <div className='' style={{ position: "relative" }}>
      <div className="row  ">
      <div className='col-md-6 mt-5 ms-3' style={{ position: "absolute", textAlign: "center"}}>
        <h1  style={{ color: "white", fontSize: "70px", fontWeight: "bolder", textShadow: "10px black solid",marginTop:'50px' }}>The Tasty Palette</h1>
        <p className='mt-3' style={{ color: "white", fontSize: "17px", fontWeight: "bolder" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque magnam saepe molestias, distinctio quis minus tenetur ipsam maiores veniam dolores voluptatibus reprehenderit earum aspernatur possimus, animi accusantium ex aperiam repudiandae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, officia facere voluptate et error facilis quos dicta temporibus dolorem maiores incidunt eius alias, accusantium possimus, doloremque minima laborum praesentium </p>
        <Link to={'/home'}><Button style={{ backgroundColor: "orange", color: "black" }} className='btn btn-outline rounded fw-bolder'>Get Started<i class="fa-solid fs-1x fa-arrow-right fa-beat ms-1"></i></Button></Link>
      </div>
      <img width={'100%'} height={'650px'} src="https://t4.ftcdn.net/jpg/02/43/11/95/360_F_243119507_sFqCazZfPjdC0EgHLJZ7ByUUJLDmweLf.jpg" alt="" />

    </div>
    </div>
    <div className="row d-flex ps-5 mt-3">
      <div className="col-md-6">
        <div className=''>
          <h1  style={{ fontWeight: "bolder", fontSize: "60px",color:'black' }}>ABOUT</h1>
          <p style={{color:'black'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit doloribus, ipsam delectus hic corrupti nulla cum quidem ducimus! Perspiciatis dicta amet eaque sapiente sed corporis delectus velit sequi repellat cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit doloribus, ipsam delectus hic corrupti nulla cum quidem ducimus! Perspiciatis dicta amet eaque sapiente sed corporis delectus velit sequi repellat cupiditate.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit doloribus, ipsam delectus hic corrupti nulla cum quidem ducimus! Perspiciatis dicta amet eaque sapiente sed corporis delectus velit sequi repellat cupiditate.</p>  <br />
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid a culpa ab ratione fugit reiciendis cum, impedit illum id soluta officiis incidunt voluptatibus, ipsum dolores ducimus totam distinctio sint hic?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo natus neque voluptatum veniam repellat quod a ea ratione, eum voluptate fuga eveniet maiores commodi minima iste rem nesciunt. Natus, fugiat.</p>
        </div>

      </div>
      <div className="col-md-6 ">
        <img className='mt-4' style={{marginBottom:'100px'}} width={'90%'} height={'60%'} src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
      </div>
    </div>

    {/* <section>
      <div className="row">
        <div className="col-md-4">
        <h1 style={{ fontSize: "50px", marginTop: "50px" }}>MORE <br /> <br />ENJOY <br /><br /> MORE <br /><br /> JOY</h1>

        </div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>
        <div className="col-md-2"></div>

      </div>
    </section> */}

    <div className='video d-flex' style={{ marginTop: "-170px", backgroundColor: "black", paddingTop: "20px", paddingBottom: "20px" }}>
      <h1 style={{ fontSize: "50px", marginTop: "50px" }}>MORE <br /> <br />ENJOY <br /><br /> MORE <br /><br /> JOY</h1>
      <video style={{ width: "100%", height: "500px" }} src={video} autoPlay muted loop></video>
      <video style={{ width: "100%", height: "500px" }} src={video1} autoPlay muted loop></video>
      <video style={{ width: "100%", height: "500px" }} src={video2} autoPlay muted loop></video>
      <video style={{ width: "100%", height: "500px" }} src={video3} autoPlay muted loop></video>
    </div>
  </>
  )
}

export default LandingPage