import { createClassName } from '../helpers';
import styles from './styles';
import ChatIcon from '../../icons/plus.svg';
import CloseIcon from '../../icons/close.svg';


export const ChatButton = ({ open = false, ...args }) => (
	<button {...args} type="button" className={createClassName(styles, 'chat-button', { open })}>
		{open ? <CloseIcon /> : <ChatIcon />}
	</button>
);


export default ChatButton;
