import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useRef } from 'react';
import { Input } from './Input';

const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    type:        { control: 'inline-radio', options: ['text', 'password', 'search', 'email'] },
    size:        { control: 'inline-radio', options: ['sm', 'md'] },
    label:       { control: 'text' },
    placeholder: { control: 'text' },
    value:       { control: 'text' },
    helperText:  { control: 'text' },
    error:       { control: 'text' },
    disabled:    { control: 'boolean' },
    leftIcon:    { control: false },
    rightIcon:   { control: false },
  },
  args: {
    type: 'text',
    size: 'sm',
    label: 'Email',
    placeholder: 'you@example.com',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Filled: Story = {
  args: { value: 'hello@uxhero.design' },
};

export const Focused: Story = {
  decorators: [
    (StoryFn) => {
      const wrapperRef = useRef<HTMLDivElement>(null);
      useEffect(() => {
        wrapperRef.current?.querySelector('input')?.focus();
      }, []);
      return <div ref={wrapperRef}><StoryFn /></div>;
    },
  ],
};

export const Error: Story = {
  args: {
    value: 'not-an-email',
    error: 'Please enter a valid email address',
  },
};

export const Disabled: Story = {
  args: {
    value: 'locked@uxhero.design',
    disabled: true,
  },
};

export const WithIcon: Story = {
  args: {
    type: 'search',
    label: 'Search',
    placeholder: 'Search components…',
    leftIcon: <SearchIcon />,
  },
};
