import { render } from '../testUtils'
import Date from '../src/components/Date'

test('matches snapshot', () => {
  const { asFragment } = render(<Date date='2020-01-01' />)

  expect(asFragment()).toMatchSnapshot()
})
