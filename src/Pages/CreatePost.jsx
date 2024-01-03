import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../Features/PostSlice";
import { useDispatch } from "react-redux";

const CreatePost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [value, setValue] = useState({ title: "", body: "" });
  const [showPost, setShowPost] = useState(false);
  const { body, title } = value;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(value));
    setValue({ title: "", body: "" });
    setShowPost(true);
  };

  return (
    <div className="mt-[4rem] w-full flex items-center justify-center flex-col">
      <h1>CreatePost</h1>
      <form
        onSubmit={handleSubmit}
        className="w-[90%] md:w-[80%] mx-auto flex flex-col items-center justify-center"
      >
        <input
          className="w-[75%] md:w-[40%] h-[30px] md:h-[45px] my-4 rounded-lg outline-none px-2"
          type="text"
          placeholder="Enter Your Title........."
          onChange={(e) => setValue({ ...value, title: e.target.value })}
          value={title}
        />
        <br />
        <br />
        <textarea
          placeholder="Enter Your Body.........."
          onChange={(e) => setValue({ ...value, body: e.target.value })}
          value={body}
          className="w-[75%] md:w-[40%] h-14 outline-none md:h-24 resize-none rounded-lg p-2"
        />
        <div className="w-full flex items-center justify-center gap-6 mt-8">
          <button
            onClick={() => navigate("/")}
            className="bg-secondary rounded-lg font-semibold capitalize px-8 py-[3px] border border-black "
          >
            go back
          </button>
          <button
            type="submit"
            className="bg-secondary rounded-lg font-semibold capitalize px-8 py-[3px] border border-black"
          >
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
