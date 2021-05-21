import { render } from '../testUtils'
import Profile from '../src/components/svgs/Profile'

test('matches snapshot', () => {
  const { asFragment } = render(<Profile width={128} height={128} />)

  expect(asFragment()).toMatchSnapshot()
})
