import { useEffect, useState } from "react";
import ContainerMusic from "../components/layout/containerMusic";
import { SearchIcon } from "../components/shared/Icons";
import { axiosMusic } from "../config/axios.config";
import { useUserInfo } from "../store/userInfo";
import ListTrackDefault from "../components/shared/ListTrackDefault";

const Home = () => {
  const [tracksRecomendation, setTracksRecomendation] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = e.target["home-querySearch"].value;
    if(query === "") return setSearchResults([])
    axiosMusic
      .get(`/api/tracks?limit=10&q=${query}`)
      .then(({ data }) => setSearchResults(data.tracks.items))
      .catch((err) => console.log(err));
  };

  const tracksToShow =
    searchResults.length === 0 ? tracksRecomendation : searchResults;

  useEffect(() => {
    axiosMusic
      .get("/api/tracks/recommendations?seed_genres=rock-n-roll,salsa")
      .then(({ data }) => setTracksRecomendation(data.tracks))
      .catch((err) => console.log(err));
  }, []);

  // useEffect(() => {
  //   const config = {
  //     headers: {
  //       Authorization: `JWT ${token}`
  //   }
  // }

  //   axiosMusic
  //     .get("/api/genres", config)
  //     .then(({data}) => console.log(data))
  //     .catch((err) => console.log(err))

  // }, [])

  return (
    <ContainerMusic>
      <header className="text-lg">
        <form className="bg-purple-dark p-2 rounded-md flex gap-2 items-center" 
        onSubmit={handleSubmit}>
          <button>
            <SearchIcon />
          </button>
          <input
            id="home-querySearch"
            className="bg-transparent outline-none flex-1 "
            type="text"
            placeholder="Buscar"
            size={10}
            autoComplete="off"
            
          />
          <select className="bg-transparent outline-none" name="" id="">
            <option value="10">10</option>
          </select>
        </form>
      </header>
      <section>
        <ListTrackDefault tracks={tracksToShow} />
      </section>
    </ContainerMusic>
  );
};

export default Home;
