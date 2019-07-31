import React, {Component} from 'react';

class Control extends Component{
    render(){
        return(
            <ul>
                <li><input type="button" value="create" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('create');
                }.bind(this)}></input></li>
                <li><input type="button" value="update" onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('update');
                    }.bind(this)}></input></li>
                <li><input onClick={function(e){
                    e.preventDefault();
                    this.props.onChangeMode('delete');
                    }.bind(this)}
                    type="button" value="delete"></input></li>
          </ul>
        );
    }
}

export default Control;