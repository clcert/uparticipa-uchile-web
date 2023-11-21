import React, { useContext } from 'react';
import { GlobalTranslationsContext } from './pages/Contexts';
import {
  	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";	

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

import NewsBreadcrumb from './pages/News/Breadcrumb';

// Markdown entries JSON
import NewsJSON from './markdown/News/entries.json';


export const App = () => {

	const [ t ] = useContext(GlobalTranslationsContext);
	const newsEntries = NewsJSON.entries.filter( (entry) => entry.route !== undefined && entry.file !== undefined);

	return (
		<Router>
			<div className='main-container'>
				<NavBar />
				<Routes>
					<Route exact path='/' element={<Home/>} />
					{ // Pages in Navbar
						menuItems.map( ({url, component}) => (
							<Route exact path={url} element={component} key={url} />
						))
					}
					{ // News publications
						newsEntries.map( (entry) => (
							<Route exact path={entry.route} element={<EntryPage entry={entry} breadcrumb={<NewsBreadcrumb t={t} />}/>} key={entry.route} />
						))
					}
					{/* Others */}
					<Route exact path='/video' element={<VideoScreen />} />
					<Route exact path='/faq' element={<FAQScreen />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</Router>
  	)
}

export default App;
