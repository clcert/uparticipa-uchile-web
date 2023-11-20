import React from 'react';

const VideoScreen = () => {
	return (
		<div class="container">
			<h1 class="title pt-2" id="election-current">
			¿CÓMO VOTAR UTILIZANDO PARTICIPA UCHILE?
			</h1>
			<h1 class="subtitle" id="election-current">
			Revisa el vídeo a continuación para aprender a votar utilizando
			Participa UChile
			</h1>
			<figure class="image is-16by9">
			<iframe
			class="has-ratio"
			width="640"
			height="360"
			src="https://www.youtube.com//embed/-_nmdpj6IBU"
			frameborder="0"
			allowfullscreen
			></iframe>
			</figure>
		</div>
	)
}

export default VideoScreen
