import React from "react";
import {Col, Row} from "reactstrap";

import Allgirls from "../components/lists/allgirls";
import DynaFilters from "../components/lists/dynafilters";
//import MiddleElement from "./middleelement";
import classes from "./mainpage.module.css"

const Mainpage=(props)=>{



    return (
      <div>
        <Row className="bg-dark">
          <Col className={`bg-light border ${classes.fixme}`} xs="3" lg="2">
            <DynaFilters />
          </Col>
          <Col
            className="bg-light border"
            xs={{ size: 9, offset: 3 }}
            lg={{ size: 6, offset: 3 }}
          >
            {props.children}
          </Col>
          <Col className="bg-light border d-none d-lg-block" xs="12" lg="3">
            <Allgirls />
          </Col>
        </Row>
      </div>
    );
}
export default Mainpage;