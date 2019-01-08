import { Component } from 'preact';
import { Consumer } from '../../store';
import { Screen } from './component';


export class ScreenContainer extends Component {
	handleEnableNotifications = () => {
		const { dispatch, sound = {} } = this.props;
		dispatch({ sound: { ...sound, enabled: true } });
	}

	handleDisableNotifications = () => {
		const { dispatch, sound = {} } = this.props;
		dispatch({ sound: { ...sound, enabled: false } });
	}

	render = (props) => (
		<Screen
			{...props}
			onEnableNotifications={this.handleEnableNotifications}
			onDisableNotifications={this.handleDisableNotifications}
			onMinimize={this.handleMinimize}
			onRestore={this.handleRestore}
			onOpenWindow={this.handleOpenWindow}
		/>
	)
}


export const ScreenConnector = ({ ref, ...props }) => (
	<Consumer>
		{({
			sound = {},
			dispatch = () => {},
		} = {}) => (
			<ScreenContainer
				ref={ref}
				{...props}
				notificationsEnabled={sound.enabled}
				minimized={false}
				windowed={false}
				sound={sound}
				dispatch={dispatch}
			/>
		)}
	</Consumer>
);


export default ScreenConnector;
