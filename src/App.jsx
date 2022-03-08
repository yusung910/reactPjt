import 'bootstrap/dist/css/bootstrap.min.css';

import React, {useState} from "react";
import { Row, Col, Container, Navbar, Nav, NavLink, Form, FormControl, Offcanvas } from "react-bootstrap";
import { Outlet, Link, useSearchParams } from "react-router-dom";
import { getFriends } from "./datas/friend";

import style from './asset/scss/main.scss';
import * as Icon from 'react-bootstrap-icons';

export default function App() {
  let friends = getFriends();
  
  let [searchParams, setSearchParams] = useSearchParams();

  let searchFriendName = {name : ''};

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <><Navbar bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/home">Cloud File Sys</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="/files">Files</Nav.Link>
            <Nav.Link onClick={handleShow}>Friends</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              placeholder="Search"
              className="me-2"
              size="sm"
              aria-label="Search"
              value={searchParams.get("filter") || ""}
              onChange={event => {
                let filter = event.target.value;
                if (filter) {
                  setSearchParams({ filter });
                } else {
                  setSearchParams({});
                }
              } } />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Outlet />
    <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>친구목록</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Form className="d-flex">
          <FormControl
              placeholder="Search"
              className="me-2"
              size="sm"
              aria-label="Search"
              value={searchParams.get("friend_name") || ""}
              onChange={event => {
                let friend_name = event.target.value;
                if (friend_name) {
                  setSearchParams({ friend_name });
                } else {
                  setSearchParams({});
                }
              } } />
          </Form>
          <div className="container-friend-list">
            {
              friends
              .filter(friends => {
                let friend_name = searchParams.get("friend_name");
                if (!friend_name) return true;
                let name = friends.name;
                return name.startsWith(friend_name);
              })
              .map(friends => (
                <Row className="align-center">
                  <Col>
                    <NavLink key={friends.id}>
                      <Icon.PersonCircle color="royalblue" size={35}/>
                      {friends.name}
                    </NavLink>
                  </Col>
                </Row>
              ))}
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}