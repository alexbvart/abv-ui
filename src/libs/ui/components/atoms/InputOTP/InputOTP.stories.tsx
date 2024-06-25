import { Meta, StoryObj } from "@storybook/react";
import { InputOTP } from "./InputOTP";
import { useState } from "react";
import { InputOTPProps } from "./InputOTP.types";

const meta: Meta<typeof InputOTP> = {
  title: "Atoms/InputOTP",
  component: InputOTP,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof InputOTP>;

export const Default: Story = (args: InputOTPProps) => {
  const [otp, setOtp] = useState("");

  const handleChange = (value: string) => {
    setOtp(value);
  };

  return (
    <>
      <InputOTP {...args} onChange={handleChange}>
        <InputOTP.Group>
          <InputOTP.Slot index={0} />
          <InputOTP.Slot index={1} />
          <InputOTP.Slot index={2} />
        </InputOTP.Group>
        <InputOTP.Separator />
        <InputOTP.Group>
          <InputOTP.Slot index={3} />
          <InputOTP.Slot index={4} />
          <InputOTP.Slot index={5} />
        </InputOTP.Group>
      </InputOTP>
      <p>Current OTP: {otp}</p>
    </>
  );
};
Default.args = {
  maxLength: 6,
};
