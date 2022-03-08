import {  NavLink,  useSearchParams} from "react-router-dom";
import { Container, Row, Col, Form, InputGroup, Breadcrumb } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { getFiles } from "../datas/data";
import * as Icon from 'react-bootstrap-icons';


export default function fileList() {
  let files = getFiles();
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <>
      <Container className="main-app-container">
        <Breadcrumb className="file-dir">
          <Breadcrumb.Item href="#">/</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="container-file-list">
          {files
            .filter(files => {
              let filter = searchParams.get("filter");
              if (!filter) return true;
              let name = files.name.toLowerCase();
              return name.startsWith(filter.toLowerCase());
            })
            .map(files => (
              <Col xs={6} md={4} className="align-center">

                <NavLink
                  to={`/files/${files.number}`}
                  key={files.number}
                >
                  <Icon.Folder color="royalblue" size={96}/>
                  <br/>
                  {files.name}
                </NavLink>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
}