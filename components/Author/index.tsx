export const Author = ({ data: { name, title } }: AuthorProps) => {
  return (
    <p>
      {title} - {name}
    </p>
  )
}

interface AuthorProps {
  data: {
    id: string
    name: string
    title?: string | null
  }
}
