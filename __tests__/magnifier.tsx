import { render } from '../testUtils'
import Magnifier from '../src/components/svgs/Magnifier'

test('matches snapshot', () => {
  const { asFragment } = render(<Magnifier width={16} height={16} />)

  expect(asFragment()).toMatchSnapshot()
})
