import React from 'react';

const FAQScreen = () => {
	return (
		<div className='body-center container'>
			<div className='box-content'>
				<h1 className="title pt-2" id="election-current">Preguntas Frecuentes (FAQ)</h1>
				<article className="message is-primary">
					<div className="message-header">
						<p>1. ¿Cómo se autentican los usuarios?</p>
					</div>
					<div className="message-body has-text-black">
						Todos los votantes de Participa UChile deben contar con una cuenta UChile (cuenta Pasaporte o mi.uchile) puesto que es la única manera de autenticarse en el sistema.
					</div>
				</article>
				<article className="message is-primary">
					<div className="message-header">
						<p>
						2. ¿En qué elecciones se utiliza el sistema Participa UChile?
						</p>
					</div>
					<div className="message-body has-text-black">
						Participa UChile está orientado a elecciones de <span className="has-text-weight-bold">bajo perfil en un contexto universitario</span>, como por ejemplo, elecciones de directores de unidades académicas, consejeros, representantes de funcionarios y elecciones estudiantiles locales.

						Cuando la elección es de alto perfil, como por ejemplo, elecciones de cargos públicos de nivel nacional (presidente y representantes, etc.), la votación electrónica remota es aún un desafío con muchas interrogantes y riesgos significativos. La <a href="https://www.nationalacademies.org/our-work/the-future-of-voting-accessible-reliable-verifiable-technology" target="_blank" rel="noreferrer">recomendación de la comunidad experta internacional</a> para dicho contexto es no utilizar votación remota pues no se conoce un sistema hoy en día que garantice seguridad a un nivel adecuado. Participa UChile no es la excepción.
					</div>
				</article>
				<article className="message is-primary">
				<div className="message-header">
					<p>3. ¿Qué seguridad provee Participa UChile?</p>
				</div>
				<div className="message-body has-text-black">
					Participa UChile es una adaptación del sistema <a href="https://www.usenix.org/legacy/event/sec08/tech/full_papers/adida/adida.pdf" target="_blank" rel="noreferrer">Helios Voting, propuesto por Ben Adida (2008)</a>. Helios ha sido utilizado por entidades como la International Association for Cryptographic Research, y la U. de Louvain-Le Neuve (Bélgica). 

					Participa UChile, tal como Helios, utiliza <span className="has-text-weight-bold">algoritmos matemáticos para mejorar la seguridad del sistema</span>. El sistema permite, por ejemplo, garantizar el secreto del voto encriptando los votos con una clave secreta dividida entre varios custodios. De hecho, el sistema nunca revela (desencripta) algún voto individual sino sólo el resultado final, para lo cual se requiere la cooperación activa de los custodios. Adicionalmente, cualquier persona, sea un participante en la elección o un mero observador pasivo, puede auditar la elección, esto es, verificar matemáticamente que el resultado es consistente con los votos encriptados emitidos. 
				</div>
				</article>
				<article className="message is-primary">
				<div className="message-header">
					<p>4. ¿En qué se diferencia Participa UChile de un sistema de votación cerrado?</p>
				</div>
				<div className="message-body has-text-black">
					Los algoritmos criptográficos del sistema Participa UChile permiten evidenciar intentos externos o internos de manipulación de votos o del total. Otros sistemas cerrados son opacos y sólo entregan el resultado sin mayor explicación. En ellos, tanto el secreto de un voto individual como la integridad del resultado final depende exclusivamente del administrador del sistema informático. Los votantes y la comunidad deben depositar su confianza en el accionar correcto del administrador, sin posibilidad de confirmar si la confianza es merecida o no. Si bien Participa UChile no elimina completamente dicha confianza, la minimiza significativamente, dándole herramientas al votante para confirmar si es merecida o no.
				</div>
				</article>
				<article className="message is-primary">
				<div className="message-header">
					<p>5. ¿Cómo puedo verificar que mi voto ha sido recibido por Participa UChile?</p>
				</div>
				<div className="message-body has-text-black">
				Cada votante, al concluir la selección de sus preferencias y enviar la papeleta con su voto encriptado, recibe un código serial identificador de la papeleta. Este código no revela su voto ni permite revelarlo a un tercero, pero sí permite identificar la papeleta encriptada dentro de la lista de papeletas encriptadas recibidas por el servidor. 
				</div>
				</article>
				<article className="message is-primary">
					<div className="message-header">
					<p>6. ¡El sistema permite votar más de una vez! ¿Es un error o falla?</p>
					</div>
					<div className="message-body has-text-black">
					El sistema permite que, cualquier votante, luego de haber votado pueda ingresar nuevamente y reiniciar el proceso de votación, emitiendo un nuevo voto que reemplaza al voto anterior. El sistema nunca almacena más de un voto por votante. Si bien para un votante puede parecer que emite un "segundo voto", eso no es efectivo, pues efectivamente está reemplazando su voto. En particular, no puede darse el caso que un mismo votante tenga dos votos o más, siempre tendrá a lo más un voto. Esta funcionalidad es intencional y, si bien no existe en un sistema de votación de “lápiz y papel”, es posible de implementar de forma segura en un sistema electrónico. Es una medida estándar de mitigación parcial contra el problema de la coerción. Si bien no es perfecta, es simple de implementar y en entornos de baja coerción se considera razonablemente efectiva. Para la tranquilidad de todas y todos, podemos aclarar que no es una característica errónea o en necesidad de arreglo, pues no viola la unicidad del voto.
				</div>
				</article>
				<article className="message is-primary">
					<div className="message-header">
					<p>7. ¿participa.uchile.cl ó participauchile.cl? ¿Cuál es la dirección web correcta?</p>
					</div>
					<div className="message-body has-text-black">
					Ambas direcciones web son válidas para acceder a las votaciones y consultas realizadas por Participa UChile. 
				</div>
				</article>
			</div>
		</div>
	)
}

export default FAQScreen
