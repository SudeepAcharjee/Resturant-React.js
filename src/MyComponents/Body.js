import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Body() {
  return (
    <Card className="text-center">
      <Card.Header>Big-Bites</Card.Header>
      <Card.Body>
        <Card.Title>Your Happy Meal</Card.Title>
        <Card.Text>
         Donot Stay hungry! Come and grab your meal now.
        </Card.Text>
        <Button variant="primary">Order Now</Button>
      </Card.Body>
      {/* <Card.Footer className="text-muted"></Card.Footer> */}
    </Card>
  );
}
