import ResturantCard, {openResturantCard}from "./ResturantCard";
import cards from "../utils/mockData";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faFilter } from "@fortawesome/free-solid-svg-icons";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body = () => {
//! Local State Variables - Super powerful variables

  const [listRes, setListRes] = useState([]);
  const[inputText, setInputText]=useState("");
  const [filterdList, setFilteredList] = useState([])
  //const [page, setPage] = useState(1)

  const online = useOnlineStatus()

  //! whenever state variables update, React triggers a "Reconciliation cycle (re-renders the component")
  //  console.log(Body renderd);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.5775218&lng=88.4313413&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const responseJson = await apiData.json();
    console.log(responseJson);
    
    const json =
      responseJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const json2 =
      responseJson?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(json +"AND"+json2);
    setListRes([...json,...json2]);
    setFilteredList([...json,...json2]);
    
  };

  //! Infinite Scrolling idea
  // useEffect(()=>{
  //   window.addEventListener("scroll",handelScroll)
  //   return () => window.removeEventListener("scroll",handelScroll)
  // },[])

  //  const handelScroll = async () =>{
  //   if((window.innerHeight + document.documentElement.scrollTop + 1) >= (document.documentElement.scrollHeight)){
  //     setPage((prev)=>prev+3)
  //   }
  //  }

  const OpenResturantCard = openResturantCard(ResturantCard)

  const rows = [];
  for (let i = 0; i <= 20; i++) {
    0;
    rows.push(<ShimmerUI key={i} />);
  }

  const filtering = () => {
    setFilteredList(listRes.filter((card) => card.info?.avgRating > 4.2));
  };

const resFilter = ()=>{
  console.log(inputText);
  console.log(listRes);
  // const filterResturant = listRes.filter((card)=>{
  //   return (card.info?.name?.toLowerCase().includes(inputText.toLowerCase()))
  // })

  const filterCuisine = listRes.filter((card)=>{
    return (card.info?.cuisines?.find((cui)=>(cui.toLowerCase().includes(inputText.toLowerCase()))))
  })
  //console.log(filterResturant);
  //setFilteredList(filterResturant)
  setFilteredList(filterCuisine)
}

 if (online == false) {
  return (
    <h1>OOPS!!! You are looking Offline</h1>
  )
 }

  return listRes.length === 0 ? (
    <div className="body">
      <div className="search" style={{ padding: "5px"}}>
        <div style={{ display: "inline" }}>
          <input
            type="text"
            placeholder="Search"
            style={{
              padding: "5px 10px",
              marginRight: "10px",
              width: "350px",
              height: "20px",
              borderRadius: "50px",
            }}
          />
          <button style={{ marginLeft: "10px",backgroundColor:"bisque" , border:"none" }}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "rgba(165, 42, 42, 0.877)", fontSize: "25px" }}/>
          </button>
        </div>
        <button id="btn" style={{ marginLeft: "10px" ,backgroundColor:"bisque" , border:"none" }} onClick={filtering}>
          <FontAwesomeIcon icon={faFilter} style={{ color: "rgba(165, 42, 42, 0.877)", fontSize: "30px" }}/>
        </button>
      </div>
      <div className="re-container">{rows}</div>
    </div>
  ) : (
    <div className="body">
      <div className="search" style={{ padding: "5px"}}>
        <div style={{ display: "inline" }}>
          <input
            type="text"
            placeholder="Search Dishes"
            value={inputText}
            onChange={(e)=>{setInputText(e.target.value)}}
            style={{
              padding: "5px 10px",
              marginRight: "10px",
              width: "350px",
              height: "20px",
              borderRadius: "50px",
            }}
          />
          <button style={{ marginLeft: "10px",backgroundColor:"bisque" , border:"none" }} 
          onClick={resFilter}>
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "rgba(165, 42, 42, 0.877)", fontSize: "25px" }}/>
          </button>
        </div>
        <button id="btn" style={{ marginLeft: "10px",backgroundColor:"bisque" , border:"none" }} onClick={filtering}>
          <FontAwesomeIcon icon={faFilter} style={{ color: "rgba(165, 42, 42, 0.877)", fontSize: "30px" }}/>
        </button>
      </div>
      <div className="re-container">
        {filterdList.map((card) => (
          <Link to={"/restaurant/"+card?.info?.id} key={card?.info?.id} style={{textDecoration:"none"}}>
            {(card?.info?.["availability"]?.opened === true) ? <OpenResturantCard resData={card}/> : <ResturantCard resData={card} /> }
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
