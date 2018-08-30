import { h } from 'preact';
import { className } from 'components/helpers';
import style from './style';

const Avatar = ({ small, large, src, description, ...args }) => (
	<div aria-label="User picture" {...args} className={className(style, 'wrapper', { small, large })}>
		{src && <img alt={description} className={className(style, 'image', { small, large })} src={src} />}
	</div>);

export default Avatar;
