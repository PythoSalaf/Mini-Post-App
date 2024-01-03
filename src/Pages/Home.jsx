import React, { useState } from "react";
import { getPost, deletePost } from "../Features/PostSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post, loading } = useSelector((state) => ({ ...state.app }));
  const fetchUserPost = () => {
    if (!id) {
      window.alert("Enter Post Id");
    } else {
      dispatch(getPost(id));
      setId("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mt-[2rem] w-full">
      <div className="w-[95%] lg:w-[90%] mx-auto flex items-center justify-center flex-col">
        <div className="mt-[2.5rem] w-full flex items-center justify-center flex-col">
          <h2 className=" text-[20px] md:text-2xl lg:text-3xl">Fetch post</h2>
          <div className="w-[90%] md:w-[80%] p-[1rem] flex flex-col justify-start items-center rounded-lg bg-white mx-auto my-6">
            {post.id && (
              <>
                <h2 className="text-xl md:text-2xl">{post.userId}</h2>
                <h4 className="capitalize text-lg md:text-xl my-2">
                  {post.title}
                </h4>
                <p className=" w-[96%] mx-auto ">{post.body}</p>

                <div className="mt-[1rem] flex items-center justify-center gap-2">
                  <button className="bg-primary px-3 py-[2px] text-base md:text-lg font-medium rounded-lg">
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deletePost(id))}
                    className="bg-red-600 px-3 py-[2px] text-base md:text-lg font-medium rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-[80%] mx-auto flex flex-col items-center justify-center"
          >
            <input
              type="number"
              placeholder="Enter Post Id......"
              onChange={(e) => setId(e.target.value)}
              value={id}
              className="w-[95%] md:w-[50%] h-[35px] md:h-[40px] rounded-lg px-2 outline-none text-base font-medium"
            />
            <div className="w-[95%] md:w-[75%] mx-auto flex flex-col md:flex-row items-center justify-center gap-5 md:gap-20 mt-[2rem] lg:mt-[3rem] ">
              <button
                onClick={fetchUserPost}
                className="w-[90%] md:w-[80%] lg:w-[50%] border px-3 py-[6px] bg-secondary text-black rounded-lg  text-base md:text-lg capitalize"
              >
                Fetch user post
              </button>
              <button
                onClick={() => navigate("createpost")}
                className="w-[90%] md:w-[80%] lg:w-[50%] border px-3 py-[6px] bg-secondary text-black rounded-lg text-base md:text-lg capitalize"
              >
                Create user post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
