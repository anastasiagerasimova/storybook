import React from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';

import { MyButton } from './MyButton';

export default {
  title: 'Button',
  component: MyButton,
};

export const Basic = (args) => <MyButton {...args} />;
Basic.args = { children: 'Label' };

// export const All = () => (
//   <>
//     <Button appearance="primary">Primary</Button>
//     <Button appearance="secondary">Secondary</Button>
//     <Button appearance="tertiary">Tertiary</Button>
//     <Button appearance="outline">Outline</Button>
//     <Button appearance="primaryOutline">Outline primary</Button>
//     <Button appearance="secondaryOutline">Outline secondary</Button>
//     <div style={{ background: 'grey', display: 'inline-block' }}>
//       <Button appearance="inversePrimary">Primary inverse</Button>
//     </div>
//     <div style={{ background: 'grey', display: 'inline-block' }}>
//       <Button appearance="inverseSecondary">Secondary inverse</Button>
//     </div>
//     <div style={{ background: 'grey', display: 'inline-block' }}>
//       <Button appearance="inverseOutline">Outline inverse</Button>
//     </div>
//   </>
// );

export const Sizes = () => (
  <>
    <MyButton appearance="primary">Default</MyButton>
    <MyButton appearance="primary" size="small">
      Small
    </MyButton>
  </>
);

// export const Loading = () => (
//   <>
//     <MyButton appearance="primary" isLoading>
//       Primary
//     </MyButton>
//     <MyButton appearance="secondary" isLoading>
//       Secondary
//     </MyButton>
//     <MyButton appearance="tertiary" isLoading>
//       Tertiary
//     </MyButton>
//     <MyButton appearance="outline" isLoading>
//       Outline
//     </MyButton>
//     <MyButton appearance="outline" isLoading loadingText="Custom...">
//       Outline
//     </MyButton>
//   </>
// );
