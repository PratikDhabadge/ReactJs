import WelcomeDates from "./WelcomeDates";
import Cart from './Card';
// import './Welcome.css'

function Welcome(props){
    return(
        <Cart className="expenses-item">
            <div className="class">
                <h1>Welcome</h1>
                <h2>{props.title} a.k.a {props.identity}</h2>
                <WelcomeDates date={props.date}></WelcomeDates>
            
            </div>
        </Cart>
    );
}

export default Welcome