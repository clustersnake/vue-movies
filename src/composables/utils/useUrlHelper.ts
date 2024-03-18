export default function useUrlHelper() {
  const env = { ...import.meta.env }
  const bearer = `Bearer ${env.VITE_API_TOKEN}`

  const headers = { Authorization: bearer }

  const urlBuilder = (domain: string, prefix = '', genre = '') => {
    return `${env.VITE_API_ENDPOINT}/${prefix}/${domain}?with_genres=${genre}`
  }

  const getImageUrl = (image: string, size = 'original') => {
    return `${env.VITE_IMAGE_URL}/${size}/${image}`
  }

  return { headers, urlBuilder, getImageUrl }
}
