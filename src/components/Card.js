import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const Card = (props) => {
  let course = props.course;
  const [likedCourses, setLikedCourses] = useState([]);

  function clickHandler() {
    if(likedCourses.includes(course.id)) {
        //pehle se like hua pada tha
        setLikedCourses( (prev) => prev.filter((cid)=> (cid !== course.id) )  );
        toast.warning("like removed");
    }
    else {
        //pehle se like nahi hai ye course
        //insert karna h ye course liked courses me 
        if(likedCourses.length === 0 ) {
            setLikedCourses([course.id]);
        }
        else {
            //non-empty pehle se
            setLikedCourses((prev) => [...prev, course.id]);
        }
        toast.success("Liked Successfully");
    }
  }
  return (
    <div>
      <div>
        <img src={course.image.url} alt="" />
        <div>
          <button onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (
              <FcLike fontSize="1.75rem" />
            ) : (
              <FcLikePlaceholder fontSize="1.75rem" />
            )}
          </button>
        </div>
      </div>
      <div>
        <p>{course.title}</p>
        <p>
          {course.description.length > 100
            ? course.description.substr(0, 100) + "..."
            : course.description}
        </p>
      </div>
    </div>
  );
};

export default Card;
