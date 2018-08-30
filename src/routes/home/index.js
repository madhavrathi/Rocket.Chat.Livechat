import { h } from 'preact';

import style from './style';
import Header, {
	Title, SubTitle, Content,
} from 'components/header';
import Footer, { Container, Powered } from 'components/footer';
import Avatar from 'components/Avatar';
import Composer from 'components/Composer';

const Home = () => (
	<div class={style.container}>
		<Header>
			<Avatar /><Content>
				<Title>@bertie.barton</Title>
				<SubTitle>bla bla</SubTitle>
			</Content>
		</Header>
		<main class={style.main}>
			<ul>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
				<li><Avatar />asd</li>
			</ul>
		</main>
		<Footer>
			<Container><Composer placeholder="Insert your text here" /></Container>
			<Container><Powered /></Container>
		</Footer>
	</div>
);

export default Home;
