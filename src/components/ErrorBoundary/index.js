import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from './styles';

class ErrorBoundary extends React.Component {
    constructor() {
        super()


        this.state = { 
            hasErrored: false
        }
    }


    static getDerivedStateFromError(error) {
        return { hasErrored: true }
    }

    render() {
        if (this.state.hasErrored) {
            return (
                <ErrorImageOverlay>
                    <ErrorImageContainer imageUrl={require(`../../assets/img/astronaut-big.png`)} />
                    <ErrorImageText> Something went wrong </ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
};

export default ErrorBoundary;