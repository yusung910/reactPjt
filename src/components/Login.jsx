import React, {useState} from "react";
import {  NavLink,  useSearchParams} from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import * as Icon from 'react-bootstrap-icons';


export default function Login() {

  return (
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
                    <a href="">회원가입</a>
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
  );
}