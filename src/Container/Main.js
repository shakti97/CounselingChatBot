import React, { Component } from 'react';
import ChatBox from '../Components/ChatBox/ChatBox';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            chatNow : false,
            chatNowButton : true
        };
    }
    handleChange=(event)=>{
        event.preventDefault();
        this.setState({
            chatNow : true
        })
    }
    hideChatNow=()=>{
        this.setState({
            chatNowButton : false
        })
    }
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.state.chatNowButton && <button className='btn btn-primary rightButton' onClick={this.handleChange}>Chat Now</button>}
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-8">
                            {
                                this.state.chatNow ? <ChatBox hideChatNow={this.hideChatNow}/> : ''
                            }
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Main;