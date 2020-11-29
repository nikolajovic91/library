import {useImperativeHandle, forwardRef} from 'react'
import {useForm} from "react-hook-form";
import dataJSON from '../api/data.json'
import {useData} from "../context/DataContext";

const Step1 = forwardRef(({handleNext, handleBack, activeStep, getData, checked, setChecked}, ref) => {

    const {setValues} = useData();
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        console.log(data);
        setValues(data);
        handleNext()
    };

    //
    useImperativeHandle(
        ref,
        () => ({
            onSubmitt() {
                handleSubmit(onSubmit);
            }
        }),
    );
    return (

        <div className="">
            <form className="genres">
                {dataJSON.genres.map(genre => {
                    return (
                        <div className={genre.id === checked ? 'genre-btn grey' : 'genre-btn'}
                             key={genre.id}>
                            <label onClick={() => setChecked(genre.id)}
                                   className='genres__label'
                                   htmlFor={genre.name}>{genre.name}</label>
                            <input name="genre"
                                   id={genre.name}
                                   style={{visibility: 'hidden', width: '1px', height: '1px'}}
                                   type="radio"
                                   value={genre.name}
                                   ref={register}/>
                        </div>
                    )
                })}
                <div className='form__btns'>
                    <button className="prev-btn" disabled={activeStep === 0} onClick={handleBack}>Back</button>
                    <button className="next-btn" disabled={!checked} onClick={handleSubmit(onSubmit)}>Next</button>
                </div>

            </form>
        </div>
    );
});

export default Step1;
