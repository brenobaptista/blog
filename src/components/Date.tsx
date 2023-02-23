import { parseISO, format } from 'date-fns'

import Time from '@/styles/components/Date'

interface Props {
  date: string
}

const Date = ({ date }: Props): JSX.Element => {
  const parsedDate = parseISO(date)

  return <Time dateTime={date}>{format(parsedDate, 'LLLL d, yyyy')}</Time>
}

export default Date
