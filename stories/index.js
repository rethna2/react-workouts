import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';

import DragAndDropPuzzle from '../recipes/dnd/DragAndDropPuzzle';
import Ref from '../recipes/core/Ref';


storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>);


storiesOf('Core', module)
  .add('Ref', () => <Ref />);


storiesOf('DragAndDrop', module)
  .add('DragAndDropPuzzle', () => <DragAndDropPuzzle />);
