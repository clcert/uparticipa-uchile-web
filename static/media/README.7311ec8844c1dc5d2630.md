# Sección de Noticias

Es posible añadir de forma sencilla nuevas entradas a la **secciones de noticias y proyectos** de la página.
Para ello es necesario un conocimiento básico de *Markdown* (dejo un [cheatsheet de referencia](https://commonmark.org/help/)).

Una nueva entrada estará compuesta de un resumen (indexado en */news*), además de la noticia completa que dispondrá de su propia ruta.
Entonces...

## ¿Cómo añadir una nueva entrada?
> ⚠️ **IMPORTANTE** No añadir directamente imágenes en el markdown, pues la librería utilizada no las soporta.
> Adicionalmente, las rutas sugeridas para guardar la nota completa y el resumen **no son obligatorias**, basta sólo especificarlo bien en `entries.json`.

1. Debemos crear un resumen en `.md` y guardarlo en la carpeta `/src/markdown/{news, projects}/summary`. Idealmente indicar en el archivo el idioma de la entrada, aunque esto es opcional.
2. Debemos crear la nota completa (también en formato *markdown*) y guardarlo en la carpeta `/src/markdown/{news, projects}/pages`. Nuevamente se recomienda añadir el idioma de la entrada en el nombre del archivo.
3. Hasta ahora solo hemos creado las entradas, pero aún falta que se muestren en la página. Para mostrar el contenido es necesario editar `entries.json` indicando los siguientes parámetros.

   | Campo | Descripción |
   |---|---|
   | `date` | Fecha de Publicación (yyyy-MM-dd) |
   | `summaryFile` | Ruta del *.md* con el resumen de la entrada.|
   | `file` |  Ruta del *.md* con la noticia completa.|
   | `image` | Ruta de la imagen (se mostrará junto al resumen).|
   | `lang` | Idioma `es | en` | 
   | `route` | Ruta de la nota (`/news/...`) |
   | `show` | ¿Listar? (permite ocultar una entrada fácilmente) |
   
