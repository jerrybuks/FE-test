import { withRouter } from 'react-router-dom';
import welcome from '../../assets/welcome.svg';

import WaveButton from '../../common/button/WaveButton';

const Home = withRouter((props) => <HomeComp {...props} />);

function HomeComp(props) {
	const handleClick = () => {
		props.history.push('/users');
	};
	return (
		<header className="App-header">
			<img src={welcome} className="App-logo" alt="welcome" />
			<div className="u-pd-top-large">
				<WaveButton name="view users" onClick={handleClick} />
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#FF4271"
					fill-opacity="1"
					d="M0,288L48,256C96,224,192,160,288,133.3C384,107,480,117,576,112C672,107,768,85,864,80C960,75,1056,85,1152,106.7C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
				/>
			</svg>
		</header>
	);
}
export default Home;
