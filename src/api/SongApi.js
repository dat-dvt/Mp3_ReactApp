// Import axios instance
// import axiosClient from './axiosClient'
// But in this app, we don't have Api so this is a demo

import { MUSIC_STORAGE_KEY } from 'constants/index';

const songApi = {
  getAll() {
    // As usual, we create url and call Api use method get
    return JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY)) || [];
  },
  getCurrentPlaylist(id) {
    const listPlaylist = JSON.parse(localStorage.getItem(MUSIC_STORAGE_KEY)) || [];

    return listPlaylist?.[id];
  },
};

export default songApi;
