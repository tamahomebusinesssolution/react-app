import { Button, Row, Col } from 'react-bootstrap';
import {Link } from 'react-router-dom';


export default function Team(){
	return (
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
		)
	}