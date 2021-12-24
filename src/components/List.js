import Item from './Item';
import React, { useState } from 'react';
import Button from './Button';
import AddBirthdayForm from './AddBirthdayForm';

const items = [
    { id: 1, name: 'Antonio Adame', birthday: '09/04/1995', age: 26 },
    { id: 2, name: 'Cecilia Adame', birthday: '09/04/1998', age: 23 },
    { id: 3, name: 'Alberto Adame', birthday: '03/04/1994', age: 27 },
    { id: 4, name: 'Judith Resendez', birthday: '10/21/1998', age: 23 }
]

const List = (props) => {

    const [ people, setPeople ] = useState(items);
    const [ displayAddBirthdayForm, setDisplayAddBirthdayForm ] = useState(false);

    const handleRemove = (id) => {
        setPeople((prevState) => {
            return prevState.filter(i => i.id !== id);
        });
    }
    const toggleAddBirthdayForm = () => {
        // display form
        setDisplayAddBirthdayForm((prevState) => {
            return !prevState;
        })
    }
    const addBirthday = (birthday) => {
        
        setPeople((prevState) => {
            
            const lastIndex = prevState.length-1
            const lastId = prevState[lastIndex]?.id || 0;
            
            birthday.id = lastId + 1;
            
            return [ ...prevState, birthday ];
        });
        
        
        toggleAddBirthdayForm();
    }

    return (
        <>
            {
                people.map((item) => (
                    <Item key={item.id} { ...item } handleRemove={(id) => handleRemove(id)} />
                ))
            }

            {( (displayAddBirthdayForm) ? 
                <AddBirthdayForm 
                    submitClickHandler={(birthdayData) => addBirthday(birthdayData)}
                    cancelClickHandler={toggleAddBirthdayForm}/> : 
                <Button clickHandler={() => toggleAddBirthdayForm()}>Add Birthday</Button> )}
        </>
    )
}

export default List;