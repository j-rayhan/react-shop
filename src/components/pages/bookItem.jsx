import React from 'react'
import { Card, Button, CardTitle, CardText } from 'reactstrap';

class BookItem extends React.Component{
	render(){
		return(
			<div>
				<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' , marginBottom: '1rem'}}>
		        <CardTitle>{this.props.title}</CardTitle>
		        <CardText>{this.props.description}</CardText>
		        <h6>{this.props.price}</h6>
			        <Button>Button</Button>
			    </Card>
			</div>
			)
	}
}

export default BookItem;