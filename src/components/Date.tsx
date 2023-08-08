import { parseISO, format } from 'date-fns'

import Time from '@/styles/components/Date'

interface IDate {
  date: string
}

const Date = ({ date }: IDate) => {
  const parsedDate = parseISO(date)

  return <Time dateTime={date}>{format(parsedDate, 'LLLL d, yyyy')}</Time>
}

export default Date
