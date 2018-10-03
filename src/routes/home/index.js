import { h } from 'preact';

import style from './style';
import Header, {
	Title, SubTitle, Content,
} from 'components/header';
import Footer, { Container, Powered } from 'components/footer';
import Avatar from 'components/Avatar';
import Composer, { Action, Actions } from 'components/composer';


import Smile from 'icons/smile.svg';
import Plus from 'icons/plus.svg';

// import Smile from 'icons/smile';
// import Plus from 'icons/plus';

const renderRow = (row) => <li class={style.item}><Avatar />{row}</li>;
const data = ['a', 'b', 'c', 'd', 'e'];
const Home = () => (
	<div class={style.container}>
		<Header>
			<Avatar /><Content>
				<Title>@bertie.barton</Title>
				<SubTitle>bla bla</SubTitle>
			</Content>
		</Header>
		<main class={style.main}>
			<ol>{data.map(renderRow)}</ol>
		</main>
		<Footer>
			<Container><Composer
				pre={
					<Actions>
						<Action>
							<Smile width="20" />
						</Action>
					</Actions>
				}
				post={
					<Actions>
						<Action>
							<Plus width="20" />
						</Action>
					</Actions>
				}
				placeholder="insert your text here"
			           /></Container>
			<Container><Powered /></Container>
		</Footer>
	</div>
);

export default Home;
