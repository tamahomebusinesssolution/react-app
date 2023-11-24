import {NavDropdown,Nav,Navbar,Container} from 'react-bootstrap';
import {Image,Badge, Typography,Space} from 'antd';
import {useState, useEffect, useContext} from 'react';
import {NavLink, Link} from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import {Navigate, useNavigate} from 'react-router-dom';
import Marquee from "react-fast-marquee";


export default function AppNavBar() {
	const navigate = useNavigate();
	return (
		<Navbar  expand="lg navbar-dark">
		    <Container>
		      {/*<Marquee>
		        <Image
				width={150}
			 src='https://ww1.prweb.com/prfiles/2015/08/24/12921194/CapstoneLogo.jpg'
			></Image>
				</Marquee>*/}
		        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
		                    <div class="container">
		                        <a class="navbar-brand nav-link" href="/">
		                        {/*<img src="../assets/favicon.ico" alt="..." />*/}
		                        <img class="img-fluid" src={require('../assets/favicon.ico')}></img>
		                        &nbsp; Tamahome Business Solution</a>
		                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
		                            Home
		                            {/*<i class="fas fa-bars ms-1"></i>*/}
		                        </button>
		                        <div class="collapse navbar-collapse" id="navbarResponsive">
		                            <ul class="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
		                            	
		                            	<li class="nav-item"><a class="nav-link" href="#services">Services</a></li>
		                                <li class="nav-item"><a class="nav-link" href="/portfolio">Portfolio</a></li>
		                                <li class="nav-item"><a class="nav-link" href="/about">About</a></li>
		                                <li class="nav-item"><a class="nav-link" href="/team">Team</a></li>
		                                <li class="nav-item"><a class="nav-link" href="/contact">Contact Us</a></li>
		                            </ul>
		                        </div>
		                    </div>
		                </nav>
		    </Container>
		</Navbar>
	)
}
