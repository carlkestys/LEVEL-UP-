# Level-Up Gamer — Tienda Online

Proyecto frontend (HTML + CSS + JavaScript) desarrollado para la **Evaluación Parcial 1** de
la asignatura **DSY1104 – Desarrollo FullStack II** (DuocUC), en base al caso **Forma B: Tienda Level-Up Gamer**.

Tienda online de productos para gamers (consolas, computadores, sillas, accesorios, etc.)
con panel administrador para gestionar productos y usuarios.

## 🚀 Cómo ejecutar el proyecto

No requiere instalación ni build. Basta con abrir `index.html` en el navegador, o servirlo
con cualquier servidor estático, por ejemplo:

```bash
# Con Python
python3 -m http.server 8080

# Con la extensión "Live Server" de VS Code
# clic derecho sobre index.html > "Open with Live Server"
```

Luego visita `http://localhost:8080`.

## 🔑 Usuarios de prueba

| Rol            | Correo               | Contraseña   |
|----------------|-----------------------|-------------|
| Administrador  | admin@duoc.cl          | admin123    |
| Vendedor       | vrojas@gmail.com       | vendedor1   |

También puedes crear una cuenta nueva desde **Registro** (rol Cliente por defecto).
Los correos deben terminar en `@duoc.cl`, `@profesor.duoc.cl` o `@gmail.com`.

## 🗂️ Estructura del proyecto

```
levelup-gamer/
├── index.html                  Home de la tienda
├── productos.html              Catálogo con filtros y buscador
├── producto-detalle.html        Ficha de producto + añadir al carrito
├── carrito.html                 Carrito de compras (localStorage)
├── registro.html                Registro de usuario (validado con JS)
├── login.html                   Inicio de sesión
├── nosotros.html                 Quiénes somos
├── blogs.html / blog-detalle.html   Noticias del mundo gamer
├── contacto.html                 Formulario de contacto
├── css/
│   ├── style.css                Sistema de diseño de la tienda
│   └── admin.css                 Estilos del panel administrador
├── js/
│   ├── data.js                   Productos, categorías, regiones/comunas, usuarios semilla
│   ├── validate.js               Helpers de validación (RUT, correo, largo, etc.)
│   ├── main.js                    Navegación, sesión, contador de carrito
│   ├── auth.js                    Registro / login
│   ├── products.js                Catálogo, filtros, ficha de producto
│   ├── cart.js                    Lógica del carrito
│   ├── blogs.js                   Blogs + formulario de contacto
│   └── admin.js                   Panel administrador (guardia de acceso + CRUD)
└── admin/
    ├── index.html                 Dashboard
    ├── productos.html             Listado de productos
    ├── producto-form.html          Crear / editar producto
    ├── usuarios.html                Listado de usuarios
    └── usuario-form.html            Crear / editar usuario
```

## ✅ Funcionalidades implementadas

- **HTML semántico**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` en todas las vistas.
- **CSS externo y propio**, con paleta y tipografía definidas en el caso (negro + azul eléctrico
  `#1E90FF` + verde neón `#39FF14`, Orbitron + Roboto).
- **Navegación interconectada** entre todas las vistas de la tienda y del administrador.
- **Formularios con validación en JavaScript en tiempo real**, con mensajes de error contextuales:
  - Registro / Login: RUT chileno (algoritmo módulo 11 real), correo restringido a
    `@duoc.cl` / `@profesor.duoc.cl` / `@gmail.com`, largo de contraseña, confirmación de contraseña.
  - Contacto: nombre y comentario obligatorios, correo opcional pero validado si se ingresa.
  - Admin: alta/edición de productos (precio, stock, stock crítico) y usuarios (RUT, región/comuna dependientes).
- **Carrito de compras** con `localStorage`, control de cantidades según stock, cupón de descuento.
- **Roles de usuario**: Administrador (acceso total), Vendedor (solo lectura de productos, sin
  acceso a Usuarios) y Cliente (solo tienda) — el panel `/admin` valida el rol y redirige si corresponde.
- **Regiones y comunas dependientes** (arreglo JS) en los formularios de registro y usuario.

## 📝 Pendiente / próximos pasos

- Conectar a una base de datos real (ver Documento ERS, próxima entrega).
- Implementar backend para persistencia real (hoy se usa `localStorage` como simulación).
- Suite de pruebas automatizadas end-to-end.

---
Proyecto académico — DSY1104 Desarrollo FullStack II — DuocUC.
