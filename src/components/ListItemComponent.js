import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "../pages/Global.css";

function ListItemComponent({ authorList, handleClick, removeFavourite }) {
  return (
    <>
      <Container>
        <Row xs={2}>
          {authorList.map((value, index) => {
            return (
              <Col >
                <Card className="custom-card">
                  <Card.Body>
                    <Card.Title>
                      <div>
                        <strong>Name : </strong> {value.name}{" "}
                        {handleClick && value.add === 1 ? (
                          <Button
                            className="success-btn"
                            onClick={(e) => handleClick(value)}
                            variant="success"
                          >
                            <i className="fa fa-plus"></i> Add Favt
                          </Button>
                        ) : (
                          <></>
                        )}
                        {removeFavourite && value.add === 0 ? (
                          <Button
                            className="danger-btn"
                            onClick={(e) => removeFavourite(value)}
                            variant="danger"
                          >
                            <i className="fa fa-plus"></i> Remove Favt
                          </Button>
                        ) : (
                          <></>
                        )}
                      </div>
                    </Card.Title>
                    <Card.Text>
                      <div>
                        <strong>Bio : </strong> {value.bio}{" "}
                      </div>
                      <div>
                        <strong>Link : </strong>{" "}
                        <a href={value.link}> {value.link}</a>{" "}
                      </div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default ListItemComponent;
