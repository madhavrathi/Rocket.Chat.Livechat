import { h, Component } from 'preact';
import TooltipJs from 'tooltip.js';
import './style';


class Tooltip extends Component {
	ref = (ref) => {
		this.el = ref;
	}
	componentDidMount() {
		const { title } = this.props;
		new TooltipJs(this.base, { title });
	}
	render({ children }) {
		const [el] = children;
		if (typeof el === typeof '') {
			return <span>el</span>;
		}
		return el;
	}
}

export default Tooltip;
