export function getRandomIndex(listSong, currentIndex, randomIndexArray) {
	let newIndex;

	do {
		newIndex = Math.floor(Math.random() * listSong.length);
	} while (
		newIndex === currentIndex ||
		randomIndexArray.current.includes(newIndex)
	);
	randomIndexArray.current.push(newIndex);
	if (randomIndexArray.current.length === listSong.length) {
		randomIndexArray.current = [];
	}
	return newIndex;
}

export function getNewIndex(listSong, currentIndex, direction) {
	let newSongIndex;
	if (direction === 'next') {
		newSongIndex = currentIndex + 1 >= listSong.length ? 0 : currentIndex + 1;
	} else {
		newSongIndex =
			currentIndex - 1 < 0 ? listSong.length - 1 : currentIndex - 1;
	}

	return newSongIndex;
}
