# Nova Pages

Sitio estático de varias páginas (HTML + CSS + JS, sin build ni dependencias).

```
nova-pages/
├── index.html          Inicio
├── servicios.html
├── portafolio.html
├── precios.html
├── contacto.html       Formulario (Formspree)
├── 404.html            Página de error (Vercel la usa sola)
├── favicon.svg
├── vercel.json         Configuración de Vercel
├── css/styles.css      Todos los estilos
└── js/
    ├── demos.js        Maquetas de ejemplo (odontología, gimnasio, etc.)
    └── main.js         Menú móvil, pestañas del hero y formulario
```

## Ver el sitio en tu computador

Desde la carpeta del proyecto:

```bash
npx serve .
# o, si tienes Python:
python3 -m http.server 3000
```

Abre `http://localhost:3000`. (También funciona abriendo `index.html` directo, pero un servidor local se parece más a cómo se verá en producción.)

## Desplegar en Vercel (la forma recomendada)

La idea: tu código vive en GitHub y Vercel lo publica solo cada vez que haces `git push`.

1. **Sube el proyecto a un repositorio de GitHub.** Crea un repo nuevo (por ejemplo `nova-pages`) y sube el contenido de esta carpeta, con `index.html` en la raíz del repo.
2. **Crea tu cuenta en [vercel.com](https://vercel.com)** e inicia sesión con GitHub.
3. **Add New → Project** y elige el repositorio `nova-pages`.
4. **Configuración:** en *Framework Preset* deja `Other`. No hay comando de build ni carpeta de salida: deja esos campos vacíos.
5. **Deploy.** En menos de un minuto tendrás una URL como `nova-pages-xxxx.vercel.app`.

A partir de ahí:

- Cada `git push` a la rama principal publica una nueva versión en producción.
- Cada rama o pull request genera una URL de vista previa, útil para probar cambios sin tocar el sitio real.

### Alternativa: con la terminal (CLI)

```bash
npm i -g vercel
vercel login
vercel          # primer despliegue de prueba (preview)
vercel --prod   # despliegue a producción
```

## Dominio propio

En el proyecto de Vercel: **Settings → Domains**, agrega tu dominio y sigue las instrucciones para configurar los registros DNS en el lugar donde lo compraste. Vercel emite el certificado HTTPS automáticamente.

## Importante: plan gratuito y uso comercial

El plan **Hobby** de Vercel es gratis, pero según sus guías de uso justo está restringido a **uso personal y no comercial**. Un sitio que promociona servicios que vendes cuenta como uso comercial, así que para el sitio real de Nova Pages Vercel pide el plan **Pro** (de pago).

Opciones razonables:

- **Aprender y probar:** puedes practicar el flujo completo en Hobby con una copia de prueba.
- **Salir en serio con Vercel:** pasa a Pro cuando publiques el sitio comercial.
- **Mantenerlo gratis:** revisa los términos de otras opciones de hosting estático (por ejemplo Cloudflare Pages o Netlify) antes de decidir. Este proyecto no depende de nada específico de Vercel, así que moverlo es sencillo.

Verifica los precios y condiciones actuales en [vercel.com/pricing](https://vercel.com/pricing) y en su página de *Fair Use Guidelines*, porque pueden cambiar.

## Detalles útiles

- **URLs limpias:** `vercel.json` activa `cleanUrls`, así que `/servicios.html` se sirve como `/servicios`. Los enlaces internos usan `.html` para que también funcionen en local y en GitHub Pages.
- **Formulario:** usa Formspree (`https://formspree.io/f/xwvwbgag`). Si en Formspree restringiste dominios permitidos, agrega el nuevo dominio de Vercel.
- **Correo de contacto:** hoy aparece `novaladingweb@gmail.com` (con "lading"). Si es un error de tipeo, cámbialo en `contacto.html` y en el pie de página de cada archivo.
- **Cambiar WhatsApp:** el número `573138052060` aparece en los enlaces `wa.me` de cada página.
- **Colores y tipografías:** están como variables al inicio de `css/styles.css` (`:root`).
- **Maquetas del portafolio:** se editan en `js/demos.js`.
