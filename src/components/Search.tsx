import { useState, useEffect } from 'react'

import { Magnifier } from './svgs'
import { Post } from '../lib/posts'
import { Input, IconWrapper } from '../styles/components/Search'

interface Props {
  allPostsData: Post[]
  setPosts(filteredPosts: Post[]): void
}

const Search = ({ allPostsData, setPosts }: Props): JSX.Element => {
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    const filteredPosts = allPostsData.filter(post => {
      const { title, description, date } = post

      const postData = `${title} ${description} ${date}`.toLowerCase()

      return postData.includes(searchValue)
    })

    setPosts(filteredPosts)
  }, [searchValue, allPostsData, setPosts])

  return (
    <>
      <Input
        type='text'
        onChange={event => setSearchValue(event.target.value.toLowerCase())}
        placeholder='Search posts'
      />
      <IconWrapper>
        <Magnifier width={16} height={16} />
      </IconWrapper>
    </>
  )
}

export default Search
