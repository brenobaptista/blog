import { Checkbox, Label, Button } from '../styles/components/ToggleSwitch'

interface Props {
  isOn: boolean
  handleToggle: () => void
}

const ToggleSwitch = ({ isOn, handleToggle }: Props): JSX.Element => {
  const handleKeyPress = event => {
    if (event.keyCode !== 32) return

    event.preventDefault()
    handleToggle()
  }

  return (
    <>
      <Checkbox
        id='checkbox'
        type='checkbox'
        checked={isOn}
        onChange={handleToggle}
        tabIndex={0}
        onKeyDown={event => handleKeyPress(event)}
      />
      <Label
        htmlFor='checkbox'
        isOn={isOn}
        tabIndex={0}
        onKeyDown={event => handleKeyPress(event)}
      >
        <Button />
      </Label>
    </>
  )
}

export default ToggleSwitch
