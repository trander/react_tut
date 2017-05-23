import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import StateExample from './StateExample';

class App extends React.Component {
    render(){
        return  (
            <div>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle }
                        body={ this.props.contentBody }/>
                <StateExample />
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default Header',
    contentTitle: 'Default Content Title',
    contentBody: 'Default Content Body'
};

export default App;
