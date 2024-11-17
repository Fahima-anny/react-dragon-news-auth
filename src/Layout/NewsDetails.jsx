import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightNavbar from "./RightNavbar";


const NewsDetails = () => {

const data = useLoaderData() 
const news = data.data[0] ;
console.log(news)

const {
    author: { name: authorName, img: authorImage, published_date: publishedDate },
title,
image_url,
details,
rating: { number: ratingNumber },
total_view,

  } = news;

    return (
        <div>
          <header>
            <Header></Header>
          </header>
          <main className="w-11/12 mx-auto py-4 grid grid-cols-4 gap-16">
            <div className="col-span-3">
            <h2 className="font-bold mb-6 text-xl">Dragon News Home</h2>

{/* news details  */}
<div className="card card-compact">
  <figure className="">
    <img
    className="rounded-md w-full"
      src={image_url}
      alt="Shoes" />
  </figure>
  <div className="card-body p-0">
    <h2 className="card-title text-2xl font-bold pt-5">{title}</h2>
    <p className="text-gray-600 py-5">{details}</p>
    <div className="card-actions ">
<Link to={`/category/${news?.category_id}`}className="btn text-white w-1/2  bg-rose-600">Go Back</Link>
    </div>
  </div>
</div>

            </div>
<RightNavbar></RightNavbar>
            <div>

            </div>
          </main>
        </div>
    );
};

export default NewsDetails;