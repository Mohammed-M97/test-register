import React, { useState } from "react"
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (ev) => {
    ev.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then((result) => {
        console.log(result);
        if (result.data === 'Success') {   
          navigate('/home')
        }
    })
    .catch(err => console.log(err))
  }
  return (
    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Login
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          placeholder="Enter email"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          placeholder="Password"
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account??{" "}
                        <Link to={"/register"} className="text-primary fw-bold">
                          Register
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login
