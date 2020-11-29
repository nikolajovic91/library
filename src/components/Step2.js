import React from 'react'
import {useForm} from "react-hook-form";
import dataJSON from '../api/data.json'
import {useData} from "../context/DataContext";

const Step2 = ({handleNext, handleBack, checkedSubgenre,
                   setCheckedSubgenre, setIsDescriptionRequired,
                   getSteps, setIsNewSubgenre}) => {

    const {setValues, data} = useData();
    const {register, handleSubmit} = useForm();

    const onSubmit = data => {
        setValues(data);
        handleNext();
        getSteps();
        if (999 === checkedSubgenre) {
            setIsNewSubgenre(true);
        } else {
            setIsNewSubgenre(false);
        }
    };

    let sub;

    // I know this is not the best solution if has more and more genres an subgenres
    switch (data.genre) {
        case "Genre 1":
            sub = dataJSON.genres[0].subgenres;
            break;
        case "Genre 2":
            sub = dataJSON.genres[1].subgenres;
            break;
        case "Genre 3":
            sub = dataJSON.genres[2].subgenres;
            break;
        case "Genre 4":
            sub = dataJSON.genres[3].subgenres;
            break;
        case "Genre 5":
            sub = dataJSON.genres[4].subgenres;
            break;
        default:
            return 'Unknown genre';
    }

    return (

        <div className="">
            <form>
                <div className="genres">
                    {sub.map(subgenre => {
                        return (
                            <div className={subgenre.id === checkedSubgenre ? 'genre-btn grey' : 'genre-btn'}
                                 key={subgenre.id}>
                                <label onClick={() => {
                                    setCheckedSubgenre(subgenre.id);
                                    setIsDescriptionRequired(subgenre.isDescriptionRequired)
                                }}
                                       className='genres__label'
                                       htmlFor={subgenre.name}>{subgenre.name}</label>
                                <input name="subgenre"
                                       id={subgenre.name}
                                       style={{visibility: 'hidden', width: '1px', height: '1px'}}
                                       type="radio"
                                       value={subgenre.name}
                                       ref={register}/>
                            </div>

                        )
                    })}
                    {/* hardcoded id to know what id is for add new button, number because rest of ids are numbers */}
                    <div className={999 === checkedSubgenre ? 'genre-btn grey' : 'genre-btn'}>
                        <label onClick={() => {setCheckedSubgenre(999);}}
                               className='genres__label'
                               htmlFor='add'>Add new</label>
                        <input name="isNewSubgenre"
                               id='999'
                               style={{visibility: 'hidden', width: '1px', height: '1px'}}
                               type="radio"
                               value={data.newSubgenre}
                               ref={register}/>
                    </div>
                </div>

                <div className='form__btns'>
                    <button className="prev-btn" onClick={handleBack}>Back</button>
                    <button className="next-btn" disabled={!checkedSubgenre} onClick={handleSubmit(onSubmit)}>Next
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Step2;
