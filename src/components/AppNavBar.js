import {NavDropdown,Nav,Navbar,Container} from 'react-bootstrap';
import {Image,Badge, Typography,Space} from 'antd';
import {useState, useEffect, useContext} from 'react';
import {NavLink, Link} from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import {Navigate, useNavigate} from 'react-router-dom';
import Marquee from "react-fast-marquee";


import { Button, Row, Col } from 'react-bootstrap';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal2 from 'sweetalert2';

export default function AppNavBar() {
	const navigate = useNavigate();

	const form = useRef();
	const sendEmail = (e) => {
	    e.preventDefault();

	    emailjs.sendForm('service_xj8z73i', 'template_u9pf9by', form.current, 'VCf1vL_xRvO85XSJL')
	      .then((result) => {
	      	Swal2.fire({
	      	    title: 'Thank You!',
	      	    icon: 'success',
	      	    text: 'Send successful!'
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
		<body id="page-top">
		<nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
		    <div class="container">
		        <a class="navbar-brand nav-link" href="#page-top">
		            <img class="img-fluid" src={require('../assets/favicon.ico')}></img>
		                        &nbsp; Tamahome Business Solution
		        </a>
		        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		                            Home
		                            {/*<i class="fas fa-bars ms-1"></i>*/}
		        </button>
		        <div class="collapse navbar-collapse" id="navbarResponsive">
		            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
		                            	
		              	<li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
		                <li class="nav-item"><a class="nav-link" href="#portfolio">Portfolio</a></li>
		                <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
		                <li class="nav-item"><a class="nav-link" href="#team">Team</a></li>
		                <li class="nav-item"><a class="nav-link" href="#contact">Contact Us</a></li>
		            </ul>
		        </div>
		    </div>
		</nav>
					<header class="masthead expand-lg dark">
		        	    <div class="container">
		        	        <div class="masthead-subheading">We Help</div>
		        	        <div class="masthead-heading text-uppercase">You're in the right place</div>
		        	        <a class="btn btn-warning btn-lg text-uppercase" href="#services">Tell Me More</a>
		        	    </div>
		        	</header>
		        	<section class="page-section" id="services">
		        	    <div class="container">
		        	        <div class="text-center">
		        	            <h2 class="section-heading text-uppercase">Our Services</h2>
		        	            <h3 class="section-subheading text-muted">Take Control of Your Business with Our World-Class Coaching</h3>
		        	        </div>
		        	        <div class="row text-center">
		        	            <div class="col-md-4">
		        	                 <span class="fa-stack fa-4x">
		        	                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
		        	                    <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
		        	                </span> 
		        	                <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/services/1.jpg" alt="..." />
		        	                </div>
		        	                <h4 class="my-3">Entrepreneurship Coaching</h4>
		        	                <p class="text-right text-muted ">As professional entrepreneurship coaches we specialize in walking the line between being a cheerleader and a harsh realist. We push you to new heights that are sometimes uncomfortable but are necessary to grow and scale your business. We stick with you through thick and thin and make sure all objectives are growth driven so you start seeing results quickly.</p>
		        	            </div>
		        	            <div class="col-md-4">
		        	                 <span class="fa-stack fa-4x">
		        	                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
		        	                    <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
		        	                </span> 		                <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/services/2.jpg" alt="..." />
		        	                </div>
		        	                <h4 class="my-3">Money and Finance Coaching</h4>
		        	                <p class="text-muted text-justify">We are reliable money and finance coaches who focus on improving the financial status for both personal or business clients. Our main objective is to address both the black and white numbers, as well as the emotional relationship with money. We’ll also help you come up with a step-by-step plan to help you reach specific financial goals and to have the mindset and habits to support long term financial success.</p>
		        	            </div>
		        	            <div class="col-md-4">
		        	                <span class="fa-stack fa-4x">
		        	                    <i class="fas fa-circle fa-stack-2x text-primary"></i>
		        	                    <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
		        	                </span>
		        	                <div class="timeline-image"><img class="rounded-circle img-fluid" src="../assets/img/services/3.jpg" alt="..." />
		        	                </div>
		        	                <h4 class="my-3">Team Coaching</h4>
		        	                <p class="text-muted text-justify">As a team coach we drive your team towards accomplishing a goal, whether it be completing a particular project, starting a new business unit or meeting sales efforts. We will help you in confronting and addressing team-busters like groupthink, micromanaging, and unresolved conflict to build a better team for your organization. We will ask questions that help your team to decide what’s best for them.</p>
		        	            </div>
		        	        </div>
		        	    </div>
		        	</section>
		        	<section class="page-section bg-light" id="portfolio">
		        	    <div class="container">
		        	        <div class="text-center">
		        	            <h2 class="section-heading text-uppercase">Portfolio</h2>
		        	            <h3 class="section-subheading text-muted">We help teams build a business of their dreams with our services.</h3>
		        	        </div>
		        	        <div class="row">
		        	            <div class="col-lg-4 col-sm-6 mb-4">
		        	               
		        	                <div class="portfolio-item">
		        	                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal1">
		        	                        <div class="portfolio-hover">
		        	                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
		        	                        </div>
		        	                        
		        	                        <img class="img-fluid" src={require('../assets/img/portfolio/1.jpg')} width={"600px"}  height={250} alt="Responsive image"></img>
		        	                    </a>
		        	                    <div class="portfolio-caption">
		        	                        <div class="portfolio-caption-heading">Human Resource</div>
		        	                        <div class="portfolio-caption-subheading text-muted">We Want You</div>
		        	                    </div>
		        	                </div>
		        	            </div>
		        	            <div class="col-lg-4 col-sm-6 mb-4">
		        	                
		        	                <div class="portfolio-item">
		        	                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal2">
		        	                        <div class="portfolio-hover">
		        	                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
		        	                        </div>
		        	                        {/*<img class="img-fluid" src="../assets/img/portfolio/2.jpg" alt="..."  />*/}
		        	                        <img class="img-fluid" src={require('../assets/img/portfolio/2.jpg')} width={"600px"} height={"50px"} alt="Responsive image"></img>
		        	                    </a>
		        	                    <div class="portfolio-caption">
		        	                        <div class="portfolio-caption-heading">Marketing Analysis</div>
		        	                        <div class="portfolio-caption-subheading text-muted">Let you project the success you can expect on consumer within the market. </div>
		        	                    </div>
		        	                </div>
		        	            </div>
		        	            <div class="col-lg-4 col-sm-6 mb-4">
		        	               
		        	                <div class="portfolio-item">
		        	                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal3">
		        	                        <div class="portfolio-hover">
		        	                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
		        	                        </div>
		        	                       {/* <img class="img-fluid" src="../assets/img/portfolio/3.jpg" alt="..."  />*/}
		        	                       <img class="img-fluid" src={require('../assets/img/portfolio/3.jpg')} width={600} height={250} alt="Responsive image"></img>
		        	                    </a>
		        	                    <div class="portfolio-caption">
		        	                        <div class="portfolio-caption-heading">Accounting</div>
		        	                        <div class="portfolio-caption-subheading text-muted">Data entry is the foundation of bookkeeping.</div>
		        	                    </div>
		        	                </div>
		        	            </div>
		        	            <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
		        	                
		        	                <div class="portfolio-item">
		        	                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal4">
		        	                        <div class="portfolio-hover">
		        	                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
		        	                        </div>
		        	                        {/*<img class="img-fluid" src="../assets/img/portfolio/4.jpg" alt="..."  />*/}
		        	                        <img class="img-fluid" src={require('../assets/img/portfolio/4.jpg')} width={600} height={300} alt="Responsive image"></img>
		        	                   </a>
		        	                    <div class="portfolio-caption">
		        	                        <div class="portfolio-caption-heading">Software/IT</div>
		        	                        <div class="portfolio-caption-subheading text-muted">SEO/Web Developer/System Design/Software Testing</div>
		        	                    </div>
		        	                </div>
		        	            </div>
		        	            <div class="col-lg-4 col-sm-6 mb-4 mb-sm-0">
		        	               
		        	                <div class="portfolio-item">
		        	                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal5">
		        	                        <div class="portfolio-hover">
		        	                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
		        	                        </div>
		        	                        {/*<img class="img-fluid " src="../assets/img/portfolio/5.jpg" alt="..."  />*/}
		        	                        <img class="img-fluid" src={require('../assets/img/portfolio/5.jpg')} width={600} height={300} alt="Responsive image"></img>
		        	                   </a>
		        	                    <div class="portfolio-caption">
		        	                        <div class="portfolio-caption-heading">eCommerce</div>
		        	                        <div class="portfolio-caption-subheading text-muted">E-commerce has changed the way people shop and consume products and services.</div>
		        	                    </div>
		        	                </div>
		        	            </div>
		        	            <div class="col-lg-4 col-sm-6">
		        	               
		        	                <div class="portfolio-item">
		        	                    <a class="portfolio-link" data-bs-toggle="modal" href="#portfolioModal6">
		        	                        <div class="portfolio-hover">
		        	                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
		        	                        </div>
		        	                        {/*<img class="img-fluid" src="../assets/img/portfolio/6.jpg" alt="..."   />*/}
		        	                        <img class="img-fluid" src={require('../assets/img/portfolio/6.jpg')} width={600} height={300} alt="Responsive image"></img>
		        	                    </a>
		        	                    <div class="portfolio-caption">
		        	                        <div class="portfolio-caption-heading">Operations Strategy</div>
		        	                        <div class="portfolio-caption-subheading text-muted">Helps you in planning of processes and tasks and aligning them with the larger goals of your organization.</div>
		        	                    </div>
		        	                </div>
		        	            </div>
		        	        </div>
		        	    </div>
		        	</section><section class="page-section" id="about">
		    <div class="container">
		        <div class="text-center">
		            <h2 class="section-heading text-uppercase">About</h2>
		            <h3 class="section-subheading text-muted">Let’s focus on revenues, more profits, productive teams, improved cash flows and simply just more peace of mind.</h3>
		        </div>
		        <ul class="timeline">
		            <li>
		                <div class="timeline-image">
		                    <img class="rounded-circle img-fluid" src="assets/img/about/1.jpg" alt="..."  />
		                </div>
		                <div class="timeline-panel">
		                    <div class="timeline-heading">
		                        <h4></h4>
		                        <h4 class="subheading"></h4>
		                </div>
		                    <div class="timeline-body"><p class="text-muted">With 10 years of experience in helping businesses grow, we’ve mastered the skills of understanding business requirements irrespective of the industry they serve. Our clients vary from tiny start-ups to larger corporations who wish to take their business higher.

		                    We’ve helped entrepreneurs set up a business, build productive teams and make the most of the available resources.</p></div>
		                </div>
		            </li>
		            <li class="timeline-inverted">
		                <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/2.jpg" alt="..." /></div>
		                <div class="timeline-panel">
		                    <div class="timeline-heading">
		                        <h4>Trust Us</h4>
		                        <h4 class="subheading">We Are Here to Help!</h4>
		                    </div>
		                    <div class="timeline-body"><p class="text-muted">If you are looking for a reliable business coach with whom you share your mind and get the best business advice you’ve been looking for, we are here. With 10 years of experience in helping businesses grow, we’ve mastered the skills of studying the market for you and helping you cope up with the latest trends that’ll take your business to the next level.</p></div>
		                </div>
		            </li>
		            <li>
		                <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/3.jpg" alt="..." /></div>
		                <div class="timeline-panel">
		                    <div class="timeline-heading">
		                        <h4></h4>
		                        <h4 class="subheading">Why Choose Us?</h4>
		                    </div>
		                    <div class="timeline-body"><p class="text-muted">We are well-experienced business professionals with younger minds.</p></div>
		                </div>
		            </li>
		            <li class="timeline-inverted">
		                <div class="timeline-image"><img class="rounded-circle img-fluid" src="assets/img/about/4.jpg" alt="..." /></div>
		                <div class="timeline-panel">
		                    <div class="timeline-heading">
		                        <h4></h4>
		                        <h4 class="subheading"></h4>
		                    </div>
		                    <div class="timeline-body">&nbsp;
		                        <p class="text-muted">Passion & Commitment</p>
		                        <p class="text-muted">Honesty & Openness</p>
		                        <p class="text-muted">Dedicated Team</p>
		                        <p class="text-muted">Practical Approach</p>
		                    </div>
		                </div>
		            </li>
		            <li class="timeline-inverted">
		                <div class="timeline-image">
		                    <h4>
		                        Be Part
		                        <br />
		                        Of Our
		                        <br />
		                        Story!
		                    </h4>
		                </div>
		            </li>
		        </ul>
		    </div>
		</section>
		<section class="page-section bg-light" id="team">
		    <div class="container">
		        <div class="text-center">
		            <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
		            <h3 class="section-subheading text-muted">Coaching for Champions!</h3>
		        </div>
		        <div class="row">
		            <div class="col-lg-4">
		                <div class="team-member">
		                    <img class="mx-auto rounded-circle" src="assets/img/team/1.jpg" alt="..." />
		                    <h4>Cielo Mae Franco</h4>
		                    <p class="text-muted">CEO, Talent Aquisition, Business Research</p>
		                    <p class="text-muted">Cielo is an award winning coach who has helped over 25+ businesses start and flourish online. She loves interacting and making friends.</p>
		                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i class="fab fa-twitter"></i></a>
		                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i class="fab fa-facebook-f"></i></a>
		                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
		                </div>
		            </div>
		            <div class="col-lg-4">
		                <div class="team-member">
		                    <img class="mx-auto rounded-circle" src="assets/img/team/2.jpg" alt="..." />
		                    <h4>Fraulein Ducta</h4>
		                    <p class="text-muted">CEO, Lead Marketing/Finance</p>
		                    <p class="text-muted">Fraulein is a well-established business Marketing coach for a year. Her way of coaching and guiding reflects his helpful and friendly nature.</p>
		                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i class="fab fa-twitter"></i></a>
		                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i class="fab fa-facebook-f"></i></a>
		                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
		                </div>
		            </div>
		            <div class="col-lg-4">
		                <div class="team-member">
		                    <img class="mx-auto rounded-circle" src="assets/img/team/3.jpg" alt="..." />
		                    <h4>Mark Joseph Oh</h4>
		                    <p class="text-muted">CEO, Lead Developer</p>
		                    <p class="text-muted">One of the top and expert in helping IT businesses grow, Mark has been a friend and guide to many budding entrepreneurs</p>
		                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i class="fab fa-twitter"></i></a>
		                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i class="fab fa-facebook-f"></i></a>
		                    <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i class="fab fa-linkedin-in"></i></a>
		                </div>
		            </div>
		        </div>
		        <div class="row">
		            <div class="col-lg-8 mx-auto text-center">
		                <h4>Mission</h4>
		                <p class="large text-muted">Bring clarity to the priorities, strategies and opportunities within businesses or roles to help them achieve the exceptional results they desire.</p></div>
		                <div class="col-lg-8 mx-auto text-center">
		                <h4>Vision</h4>
		                <p class="large text-muted">We strive to enable our clients to have clear direction, focus and achieve success in all the areas of their business.</p></div>
		        </div>
		    </div>
		</section>
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
					
		        </body>	
	)

}
