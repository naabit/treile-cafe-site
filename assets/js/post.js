// js/post.js

function obtenerIdDesdeURL() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  return id ? parseInt(id, 10) : null;
}

function renderPost() {
  const container = document.getElementById("postContainer");
  if (!container) return;

  const id = obtenerIdDesdeURL();

  if (!id) {
    container.innerHTML = `
      <div class="text-center mt-5">
        <p class="text-muted">No se especificó ningún post.</p>
        <a href="blog.html" class="btn btn-outline-dark btn-sm mt-3">Volver al blog</a>
      </div>
    `;
    return;
  }

  const post = posts.find((p) => p.id === id);

  if (!post) {
    container.innerHTML = `
      <div class="text-center mt-5">
        <p class="text-muted">No encontramos este post. Puede que haya sido movido o borrado.</p>
        <a href="blog.html" class="btn btn-outline-dark btn-sm mt-3">Volver al blog</a>
      </div>
    `;
    return;
  }

  container.innerHTML = `
    <article class="row justify-content-center">
      <div class="col-lg-8">
        <header class="mb-4">
          <span class="badge bg-warning text-dark mb-2 text-uppercase" style="letter-spacing:0.08em;">
            ${post.categoria}
          </span>
          <h1 class="h2 mb-1" style="color: var(--treile-rojo);">
            ${post.titulo}
          </h1>
          <p class="text-muted small mb-0">${post.fecha}</p>
          <p class="small text-muted">
            ${post.etiquetas.map((tag) => `#${tag}`).join(" · ")}
          </p>
          <hr />
        </header>

        <section class="mb-4">
          <p class="lead" style="font-size: 0.98rem; line-height: 1.7;">
            ${post.contenido}
          </p>
        </section>

        <section class="mb-4 menu-illustration">
          Aquí podrías agregar una foto del café, del barrio o de algo relacionado con este post.
        </section>

        <div class="d-flex justify-content-between align-items-center">
          <a href="blog.html" class="btn btn-outline-dark btn-sm">
            ← Volver al blog
          </a>
        </div>
      </div>
    </article>
  `;
}

// Ejecutar cuando cargue la página
renderPost();
