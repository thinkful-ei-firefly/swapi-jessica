import React from 'react';

class SearchResults extends React.Component {
        
    render () {
        if (this.props.loading) {
            return (
                <li>Loading...</li>
            );
        }
        if (this.props.searched) {
            if (this.props.results.length>0) {
                const resultsList = this.props.results.map(result => <li key={result.name}>{result.name}</li>)
                return (
                    <ul>
                        {resultsList}
                    </ul>
                );
            } return <li>Sorry, no Results Found</li>            
        }
        return <li>Search Above</li>        
    }
}

export default SearchResults