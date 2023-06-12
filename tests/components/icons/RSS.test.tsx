import { render } from 'testUtils'
import RSS from '@/components/icons/RSS'

test('matches snapshot', () => {
  const { asFragment } = render(<RSS width={40} height={40} />)

  expect(asFragment()).toMatchSnapshot()
})
