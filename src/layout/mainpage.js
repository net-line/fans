import React from "react";
import {Col, Row} from "reactstrap";
import AllApiShort from "../components/lists/allapishort";


import DynaFilters from "../components/lists/dynafilters";
import Footer from "./footer";
//import MiddleElement from "./middleelement";
import classes from "./mainpage.module.css"

const Mainpage=(props)=>{



    return (
      <div>
        <Row className={`bg-light  ${classes.myrow}`}>
          <Col className={`bg-light  ${classes.fixme}`} xs="3" lg="2">
            <DynaFilters />
          </Col>
          <Col
            className={`${classes.middle}`}
            xs={{ size: 9, offset: 3 }}
            lg={{ size: 6, offset: 3 }}
          >
            {props.children}
          </Col>
          <Col className="bg-light d-none d-lg-block" xs="12" lg="3">
            <AllApiShort />
          </Col>
          <Col xs="12"><Footer /></Col>
        </Row>
      </div>
    );
}
export default Mainpage;