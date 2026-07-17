import React, {useState, useEffect} from 'react'
import RatingStarts from '../../common/RatingStars'
import { Link } from 'react-router-dom'
import GetAvgRating from '../../../utils/avgRating'
import { FaRegStar, FaStar } from "react-icons/fa"


const Course_Card = ({course, Height}) => {

    // console.log("the course: ",course);

    const [avgReviewCount, setAvgReviewCount] = useState(0);
    useEffect(() => {
        const count = GetAvgRating(course.ratingAndReviews);
        setAvgReviewCount(count);
    },[course])

  return (
    <>
        <Link to={`/course/${course._id}`}>
            <div className=''>
                <div className="rounded-lg">
                    <img src={course?.thumbnail}
                    alt='course thumbnail'
                    className={`${Height} w-full rounded-xl object-cover`}
                    />
                </div>
                <div className="flex flex-col gap-2 px-1 py-3">
                    <p className="text-xl text-richblack-5">{course?.courseName}</p>
                    <p className="text-sm text-richblack-50">{course?.instructor?.firstName} {course?.instructor?.lastName}</p>
                    <div className="flex items-center gap-2">
                        <span className="text-yellow-5">{avgReviewCount || 0}</span>
                        <RatingStarts Review_Count={avgReviewCount}/>
                        <span>{course?.ratingAndReviews?.length} Ratings</span>
                    </div>
                </div>
                <p className="text-xl text-richblack-5">Rs. {course?.price}</p>
            </div>
        </Link>
    </>
  )
}

export default Course_Card
