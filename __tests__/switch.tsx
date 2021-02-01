import { render, fireEvent } from '../testUtils'
import Switch from '../src/components/Switch'

test('matches snapshot', () => {
  const toggleSwitch = jest.fn()
  const { asFragment } = render(
    <Switch switchValue toggleSwitch={toggleSwitch} />
  )

  expect(asFragment()).toMatchSnapshot()
})

test('toggles Switch using keyboard', () => {
  const toggleSwitch = jest.fn()
  const { getByTestId } = render(
    <Switch switchValue toggleSwitch={toggleSwitch} />
  )

  const checkbox = getByTestId('label-checkbox')
  fireEvent.keyDown(checkbox, { key: 'Enter', keyCode: 13 })
  fireEvent.keyDown(checkbox, { key: ' ', keyCode: 32 })
  expect(toggleSwitch).toHaveBeenCalled()
})
