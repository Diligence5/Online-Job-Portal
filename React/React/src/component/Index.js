import React from 'react'
import img1 from "../images/img-1.png"
import img3 from "../images/img-3.png"
import img4 from "../images/img-4.png"
import '../style.css'



export default function Index() {
  return (
    <>
	<div className="banner_section layout_padding">
		<div className="container">
			<h1 className="best_taital">Find Your Dream Job Here...</h1>
		    <p className="there_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alterationThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
		    <div className="bt_main">
		    	
		    </div>
		</div>
	</div>



	<div className="marketing_section layout_padding">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<div className="job_section">
					    <h1 className="jobs_text">Marketing jobs</h1>
					    <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
					    <div className="apply_bt"></div>
					</div>
				</div>
				<div className="col-md-6">
					<div className="image_1 padding_0"><img alt='img' src={img1}/></div>
				</div>
			</div>
		</div>
	</div>

	<div className="marketing_section layout_padding">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<div className="image_1 padding_0"><img alt='img' src={img1}/></div>
				</div>
				<div className="col-md-6">
					<div className="job_section_2">
					    <h1 className="jobs_text">Industrial jobs</h1>
					    <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
					    <div className="apply_bt"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className="marketing_section layout_padding">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6">
					<div className="job_section">
					    <h1 className="jobs_text">Corporate jobs</h1>
					    <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
					    <div className="apply_bt"></div>
					</div>
				</div>
				<div className="col-md-6 padding_0">
					<div className="image_1"><img src={img3} alt='img'/></div>
				</div>
			</div>
		</div>
	</div>

	<div className="marketing_section layout_padding">
		<div className="container-fluid">
			<div className="row">
				<div className="col-md-6 padding_0">
					<div className="image_1"><img src={img4} alt='img'/></div>
				</div>
				<div className="col-md-6">
					<div className="job_section_2">
					    <h1 className="jobs_text">Government jobs</h1>
					    <p className="dummy_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
					    <div className="apply_bt"></div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div className="footer_section layout_padding">
		<div className="container">
			<h1 className="subscribr_text">Subscribe Now</h1>
			<p className="lorem_text">There are many variations of passages of Lorem Ipsum available, but the majority have </p>
			<div className="box_main_2">
			    <textarea type="" className="email_bt_2" placeholder="Enter Your Email" name=""></textarea>
		    </div>
		    <button className="subscribe_bt_2"><span>Subscribe</span></button>
		</div>
	</div>
    </>
  )
}
