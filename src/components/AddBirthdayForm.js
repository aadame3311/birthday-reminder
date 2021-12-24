import '../styles/AddBirthdayForm.css';
import Button from './Button';

const AddBirthdayForm = (props) => {
    const {
        submitClickHandler,
        cancelClickHandler
    } = props;

    let name;
    let birthday;
    let age;

    const handleNameInputChange = (e) => {
        name = e.target.value;
    }
    
    const handleBirthdayInputChange = (e) => {
        birthday = e.target.value;
    }
    const handleAgeInputChange = (e) => {
        age = e.target.value;
    }


    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            submitClickHandler({ name, birthday, age })
        }} className="add-birthday-form form">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input onChange={(e) => handleNameInputChange(e)} name="name"></input>

                <label htmlFor="birthday">Birthday:</label>
                <input onChange={(e) => handleBirthdayInputChange(e)} name="birthday"></input>

                <label htmlFor="age">Age:</label>
                <input onChange={(e) => handleAgeInputChange(e)} name="age"></input>
            </div>

            <Button>Submit</Button>
            <Button clickHandler={cancelClickHandler}>Cancel</Button>
        </form>
    )
}

export default AddBirthdayForm;