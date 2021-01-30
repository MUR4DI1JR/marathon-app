import s from './Layout.module.css';

const Layout = ({id, title, descr, urlBg, colorBg}) => {
    const imgBackground = {};
    if(urlBg !== undefined){
        imgBackground.backgroundImage = `url(${urlBg})`
    }
    if(colorBg !== undefined){
        imgBackground.backgroundColor = colorBg
    }

    return (
        <div>
            <section className={s.root} id={id} style={imgBackground}>
                <div className={s.wrapper}>
                    <article>
                        <div className={s.title}>
                            {title && <h3>{title}</h3>}
                            <span className={s.separator}></span>
                        </div>
                        <div className={s.desc + s.full}>
                            {descr && <p>{descr}</p>}
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
};

export default Layout;