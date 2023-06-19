import './WelcomeDate.css';

function WelcomeDates(props){
    const month= props.date.toLocaleString('en-us', {month: 'long'});
    const day= props.date.toLocaleString('en-us', {day: '2-digit'});
    const year= props.date.getFullYear();

    return(
        <div className='expense-date'>
            <p id='dateFormat'>Active Year : {day} {month} {year}</p>
        </div>
    );
}
export default WelcomeDates