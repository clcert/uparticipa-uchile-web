import FAQScreen from "../pages/FAQ"
import News from "../pages/News";
import People from "../pages/People"
import Demo from "../pages/Demo"

export const menuItems = [
    // {
    //     text: 'Cómo Votar',
    //     url: '/video',
    //     component: <VideoScreen />
    // },
    {
        text: 'Preguntas frecuentes',
        url: '/faq',
        component: <FAQScreen />
    }, {
        text: 'Equipo',
        url: '/equipo',
        component: <People />
    },
    // {
    //     text: 'Elecciones',
    //     url: '/elecciones',
    //     component: <PastElectionsScreen />
    // },
    {
        text: 'Noticias',
        url: '/noticias',
        component: <News />
    }
]
