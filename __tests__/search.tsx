import { render } from '../testUtils'
import Search from '../src/components/svgs/Search'

test('matches snapshot', () => {
  const { asFragment } = render(<Search width={16} height={16} />)

  expect(asFragment()).toMatchSnapshot()
})
