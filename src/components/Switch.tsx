import {
  InvisibleCheckbox,
  Background,
  Toggle
} from '../styles/components/Switch'

interface Props {
  switchValue: boolean
  toggleSwitch: () => void
}

const Switch = ({ switchValue, toggleSwitch }: Props): JSX.Element => {
  const handleKeyPress = (event: React.KeyboardEvent<HTMLLabelElement>) => {
    if (event.key !== ' ') return

    event.preventDefault()
    toggleSwitch()
  }

  return (
    <>
      <InvisibleCheckbox
        id='checkbox'
        type='checkbox'
        checked={switchValue}
        onChange={toggleSwitch}
      />
      <Background
        htmlFor='checkbox'
        tabIndex={0}
        onKeyDown={event => handleKeyPress(event)}
      >
        <Toggle />
      </Background>
    </>
  )
}

export default Switch
