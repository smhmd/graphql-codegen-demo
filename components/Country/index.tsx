export const Country = ({ data: { name, emoji } }: CountryProps) => {
  return (
    <p>
      {emoji} {name}
    </p>
  )
}

interface CountryProps {
  data: {
    name: string
    emoji: string
  }
}
