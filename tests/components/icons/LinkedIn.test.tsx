import { render } from 'testUtils'
import LinkedIn from '@/components/icons/LinkedIn'

test('matches snapshot', () => {
  const { asFragment } = render(<LinkedIn width={128} height={128} />)

  expect(asFragment()).toMatchSnapshot()
})
