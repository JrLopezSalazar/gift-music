import { PencilIcon } from "../shared/Icons";
import "./PopUpPlaylist.css";
import { useState } from "react";

const PopUpPlaylists = ({ isShowCurrentPlaylist }) => {
  const [isShowSideA, setIsShowSideA] = useState(true);

  const handleSubmit = (e) => {
    
    e.preventDefault()
  };
  return (
    <article
      className={`absolute w-[271.6px]  -bottom-4 translate-y-full grid transition-[right] 
    bg-purple-light p-4 rounded-lg border border-yellow-border 
     ${isShowCurrentPlaylist ? "right-4" : "-right-full"} `}
    >
      <form
        onSubmit={handleSubmit}
        id="formPlaylistCart"
        className={`relative card ${isShowSideA ? "sideA" : "sideB"}`}
        action=""
      >
        {/* Parte frontal  */}
        <div className="relative front">
          <img className="" src="/images/cassette.png" alt="" />
          <div
            className="flex items-center  bg-white absolute top-4 left-6 
        rounded-md px-2 w-[193px] "
          >
            <input
              className="text-black bg-transparent outline-none text-sm p-1 flex-1 "
              type="text"
              placeholder="title"
            />
            <label htmlFor="">
              <PencilIcon />
            </label>
          </div>
        </div>

        {/* lado B */}
        <div className="absolute top-0 back ">
          <img className="" src="/images/cassette.png" alt="" />
          <div
            className="flex items-center  bg-white absolute top-4 left-6 
        rounded-md px-2 w-[193px] "
          >
            <input
              className="text-black bg-transparent outline-none text-sm p-1 flex-1 "
              type="text"
              placeholder="Para"
              size={10}
            />
            <label htmlFor="">
              <PencilIcon />
            </label>
          </div>
          <div
            className="flex items-center  bg-white absolute top-12 left-6 
        rounded-md px-2 w-[193px] "
          >
            <textarea
              className="text-black bg-transparent outline-none text-sm p-1 flex-1 
              resize-none "
              rows={4}
              type="text"
              placeholder="Dedicatoria"
              size={10}
            />
            <label htmlFor=""></label>
          </div>
        </div>
      </form>
      <button onClick={() => setIsShowSideA(!isShowSideA)}>
        {isShowSideA ? "Lado B" : "Lado A"}
      </button>
      <section>Lista de canciones en la palylist</section>
      <button form="formPlaylistCart">Crear</button>
    </article>
  );
};

export default PopUpPlaylists;
