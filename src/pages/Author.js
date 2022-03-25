import React, { useEffect, useState } from "react";
import ListItemComponent from "../components/ListItemComponent";
import "./Global.css";

function Author() {
  const [authorList, setAuthorList] = useState();

  const getAuthorList = async () => {
    const url = "https://api.quotable.io/authors";
    const response = await fetch(url);
    const response_json = await response.json();
    const result = response_json.results;

    const final_data = result.map((value,index)=>{
      return value.add = 1
    });

    let favt_author_list = JSON.parse(localStorage.getItem("favt_author"));
    

    if(favt_author_list){
      var match_result = result.filter(function (o1) {
        return favt_author_list.some(function (o2) {
          if (o1._id === o2.value._id) {
            return (o1.add = 0);
          }
        });
      });
      setAuthorList(result);
    }
    else{
      setAuthorList(result);
    }
  
    
  };

  const handleClick = (value) => {
    const id = value._id;
    let favt_author_list = JSON.parse(localStorage.getItem("favt_author"));
    if (favt_author_list) {
      //favt_author_list.push(value);
      favt_author_list.push({
        id: id,
        value: value,
      });
      localStorage.setItem(`favt_author`, JSON.stringify(favt_author_list));
    } else {
      let favrt_author_array = [];
      //favrt_author_array[id] = value;
      favrt_author_array.push({
        id: id,
        value: value,
      });
      localStorage.setItem(`favt_author`, JSON.stringify(favrt_author_array));
    }
  };

  const removeFavourite = (value) => {
    const id = value._id;
    let elements = JSON.parse(localStorage.getItem("favt_author"));
    //elements = elements.filter(element => element.name !== name);
    elements = elements.filter((element) => element.id !== id);
    localStorage.setItem("favt_author", JSON.stringify(elements));
  };

  useEffect(() => {
    getAuthorList();
  }, []);

  // useEffect(() => {
  //   getAuthorList();
  // }, [handleClick,removeFavourite]);

  return (
    <div className="author content">
      <h3 style={{ marginBottom: 10 }}>Authors</h3>
      {authorList ? (
        <ListItemComponent
          authorList={authorList}
          handleClick={handleClick}
          removeFavourite={removeFavourite}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Author;
