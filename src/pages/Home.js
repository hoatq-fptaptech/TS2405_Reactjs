import { useEffect, useState } from "react";
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
    const [products,setProducts] = useState([]);
    const getProductsData = async ()=>{
        const rs = await fetch("https://dummyjson.com/products?limit=12&sortBy=price&order=asc");
        const data= await rs.json();
        setProducts(data.products);
    }
    const [x,setX] = useState(0);
    const [y,setY] = useState(0);
    useEffect(()=>{ // nhiệm vụ: lắng nghe sự thay đổi của state và hành động
        getProductsData();
    },[]); // componentDidmount -> chỉ chạy 1 lần duy nhất sau khi build xong giao diện lần đầu
    useEffect(()=>{
        console.log("x="+x);
    },[x]); // lắng nghe sự thay đổi của x --- trigger
    useEffect(()=>{
        console.log("y="+y);
    },[y]); 
    const changeX = ()=>{ setX(x+1)}
    const changeY = ()=>{ setY(y+1)}
    return (
        <>
            <button className="btn btn-primary" onClick={changeX}>Change X: {x}</button>
            <button className="btn btn-primary"  onClick={changeY}>Change Y: {y}</button>
            <HomeAbout label={about_me} sub_title={desc_txt} list={fas}><i>Hello world!</i></HomeAbout>
            <HomeFeature features={features} title="Our Features"/>
            <OurProduct products={products}/>
        </>
    )
}
export default Home;