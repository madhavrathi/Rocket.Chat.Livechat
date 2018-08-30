import { h } from 'preact';
import { className } from 'components/helpers';
import style from './style';


const Composer = ({ pre, post, placeholder, ...args }) => (
	<div {...args} className={className(style, 'composer', {})}>
		{ pre }
		<div placeholder={placeholder} className={className(style, 'input', {})} contenteditable />
		{ post }
	</div>);

export default Composer;
