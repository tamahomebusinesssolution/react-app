import {Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function PageNotFound(){
	

	return(
		
			<Row>
				<Col className = 'col-4 mx-auto'>
					<h1 className = 'text-center text-primary'>Page Not Found!</h1>
					<img className = 'img-fluid'src = 'https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?w=2000'/>
					<p className = 'text-center'>Go back to <Link to ='/'>homepage</Link></p>
				</Col>
			</Row>
		
		)
}