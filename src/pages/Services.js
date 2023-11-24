import { Button, Row, Col } from 'react-bootstrap';
import {Link } from 'react-router-dom';


export default function Services(){
	return (
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
        	

	)
}