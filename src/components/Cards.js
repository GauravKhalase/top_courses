import React from "react";
import Card from "./Card";

const Cards = (props) => {
  let courses = props.courses;
  let category = props.category;
  
  function getCourses() {

    if(category === "All") {
      let allCourses = [];
      Object.values(courses).forEach(array => {
          array.forEach(courseData => {
              allCourses.push(courseData);
          })
      })
      return allCourses;
  }
  else {
    return courses[category];
}
    
  }
  return (
    <div>
      {
        getCourses().map((course)=>{
          return <Card 
          key={course.id}
          course={course}
          ></Card>

        })
      }
    </div>
  )
  
};

export default Cards;
