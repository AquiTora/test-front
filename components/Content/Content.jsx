import style from './Content.module.scss';

const CardLayout = ({ card }) => {
    return (
        <div className={style.card}>
            <img
                srcSet={`
                    ${card.img} 1x,
                    ${card.img_2x} 2x
                `}
                src={card.img} 
            />
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

const Content = ({ cards, searchRequest, setActive, setModalContent }) => {
    function filtreCards(card, searchRequest) {
        let titleFound = card.title.toUpperCase().match(searchRequest.toUpperCase());
        let textFound = card.text.toUpperCase().match(searchRequest.toUpperCase());

        if (titleFound || textFound) {
            return (
                <div onClick={() => {
                    setActive(true);
                    setModalContent({
                        title: card.title,
                        text: card.text
                    });
                }}>
                    <CardLayout
                        card={card}
                    />
                </div>
            )
        }
    }

    return (
        <div className={style.content}>
            {cards.map((item) => {
                if (searchRequest) {
                    return filtreCards(item, searchRequest);
                } else {
                    return (
                        <div onClick={() => {
                            setActive(true);
                            setModalContent({
                                title: item.title,
                                text: item.text
                            });
                        }}>
                            <CardLayout
                                card={item}
                            />
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Content;