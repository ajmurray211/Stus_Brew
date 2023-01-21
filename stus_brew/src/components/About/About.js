import './about.css'
import stu from './stu.png'

const About = (props) => {
    return (
        <div>
            <h1>Information about the Stu that loves his brew</h1>
            <p>
                Stu’s Brew is an up and coming business with the hopes of opening a storefront in Southern
                California soon. My name is Claire and I’m from Dana Point, CA. It is a dream of mine to open
                a coffee shop in memory of my Grandpa Stu. Our early morning trips to the coffee shop is one
                of my fondest memories and I hope my store can give you similar memories. I make anything from
                cakes, to cookies, to breads which are all thoughtfully made with family-owned recipes. Each of
                those items pair perfectly with a cup of Stu’s brewed coffee.
            </p>
            {/* <img src={stu} alt='black and grey picture of stu' /> */}
        </div >
    );
}

export default About;
