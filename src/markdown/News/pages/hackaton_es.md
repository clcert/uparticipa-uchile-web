# Convocatoria a Hackaton sobre Aleatoriedad Verificable

#### ¿Qué es Hackaton - Aleatoriedad Verificable?

Un evento que busca nuevas aplicaciones que hagan uso de servicios que ofrezcan *aleatoriedad verificable* o *números aleatorios verificables*. A diferencia de la generación aleatoria común, un servicio de aleatoriedad verificable **genera números aleatorios de manera que cualquier persona puede verificar que ese número no fue manipulado** por el servicio generador, y es realmente aleatorio. Para más información revisar sección [*Usando Aleatoriedad Verificable*](#aleatoriedad).

#### ¿Cuándo? ¿Dónde?

<i class="fa fa-calendar" aria-hidden="true"></i> Fecha: **Sábado 24 de Agosto de 2019**  
<i class="fa fa-clock-o" aria-hidden="true"></i> Horario: **10:00 a 18:00**  
<i class="fa fa-map-marker" aria-hidden="true"></i> Lugar: **DCC, 2° Piso Edificio Poniente, Beauchef 851**

#### ¿Quién organiza?

Organiza [**Random UChile**](https://random.uchile.cl), un proyecto perteneciente al Laboratorio de Seguridad Computacional y Criptografía Aplicada (CLCERT), del Departamento de Ciencias de la Computación (DCC), de la Facultad de Ciencias Físicas y Matemáticas (FCFM) de la Universidad de Chile.
También cuenta con el apoyo de [**OpenBeauchef**](http://www.openbeauchef.cl/), iniciativa perteneciente a la FCFM de la Universidad de Chile.

#### ¿Quiénes pueden participar?

La Hackaton está destinada a **estudiantes universitarios** que tengan ganas de desarrollar ideas que usen *aleatoriedad verificable*.

<!-- Random UChile presenta **Hackaton - Aleatoriedad Verificable**, evento que está destinado a estudiantes universitarios interesados en programar y pasar un buen día aprendiendo y desarrollando ideas innovadoras relacionadas con *aleatoriedad verificable*. Si tienes dudas sobre qué significa este concepto, revisar sección [*Usando Aleatoriedad Verificable*](#aleatoriedad) más abajo.

La Hackaton se llevará a cabo el día **Sábado 24 de Agosto de 2019 de 10:00 a 18:00** en el Departamento de Ciencias de la Computación de la FCFM, ubicada en **Beauchef 851, 2° piso Edificio Poniente**. -->

**TL;DR**: Ven a programar un día Sábado junto a tus amig@s e implementen un prototipo de alguna aplicación que posea un carácter aleatorio y permita verificar que esa aleatoriedad no tuvo ninguna manipulación.

### Formulario de Inscripción

Para poder participar de la Hackaton es necesario inscribirse previamente. Podrán participar **grupos de estudiantes entre 3 a 5 personas**. En el formulario de inscripción puedes inscribir a todo tu grupo directamente, o bien, si no tienes grupo, **puedes inscribirte individualmente** para luego, con ayuda de la organización, poder asignarte un grupo con el cual participar en el día del evento. **Al menos 1 participante del grupo debe ser estudiante de la FCFM de la Universidad de Chile**.

&#x27A1; <i class="fa fa-pencil-square-o" aria-hidden="true"></i> <a href="https://forms.gle/RFLuKrB7DqKex4iV7" target="\_blank" style="font-size: larger">Ir al Formulario de Inscripción</a>

### Categorías y Premios

En esta hackaton se premiará al grupo que presente el **Mejor Prototipo**, aspecto que premiará al mejor desarrollo y a la aplicación mejor lograda. Así mismo se premiará al grupo que presente el **Mejor Impacto**, destacando la idea que tenga mayor impacto y tenga una manera inteligente de hacer uso de un servicio que provea aleatoriedad verificable. (Una rúbrica más detallada del proceso de evaluación será enviada a los participantes con anticipación.)

Además se **sorteará un premio al azar** entre los distintos participantes que no pertenezcan a uno de los dos grupos premiados anteriormente.

Los tres premios (Mejor Prototipo, Mejor Impacto y Premio al azar) serán **Juegos de Mesa**, para que puedan disfrutar entre los distintos integrantes del grupo ganador.

- Premios Categoría Mejor Prototipo: 7 Wonders + Cortex Challenge 2
- Premios Categoría Mejor Impacto: 7 Wonders + Cortex Challenge 2
- Premio Al Azar: Splendor

Los grupos van a poder **implementar cualquier pieza de software** que se ajuste mejor a la idea a desarrollar: aplicación para móvil, aplicación web, aplicación para escritorio, extensión de navegador, bot de Twitter o Telegram, entre otros; **cualquier lenguaje de programación** es permitido para implementar el prototipo.

Las aplicaciones desarrolladas durante el día se deberán **exponer al final de la jornada en una pequeña presentación** (*elevator pitch*), la cual será evaluada por 3 jueces:

- Alejandro Hevia, académico del DCC y Principal Investigador del proyecto Random UChile.
- Jocelyn Simmonds, académica del DCC.
- Felipe Ñancupil, Líder Beauchef Acelera, perteneciente a OpenBeauchef.

## Usando Aleatoriedad Verificable <a name="aleatoriedad"></a>

La generación de *Aleatoriedad Verificable* no solo busca generar números aleatorios, sino que debe poseer dos propiedades adicionales:  
1. La aleatoriedad generada debe **permanecer en el tiempo** con la imposibilidad de ser modificada luego de ser publicada por primera vez.  
2. Debe proveer un mecanismo de poder verificar que la **aleatoriedad generada no fue manipulada** por nadie, ni siquiera por el servicio que la generó.

Esto permite que diversos procesos de carácter aleatorio puedan ser verificados luego de ser ejecutados para así **eliminar cualquier indicio de manipulación del resultado** del proceso. Más abajo podrás conocer distintos casos de uso donde la *aleatoriedad verificable* ha resultado muy útil y necesaria, en la sección [*Ejemplos y Casos de Uso*](#ejemplos).

Existen diversos servicios que proveen *aleatoriedad verificable*, cada uno de ellos con características distintas:

1. **Random UChile**: es un servicio centralizado, que emite un número aleatorio de 512 bits cada un minuto. La **entropía necesaria para generar dicho número se extrae de diversas fuentes externas, fuera del control de Random UChile**. Para conocer más sobre el servicio <a href="https://random.uchile.cl" target="\_blank">visitar su sitio web</a> y revisar la <a href="https://random.uchile.cl/development" target="\_blank">sección development</a> para conocer como utilizar la API ofrecida.
2. **NIST Randomness Beacon**: es un servicio centralizado, que también emite un número aleatorio de 512 bits cada un minuto. En cambio, la **entropía necesaria para generar dicho número es extraída de un proceso cuántico llevado a cabo de manera interna**. Para conocer más del servicio y de como utilizar la API ofrecida <a href="https://beacon.nist.gov/home" target="\_blank">visitar su sitio web</a> (en inglés).
3. **drand**: es un servicio distribuido, que también emite un número aleatorio de 512 bits cada un minuto. Dicho número se genera a través de un **esquema de firma distribuida que es llevado a cabo por distintos nodos (organizaciones) repartidas alrededor del mundo** que contribuyen a la generación de aleatoriedad. Para más información visitar la <a href="https://random.uchile.cl/projects/league-of-entropy" target="\_blank">subsección Liga de la Entropía</a> en el sitio web de Random UChile, además del siguiente <a href="https://blog.cloudflare.com/league-of-entropy/" target="\_blank">post en el blog de Cloudflare</a> (en inglés), una de las organizaciones participantes.

## Ejemplos y Casos de Uso <a name="ejemplos"></a>

### 1. Sorteos de Instagram

¿Has participado de un sorteo en Instagram y te has quedado con dudas sobre el resultado? Random UChile ha implementado un prototipo de una extensión para navegadores que permite **realizar un sorteo en Instagram utilizando la aleatoriedad provista por Random UChile**, lo que permite que cualquier persona pueda verificar que el resultado entregado se condice con la aleatoriedad entregada por Random UChile, y por lo tanto, que no ha sido manipulado y no fue "elegido a dedo". Para más información sobre la extensión <a href="https://random.uchile.cl/apps/random-comments/" target="\_blank">visitar este sitio web</a> y su <a href="https://github.com/clcert/beacon-random-comments" target="\_blank">repositorio en GitHub.</a>

<!-- <br><br>
<div style="text-align: center">
  <iframe width="80%" height="400" src="https://www.youtube.com/embed/lW0qVhi2tEs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div> -->

### 2. Selección de Funcionarios en Contraloría

La Contraloría General de la República necesita auditar de manera periódica a funcionarios públicos de manera aleatoria. Para ello, necesita escoger al azar un grupo de funcionarios a lo largo de Chile. Para poder evitar acusaciones de "persecución política" o críticas similares, la **Contraloría puede realizar la selección utilizando la aleatoriedad provista por Random UChile**, permitiendo la verificación del proceso de selección por parte de cualquier persona que quiera cerciorarse que la selección fue realizada correctamente y totalmente al azar. Este es un *proyecto en desarrollo* realizado por Random UChile conjuntamente con la Contraloría General de la República.

### 3. Selección de Vocales de Mesa

La selección de los vocales de mesa en cada elección realizada en Chile siempre es tema de debate, poniendo en duda de que tan al azar es dicha selección. Si bien la ley permite cierta arbitrariedad en la selección, hay una parte que debe ser aleatoria, y la **integración de aleatoriedad verficable, además de permitir la verificación de que el proceso no fue 100% arbitrario, aumenta la transparencia del proceso** en general, ya que para poder verificarlo es necesario conocer todos los pasos que fueron llevados a cabo en la selección. Este es un *trabajo en desarrollo* realizado por Random UChile conjuntamente con el Servicio Electoral.

### 4. Juegos

Muchos juegos poseen distintas variables que son de naturaleza aleatoria: selección de escenarios, movimiento de enemigos o distintas circunstancias que van sucediendo a medida que el juego avanza. El **uso de aleatoriedad verificable permite la replicación de estos diversos factores para que distintos jugadores puedan jugar exactamente bajo las mismas condiciones y medirse bajo una misma vara**. Obviamente también permite el desarrollo de aplicaciones inherentemente aleatorias, como puede ser el lanzamiento de dados o sacar naipes de una baraja, de manera verificable.

<p style="color: red; background-color: beige"><b>CASO DE NO USO</b>: Recuerda que la aleatoriedad generada es <b>pública</b>, por lo tanto no debe utilizarse como semilla para la generación de claves o secretos. Si utilizas un valor generado públicamente como semilla, un adversario podría utilizar ese mismo valor y conocer tus claves!</p>

#### Pre-Evento Informativo de la Hackaton

<i class="fa fa-calendar" aria-hidden="true"></i> Fecha Pre-evento: **Miércoles 14 de Agosto de 2019**  
<i class="fa fa-clock-o" aria-hidden="true"></i> Horario Pre-evento: **12:00**  
<i class="fa fa-map-marker" aria-hidden="true"></i> Lugar Pre-evento: **OpenBeauchef, Ala Sur 2° Piso Edificio Poniente, Beauchef 851**

Haremos una reunión informativa este día. Ven a resolver todas tus dudas, conocer con más profundidad los distintos casos de uso, discutir tus ideas para la Hackaton, buscar grupo al cual integrarte, o simplemente informarte más sobre el evento.

## Preguntas y Sugerencias

Para más información o si tienes dudas o sugerencias sobre la Hackatón, contáctanos en las siguientes opciones:

&#x27A1; <i class="fa fa-envelope-o" aria-hidden="true"></i> Correo Electrónico: **random(arroba)uchile.cl**  
&#x27A1; <i class="fa fa-telegram" aria-hidden="true"></i> Grupo de Telegram: <a href="https://t.me/hackatonRandomUChile" target="\_blank">@hackatonRandomUChile</a>  
&#x27A1; <i class="fa fa-user" aria-hidden="true"></i> En persona: **Oficina 336 Edificio Norte, DCC**

## Recursos Útiles para la Hackaton

### Usando Random UChile

1. [Acerca de Random UChile](https://random.uchile.cl/about/)
1. [API completa de Random UChile](https://random.uchile.cl/development/)
1. [Como utilizar la API de Random UChile](https://github.com/clcert/beacon-random-comments/blob/master/documentation/randomuchile.md)
1. [Ejemplo de Uso "Lotería"](https://github.com/clcert/beacon-random-comments/blob/master/documentation/lotterytutorial.md)
1. [Video Aplicación "Random Comments"](https://www.youtube.com/watch?v=s8_I185b0i8)

### Generadores Pseudoaleatorios

1. [Generador de Números Pseudoaleatorios](https://es.wikipedia.org/wiki/Generador_de_n%C3%BAmeros_pseudoaleatorios) (wikipedia)
1. [Implementación de PRNG ChaCha20](https://github.com/FrancoPinoC/ChaCha20-Generator-Utilities) (desarrollado por Franco Pino)
