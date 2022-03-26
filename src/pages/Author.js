import React, { useEffect, useState } from "react";
import ListItemComponent from "../components/ListItemComponent";
import "./Global.css";
import Pagination from "@material-ui/lab/Pagination";
import { Grid } from "@material-ui/core";
import axios from "axios";

function Author() {
  const [authorList, setAuthorList] = useState();
  const [fullAuthorList, setFullAuthorList] = useState();
  const [refetch, setRefetch] = useState(false);

  const getAuthorList = async () => {
    localStorage.setItem(`currentPage`, JSON.stringify(1));
    axios
      .get(
        `https://api.quotable.io/authors`
      )
      .then((response) =>{
        let result = response.data.results;
        setFullAuthorList(result);
      });

    const url = "https://api.quotable.io/authors?limit=10";
    const response = await fetch(url);
    const response_json = await response.json();
    const result = response_json.results;

    const final_data = result.map((value, index) => {
      return (value.add = 1);
    });

    let favt_author_list = JSON.parse(localStorage.getItem("favt_author"));

    if (favt_author_list) {
      let match_result = result.filter(function (o1) {
        return favt_author_list.some(function (o2) {
          if (o1._id === o2.value._id) {
            return (o1.add = 0);
          }
        });
      });
      setAuthorList(result);
    } else {
      setAuthorList(result);
    }
  };

  const handleClick = (value) => {
    const id = value._id;
    let favt_author_list = JSON.parse(localStorage.getItem("favt_author"));
    if (favt_author_list) {
      favt_author_list.push({
        id: id,
        value: value,
      });
      localStorage.setItem(`favt_author`, JSON.stringify(favt_author_list));
    } else {
      let favrt_author_array = [];
      favrt_author_array.push({
        id: id,
        value: value,
      });
      localStorage.setItem(`favt_author`, JSON.stringify(favrt_author_array));
    }
    setRefetch(!refetch);
  };

  const removeFavourite = (value) => {
    const id = value._id;
    let elements = JSON.parse(localStorage.getItem("favt_author"));
    elements = elements.filter((element) => element.id !== id);
    localStorage.setItem("favt_author", JSON.stringify(elements));
    setRefetch(!refetch);
  };

  const handlePageChange = (e,pageNumber) => {
    localStorage.setItem(`currentPage`, JSON.stringify(pageNumber));
    let skip = parseInt(pageNumber - 1)*10;
    localStorage.setItem(`currentPage`, pageNumber);
    axios
      .get(
        `https://api.quotable.io/authors?limit=10&skip=${skip}`
      )
      .then((response) =>{
        let result = response.data.results;
        let final_data = result.map((value, index) => {
          return (value.add = 1);
        });
    
        let favt_author_list = JSON.parse(localStorage.getItem("favt_author"));
    
        if (favt_author_list) {
          let match_result = result.filter(function (o1) {
            return favt_author_list.some(function (o2) {
              if (o1._id === o2.value._id) {
                return (o1.add = 0);
              }
            });
          });
          setAuthorList(result);
        } else {
          setAuthorList(result);
        }
      }
      );
  };


  useEffect(() => {
    getAuthorList();
  }, []);

  useEffect((e) => {
    let currentPage = JSON.parse(localStorage.getItem("currentPage"));
    handlePageChange(e,currentPage);
  }, [refetch]);


  return (
    <div className="author content">
      <h1 style={{ marginBottom: 10, textAlign:"center", padding:12 }}>Authors</h1>
      {fullAuthorList && authorList ? (
        <>
          <ListItemComponent
            authorList={authorList}
            handleClick={handleClick}
            removeFavourite={removeFavourite}
          />
          <Grid item sm={12}>
            <Pagination
              count={Math.ceil(fullAuthorList.length / 10)}
              variant="outlined"
              shape="rounded"
              onChange={(e,pageNumber) => handlePageChange(e,pageNumber)}
              size="large"
              style={{paddingBottom:30}}
              color="primary"
            />
          </Grid>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default Author;
