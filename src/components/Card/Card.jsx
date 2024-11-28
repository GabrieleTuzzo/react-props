import style from './card.module.css';
import Button from '../Button/Button';

function Card() {
    return (
        <div className={style.Card}>
            <img
                className={style.CardImg}
                src="https://picsum.photos/600/400"
                alt="..."
            ></img>
            <div className={style.CardBody}>
                <h5 className={style.CardTitle}>Card title</h5>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam magnam enim perferendis culpa maiores nobis! Nostrum
                    aliquam cumque blanditiis maxime quo dignissimos, doloremque
                    dolore optio id facere mollitia expedita quam!
                </p>
                <Button></Button>
            </div>
        </div>
    );
}

export default Card;
