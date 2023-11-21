import React from 'react';

const VideoScreen = () => {
	return (
		<div className="container">
			<h1 className="title pt-2" id="election-current">
			¿CÓMO VOTAR UTILIZANDO PARTICIPA UCHILE?
			</h1>
			<h1 className="subtitle" id="election-current">
			Revisa el vídeo a continuación para aprender a votar utilizando
			Participa UChile
			</h1>
			<figure className="image is-16by9">
			<iframe title='video'
				className="has-ratio"
				width="640"
				height="360"
				src="https://www.youtube.com//embed/-_nmdpj6IBU"
				allowFullScreen
			></iframe>
			</figure>
		</div>
	)
}

export default VideoScreen
