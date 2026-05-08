// js/blog.js
// Lógica del listado del blog

// posts viene desde js/postsData.js

const blogContainer = document.getElementById("blogPosts");
const searchInput = document.getElementById("searchInput");
const filterCategory = document.getElementById("filterCategory");

// Renderizar tarjetas del blog
function renderPosts(lista) {
  if (!blogContainer) return;

  if (lista.length === 0) {
    blogContainer.innerHTML =
      '<div class="col-12 text-center text-muted small">No encontramos entradas con esos criterios.</div>';
    return;
  }

  blogContainer.innerHTML = lista
    .map(
      (post) => `
      <article class="col-md-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0">
          <img
            src="https://picsum.photos/seed/treile-post-${post.id}/800/500"
            class="card-img-top"
            alt="${post.titulo}"
            loading="lazy"
            style="height: 180px; object-fit: cover;"
          />
          <div class="card-body d-flex flex-column">
            <span class="badge bg-warning text-dark mb-2 text-uppercase" style="letter-spacing:0.08em;">
              ${post.categoria}
            </span>
            <h2 class="h5 card-title" style="color: var(--treile-rojo);">
              ${post.titulo}
            </h2>
            <p class="text-muted mb-1 small">${post.fecha}</p>
            <p class="card-text small flex-grow-1">
              ${post.resumen}
            </p>
            <div class="mt-2 small text-muted">
              ${post.etiquetas
                .map((tag) => `<span class="me-1">#${tag}</span>`)
                .join("")}
            </div>
            <a
              class="btn btn-sm btn-outline-dark mt-3 align-self-start"
              href="post.html?id=${post.id}"
            >
              Leer más
            </a>
          </div>
        </div>
      </article>
    `
    )
    .join("");
}

// Filtros
function filtrarPosts() {
  const texto = searchInput ? searchInput.value.toLowerCase() : "";
  const categoriaSeleccionada = filterCategory
    ? filterCategory.value
    : "all";

  const filtrados = posts.filter((post) => {
    const coincideCategoria =
      categoriaSeleccionada === "all" ||
      post.categoria === categoriaSeleccionada;

    const enTexto =
      post.titulo.toLowerCase().includes(texto) ||
      post.resumen.toLowerCase().includes(texto) ||
      post.etiquetas.some((tag) =>
        tag.toLowerCase().includes(texto)
      );

    return coincideCategoria && enTexto;
  });

  renderPosts(filtrados);
}

// Eventos
if (searchInput) {
  searchInput.addEventListener("input", filtrarPosts);
}
if (filterCategory) {
  filterCategory.addEventListener("change", filtrarPosts);
}

// Render inicial
renderPosts(posts);
