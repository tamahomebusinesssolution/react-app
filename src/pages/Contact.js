import { Button, Row, Col } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal2 from 'sweetalert2';
export default function Services(){
	const form = useRef();
	const sendEmail = (e) => {
	    e.preventDefault();

	    emailjs.sendForm('service_xj8z73i', 'template_u9pf9by', form.current, 'VCf1vL_xRvO85XSJL')
	      .then((result) => {
	      	Swal2.fire({
	      	    title: 'Send successful!',
	      	    icon: 'success',
	      	    text: 'Thank You!'
	      	})
	      }, (error) => {
	          console.log(error.text);
	          Swal2.fire({
	                   title: "Sending Failed!",
	                   icon: 'error',
	                   text: 'Check your credentials and try again'
	               })
	      });
	  };


	return (
<section class="page-section" id="contact">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Contact Us</h2>
                    <h3 class="section-subheading text-primary">Overcome your obstacles. Get Business Coaching, Today!</h3>
                </div>

                <form id="contactForm" ref={form} onSubmit={sendEmail}>>
                    <div class="row align-items-stretch mb-5">
                        <div class="col-md-6">
                            <div class="form-group">
                                {/*<!-- Name input-->*/}
                                
                                <input class="form-control" name="user_name" id="name" type="text" placeholder="Your Name *" validations="required" />
                                <div class="invalid-feedback" feedback="name:required">A name is required.</div>
                            </div>
                            <div class="form-group">
                                {/*<!-- Email address input-->*/}
                                
                                <input class="form-control" name="user_email" id="email" type="email" placeholder="Your Email *" validations="required,email" />
                                <div class="invalid-feedback" feedback="email:required">An email is required.</div>
                                <div class="invalid-feedback" feedback="email:email">Email is not valid.</div>
                            </div>
                            <div class="form-group mb-md-0">
                                {/*<!-- Phone number input-->*/}
                                <input class="form-control" id="phone" type="tel" placeholder="Your Phone *" validations="required" />
                                <div class="invalid-feedback" feedback="phone:required">A phone number is required.</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group form-group-textarea mb-md-0">
                                {/*<!-- Message input-->*/}
                                <textarea class="form-control" name="message" id="message" placeholder="Your Message *" validations="required"></textarea>
                                <div class="invalid-feedback" feedback="message:required">A message is required.</div>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div class="text-center"><button class="btn btn-primary btn-xl text-uppercase " id="submitButton" type="submit" value="Send">Send Message</button></div>
                </form>
            </div>
        </section>
        )
}