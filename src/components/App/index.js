import { Component } from 'preact';
import { Router } from 'preact-router';
import Chat from '../../routes/Chat';
import LeaveMessage from '../../routes/LeaveMessage';
import Register from '../../routes/Register';
import { Provider as StoreProvider, Consumer as StoreConsumer } from '../../store';
import { loadConfig } from '../../lib/main';
import CustomFields from '../../lib/customFields';
import Triggers from '../../lib/triggers';
import FloatingChat from '../FloatingChat';


export class App extends Component {

	state = { initialized: false }

	handleRoute = () => {}

	handleTriggers() {
		const { config: { online, enabled } } = this.props;

		Triggers.enabled = online && enabled;

		if (online && enabled) {
			Triggers.init();
		}
	}

	async initialize() {
		await loadConfig();
		this.handleTriggers();
		CustomFields.init();
		this.setState({ initialized: true });
	}

	async finalize() {
		CustomFields.reset();
	}

	handleMinimize = () => {
		const { dispatch } = this.props;
		dispatch({ minimized: true });
	}

	handleRestore = () => {
		const { dispatch } = this.props;
		dispatch({ minimized: false });
	}

	handleEnableNotifications = () => {
		const { dispatch, sound = {} } = this.props;
		dispatch({ sound: { ...sound, enabled: true } });
	}

	handleDisableNotifications = () => {
		const { dispatch, sound = {} } = this.props;
		dispatch({ sound: { ...sound, enabled: false } });
	}

	componentDidMount() {
		this.initialize();
	}

	componentWillUnmount() {
		this.finalize();
	}

	renderScreen = ({
		config: {
			settings: {
				registrationForm,
				nameFieldRegistrationForm,
				emailFieldRegistrationForm,
			},
			online,
		},
		minimized,
		notificationsEnabled,
		triggered,
		user,
	}) => {
		const screenProps = {
			notificationsEnabled,
			onEnableNotifications: this.handleEnableNotifications,
			onDisableNotifications: this.handleDisableNotifications,
			minimized,
			onMinimize: this.handleMinimize,
			onRestore: this.handleRestore,
		};

		if (!online) {
			return <LeaveMessage default path="/LeaveMessage" {...screenProps} />;
		}

		const showRegistrationForm = registrationForm && (nameFieldRegistrationForm || emailFieldRegistrationForm);
		if ((user && user.token) || !showRegistrationForm || triggered) {
			return <Chat default path="/home" {...screenProps} />;
		}

		return <Register default path="/register" {...screenProps} />;
	}

	render = ({ minimized }, { initialized = false }) => (
		initialized ? (
			<FloatingChat minimized={minimized} onMinimize={this.handleMinimize} onRestore={this.handleRestore}>
				<Router onChange={this.handleRoute}>
					{this.renderScreen(this.props, this.state)}
				</Router>
			</FloatingChat>
		) : null
	)
}


const AppConnector = () => (
	<StoreProvider>
		<div id="app">
			<StoreConsumer>
				{({
					config,
					minimized = false,
					sound = {},
					triggered,
					user,
					windowed = false,
					dispatch,
				}) => (
					<App
						config={config}
						notificationsEnabled={sound.enabled}
						minimized={minimized}
						windowed={windowed}
						sound={sound}
						triggered={triggered}
						user={user}
						dispatch={dispatch}
					/>
				)}
			</StoreConsumer>
		</div>
	</StoreProvider>
);


export default AppConnector;
