import React from 'react';

const withCounter = (OriginalCompont) => {
    class NewComponent extends React.Component {
        state = {
            count: 0,
        };

        incrementCount = () => {
            this.setState((prevState) => ({ count: prevState.count + 1 }));
        };

        render() {
            const { count } = this.state;
            return <OriginalCompont count={count} incrementCount={this.incrementCount} />;
        }
    }
    return NewComponent;
};

export default withCounter;
