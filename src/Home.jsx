import React, { useState, useContext } from "react";
import { RouteContext } from "./Context";
import { Link } from "react-router-dom";

const Home = () => {
  const [route, setRoute] = useState("");
  const { url, setUrl } = useContext(RouteContext);

  const handleSubmit = async (e) => {
    await e.preventDefault();
    setUrl((arr) => [...arr, route]);
    const str = url.toString().split(",");
    console.log("urlOne: " + str);
    setRoute("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="flex h-96 w-[40rem] flex-col items-center rounded-md border-2 border-black">
        <form onSubmit={handleSubmit} autoComplete="off" action="">
          <div className="mt-4 flex w-full items-center justify-center">
            <input
              type="text"
              name=""
              placeholder="Type a route..."
              className="mr-2 border-2 px-4 py-2"
              onChange={(e) => setRoute(e.target.value)}
              value={route}
            />
            <button
              type="submit"
              className="border-2 border-black p-2 hover:bg-gray-200"
            >
              Add a new route
            </button>
          </div>
        </form>
        <div className="mt-4 grid h-3/4 w-11/12 grid-cols-6 grid-rows-6 content-center gap-2 ">
          {url.map((item) => {
            return (
              <div
                key={item}
                className="flex w-20 items-center justify-center rounded-md border-2"
              >
                <Link to={`/${item}`} state={{ item }}>
                  {item}
                </Link>
              </div>
            );
          })}
          {console.log("urlTwo: " + url)}
        </div>
      </div>
    </div>
  );
};

export default Home;
