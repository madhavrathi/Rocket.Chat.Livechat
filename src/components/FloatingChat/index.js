import { createClassName } from '../helpers';
import styles from './styles';
import ChatButton from '../ChatButton';


export const FloatingChat = ({ minimized, onRestore, onMinimize, children }) => (
	<div className={createClassName(styles, 'floating-chat')}>
		{minimized ? null : children}
		<ChatButton open={!minimized} onClick={minimized ? onRestore : onMinimize} />
	</div>
);


export default FloatingChat;
