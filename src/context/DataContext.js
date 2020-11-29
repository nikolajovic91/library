import React, {createContext, useContext, useState} from 'react'

export const initialState = {
    genre: '',
    title: '',
    author: '',
    isbn: '',
    publisher: '',
    date: '',
    num_pages: '',
    format: '',
    edition: '',
    language: '',
    description: '',
    isDescriptionRequired: false

};

const DataContext = createContext(initialState);

export const DataProvider = ({children}) => {
    const [data, setData] = useState({});

    const setValues = values => {
        setData(prevData => ({
            ...prevData,
            ...values
        }))
    };

    const resetValues = () => {
        setData({})
    };

    return <DataContext.Provider value={{data, setValues, resetValues}}>
        {children}
    </DataContext.Provider>
};


export const useData = () => useContext(DataContext);
