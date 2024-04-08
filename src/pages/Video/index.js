import React from 'react';

const VideoScreen = () => {
	return (
		<div className='pt-5'>
			<div className='block'>
				<h1 className='title has-text-centered has-text-white'>
					¿Cómo Votar Utilizando Participa UChile?
				</h1>
			</div>
			<div className='block'>
				<h2 className='subtitle has-text-white'>
					Revisa el vídeo a continuación para aprender a votar utilizando Participa
					UChile:
				</h2>
			</div>
			<div className='block'>
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
		</div>
	)
}

export default VideoScreen
