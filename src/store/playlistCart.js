import { create } from "zustand";

export const usePlaylistCart = create((set, get) => ({
  info: {
    title: "",
    message: "",
    to: "",
  },
  track: [],
  addTrack: (newTrack) => {
    const { tracks } = get();
    const isTrackAlReadyAdded = tracks.some(
      (track) => track.id === newTrack.id
    );
    if(isTrackAlReadyAdded) return
    const newTracks = [...tracks, newTrack]
    set({track: newTracks})
  },
}));
