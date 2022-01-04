export const useFetch = <TData, TVariables>(
  query: string
): (() => Promise<TData>) => {
  const token = undefined // useAuth()

  return async (variables?: TVariables) => {
    const headers = new Headers()
    headers.append('Content-Type', 'application/json')

    if (token) {
      headers.append('Authorization', 'Bearer ' + token)
    }

    // prompt user before closing the window if we are doing a fetch
    window.onbeforeunload = () => 'Request in flight'

    const res = await fetch(process.env.NEXT_PUBLIC_ENDPOINT_URI as string, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query,
        variables,
      }),
    })

    const json = await res.json()

    // enable closing the window without a prompt
    window.onbeforeunload = null

    if (json.errors) {
      const { message } = json.errors[0]
      throw new Error(message || 'Unhandled Error in useFetch')
    }

    return json.data
  }
}
