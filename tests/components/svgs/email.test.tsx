import { render } from 'testUtils'
import Email from '@/components/icons/Email'

test('matches snapshot', () => {
  const { asFragment } = render(<Email width={40} height={40} />)

  expect(asFragment()).toMatchSnapshot()
})
