import { render } from '../testUtils'
import Monero from '../src/components/svgs/Monero'

test('matches snapshot', () => {
  const { asFragment } = render(<Monero width={40} height={40} />)

  expect(asFragment()).toMatchSnapshot()
})
