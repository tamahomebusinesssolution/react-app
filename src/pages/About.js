import { Button, Row, Col } from 'react-bootstrap';
import {Link } from 'react-router-dom';


export default function About(){
	return (
		<section class="page-section" id="about">
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
		)
	}