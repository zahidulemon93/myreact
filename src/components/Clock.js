import React from 'react';
import Button from './Button';

class Clock extends React.Component {
    // myNote: handleClick bind for "this" . See: 33.11
    // constructor(props){
    //     super(props);
    //     this.state = {date: new date(), locale : 'bn-BD'};
    //     this.handleClick = this.handleClick.bind(this);
    // }

    state = { date: new Date(), locale: 'bn-BD' };

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    handleClick = (locale) => {
        this.setState({
            locale,
        });
    };

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        console.log('clock component rendered');
        const { date, locale } = this.state;
        return (
            <div>
                <h1 className="heading">
                    <span className="text">{date.toLocaleTimeString(locale)}</span>
                </h1>

                {/* <button type="button" onClick={()=> this.handleClick('en-US')}> </button> */}
                <Button change={this.handleClick} locale="en-US">
                    Click here
                </Button>
            </div>
        );
    }
}

export default Clock;
