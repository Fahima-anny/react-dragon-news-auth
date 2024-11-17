import { FaRegStar } from "react-icons/fa";
import { FiBookmark, FiEye, FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";


const SingleNews = (props = {}) => {

    const {news} = props || {}

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
        <div className="card mb-10 bg-base-100 shadow-md border border-gray-200 rounded-lg">
        {/* Card Header */}
        <div className="bg-gray-100 flex items-center justify-between px-4 py-2 rounded-t-lg">
          <div className="flex items-center space-x-3">
            <img
              src={authorImage}
              alt={authorName}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <h2 className="text-sm font-medium mb-2">{authorName}</h2>
              <p className="text-xs text-gray-500">{publishedDate}</p>
            </div>
          </div>
          {/* Save and Share Icons */}
          <div className="flex space-x-3 text-gray-500">
            <FiBookmark className="w-5 h-5 cursor-pointer hover:text-gray-700" title="Save" />
            <FiShare2 className="w-5 h-5 cursor-pointer hover:text-gray-700" title="Share" />
          </div>
        </div>
  
        {/* Title */}
        <h3 className="text-lg font-semibold px-4 py-3">{title}</h3>
  
        {/* Image */}
        <img
          src={image_url}
          alt={title}
          className="w-full h-full "
        />
  
        {/* Details */}
        <div className="p-4">
          <p className="text-gray-600 text-sm mb-3">
            {details.slice(0, 100)}...{" "}
            <Link to={`/news/${news._id}`} className="text-blue-500 cursor-pointer">Read More</Link>
          </p>
  
          {/* Footer: Rating and Views */}
          <div className="flex items-center justify-between">
            <div className="flex items-center text-yellow-500">
              <FaRegStar />
              <span className="ml-1 text-sm font-medium">{ratingNumber}</span>
            </div>
            <div className="flex items-center text-gray-500">
              <FiEye />
              <span className="ml-1 text-sm">{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SingleNews;