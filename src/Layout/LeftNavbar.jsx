import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNavbar = () => {

const [data, setData] = useState([]) ;

useEffect( () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(data => setData(data.data.news_category))
} , [])
console.log(data)
    return (
        <div>
         <h2 className="font-semibold mb-6">All Category</h2>
        <div className="flex flex-col gap-3">
        {
            data.map(category => <NavLink 
                to={`/category/${category.category_id}`}
                 key={category.category_id}
                 className="btn"
                 >{category.category_name}</NavLink >)
         }
        </div>
        </div>
    );
};

export default LeftNavbar;