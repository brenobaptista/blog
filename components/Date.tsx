import { parseISO, format } from 'date-fns'

interface Props {
  date: string
}

const Date = ({ date }: Props): JSX.Element => {
  const parsedDate = parseISO(date)

  return <time dateTime={date}>{format(parsedDate, 'LLLL d, yyyy')}</time>
}

export default Date
