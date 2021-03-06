import { render } from '../testUtils'
import GitHub from '../src/components/svgs/GitHub'

test('matches snapshot', () => {
  const { asFragment } = render(<GitHub width={40} height={40} />)

  expect(asFragment()).toMatchSnapshot()
})
