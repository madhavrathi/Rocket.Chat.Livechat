import { h } from 'preact';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import c from '../../../stories/helper/center';
import Composer, { Action, Actions } from './';

import Smile from 'icons/smile';
import Plus from 'icons/plus';
storiesOf('Composer', module).add('static composer', () => c(<Composer placeholder="insert your text here" onInput={action('input')} />));
storiesOf('Composer', module).add('large placeholder', () => c(<Composer placeholder="insert your text here large large large large large large large large large large large large large large large" onInput={action('input')} />));

storiesOf('Composer', module).add('composer with actions', () => c(
	<Composer
		pre={
			<Actions>
				<Action onClick={action('clicked')}>
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
		onInput={action('input')}
	/>));
