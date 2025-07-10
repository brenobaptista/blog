import { ThematicBreak } from '@/styles/components/Separator'

interface ISeparator {
  margin?: string
}

const Separator = ({ margin }: ISeparator) => <ThematicBreak margin={margin} />

export default Separator
