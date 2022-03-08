import React, {useState} from "react";
import {  NavLink,  useSearchParams } from "react-router-dom";
import { Modal, Row, Col, Container, Button, Card, CardGroup, Form, FormGroup, ButtonGroup } from "react-bootstrap";

import Image from 'react-bootstrap/Image';
import * as Icon from 'react-bootstrap-icons';
import img_logo from '../asset/images/img_main.png';

import icon_naver from '../asset/images/icons/icon_naver.png';
import icon_google from '../asset/images/icons/icon_google.png';
import icon_kakao from '../asset/images/icons/icon_kakao.png';


export default function Home() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Container className="container-main-mid" fluid>
                <div className="main-content">
                    <h1>환영합니다!</h1>
                    <p>클라우드 환경의 파일 공유 시스템입니다,<br/>간단한 회원가입 또는 SNS 계정 로그인을 통해 <br/>간편하고 쉬운 클라우드 파일 공유 시스템을 이용하세요!</p>
                    <div className="main-btn-wrapper">
                        <Button variant="primary" className="btn-join" onClick={handleShow}>Log-in</Button>
                    </div>
                </div>
            </Container>
            <div className="bottom-content-container">
                <Row xs={3} className="g-4 bottom-content-container">
                    <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>간편합니다!</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>편리합니다!</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title>다양합니다!</Card.Title>
                            <Card.Text>
                                This is a longer card with supporting text below as a natural
                                lead-in to additional content. This content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </div>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>로그인</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form className="form-login">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="email" placeholder="ID" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="로그인 유지" />
                    </Form.Group>
                </Form>
                <ButtonGroup vertical className="wd100">
                    <Button variant="success" onClick={handleClose}>
                        로그인
                    </Button>
                </ButtonGroup>
                <div className="other-btn-wrapper">
                    <Row>
                        <Col className="ta-center">
                            <a href="">아이디 찾기</a>
                        </Col>
                        <Col className="ta-center">
                            <a href="">비밀번호 찾기</a>
                        </Col>
                        <Col className="ta-center">
                        <a href="/Join">회원가입</a>
                        </Col>
                    </Row>
                </div>
                <div className="other-login-wrapper">
                    <Row>
                        <Col className="ta-center">
                            <img src={icon_naver} alt="" width='30' />
                            <span>네이버 로그인</span>
                        </Col>
                        <Col className="ta-center">
                            <img src={icon_google} alt="" width='30' />
                            <span>구글 로그인</span>
                        </Col>
                        <Col className="ta-center">
                            <img src={icon_kakao} alt="" width='30'/>
                            <span>카카오 로그인</span>
                        </Col>
                    </Row>
                </div>
            </Modal.Body>
        </Modal>

        </>
    );
}