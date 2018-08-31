import { h } from 'preact';
import { className } from 'components/helpers';
import style from './style';

export const Action = ({ children, onClick, ...args }) =>
	(
		<button
			onClick={(e) => {
				e.preventDefault();
				return onClick && onClick(e);
			}}
			{...args}
			class={style.action}
		>{children}</button>
	);

export const Actions = ({ children }) => <div class={style.actions}>{children}</div>;

const Composer = ({ pre, post, placeholder, ...args }) => (
	<div {...args} className={className(style, 'composer', {})}>
		{ pre }
		<div placeholder={placeholder} className={className(style, 'input', {})} contenteditable />
		{ post }
	</div>);

export default Composer;
