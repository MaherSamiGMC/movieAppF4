import React, { useState } from 'react';
import {Navbar,Container,Nav,NavDropdown,Form,FormControl,Button} from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import { LinkContainer } from 'react-router-bootstrap'

function Header({filterMovie}) {
    const [search, setSearch] = useState("");
    const [rating, setRating] = useState();
  return (
        <Navbar bg="light" expand="lg">
        <Container fluid>
        <LinkContainer to="/">
            <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
            <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
            >
            <LinkContainer to="/">
                <Nav.Link  href="/">Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/addnewmovie">
                <Nav.Link href="/">add new movie </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/contactUs">
                <Nav.Link href="/">Contact us </Nav.Link>
            </LinkContainer>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
            <LinkContainer to="/">
                <NavDropdown.Item href="#action3">marwen </NavDropdown.Item>
            </LinkContainer>
                <NavDropdown.Item href="#action4">taoufik</NavDropdown.Item>
                <NavDropdown.Item href="#action4">tarek</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                Something else here
                </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
                Link
            </Nav.Link>
            </Nav>
            <Form className="d-flex">
            <Rating onClick={(rate)=>setRating(rate/20)} />

            <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                onChange={(e)=>setSearch(e.target.value)}
            />
            <Button onClick={()=>filterMovie(search,rating)} variant="outline-success">Search</Button>
            </Form>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  );
}

export default Header;
