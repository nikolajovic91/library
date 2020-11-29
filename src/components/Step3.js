import React from "react";
import {useForm} from "react-hook-form";
import {useData} from "../context/DataContext";

const Step3 = ({checkedSubgenre, handleBack, handleNext}) => {
    const {register, handleSubmit} = useForm();
    const {setValues} = useData();

    const onSubmit = data => {
        setValues(data);
        handleNext();
    };

    return (
        <form className="">
            {999 === checkedSubgenre && (
                <div className="new__subgenre">
                    <label htmlFor="subgenre">New subgenre</label>
                    <input type="text"
                           id='title'
                           name='subgenre'
                           ref={register({required: true})}
                           placeholder="New subgenre"/>
                    <input type="checkbox"
                           className='req_desc'
                           id='title'
                           name="isDescriptionRequired"
                           ref={register}
                    />
                    <label className='req_desc_label' htmlFor="subgenre">Description is required for this
                        subgenre</label>

                </div>
            )}

            <div className='form__btns'>
                <button className="prev-btn" onClick={handleBack}>Back</button>
                <button className="next-btn" disabled={!checkedSubgenre} onClick={handleSubmit(onSubmit)}>Next</button>
            </div>
        </form>
    );
};

export default Step3;
