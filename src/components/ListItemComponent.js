import React, { useEffect, useState } from "react";
import "../pages/Global.css";
import Button from "@mui/material/Button";
import { Col, Row } from "antd";
import { Card, Typography, Grid } from "@material-ui/core";
import { red } from "@mui/material/colors";

function ListItemComponent({ authorList, handleClick, removeFavourite }) {
  return (
    <>
      {/* <Row xs={2}>
          <Card variant="outlined">{card}</Card>
        </Row> */}

      <div style={{ paddingLeft: 25 }} className="site-card-wrapper">
        <Row gutter={16}>
          {authorList.map((value, index) => {
            return (
              <>
                {/* <Card
                  style={{
                    height: "240px",
                    width: "50%",
                    paddingBottom: 20,
                    paddingLeft: 15,
                    paddingRight: 15,
                    paddingTop: 15,
                    borderColor: "red",
                    marginBottom:20
                  }}
                >
                  <Typography sx={{ fontSize: 14 }} variant="div" gutterBottom>
                    <div style={{paddingBottom:20}}>
                      <strong>Name : </strong> {value.name}{" "}
                      {handleClick && value.add === 1 ? (
                        <Button
                          className="success-btn"
                          onClick={(e) => handleClick(value)}
                          variant="contained"
                          color="success"
                          size="small"
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
                          variant="contained"
                          color="error"
                          size="small"
                        >
                          <i className="fa fa-plus"></i> Remove Favt
                        </Button>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Typography>
                  <Typography sx={{ fontSize: 14 }} component="div">
                    <div style={{paddingBottom:10}}>
                      <strong>Bio : </strong> {value.bio}{" "}
                    </div>
                  </Typography>
                  <Typography sx={{ mb: 1.5 }}>
                    <div>
                      <strong>Link : </strong>{" "}
                      <a href={value.link}> {value.link}</a>{" "}
                    </div>
                  </Typography>
                </Card> */}
                <Grid container spacing={2} columns={16}>
                  <Grid item xs={8}>
                    <Card
                      style={{
                        height: "240px",
                        width: "540px",
                        paddingBottom: 20,
                        paddingLeft: 15,
                        paddingRight: 15,
                        paddingTop: 15,
                        borderColor: "red",
                        marginBottom: 20,
                      }}
                    >
                      <Typography
                        sx={{ fontSize: 14 }}
                        variant="div"
                        gutterBottom
                      >
                        <div style={{ paddingBottom: 20 }}>
                          <strong>Name : </strong> {value.name}{" "}
                          {handleClick && value.add === 1 ? (
                            <Button
                              className="success-btn"
                              onClick={(e) => handleClick(value)}
                              variant="contained"
                              color="success"
                              size="small"
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
                              variant="contained"
                              color="error"
                              size="small"
                            >
                              <i className="fa fa-plus"></i> Remove Favt
                            </Button>
                          ) : (
                            <></>
                          )}
                        </div>
                      </Typography>
                      <Typography sx={{ fontSize: 14 }} component="div">
                        <div style={{ paddingBottom: 10 }}>
                          <strong>Bio : </strong> {value.bio}{" "}
                        </div>
                      </Typography>
                      <Typography sx={{ mb: 1.5 }}>
                        <div>
                          <strong>Link : </strong>{" "}
                          <a href={value.link}> {value.link}</a>{" "}
                        </div>
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Row>
      </div>
    </>
  );
}

export default ListItemComponent;
