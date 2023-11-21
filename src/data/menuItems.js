import FAQScreen from "../pages/FAQ"
import News from "../pages/News";
import PastElectionsScreen from "../pages/PastElections";
import People from "../pages/People"
import VideoScreen from "../pages/Video";

export const menuItems = [
    {
        text: 'video',
        url: '/video',
        component: <VideoScreen />
    },
    {
        text: 'faq',
        url: '/faq',
        component: <FAQScreen />
    },
    {
        text: 'equipo',
        url: '/equipo',
        component: <People />
    },
    {
        text: 'elecciones',
        url: '/elecciones',
        component: <PastElectionsScreen />
    },
    {
        text: 'noticias',
        url: '/noticias',
        component: <News />
    },
]