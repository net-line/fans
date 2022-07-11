import React from "react";
import {Col, Row} from "reactstrap";

import Allgirls from "../components/lists/allgirls";
import DynaFilters from "../components/lists/dynafilters";
//import MiddleElement from "./middleelement";


const Mainpage=(props)=>{



    return (
      <div>
        <Row className="bg-dark">
          <Col className="bg-light border" xs="12" md="3">
            <DynaFilters />
          </Col>
          <Col className="bg-light border" xs="12" md="6">
            {props.children}
          </Col>
          <Col className="bg-light border" xs="12" md="3">
            <Allgirls/>
          </Col>
        </Row>
      </div>
    );
}
export default Mainpage;