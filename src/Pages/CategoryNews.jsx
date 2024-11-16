import { useLoaderData } from "react-router-dom";
import SingleNews from "../Components/SingleNews";


const CategoryNews = () => {

    const {data:news}  = useLoaderData() ;
    // console.log(data)

    return (

        <div>
            <h2 className="font-semibold mb-6">Dragon News Home</h2>
 
            <div>
                {
                    news.map(news => <SingleNews key={news._id} news={news}></SingleNews> )
                }
            </div>
        </div>
    );
};

export default CategoryNews;