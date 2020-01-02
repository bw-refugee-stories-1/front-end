import React, { Component } from "react";
import {
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";

class loginform extends Component {
  render() {
    return (
      <Container className="App">
        <h2>Sign In</h2>
        <Form className="form">
          <Col>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="myemail@email.com"
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
              />
            </FormGroup>
          </Col>
          <Button>Submit</Button>
        </Form>
      </Container>
    );
  }
}

// import React from 'react';
// import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

// const loginform = (props) => {
//   return (
//     <Form inline>
//       <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//         <Label for="exampleEmail" className="mr-sm-2">Email</Label>
//         <Input type="email" name="email" id="exampleEmail" placeholder="refugeelogin@idk.cool" />
//       </FormGroup>
//       <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
//         <Label for="examplePassword" className="mr-sm-2">Password</Label>
//         <Input type="password" name="password" id="examplePassword" placeholder="don't tell!" />
//       </FormGroup>
//       <Button>Submit</Button>
//     </Form>
//   );
// }

export default loginform;
