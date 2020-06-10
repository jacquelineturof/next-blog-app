import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Input from './UI/Input'

import * as actions from '../store/actions'

const Search = () => {
    const dispatch = useDispatch()
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
        changed: e => onChange(e)
    }

    const onChange = e => {
        e.preventDefault()
        setQuery(e.target.value)
        dispatch(actions.setQuery(query))
    }

    return  <Input { ...SEARCH_CONFIG } />
}

export default Search