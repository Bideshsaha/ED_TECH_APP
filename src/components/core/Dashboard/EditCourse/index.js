import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

import RenderSteps from '../AddCourse/RenderSteps';
import {fetchCourseDetails, getFullDetailsOfCourse } from '../../../../services/operations/courseDetailsAPI';
import {setCourse, setEditCourse} from '../../../../slices/courseSlice';

export default function EditCourse() {

    const dispatch = useDispatch();
    const {courseId} = useParams();
    const {course} = useSelector((state) => state.course);
    const [loading, setLoading] = useState(null);
    const {token} = useSelector((state) => state.auth);


    useEffect(() => {
        const populateCourseDetails = async() => {
            setLoading(true);
            const result = await getFullDetailsOfCourse(courseId, token);
            if(result?.courseDetails){
                dispatch(setEditCourse(true));
                dispatch(setCourse(result?.courseDetails));
            }
            setLoading(false);
        }
        populateCourseDetails();
    },[])


    if(loading) {
        return(
            <div className="grid flex-1 place-items-center">
                <div className="spinner"></div>
            </div>
        )
    }

  return (
    <div className='mb-14 text-3xl font-medium text-richblack-5'>
        <h1>Edit Course</h1>
        <div className="mx-auto max-w-[600px]">
            {
                course ? (<RenderSteps/>) : (
                <p className="mt-14 text-center text-3xl font-semibold text-richblack-100">
                    Course Not Found
                </p>)
            }
        </div>

    </div>
  )
}
