import React from "react";
import FavBox from "../Cards/favbox";

//import Modeladvertorial from "../Cards/modeladvertorial";
import { Col, Row } from "reactstrap";

const Favgirls = () =>{



const TESTARRAY={pseudo:"Caro"}


    return (
      <div>
        <Row className="bg-light">
          <Col xs="12" lg="6">
            <FavBox mygirl={TESTARRAY} />
          </Col>
          <Col xs="12" lg="6">
            <FavBox mygirl={TESTARRAY} />
          </Col>
        </Row>
      </div>
    );
};

export default Favgirls;