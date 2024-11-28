import style from './card.module.css';
import Button from '../Button/Button';
import placeholder from '../../assets/placeholder.webp';

function Card(props) {
    return (
        <div className={style.Card}>
            <img
                className={style.CardImg}
                src={props.image || placeholder}
                alt="..."
            ></img>
            <div className={style.CardBody}>
                <h5 className={style.CardTitle}>{props.title}</h5>
                <p>{props.content}</p>
                <Button></Button>
            </div>
        </div>
    );
}

export default Card;
