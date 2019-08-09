import React from 'react';

class ErrorMessage extends React.Component {

    state = {hasError: false}

    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    render () {
        if (this.state.hasError) {
            return (
                <div>
                    <h2>We're sorry, something went wrong.</h2>
                    <h2>Please refresh the page and try again.</h2>
                </div>
            );
        }
        return this.props.children
    }
}

export default ErrorMessage