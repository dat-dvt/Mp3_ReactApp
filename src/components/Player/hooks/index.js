import { PlayerContext } from '../PlayerStore';
import { useContext } from 'react';

export const usePlayerStore = () => {
	return useContext(PlayerContext);
};
