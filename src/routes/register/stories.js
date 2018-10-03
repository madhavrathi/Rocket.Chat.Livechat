import { h } from 'preact';
import centered from '@storybook/addon-centered';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

import Register from '.';

const avatarDescription = 'user description';

storiesOf('Screens|Register', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('normal', () => (
		<Register />
	));
// ))
// .add('small', () => (
// 	<Avatar
// 		src={bertieBartonAvatar}
// 		small={boolean('small', true)}
// 		large={boolean('large', false)}
// 		description={text('description', avatarDescription)}
// 	/>
// ))
// .add('large', () => (
// 	<Avatar
// 		src={bertieBartonAvatar}
// 		small={boolean('small', true)}
// 		large={boolean('large', true)}
// 		description={text('description', avatarDescription)}
// 	/>
// ))
// .add('as placeholder', () => (
// 	<Avatar
// 		small={boolean('small', false)}
// 		large={boolean('large', false)}
// 		description={text('description', avatarDescription)}
// 	/>
// ));
