import FAQScreen from "../pages/FAQ"
import News from "../pages/News";
import PastElectionsScreen from "../pages/PastElections";
import People from "../pages/People"
import VideoScreen from "../pages/Video";
import Demo from "../pages/Demo"

export const menuItems = [
    // {
    //     text: 'Cómo Votar',
    //     url: '/video',
    //     component: <VideoScreen />
    // },
    {
        text: 'FAQ',
        url: '/faq',
        component: <FAQScreen />
    },
    {
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
    },
    {
        text: 'DEMO',
        url: '/demo',
        component: <Demo />
    }
]