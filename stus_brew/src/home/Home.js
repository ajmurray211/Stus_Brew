import Scroller from '../Scroller'
import './home.css'

const Home = () => {
    const mainImgs = [
        {
            src: process.env.PUBLIC_URL + '/assets/eggs-flour.png',
            altText: 'Slide 1',
            caption: 'Slide 1',
            key: 1,
        },
        {
            src: process.env.PUBLIC_URL + '/assets/dough.png',
            altText: 'Slide 2',
            caption: 'Slide 2',
            key: 2,
        },
        {
            src: process.env.PUBLIC_URL + '/assets/croissants.png',
            altText: 'Slide 3',
            caption: 'Slide 3',
            key: 3,
        },
    ];

    
    return (
        <div>
            <Scroller
                items={mainImgs} />
        </div>
    );
}

export default Home;