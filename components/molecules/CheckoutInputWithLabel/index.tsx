import React from 'react';
import { CheckBox, RadioBox } from '~atoms/Input';
import { CheckBoxWrapper } from './style'

export const CustomCheckBox: React.FC<{checked?: string, value?: string, name?: string}> = ({checked, value, name }) => {
    return (
    <CheckBoxWrapper>
      <CheckBox value={value} name={name} />
      <span className="checkmark"></span>
    </CheckBoxWrapper>
    )
};

export const CustomRadioBox: React.FC<{checked?: string, value?: string, name?: string}> = ({checked, value, name }) => {
  return (
  <CheckBoxWrapper>
    <RadioBox value={value} name={name} />
    <span className="checkmark"></span>
  </CheckBoxWrapper>
  )
};