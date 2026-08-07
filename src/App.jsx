import { useEffect, useMemo, useState } from 'react'
import { Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import { getPost, getPosts } from './blogger.js'
import logo from '../assets/img/brand/logo-eslogan-sin-fondo-amarillo.png'
import brandMark from '../assets/img/brand/patita-treile-amarilla.png'
import blogLogo from '../assets/img/brand/isologotipo-ilustrado-sin-fondo-amarillo.png'
import cafeteria from '../assets/img/sections/cafeteria.png'
import comunidad from '../assets/img/sections/comunidad.png'
import nosotros from '../assets/img/sections/nosotros.png'

const menu = {
  Cafecitos: [['Espresso',2300],['Sudamericano',2500],['Flat White',2700],['Cappuccino',2700],['Latte',3000],['Moka',3500],['V-60',3500]],
  'Brebajes fríos': [['Cold Brew (naranja-miel)',2500],['Espresso tónica',3500],['Cold Brew tónica',3500],['Leche con plátano',3000],['Affogato',3500],['Té helado',2000],['Smoothie',3500],['Jugo de fruta',2500],['Ginger Beer',2800],['Cafecito Ginger Beer',4000]],
  'No-cafeses': [['Choco caliente',3500],['Chai latte',3500],['El sucio chai',4000],['Bombón',3500],['Abejorro',3500],['Flat Earl',2700],['El Jacksito',3300],['Tetera 600 ml',2500]],
  Ricos: [['Torta en vaso',2300],['Kuchen individual',2500],['Facturita',2700],['Galleta Treileyork',2700],['Alfajor maicena',3000]],
}

function Layout({ children }) {
  return <><nav className="navbar navbar-expand navbar-treile sticky-top"><div className="container"><div className="navbar-nav me-auto"><NavLink className="nav-link" to="/">Inicio</NavLink><NavLink className="nav-link" to="/menu">Menú</NavLink><NavLink className="nav-link" to="/blog">Blog</NavLink></div><Link to="/"><img src={brandMark} className="treile-logo" alt="Treile Café" /></Link></div></nav>{children}<footer className="treile-react-footer"><div className="container text-center"><p>Treile Café · Pucón</p><small>Café, comunidad y barrio.</small></div></footer></>
}

function Home() {
  const sections = [[cafeteria,'Cafetería','Un espacio pequeño para café, conversación y pausa.'],[comunidad,'Colaboradores','Treile también se construye junto a quienes hacen barrio y comunidad.'],[nosotros,'Nosotros','Una cafetería local con identidad propia, vida cotidiana y mucho café.']]
  return <Layout><header className="home-hero react-hero"><img src="https://picsum.photos/1600/900?random=21" className="home-hero__img" alt="Treile Café"/><div className="home-hero__overlay"><img src={logo} className="home-hero__logo" alt="Treile Café"/></div></header><Link to="/menu" className="btn btn-treile btn-lg home-cta-float">Nuestra carta &gt;</Link><main className="container py-5">{sections.map(([img,title,text],i)=><section className="row align-items-center g-4 py-4" key={title}><div className={`col-md-6 text-center ${i%2===0?'order-md-2':''}`}><img src={img} className="img-fluid treile-split-img" alt={title}/></div><div className="col-md-6"><h2 className="menu-section-title">{title}</h2><p className="react-lead">{text}</p></div></section>)}</main></Layout>
}

function Menu() { return <Layout><main className="container py-5"><header className="text-center mb-5"><h1 className="menu-section-title display-5">Nuestra carta</h1></header><div className="row g-5">{Object.entries(menu).map(([category,items])=><section className="col-lg-6" key={category}><h2 className="menu-section-title">{category}</h2>{items.map(([name,price])=><div className="menu-item" key={name}><span className="menu-item-name">{name}</span><span className="menu-price">$ {price.toLocaleString('es-CL')}</span></div>)}</section>)}</div></main></Layout> }

function Blog() {
 const [posts,setPosts]=useState([]); const [search,setSearch]=useState(''); const [category,setCategory]=useState('all'); const [error,setError]=useState('')
 useEffect(()=>{getPosts().then(setPosts).catch(e=>setError(e.message))},[])
 const categories=useMemo(()=>[...new Set(posts.map(p=>p.category))], [posts])
 const filtered=posts.filter(p=>(category==='all'||p.category===category)&&`${p.title} ${p.summary}`.toLowerCase().includes(search.toLowerCase()))
 return <Layout><main className="container py-5"><header className="text-center mb-4"><img src={blogLogo} className="blog-logo" alt="Treile"/><h1 className="menu-section-title display-5">El blog del Treile</h1></header><div className="row g-3 mb-4"><div className="col-md-7"><input className="form-control" value={search} onChange={e=>setSearch(e.target.value)} placeholder="Buscar en el blog…"/></div><div className="col-md-5"><select className="form-select" value={category} onChange={e=>setCategory(e.target.value)}><option value="all">Todas las categorías</option>{categories.map(c=><option key={c} value={c}>{c}</option>)}</select></div></div>{error&&<p>{error}</p>}<div className="row g-4">{filtered.map(post=><article className="col-md-6 col-lg-4" key={post.id}><div className="blog-card h-100"><small>{post.category} · {post.date}</small><h2>{post.title}</h2><p>{post.summary}</p><Link to={`/blog/${post.id}`}>Leer publicación →</Link></div></article>)}</div></main></Layout>
}

function Post() { const {id}=useParams(); const [post,setPost]=useState(); useEffect(()=>{getPost(id).then(setPost)},[id]); if(!post)return <Layout><main className="container py-5"><p>Cargando publicación…</p></main></Layout>; return <Layout><article className="container py-5 post-wrap"><Link to="/blog">← Volver al blog</Link><p className="mt-4">{post.category} · {post.date}</p><h1>{post.title}</h1><div className="post-content" dangerouslySetInnerHTML={{__html:post.content}} /></article></Layout> }

export default function App(){return <Routes><Route path="/" element={<Home/>}/><Route path="/menu" element={<Menu/>}/><Route path="/blog" element={<Blog/>}/><Route path="/blog/:id" element={<Post/>}/><Route path="*" element={<Home/>}/></Routes>}
