import React from 'react';

class SearchForm extends React.Component {

    handleFormSubmit = (event) => {

        event.preventDefault();
        const name = (event.target.name.value)
        const filter =(event.target.filter.value)
        this.props.setLoading()
        
        fetch (`https://swapi.co/api/${filter}?search=${name}`)
        .then(res => {
            if (!res.ok) {
            Promise.reject(res.json())
            return res.json()
            }
            return res.json()
        })
        .then (data => {
            this.props.logResults(data.results)
        })
        .catch (err => alert(err))        
    }

    render() {
        return(
            <form onSubmit={event => this.handleFormSubmit(event)}>
                <legend>Search the franchise</legend>
                <label htmlFor="name">Search For: </label>
                <input id="name" type="text" required></input>
                <label htmlFor="filter">In: </label>
                <select id="filter">
                    <option value="people/">People</option>
                    <option value="films/">Films</option>                    
                    <option value="planets/">Planets</option>
                    <option value="species/">Species</option>
                    <option value="starships/">Starships</option>
                    <option value="vehicles/">Vehicles</option>
                </select>
                <button>Submit</button>
            </form>
        );
    }
}

export default SearchForm