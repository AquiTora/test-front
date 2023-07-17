import style from './Content.module.scss';

const CardLayout = ({ card }) => {
    return (
        <div className={style.card}>
            <img src={card.img}/>
            <p className={style.card__tag}>
                {card.tags}
            </p>
            <h1 className={style.card__title}>
                {card.title}
            </h1>
            <div className={style.card__meta}>
                <p>{card.autor}</p>

                <ul className={`${style.card__meta} ${style.list}`}>
                    <li>{card.date}</li>
                    <li>{card.views} Views</li>
                </ul>
            </div>           
            <p className={style.card__text}>
                {card.text}
            </p>            
        </div>
    )
}

const Content = ({ card }) => {
    return (
        <div className={style.content}>
            {card.map((item) => {
                return (
                    <div>
                        <CardLayout
                            card={item}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default Content;