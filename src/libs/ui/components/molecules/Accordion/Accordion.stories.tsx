import { Meta, StoryObj } from "@storybook/react";
import { AbvAccordion } from "./Accordion";

const meta: Meta<typeof AbvAccordion> = {
  title: "Molecules/Accordion",
  component: AbvAccordion,
} satisfies Meta<typeof AbvAccordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const SingleItemOpen: Story = {
  render: () => (
    <AbvAccordion>
      <AbvAccordion.Item title="Item 1">Content for item 1.</AbvAccordion.Item>
    </AbvAccordion>
  ),
};

export const MultipleItems: Story = {
  render: () => (
    <AbvAccordion>
      <AbvAccordion.Item title="Item 1">
        This is the content of the first accordion item.
      </AbvAccordion.Item>
      <AbvAccordion.Item title="Item 2">
        This is the content of the second accordion item.
      </AbvAccordion.Item>
      <AbvAccordion.Item title="Item 3">
        <AbvAccordion.Item title="Item 4">
          This is the content of the third accordion item.
        </AbvAccordion.Item>{" "}
        <AbvAccordion.Item title="Item 5">
          This is the content of the third accordion item.
        </AbvAccordion.Item>{" "}
        <AbvAccordion.Item title="Item 5">
          This is the content of the third accordion item.
        </AbvAccordion.Item>
      </AbvAccordion.Item>
    </AbvAccordion>
  ),
};

export const WithLongContent: Story = {
  render: () => (
    <AbvAccordion>
      <AbvAccordion.Item title="Item with Long Content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        imperdiet, nulla et dictum interdum, nisi lorem egestas odio, vitae
        scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec
        congue eget, auctor vitae massa.
      </AbvAccordion.Item>
    </AbvAccordion>
  ),
};
