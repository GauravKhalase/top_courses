import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Loader from "./components/Loader";
import { filterData, apiUrl } from "./data";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState([]);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      console.log(output);
    } catch {
      toast.error("Network failed!");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-800">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen bg-gray-700">
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          ></Filter>
        </div>
        <div className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
          {loading ? (
            <Loader />
          ) : (
            <Cards courses={courses} category={category} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
