const BLOG_ID = import.meta.env.VITE_BLOGGER_BLOG_ID
const API_KEY = import.meta.env.VITE_BLOGGER_API_KEY

export const demoPosts = [
  { id: '1', title: 'Por qué Treile ama el café filtrado', category: 'cafe', date: '15 de mayo 2025', summary: 'Una pequeña defensa del café filtrado lento, de esos que parecen conversación larga de invierno.', content: '<p>Este contenido es de ejemplo. Cuando conectes Blogger, las publicaciones se cargarán desde allí.</p>' },
  { id: '2', title: 'Playlist de la semana: tardes de lluvia en Pucón', category: 'musica', date: '22 de mayo 2025', summary: 'Música para acompañar una tarde de lluvia frente al café.', content: '<p>Contenido de ejemplo para comenzar a trabajar el diseño del artículo.</p>' },
  { id: '3', title: 'Vecinos que no migran: historias del barrio', category: 'barrio', date: '5 de junio 2025', summary: 'Un café pequeño, un barrio que cambia y algunas historias de quienes decidieron quedarse.', content: '<p>Contenido de ejemplo sobre barrio y comunidad.</p>' },
]

const stripHtml = (html = '') => html.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim()

const normalizePost = (post) => ({
  id: post.id,
  title: post.title,
  category: post.labels?.[0]?.toLowerCase() || 'general',
  labels: post.labels || [],
  date: new Intl.DateTimeFormat('es-CL', { dateStyle: 'long' }).format(new Date(post.published)),
  summary: stripHtml(post.content).slice(0, 180) + (stripHtml(post.content).length > 180 ? '…' : ''),
  content: post.content,
})

export async function getPosts() {
  if (!BLOG_ID || !API_KEY) return demoPosts
  const url = `https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts?key=${API_KEY}&fetchBodies=true&status=live`
  const response = await fetch(url)
  if (!response.ok) throw new Error('No se pudieron cargar las publicaciones de Blogger')
  const data = await response.json()
  return (data.items || []).map(normalizePost)
}

export async function getPost(id) {
  if (!BLOG_ID || !API_KEY) return demoPosts.find((post) => post.id === id) || null
  const response = await fetch(`https://www.googleapis.com/blogger/v3/blogs/${BLOG_ID}/posts/${id}?key=${API_KEY}`)
  if (response.status === 404) return null
  if (!response.ok) throw new Error('No se pudo cargar la publicación')
  return normalizePost(await response.json())
}
