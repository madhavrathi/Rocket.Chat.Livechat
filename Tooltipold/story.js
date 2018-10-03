import { h } from 'preact';
import { storiesOf } from '@storybook/react';

import c from '../../../stories/helper/center';
import Tooltip from './';

storiesOf('Tooltip', module).add('test', () => c(<Tooltip title="The attendant is Tooltip">Hello</Tooltip>));
