import {  NavLink,  useSearchParams} from "react-router-dom";
import { Container, Row, Col, Form, InputGroup, FormControl, Button } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import * as Icon from 'react-bootstrap-icons';


export default function Join() {
    const monthRendering = () => {
        const result = [];
        for (let i = 1; i <= 12; i++) {
          result.push(<option>{i}</option>);
        }
        return result;
      };
  return (
    <>
        <Container fluid className="join-container">
            <div className="join-title-wrapper">
                <h1>회원가입</h1>
            </div>
        </Container>
        <Container className="join-form-container">
            <div className="join-form-wrapper">
                <Form className="join-form">
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>ID</Form.Label>
                        <Form.Control type="email" size="sm" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>비밀번호</Form.Label>
                        <Form.Control type="password" size="sm" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>비밀번호 재확인</Form.Label>
                        <Form.Control type="password" size="sm" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupName">
                        <Form.Label>이름</Form.Label>
                        <Form.Control type="text" size="sm" />
                    </Form.Group>

                    <Row className="mb-3">
                    <Form.Label>생년월일</Form.Label>
                        <Form.Group as={Col} controlId="formGridBirthYear">
                            <Form.Control placeholder="년도"/>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBirthMonth">
                        <Form.Select >
                            <option>-선택-</option>
                            {monthRendering()}
                        </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridBirthDay">
                        <Form.Control placeholder="일"/>
                        </Form.Group>
                    </Row>


                    <Form.Group className="mb-3" controlId="formGroupGender">
                        <Form.Label>성별</Form.Label>
                        {['radio'].map((type) => (
                            <div key={`inline-${type}`} className="mb-3">
                            <Form.Check
                                inline
                                label="남"
                                name="gender"
                                type={type}
                                id={`inline-${type}-1`}
                            />
                            <Form.Check
                                inline
                                label="여"
                                name="gender"
                                type={type}
                                id={`inline-${type}-2`}
                            />
                            <Form.Check
                                inline
                                label="선택 안함"
                                type={type}
                                name="gender"
                                id={`inline-${type}-3`}
                            />
                            </div>
                        ))}
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>E-mail 주소</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Label>휴대전화</Form.Label>
                    <InputGroup className="mb-3">
                        <FormControl/>
                        <Button variant="outline-secondary" id="button-addon2">
                            인증번호 받기
                        </Button>
                    </InputGroup>
                    <FormControl placeholder="인증번호"/>
                </Form>

                <div className="d-grid gap-2">
                    <Button variant="primary" size="sm">
                        가입하기
                    </Button>
                </div>
            </div>

        </Container>
    </>
  );
}