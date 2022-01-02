import clsx from 'clsx';
import GlobalStyles from 'components/AppGlobalStyles';
import Container from 'components/Container';
import Header from 'components/Header';
import Player from 'components/Player';
import Sidebar from 'components/Sidebar';
import { confirmFirstLoading } from 'configSlice';
import LoadingPage from 'features/LoadingPage';
import ThemeModal from 'features/ThemeModal';
import Toast from 'features/Toast';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { currentThemeSelector } from 'selectors/themeSelector';
import { applyTheme } from 'utils/theme';

function App() {
	const dispatch = useDispatch();
	const currentTheme = useSelector(currentThemeSelector);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		applyTheme(currentTheme.colors);
	}, [currentTheme]);

	useEffect(() => {
		dispatch(confirmFirstLoading());
		// eslint-disable-next-line
	}, []);

	useEffect(() => {
		window.addEventListener('load', () => {
			setLoading(false);
		});
	}, []);

	return (
		<GlobalStyles>
			{loading && <LoadingPage />}

			<div
				className={clsx('app', 'grid', {
					'has__theme-img': !!currentTheme.image,
				})}
				style={{
					backgroundImage: currentTheme.image ? `url("${currentTheme.image}")` : 'none',
				}}
			>
				<Header />
				<Sidebar />
				<Container />
				<Player />
				<ThemeModal />
				<Toast />
			</div>
		</GlobalStyles>
	);
}

export default App;
