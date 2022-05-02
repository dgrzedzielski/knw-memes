import { Label } from '../label';

import { Heading as HeadingComponent } from './heading';
import { Text } from './text';

export default {
  title: 'Typography',
};

const weights = [600, 500, 400, 300] as const;

export const All = () => (
  <>
    <HeadingComponent level={1}>Heading 1</HeadingComponent>
    <HeadingComponent level={2}>Heading 2</HeadingComponent>
    <HeadingComponent level={3}>Heading 3</HeadingComponent>
    <HeadingComponent level={4}>Heading 4</HeadingComponent>
    <HeadingComponent level={5}>Heading 5</HeadingComponent>
    <HeadingComponent level={6}>Heading 6</HeadingComponent>
    {weights.map((weight) => (
      <Text size="main" weight={weight} key={weight}>
        Main (18 px / {weight})
      </Text>
    ))}
    {weights.map((weight) => (
      <Text size="sub" weight={weight} key={weight}>
        Sub (16 px / {weight})
      </Text>
    ))}
    {weights.map((weight) => (
      <Text size="small" weight={weight} key={weight}>
        Small (14 px / {weight})
      </Text>
    ))}
    {weights.map((weight) => (
      <Text size="smaller" weight={weight} key={weight}>
        Smaller (12 px / {weight})
      </Text>
    ))}
    <Label>Label (16px / 300)</Label>
  </>
);
