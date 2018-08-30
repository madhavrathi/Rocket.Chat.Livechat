import { h } from 'preact';
import { className } from 'components/helpers';
import style from './style';

const Typing = ({ children }) => (<div aria-label={children} class={className(style, 'loader')}><span class={className(style, 'dot')} /><span class={className(style, 'dot')} /><span class={className(style, 'dot')} /></div>);

export default Typing;
