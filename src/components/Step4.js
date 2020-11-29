import {useForm} from "react-hook-form";
import {useData} from "../context/DataContext";

const Step4 = ({handleNext, handleBack, isDescriptionRequired}) => {

    const {setValues, data} = useData();
    const {register, handleSubmit} = useForm();

    const handleChange = (e) => {
        e.preventDefault();
        setValues(e.target.value);
    };

    const onSubmit = data => {
        setValues(data);
        handleNext()
    };

    return (
        <div className="">

            <form className='form__information'>
                <label htmlFor="title">Book title</label>
                <input type="text"
                       id='title'
                       name='title'
                       ref={register({required: true})}
                       placeholder="Book title"/>

                <label htmlFor="title">Author</label>
                <select name="author"
                    // value={data.author}
                        onChange={handleChange}
                        ref={register}>
                    {/*<option value=""> </option>*/}
                    <option value="Stephen King">Stephen King</option>
                    <option value="George R.R. Martin">George R.R. Martin</option>
                    <option value="Jo Nesbe">Jo Nesbe</option>
                    <option value="Tom Rob Smith">Tom Rob Smith</option>
                </select>

                <label htmlFor="isbn">ISBN</label>
                <input type="text"
                       id='isbn'
                       name='isbn'
                       ref={register}
                       placeholder="ISBN"/>

                <label htmlFor="publisher">Publisher</label>
                <select name="publisher"
                    // value={data.publisher}
                        onChange={handleChange}
                        ref={register}>
                    {/*<option value="" disabled selected>Publisher</option>*/}
                    <option value="Laguna">Laguna</option>
                    <option value="Vulkan">Vulkan</option>
                    <option value="Kombib">Kombib</option>
                    <option value="Microknjiga">Microknjiga</option>
                </select>

                <div className='form__information--grid3'>
                    <div>
                        <label htmlFor="date">Date published</label>
                        <input type="date"
                               name='date'
                               id='date'
                               ref={register}/>
                    </div>
                </div>
                <div className='form__information--grid4'>
                    <div>
                        <label htmlFor="num_pages">Number of pages</label>
                        <input type="text"
                               id='num_pages'
                               name='num_pages'
                               ref={register}
                               placeholder='Number of pages'/>
                    </div>
                </div>

                <div className='form__information--grid3'>
                    <div>
                        <label htmlFor="title">Format</label>
                        <select name="format"
                            // value={data.format}
                                onChange={handleChange}
                                ref={register}>
                            {/*<option value="" disabled selected>Format</option>*/}
                            <option value="Format1">Format 1</option>
                            <option value="Format2">Format 2</option>
                        </select>
                    </div>
                </div>

                <div className='form__information--grid3'>
                    <div>
                        <label htmlFor="edition">Edition</label>
                        <input type="text"
                               id='edition'
                               name='edition'
                               ref={register}
                               placeholder='Edition'/>
                    </div>
                    <div>
                        <label htmlFor="language">Edition language</label>
                        <select name="language"
                                id='language'
                            // value={data.language}
                                onChange={handleChange}
                                ref={register}>
                            {/*<option value="" disabled selected>Language</option>*/}
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                            <option value="Serbian">Serbian</option>
                        </select>
                    </div>
                </div>

                <label htmlFor="description">Description</label>
                <textarea name="description"
                          ref={isDescriptionRequired || data.isDescriptionRequired ? register({required: true}) : register}
                          id="description"/>

                <div className='form__btns'>
                    <button className="prev-btn" onClick={handleBack}>Back</button>
                    <button className="next-btn" onClick={handleSubmit(onSubmit)}>Complete</button>
                </div>
            </form>
        </div>
    );
};

export default Step4;
