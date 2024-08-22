import './../../assets/css/Button.css';
import styles from './../../assets/css/Button.module.css';
const Button = ()=> {  //jsx
    return (
        <button className={styles.buttonGreen + " btn-green btn btn-primary"}><i class="bi bi-wrench"></i>Green</button>
    );
}
export default Button;