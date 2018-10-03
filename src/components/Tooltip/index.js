import { h, Component } from 'preact';
import TooltipJs from 'tooltip.js';
import render from 'preact-render-to-string';

import styles from './styles';
import { createClassName } from '../helpers';

const Tooltip = ({ hidden = false, placement, ...props }) => (
	<div className={createClassName(styles, 'tooltip', { hidden, placement })} {...props}>
		<div className="tooltip__inner" />
		<div className={createClassName(styles, 'tooltip--placement', { hidden, placement })} />
	</div>
);


export default class T extends Component {
	ref = (ref) => {
		this.el = ref;
	}
	componentDidMount() {
		const { children, placement, ...args } = this.props;
		new TooltipJs(this.base, { arrowSelector: styles['tooltip--placement'], placement, title: children[0], template: render(<Tooltip placement={placement} {...args} />) });
	}
	render({ children }) {
		const [el] = children;
		if (typeof el === typeof '') {
			return <span>{el}</span>;
		}
		return el;
	}
}
