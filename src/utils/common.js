export function formatAudioTime(time) {
	let minute;
	let second;
	if (time) {
		minute = `0${Math.floor(time / 60)}`.slice(-2);
		second = `0${Math.floor(time % 60)}`.slice(-2);
	} else {
		minute = '00';
		second = '00';
	}
	return `${minute}:${second}`;
}

export function scrollToActiveSong(activeSong) {
	setTimeout(function () {
		activeSong.scrollIntoView({
			behavior: 'smooth',
			block: 'end',
		});
	}, 200);
}
