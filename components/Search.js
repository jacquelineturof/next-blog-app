import React, { useState } from 'react'

import Input from './UI/Input'

import classes from './Search.module.css'

const Search = () => {
    /*
        INPUT STATE
    */
    const [ query, setQuery ] = useState('')

    /*
        SEARCH INPUT CONFIG
    */
   const SEARCH_CONFIG = {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Search Blog...'
        },
        iconConfig: {
            name: 'search',
            package: 'fal'
        },
        value: query,
        changed: e => setQuery(e.target.value)
    }

    return <Input { ...SEARCH_CONFIG } />
}

export default Search