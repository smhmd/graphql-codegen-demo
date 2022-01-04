import type { NextPage, GetServerSideProps } from 'next'
import { useCountriesQuery } from '~/api'
import { Author, Country } from '~/components'
import { content } from '~/content'

const Home: NextPage<PageProps> = ({ authors }) => {
  const { data } = useCountriesQuery()

  if (!data) return null

  return (
    <main>
      {authors.map((author) => (
        <Author key={author.id} data={author} />
      ))}
      {data.countries.map((country) => (
        <Country key={country.name} data={country} />
      ))}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const { authors } = await content.Authors()

  return { props: { authors } }
}

interface PageProps {
  authors: Array<{ id: string; name: string; title?: string | null }>
}

export default Home
