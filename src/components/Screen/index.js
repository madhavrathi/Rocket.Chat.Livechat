import { Component } from 'preact';
import Avatar from '../Avatar';
import Header from '../Header';
import Footer from '../Footer';
import StatusIndicator from '../StatusIndicator';
import { createClassName } from '../helpers';
import NotificationsEnabledIcon from '../../icons/bell.svg';
import NotificationsDisabledIcon from '../../icons/bellOff.svg';
import MinimizeIcon from '../../icons/arrowDown.svg';
import RestoreIcon from '../../icons/arrowUp.svg';
import OpenWindowIcon from '../../icons/newWindow.svg';
import styles from './styles';
import { PopoverContainer } from '../Popover';


const ScreenHeader = ({
	color,
	agent,
	title,
	notificationsEnabled,
	minimized = false,
	windowed = false,
	onDisableNotifications,
	onEnableNotifications,
	onRestore,
	onMinimize,
	onOpenWindow,
}) => (
	<Header color={color}>
		{agent && agent.avatar && (
			<Header.Picture>
				<Avatar src={agent.avatar.src} description={agent.avatar.description} />
			</Header.Picture>
		)}

		<Header.Content>
			<Header.Title>{agent ? agent.name : title}</Header.Title>
			{agent && (
				<Header.SubTitle className={createClassName(styles, 'screen__header-subtitle')}>
					<StatusIndicator status={agent.status} />
					<span>{agent.email}</span>
				</Header.SubTitle>
			)}
		</Header.Content>
		<Header.Actions>
			<Header.Action
				title={notificationsEnabled ? 'Disable notifications' : 'Enable notifications'}
				onClick={notificationsEnabled ? onDisableNotifications : onEnableNotifications}
			>
				{notificationsEnabled ?
					<NotificationsEnabledIcon width={20} /> :
					<NotificationsDisabledIcon width={20} />
				}
			</Header.Action>
			<Header.Action
				title={minimized ? 'Restore' : 'Minimize'}
				onClick={minimized ? onRestore : onMinimize}
			>
				{minimized ?
					<RestoreIcon width={20} /> :
					<MinimizeIcon width={20} />
				}
			</Header.Action>
			{!windowed && (
				<Header.Action title={'Open in a new window'} onClick={onOpenWindow}>
					<OpenWindowIcon width={20} />
				</Header.Action>
			)}
		</Header.Actions>
	</Header>
);


const ScreenFooter = ({
	minimized,
	footer,
	options,
	onChangeDepartment,
	onFinishChat,
}) => (
	!minimized ? (
		<Footer>
			{footer && (
				<Footer.Content>
					{footer}
				</Footer.Content>
			)}
			<Footer.Content>
				{options && (
					<Footer.Options onChangeDepartment={onChangeDepartment} onFinishChat={onFinishChat} />
				)}
				<Footer.PoweredBy />
			</Footer.Content>
		</Footer>
	) : null
);


export class Screen extends Component {
	triggerEnableNotifications = () => {
		const { onEnableNotifications } = this.props;
		onEnableNotifications && onEnableNotifications();
	}

	triggerDisableNotifications = () => {
		const { onDisableNotifications } = this.props;
		onDisableNotifications && onDisableNotifications();
	}

	triggerRestore = () => {
		const { onRestore } = this.props;
		onRestore && onRestore();
	}

	triggerMinimize = () => {
		const { onMinimize } = this.props;
		onMinimize && onMinimize();
	}

	triggerOpenWindow = () => {
		const { onOpenWindow } = this.props;
		onOpenWindow && onOpenWindow();
	}

	render = ({
		color,
		agent,
		title,
		notificationsEnabled,
		minimized = false,
		windowed = false,
		nopadding = false,
		children,
		footer,
		options,
		onChangeDepartment,
		onFinishChat,
		className,
	}) => (
		<PopoverContainer>
			<div className={createClassName(styles, 'screen', { rounded: !windowed }, [className])}>
				<ScreenHeader
					color={color}
					agent={agent}
					title={title}
					notificationsEnabled={notificationsEnabled}
					minimized={minimized}
					windowed={windowed}
					onDisableNotifications={this.triggerDisableNotifications}
					onEnableNotifications={this.triggerEnableNotifications}
					onRestore={this.triggerRestore}
					onMinimize={this.triggerMinimize}
					onOpenWindow={this.triggerOpenWindow}
				/>

				{!minimized && (
					<main className={createClassName(styles, 'screen__main', { nopadding })}>
						{children}
					</main>
				)}

				<ScreenFooter
					minimized={minimized}
					footer={footer}
					options={options}
					onChangeDepartment={onChangeDepartment}
					onFinishChat={onFinishChat}
				/>
			</div>
		</PopoverContainer>
	);
}


export default Screen;
