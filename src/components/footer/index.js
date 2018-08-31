import { h } from 'preact';
import style from './style';
import Logo from './logo.svg';
export const Container = ({ children }) => <div class={style.container}>{children}</div>;

const Footer = ({ children }) => (
	<footer class={style.footer}>
		{children}
	</footer>
);

export const Powered = () => <h3 class={style.powered}>Powered by <Logo title="Rocket.Chat" class={style.logo} width="60" /></h3>;
export default Footer;
