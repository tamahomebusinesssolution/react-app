import { Button, Row, Col } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import '../index.css';


export default function Portfolio(){
	return (
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
		</section>
		)
	}