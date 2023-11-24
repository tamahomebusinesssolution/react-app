import {Image,Badge, Typography,Space} from 'antd';
import {BellFilled, MailOutlined} from '@ant-design/icons';
import {NavDropdown,Nav,Navbar,Container} from 'react-bootstrap';
import {NavLink, Link} from 'react-router-dom';
export default function AppHeader(){
	return (
		<div className='AppHeader'>
			<Image
				width={40}
			 src='https://ww1.prweb.com/prfiles/2015/08/24/12921194/CapstoneLogo.jpg'
			></Image>
			<Typography.Title>Admin Dashboard</Typography.Title>

			<Navbar bg="primary" expand="lg">
		    <Container fluid>
		        <Navbar.Brand></Navbar.Brand>
		        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
		        <Navbar.Collapse id="basic-navbar-nav">
		            <Nav className="ms-auto">
		            <Nav.Link as = {NavLink} to = '/' >Home</Nav.Link>
		            <Nav.Link as = {NavLink} to = '/products'>Products</Nav.Link>
		            </Nav>
		        </Navbar.Collapse>
   			</Container>
   			</Navbar>

			<Space>
			<Badge count={10} dot>
				<MailOutlined style={{fontSize:24}} />
			</Badge>
			<Badge count={20}>	
				<BellFilled style={{fontSize:24}} />
			</Badge>
			</Space>
		</div>

	)

}