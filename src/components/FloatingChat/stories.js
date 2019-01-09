import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import centered from '@storybook/addon-centered';
import Screen from '../Screen';
import FloatingChat from '.';


storiesOf('Components|FloatingChat', module)
	.addDecorator(centered)
	.addDecorator(withKnobs)
	.add('normal', () => (
		<FloatingChat minimized={boolean('minimized', false)} onRestore={action('restore')} onMinimize={action('minimize')}>
			<Screen />
		</FloatingChat>
	))
	.add('minimized', () => (
		<FloatingChat minimized={boolean('minimized', true)} onRestore={action('restore')} onMinimize={action('minimize')}>
			<Screen />
		</FloatingChat>
	))
;
