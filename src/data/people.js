import AHevia from '../assets/images/people/ahevia.jpg';
import CGomez from '../assets/images/people/cgomez.jpg';
import CJaramillo from '../assets/images/people/cjaramillo.jpg'
import FMacias from '../assets/images/people/fmacias.jpg'
import ERiveros from '../assets/images/people/eriveros.jpg'
import MApablaza from '../assets/images/people/mapablaza.jpg'
import RDelafuente from '../assets/images/people/rdelafuente.jpg'

export const peopleList = [
    {
        name: 'Alejandro Hevia',
        role: 'Coordinador Académico',
        picture: AHevia,
        active: true,
        contact: {
            mail: 'ahevia@dcc.uchile.cl',
            twitter: 'ahevia'
        }
    },
    {
        name: 'Camilo Gómez',
        role: 'Coordinador Operativo',
        picture: CGomez,
        active: true,
        contact: {
            mail: 'cjgomez@uchile.cl',
            twitter: 'milogomez__'
        }
    },
    {
        name: 'Cristobal Jaramillo',
        role: 'Ingeniero de Desarrollo e Investigación',
        picture: CJaramillo,
        active: true,
        contact: {}
    },
    {
        name: 'Fernanda Macías',
        role: 'Ingeniera de Desarrollo e Investigación',
        picture: FMacias,
        active: true,
        contact: {}
    }, {
        name: 'Eduardo Riveros',
        role: 'Ingeniero de Ciberseguridad e Infraestructura',
        picture: ERiveros,
        active: true,
        contact: {}
    }, {
        name: 'Marta Apablaza',
        role: 'Periodista',
        picture: MApablaza,
        active: true,
        contact: {}
    }, {
        name: 'Raúl de la Fuente',
        role: 'Estudiante de Pregrado',
        picture: RDelafuente,
        active: true,
        contact: {}
    }
]
