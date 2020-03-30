import React from 'react';
import styles from './Form.module.css';
import useSelect from '../hooks/useSelect';

const Form = ({setCategory}) => {

    const OPTIONS = [
        {value: 'general', label: 'General'},
        {value: 'health', label: 'Health'},
        {value: 'science', label: 'Science'},
        {value: 'sports', label: 'Sports'},
        {value: 'technology', label: 'Technology'},
        {value: 'business', label: 'Business'},
    ];

    //use custom hook -> useSelect
    const [ category, SelectNews ] = useSelect('general', OPTIONS);


    //when user submit the category
    const newsSearch = e => {
        e.preventDefault();
        setCategory(category);
    }

    return (
        <div className={`${styles.search} row`}> 
            <div className='col s12 m8 offset-m2'>
                <form
                    onSubmit={newsSearch}
                >
                    <h2 className={styles.heading}>Search for news by category</h2>
                    <SelectNews
                    />
                    <div className='input-field col s12'>
                        <input
                            type='submit'
                            className={` btn-large  teal darken-1 ${styles.btn_block}`}
                            value='Search'
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;
