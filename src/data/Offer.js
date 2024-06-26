import { Link } from "react-router-dom";
import target from "../images/target.jpeg";
import bartaco from "../images/bartaco.jpeg";


const here = [
    {
      id: 1,
      logo: target,
      card: "Target",
      location: "Target locations",
      expiration: "12/31/2024",
      value: "$20",
      conditions: "In store and online",
      type: "Digital",
      scan: "In store and online",
    },
    {
        id: 2,
        card: bartaco,
        location: "Ballston",
        expiration: "Never Expires",
        value: "$10",
        conditions: "In store only",
        type: "Physical",
        scan: "In store and online",
      },
    
    {
        id: 3,
        card: "Bronsons",
        location: "Ballston",
        expiration: "Never Expires",
        value: "$10",
        conditions: "In store only",
        type: "Physical",
        scan: "In store and online",
    },
    {
        id: 4,
        card: "Nordstrom Rack",
        location: "All locations",
        expiration: "Never Expires",
        value: "N/A",
        conditions: "In store only",
        type: "Physical",
        scan: "In store and online",
    },
    {
        id: 5,
        card: "Homedepot",
        location: "Ballston",
        expiration: "Never Expires",
        value: "$10",
        conditions: "In store only",
        type: "Physical",
        scan: "In store and online",
    },
    {
        id: 6,
        card: "Nicecream",
        location: "Clarendon",
        expiration: "Never Expires",
        value: "1 Free icecream",
        conditions: "In store only",
        type: "Physical",
        scan: "In store and online",
    },
  ];
  
  export default here;