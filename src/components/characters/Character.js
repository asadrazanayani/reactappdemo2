import React, { useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import Spinner from "../ui/Spinner";
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { QueryContext } from "../../App";

function Character() {
  let setQuery = useContext(QueryContext);
  console.log(setQuery);
  function resetQuery(){
    setQuery('')
  }
  let { id } = useParams();
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters/${id}`
      );
      setData(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, []);
  if (isLoading) {
    return <Spinner/>
  } else {
  return (
    <div>
    <div className="card mb-3 position-absolute top-50 start-50 translate-middle" style={{maxWidth: 540}}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={data ? data[0].img : null} className="img-fluid rounded-start" alt={`image of ${data ? data[0].name : null}`}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{data ? data[0].name : null} aka {data ? data[0].nickname : null}</h2>
            <br></br>
            <h4 className="card-title">Date of birth: {data ? data[0].birthday : null}</h4>
            <h4 className="card-title">Status: {data ? data[0].status : null}</h4>
            <br></br>
            <h4 className="card-title">Portrayed by: {data ? data[0].portrayed : null}</h4>
          </div>
        </div>
    <Link to='/' ><button type="button" className="btn btn-success" onClick={resetQuery}>Go Back</button></Link>
      </div>
    </div>
    </div>
  );
}
}

export default Character;

// <div className="card mb-3" style={{maxwidth: 540}}>
//   <div className="row g-0">
//     <div className="col-md-4">
//       <img src={data ? data[0].img : null} class="img-fluid rounded-start" alt={`image of ${data ? data[0].name : nullptr}`}/>
//     </div>
//     <div className="col-md-8">
//       <div className="card-body">
//         <h3 className="card-title">{data ? data[0].name : null} aka {data ? data[0].nickname : null}</h3>
//         <h5 className="card-title">Status: {data ? data[0].status : null}</h5>
//       </div>
//     </div>
//   </div>
// </div>   style={{maxwidth: 540,maxHeight: 800}}