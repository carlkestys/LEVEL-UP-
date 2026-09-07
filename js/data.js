/* ==========================================================================
   data.js — Datos base de Level-Up Gamer
   Arreglos en memoria que simulan la futura base de datos.
   ========================================================================== */

// ---------------------------------------------------------------------------
// Catálogo de productos
// ---------------------------------------------------------------------------
const PRODUCTS = [
  {
    codigo: "JM001",
    categoria: "juegos-mesa",
    categoriaLabel: "Juegos de Mesa",
    nombre: "Catan",
    precio: 29990,
    stock: 18,
    stockCritico: 5,
    descripcion:
      "Un clásico juego de estrategia donde los jugadores compiten por colonizar y expandirse en la isla de Catan. Ideal para 3-4 jugadores y perfecto para noches de juego en familia o con amigos.",
    imagen: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=600&q=80",
  },
  {
    codigo: "JM002",
    categoria: "juegos-mesa",
    categoriaLabel: "Juegos de Mesa",
    nombre: "Carcassonne",
    precio: 24990,
    stock: 22,
    stockCritico: 5,
    descripcion:
      "Un juego de colocación de fichas donde los jugadores construyen el paisaje alrededor de la fortaleza medieval de Carcassonne. Ideal para 2-5 jugadores y fácil de aprender.",
    imagen: "https://images.unsplash.com/photo-1606503153255-59d8b8b82176?w=600&q=80",
  },
  {
    codigo: "AC001",
    categoria: "accesorios",
    categoriaLabel: "Accesorios",
    nombre: "Controlador Inalámbrico Xbox Series X",
    precio: 59990,
    stock: 30,
    stockCritico: 8,
    descripcion:
      "Ofrece una experiencia de juego cómoda con botones mapeables y una respuesta táctil mejorada. Compatible con consolas Xbox y PC.",
    imagen: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80",
  },
  {
    codigo: "AC002",
    categoria: "accesorios",
    categoriaLabel: "Accesorios",
    nombre: "Auriculares Gamer HyperX Cloud II",
    precio: 79990,
    stock: 15,
    stockCritico: 5,
    descripcion:
      "Proporcionan un sonido envolvente de calidad con un micrófono desmontable y almohadillas de espuma viscoelástica para mayor comodidad durante largas sesiones de juego.",
    imagen: "https://images.unsplash.com/photo-1599669454699-248893623440?w=600&q=80",
  },
  {
    codigo: "CO001",
    categoria: "consolas",
    categoriaLabel: "Consolas",
    nombre: "PlayStation 5",
    precio: 549990,
    stock: 6,
    stockCritico: 3,
    descripcion:
      "La consola de última generación de Sony, que ofrece gráficos impresionantes y tiempos de carga ultrarrápidos para una experiencia de juego inmersiva.",
    imagen: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600&q=80",
  },
  {
    codigo: "CG001",
    categoria: "computadores-gamers",
    categoriaLabel: "Computadores Gamers",
    nombre: "PC Gamer ASUS ROG Strix",
    precio: 1299990,
    stock: 4,
    stockCritico: 2,
    descripcion:
      "Un potente equipo diseñado para los gamers más exigentes, equipado con los últimos componentes para ofrecer un rendimiento excepcional en cualquier juego.",
    imagen: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&q=80",
  },
  {
    codigo: "SG001",
    categoria: "sillas-gamers",
    categoriaLabel: "Sillas Gamers",
    nombre: "Silla Gamer Secretlab Titan",
    precio: 349990,
    stock: 9,
    stockCritico: 3,
    descripcion:
      "Diseñada para el máximo confort, esta silla ofrece un soporte ergonómico y personalización ajustable para sesiones de juego prolongadas.",
    imagen: "https://images.unsplash.com/photo-1592840062661-a5a7f78e2056?w=600&q=80",
  },
  {
    codigo: "MS001",
    categoria: "mouse",
    categoriaLabel: "Mouse",
    nombre: "Mouse Gamer Logitech G502 HERO",
    precio: 49990,
    stock: 25,
    stockCritico: 6,
    descripcion:
      "Con sensor de alta precisión y botones personalizables, este mouse es ideal para gamers que buscan un control preciso y personalización.",
    imagen: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&q=80",
  },
  {
    codigo: "MP001",
    categoria: "mousepad",
    categoriaLabel: "Mousepad",
    nombre: "Mousepad Razer Goliathus Extended Chroma",
    precio: 29990,
    stock: 20,
    stockCritico: 5,
    descripcion:
      "Ofrece un área de juego amplia con iluminación RGB personalizable, asegurando una superficie suave y uniforme para el movimiento del mouse.",
    imagen: "https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=600&q=80",
  },
  {
    codigo: "PP001",
    categoria: "poleras-personalizadas",
    categoriaLabel: "Poleras Personalizadas",
    nombre: "Polera Gamer Personalizada 'Level-Up'",
    precio: 14990,
    stock: 40,
    stockCritico: 10,
    descripcion:
      "Una camiseta cómoda y estilizada, con la posibilidad de personalizarla con tu gamer tag o diseño favorito.",
    imagen: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80",
  },
  {
    codigo: "PG001",
    categoria: "polerones-gamers-personalizados",
    categoriaLabel: "Polerones Gamers Personalizados",
    nombre: "Polerón Gamer Personalizado 'Level-Up'",
    precio: 22990,
    stock: 17,
    stockCritico: 5,
    descripcion:
      "Polerón con capucha, tela afelpada por dentro y estampado personalizable con tu gamer tag, clan o diseño favorito.",
    imagen: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=600&q=80",
  },
  {
    codigo: "ST001",
    categoria: "servicio-tecnico",
    categoriaLabel: "Servicio Técnico",
    nombre: "Mantención y Limpieza PC Gamer",
    precio: 19990,
    stock: 0,
    stockCritico: 0,
    descripcion:
      "Servicio de limpieza interna, cambio de pasta térmica y diagnóstico general para mantener tu equipo funcionando al máximo rendimiento.",
    imagen: "https://images.unsplash.com/photo-1591370874773-6702e8f12fd8?w=600&q=80",
  },
];

// ---------------------------------------------------------------------------
// Categorías (para filtros)
// ---------------------------------------------------------------------------
const CATEGORIES = [
  { value: "juegos-mesa", label: "Juegos de Mesa" },
  { value: "accesorios", label: "Accesorios" },
  { value: "consolas", label: "Consolas" },
  { value: "computadores-gamers", label: "Computadores Gamers" },
  { value: "sillas-gamers", label: "Sillas Gamers" },
  { value: "mouse", label: "Mouse" },
  { value: "mousepad", label: "Mousepad" },
  { value: "poleras-personalizadas", label: "Poleras Personalizadas" },
  { value: "polerones-gamers-personalizados", label: "Polerones Gamers Personalizados" },
  { value: "servicio-tecnico", label: "Servicio Técnico" },
];

// ---------------------------------------------------------------------------
// Regiones y comunas (Chile) — usado en formularios de registro/usuario
// ---------------------------------------------------------------------------
const REGIONES_COMUNAS = {
  "Región Metropolitana de Santiago": [
    "Santiago", "Providencia", "Las Condes", "Ñuñoa", "Maipú", "Puente Alto", "Melipilla",
  ],
  "Región de Valparaíso": ["Valparaíso", "Viña del Mar", "Quilpué", "San Antonio"],
  "Región del Biobío": ["Concepción", "Talcahuano", "Los Ángeles", "Chillán"],
  "Región de la Araucanía": ["Temuco", "Villarrica", "Angol"],
  "Región de Ñuble": ["Chillán", "San Carlos", "Bulnes"],
  "Región de Coquimbo": ["La Serena", "Coquimbo", "Ovalle"],
};

// ---------------------------------------------------------------------------
// Blog / noticias
// ---------------------------------------------------------------------------
const BLOG_POSTS = [
  {
    id: 1,
    titulo: "El nuevo parche de balance llega este mes",
    resumen:
      "Repasamos los principales cambios que traerá la próxima actualización competitiva y cómo afectará el meta actual.",
    imagen: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80",
    contenido:
      "El próximo parche competitivo trae ajustes de balance para varios personajes y armas, además de mejoras de rendimiento en PC y consola. Entre los cambios más relevantes destaca la reducción del tiempo de reaparición en modos de equipo, pensada para dinamizar las partidas y reducir los tiempos muertos. También se suman nuevas opciones de accesibilidad, como paletas de color para daltonismo y subtítulos ampliables. La comunidad competitiva ya está debatiendo cómo estos cambios moverán el meta de los próximos torneos, y desde Level-Up Gamer estaremos cubriendo los resultados de los primeros campeonatos apenas se publique la actualización.",
  },
  {
    id: 2,
    titulo: "Cómo elegir tu primera silla gamer sin arrepentirte",
    resumen:
      "Altura, soporte lumbar, material y reclinación: la guía rápida para no perderte entre tantas opciones del mercado.",
    imagen: "https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=800&q=80",
    contenido:
      "Elegir una silla gamer no debería depender solo del color o el logo en el respaldo. Antes de comprar, revisa tres cosas: el rango de altura del asiento (debe permitir que tus rodillas queden a 90°), el soporte lumbar (ajustable es mejor que fijo) y el material del tapiz (el cuero sintético transpira menos que la tela, así que si juegas en sesiones largas, la tela suele ser más cómoda). También vale la pena fijarse en el peso máximo soportado y en si los reposabrazos son 3D o 4D, porque eso cambia bastante la comodidad de los antebrazos durante partidas largas. Con esos cuatro puntos resueltos, el resto es cuestión de presupuesto y estética.",
  },
];

// ---------------------------------------------------------------------------
// Usuario administrador semilla (se crea solo si no existe aún en localStorage)
// ---------------------------------------------------------------------------
const SEED_USERS = [
  {
    run: "123456785",
    nombre: "Admin",
    apellidos: "Level-Up",
    correo: "admin@duoc.cl",
    password: "admin123",
    fechaNacimiento: "1990-01-01",
    tipoUsuario: "Administrador",
    region: "Región Metropolitana de Santiago",
    comuna: "Santiago",
    direccion: "Av. Siempre Viva 123",
  },
  {
    run: "987654325",
    nombre: "Valentina",
    apellidos: "Rojas Pardo",
    correo: "vrojas@gmail.com",
    password: "vendedor1",
    fechaNacimiento: "1996-05-14",
    tipoUsuario: "Vendedor",
    region: "Región de Valparaíso",
    comuna: "Viña del Mar",
    direccion: "Calle Los Álamos 456",
  },
];
