const HomeAbout = (props)=>{
    const list = props.list;
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-5 align-items-center">
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                        <div className="about-img position-relative overflow-hidden p-5 pe-0">
                            <img className="img-fluid w-100" src="/img/about.jpg"/>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <h1 className="display-5 mb-4">{props.label}</h1>
                        <p className="mb-4">{props.sub_title}</p>
                        {
                            list.map((item,key)=>{
                                return <p key={key}><i className="fa fa-check text-primary me-3"></i>{item}</p>
                            })
                        }
                    
                        <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">{props.children}</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomeAbout;