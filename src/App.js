import React from 'react';
import {
  	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";

// Data
import { menuItems } from './data/menuItems';

// Pages
import Home from './pages/Home';
import VideoScreen from './pages/Video';
import FAQScreen from './pages/FAQ';
import NotFound from './pages/NotFound';

// Components
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer';
import EntryPage from './components/MarkdownEntries/EntryPage';
import ElectionsStats from './components/Home/Stats.jsx'

import NewsBreadcrumb from './pages/News/Breadcrumb';

// Markdown entries JSON
import NewsJSON from './markdown/News/entries.json';


export const App = () => {
	const newsEntries = NewsJSON.entries.filter( (entry) => entry.route !== undefined && entry.file !== undefined);

	return (
		<Router basename={process.env.PUBLIC_URL}>
			<div className='block main-container'>
				<div className='container'>
					<div className='block'>
						<NavBar />
					</div>
					<div className='block'>
						<Routes>
							<Route exact path='/' element={<Home/>} />
							{ // Pages in Navbar
								menuItems.map( ({url, component}) => (
									<Route exact path={url} element={component} key={url} />
								))
							}
							{ // News publications
								newsEntries.map( (entry) => (
									<Route exact path={entry.route} element={<EntryPage entry={entry} breadcrumb={<NewsBreadcrumb />}/>} key={entry.route} />
								))
							}
							{/* Others */}
							<Route exact path='/video' element={<VideoScreen />} />
							<Route exact path='/faq' element={<FAQScreen />} />
							<Route path="*" element={<NotFound />} />
						</Routes>
					</div>
				</div>
				<ScrollToTop smooth='true' color='#004a91'/>*
			</div>
			<div className='block mb-0'>
				<ElectionsStats />
			</div>
			<div className='block'>
				<Footer />
			</div>
		</Router>
  	)
}

export default App;
