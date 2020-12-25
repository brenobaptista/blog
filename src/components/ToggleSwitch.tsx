import { Checkbox, Label, Button } from '../styles/components/ToggleSwitch'

const ToggleSwitch = (): JSX.Element => (
  <>
    <Checkbox id='checkbox' type='checkbox' />
    <Label htmlFor='checkbox'>
      <Button />
    </Label>
  </>
)

export default ToggleSwitch
