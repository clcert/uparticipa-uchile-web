import AHevia from '../assets/images/people/ahevia.jpg';
import CGomez from '../assets/images/people/cgomez.jpg';
import BOrtiz from '../assets/images/people/bortiz.jpg';
import SMiranda from '../assets/images/people/smiranda.jpg';

import CRojas from '../assets/images/people/crojas.jpg';
import CCsori from '../assets/images/people/ccsori.jpg';
import MVilches from '../assets/images/people/mvilches.jpg';
import JRojas from '../assets/images/people/jrojas.jpg';
import FPino from '../assets/images/people/fpino.jpg';
import AGonzalez from '../assets/images/people/agonzalez.jpg';

export const peopleList = [
	{
		name: 'Alejandro Hevia',
		role: 'main-researcher',
		picture: AHevia,
		active: true,
		contact: {
			mail: 'ahevia@dcc.uchile.cl',
			twitter: 'ahevia'
		}
	},
	{
		name: 'Camilo Gómez',
		role: 'i+d-engineer',
		picture: CGomez,
		active: true,
		contact: {
			mail: 'cgomez@clcert.cl',
			twitter: 'milogomez__'
		}
	},
	{
		name: 'Bryan Ortiz',
		role: 'developer-engineer',
		picture: BOrtiz,
		active: true,
		contact: {
			mail: 'bortiz@dcc.uchile.cl'
		}
	},
	{
		name: 'Sergio Miranda',
		role: 'network-engineer',
		picture: SMiranda,
		active: true,
		contact: {
			mail: 'sem@clcert.cl',
			twitter: 'sem_cl'
		}
	},
	// Previous Collaborators
	{
		name: 'Cristián Rojas',
		role: 'security-engineer',
		picture: CRojas,
		active: false
	},
	{
		name: 'María José Vilches',
		role: 'ux-ui',
		picture: MVilches,
		active: false
	},
	{
		name: 'Constanza Csori',
		role: 'graduate-research',
		picture: CCsori,
		active: false
	},
	{
		name: 'Juan Rojas',
		role: 'graduate-research',
		picture: JRojas,
		active: false
	},
	{
		name: 'Franco Pino',
		role: 'undergraduate-research',
		picture: FPino,
		active: false
	},
	{
		name: 'Alejandro González',
		role: 'undergraduate-assistant',
		picture: AGonzalez,
		active: false
	}
]