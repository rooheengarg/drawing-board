import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

class App extends React.Component{
    render(){
        return(
            <div className="helloWorlStyle">Hello World</div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'))