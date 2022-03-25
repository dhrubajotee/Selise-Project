import React, { useEffect, useState } from 'react'
import './Global.css';
import ListItemComponent from '../components/ListItemComponent';

function FavouriteAuthor() {
    
    const [favouriteAuthorList,setFavouriteAuthorList] = useState();

    const removeFavourite = (value) => {
        const id = value._id;
        let elements = JSON.parse(localStorage.getItem("favt_author"));
        //elements = elements.filter(element => element.name !== name);
        elements = elements.filter((element) => element.id !== id);
        localStorage.setItem("favt_author", JSON.stringify(elements));
      };
    

    useEffect(() => { 
        let favt_author_list = JSON.parse(localStorage.getItem("favt_author"));
        if(favt_author_list){
            let favt_author = [];
            favt_author_list.map((item,index)=>{
                favt_author.push(item.value)
            })
            setFavouriteAuthorList(favt_author);
        }
       
    },[]);

  return (
    <div className='favourite-author content'>
      <h3 style={{marginBottom:10}}>Favourite Authors</h3>
      {favouriteAuthorList?<ListItemComponent authorList={favouriteAuthorList} handleClick={null} removeFavourite={removeFavourite} /> : <></>}
    </div>
  )
}

export default FavouriteAuthor