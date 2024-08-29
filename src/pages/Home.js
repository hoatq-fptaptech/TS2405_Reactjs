import HomeAbout from "../components/UI/HomeAbout";
import HomeFeature from "../components/UI/HomeFeature";
import OurProduct from "../components/UI/OurProducts";

const Home = ()=>{
    const about_me = "Best Organic food in the world!";
    const desc_txt = "Uống nước muối vào buổi sáng sẽ đặc biệt có lợi cho những người tập thể dục thường xuyên, đổ mồ hôi nhiều hoặc sống ở vùng có khí hậu nóng… Tuy nhiên bạn cần lưu ý một số điều dưới đây.";
    const fas = [
        "Tempor erat elitr rebum at clita",
        "Aliqu diam amet diam et eos",
        "Clita duo justo magna dolore erat amet"
    ];

    const features = [
        {
            icon:"img/icon-1.png",
            label: "Natural Process",
            text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo."
        },
        {
            icon:"img/icon-2.png",
            label: "Organic Products",
            text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo."
        },
        {
            icon:"img/icon-3.png",
            label: "Biologically Safe",
            text: "Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo."
        }
    ]
    const products = [
        {
            thumbnail: "img/product-1.jpg",
            name: "Fresh Tomato",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-1.jpg",
            name: "Fresh Tomato",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-3.jpg",
            name: "Fresh Tomato",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-4.jpg",
            name: "Fresh Tomato",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-5.jpg",
            name: "Fresh Tomato",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-6.jpg",
            name: "Fresh Tomato",
            old_price: 29.99,
            price: 19.00
        },
        {
            thumbnail: "img/product-4.jpg",
            name: "Fresh Tomato",
            old_price: 29.99,
            price: 20.00
        },
        {
            thumbnail: "img/product-8.jpg",
            name: "Fresh Tomato",
            old_price: 49.99,
            price: 19.00
        }
    ]
    return (
        <>
            <HomeAbout label={about_me} sub_title={desc_txt} list={fas}><i>Hello world!</i></HomeAbout>
            <HomeFeature features={features} title="Our Features"/>
            <OurProduct products={products}/>
        </>
    )
}
export default Home;