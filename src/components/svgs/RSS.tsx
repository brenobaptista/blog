interface Props {
  width: number
  height: number
}

const RSS = ({ width, height }: Props): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 24 24'
    width={width}
    height={height}
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    aria-hidden='true'
  >
    <title>RSS feed</title>
    <path d='M4 4a16 16 0 0 1 16 16' />
    <path d='M4 11a9 9 0 0 1 9 9' />
    <circle cx='5' cy='19' r='1' />
  </svg>
)

export default RSS
