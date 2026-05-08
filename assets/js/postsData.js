// js/postsData.js
// Datos compartidos entre blog.html y post.html

const posts = [
  {
    id: 1,
    titulo: "Por qué Treile ama el café filtrado",
    categoria: "cafe",
    fecha: "15 de mayo 2025",
    resumen:
      "Una pequeña defensa del café filtrado lento, de esos que parecen conversación larga de invierno.",
    contenido:
      "Aquí podrías escribir el contenido completo del post. Por ahora usamos solo el resumen para el demo, pero este campo está pensado para que cuentes la historia larga: cómo preparan el V-60, qué significa tomarse el tiempo, y alguna anécdota del café.",
    etiquetas: ["café", "V-60", "tiempos lentos"],
  },
  {
    id: 2,
    titulo: "Playlist de la semana: tardes de lluvia en Pucón",
    categoria: "musica",
    fecha: "22 de mayo 2025",
    resumen:
      "Zoe Gotusso, El Kuelgue y algunas joyitas más que suenan mientras cae la lluvia frente al café.",
    contenido:
      "Aquí puedes listar las canciones, por qué las eligieron, y quizás un enlace a la playlist en Spotify. La idea es que suene a diario íntimo del café.",
    etiquetas: ["música", "playlist", "lluvia"],
  },
  {
    id: 3,
    titulo: "Vecinos que no migran: historias del barrio",
    categoria: "barrio",
    fecha: "5 de junio 2025",
    resumen:
      "Un café pequeño, un barrio que cambia y algunas historias de quienes decidieron quedarse.",
    contenido:
      "Texto largo sobre el barrio, personas mayores que siguen ahí, el contraste entre turismo y permanencia. Aquí puedes ponerte socióloga total.",
    etiquetas: ["barrio", "comunidad"],
  },
  {
    id: 4,
    titulo: "Taller de café para principiantes",
    categoria: "eventos",
    fecha: "20 de junio 2025",
    resumen:
      "Anunciamos nuestro primer taller de introducción al café de especialidad en Treile.",
    contenido:
      "Detalles del taller: duración, contenidos, quién lo imparte, precio, cómo inscribirse. Todo en un tono cercano.",
    etiquetas: ["taller", "evento", "café"],
  },
  {
    id: 5,
    titulo: "Guía rápida: cómo pedir tu café en Treile",
    categoria: "cafe",
    fecha: "2 de julio 2025",
    resumen:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.",
    contenido:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.",
    etiquetas: ["café", "guía", "menú"],
  },
  {
    id: 6,
    titulo: "Lo que suena en la barra: 10 canciones para un día lento",
    categoria: "musica",
    fecha: "12 de julio 2025",
    resumen:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus.",
    contenido:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus.",
    etiquetas: ["música", "barra", "día lento"],
  },
  {
    id: 7,
    titulo: "Invierno en Pucón: qué tomar para entrar en calor",
    categoria: "cafe",
    fecha: "28 de julio 2025",
    resumen:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.",
    contenido:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.",
    etiquetas: ["invierno", "café", "recomendaciones"],
  },
  {
    id: 8,
    titulo: "El barrio un martes: postales pequeñas desde Treile",
    categoria: "barrio",
    fecha: "10 de agosto 2025",
    resumen:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacinia nunc.",
    contenido:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis.",
    etiquetas: ["barrio", "postales", "cotidiano"],
  },
  {
    id: 9,
    titulo: "Agenda Treile: cine, música y un cafecito antes",
    categoria: "eventos",
    fecha: "22 de agosto 2025",
    resumen:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet.",
    contenido:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros.",
    etiquetas: ["eventos", "agenda", "panoramas"],
  },
  {
    id: 10,
    titulo: "Café y conversación: por qué nos gustan los lugares chicos",
    categoria: "barrio",
    fecha: "5 de septiembre 2025",
    resumen:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis.",
    contenido:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
    etiquetas: ["comunidad", "barrio", "rutina"],
  },
  {
    id: 11,
    titulo: "Métodos de extracción: lo básico para empezar (sin tecnicismos)",
    categoria: "cafe",
    fecha: "18 de septiembre 2025",
    resumen:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim justo.",
    contenido:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.",
    etiquetas: ["café", "métodos", "aprendizaje"],
  },
  {
    id: 12,
    titulo: "Tarde de vinilos: invitación abierta en Treile",
    categoria: "eventos",
    fecha: "1 de octubre 2025",
    resumen:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula.",
    contenido:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    etiquetas: ["eventos", "vinilos", "música"],
  },
];
