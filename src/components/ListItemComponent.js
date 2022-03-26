import React from "react";
import "../pages/Global.css";
import Button from "@mui/material/Button";
import { Card, Typography, Grid } from "@material-ui/core";

function ListItemComponent({ authorList, handleClick, removeFavourite }) {
  return (
    <>
      <div style={{ paddingLeft: 25 }} className="site-card-wrapper">
        <Grid container spacing={2} columns={12}>
          {authorList.map((value, index) => {
            return (
              <>
                <Grid item xs={6}>
                  <Card
                    style={{
                      height: "flex",
                      width: "540px",
                      paddingBottom: 20,
                      paddingLeft: 15,
                      paddingRight: 15,
                      paddingTop: 15,
                      borderColor: "red",
                      marginBottom: 20,
                      backgroundColor: "#e0f2f1"
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
                            style={{backgroundColor:"#26a69a"}}
                            size="small"
                          >
                            <i className="fa fa-plus"></i> Add Favorite
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
                            <i className="fa fa-plus"></i> Remove Favorite
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
              </>
            );
          })}
        </Grid>
      </div>
    </>
  );
}

export default ListItemComponent;
