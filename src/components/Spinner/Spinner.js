import React from "react";
import {HashLoader} from "react-spinners";
import {Row, Col} from "reactstrap";

export const Spinner = () => {

    return (
            <Row className="justify-content-center p-5 h-100">
                <Col xl={3}>
                    <HashLoader
                        size={60}
                        color={"#151c2b"}
                        margin={2}
                    />
                </Col>
            </Row>
    )
}