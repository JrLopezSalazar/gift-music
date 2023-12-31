import { useEffect, useState } from "react";
import ContainerMusic from "../components/layout/containerMusic";
import { Link, useParams } from "react-router-dom";
import { axiosMusic } from "../config/axios.config";
import SlideAlbums from "../components/shared/SlideAlbums";
import ListTrackDefault from "../components/shared/ListTrackDefault";

const ArtistsDetail = () => {
  const [artist, setArtist] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    axiosMusic
      .get(`/api/artists/${id}`)
      .then(({ data }) => setArtist(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <ContainerMusic>
      <Link to={-1} className="mb-4 block hover:text-yellow-border transition-colors">
        {"<"} Atras
        </Link> 
      <header className="grid gap-4 sm:grid-cols-2 sm:items-center  ">
        <div className="rounded-xl overflow-hidden sm:rounded-full sm:w-full sm:aspect-square">
          <img
            className="w-full h-full object-cover"
            src={artist?.images[1].url}
            alt=""
          />
        </div>
        <section>
          <h2 className="text-xl font-semibold line-clamp-1 ">
            {artist?.name}
          </h2>
          <ul>
            <li className="font-light">
              <span className="font-semibold">Seguidores</span>
              {artist?.followers.total}
            </li>
            <li className="font-light">
              <span className="font-semibold">Popularidad</span>
              {artist?.popularity}{" "}
            </li>
          </ul>
          <h4>Generos</h4>
          <ul className="flex flex-wrap gap-2 mt-2">
            {artist?.genres.slice(0, 4).map((genre) => (
              <li
                className="border border-purple-500 p-1 px-3 rounded-full"
                key={genre}
              >
                {genre}
              </li>
            ))}
          </ul>
        </section>
      </header>
      <section className="mt-4">
        <h3 className="text-xl font-semibold">Otros discos del artistas</h3>
        <SlideAlbums albums={artist?.albums ?? []} />
      </section>
      <section className="mt-4">
        <h3 className="text-xl font-semibold">Las mas sonadas</h3>
        <ListTrackDefault tracks={artist?.songsTop ?? []} />
      </section>
    </ContainerMusic>
  );
};

export default ArtistsDetail;
