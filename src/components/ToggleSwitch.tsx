import { Checkbox, Label, Button } from '../styles/components/ToggleSwitch'

interface Props {
  isOn: boolean
  handleToggle: () => void
}

const ToggleSwitch = ({ isOn, handleToggle }: Props): JSX.Element => (
  <>
    <Checkbox
      checked={isOn}
      onChange={handleToggle}
      id='checkbox'
      type='checkbox'
    />
    <Label htmlFor='checkbox' isOn={isOn}>
      <Button />
    </Label>
  </>
)

export default ToggleSwitch
