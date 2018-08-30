import { h } from 'preact';
import { className } from 'components/helpers';
import style from './style';

const Button = ({ children, disabled, outline, danger, stack, small, ...args }) => (
	<button {...args} disabled={disabled} className={className(style, 'button', {
		disabled,
		outline,
		danger,
		stack,
		small,
	})}
	>{children}</button>
);

export default Button;

export const Group = ({ children }) => <div className={style.group}>{ children }</div>;
