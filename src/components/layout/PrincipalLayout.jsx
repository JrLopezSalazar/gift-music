import { PlaylistIcon, MinimalPlayIcon, LogoutIcon } from "../shared/Icons";
import { useUserInfo } from "../../store/userInfo";
import { Link } from "react-router-dom";
import { useState } from "react";
import PopUpPlaylist from "../playlist/PopUpPlaylist";

const PrincipalLayout = ({ children }) => {

  const [isShowAuthOptions, setIsShowAuthOptions] = useState(false)

  const [isShowCurrentPlaylist, setIsShowCurrentPlaylist] = useState(false)

  const logout = useUserInfo(state => state.logout)

  return (
    <section className="min-h-screen font-urbanist bg-bg-purple text-white 
    bg-[url(/images/bg-auth-mobile.png)] bg-no-repeat 
    bg-right-bottom sm:bg-[url(/images/bg-auth-desktop.png)] overflow-hidden ">
      <header className="flex p-2 justify-between bg-purple-dark relative">
        <h1>Gift Music</h1>
        {/* & dentro de corchetes hace heredar donde se declara */}
        <section
          className="flex gap-4 [&>button]:uppercase font-semibold
             [&>button]:border-yellow-border"
        >
          <button onClick={() => setIsShowAuthOptions(!isShowAuthOptions)}
            className="border-[1px] py-1 px-2 text-sm rounded-full 
           hover:bg-purple-light "
          >
            Mi cuenta
          </button>
          <button onClick={() => setIsShowCurrentPlaylist(!isShowCurrentPlaylist)}
            className="border-[1px] py-1 px-2 text-sm rounded-full 
                flex gap-1 hover:bg-purple-light "
          >
            < PlaylistIcon />
            <span className="hidden sm:inline">Grabando </span>1
          </button>
        </section>
        {/* Popup Auth */}
        <article className={`absolute  -bottom-4 translate-y-full grid transition-[right] 
        bg-purple-light p-4 rounded-lg border border-yellow-border 
        ${isShowAuthOptions ? "right-4" : "-right-full" } `}>
            <Link to={"/playlists"} className="flex gap-2 items-center uppercase font-semibold
            hover:text-yellow-border group"> <MinimalPlayIcon/>Mis grabaciones</Link>
            
            <button onClick={logout} className="flex gap-2 items-center uppercase font-semibold
            hover:text-yellow-border group"> <LogoutIcon/> Cerrer sesión</button>

        </article>

        <PopUpPlaylist isShowCurrentPlaylist={isShowCurrentPlaylist} />

      </header>

      <section className="flex justify-center items-center pt-10 px-4">
        {children}
      </section>
    </section>
  );
};

export default PrincipalLayout;
