import React, {Component} from 'react';

class CreateContent extends Component{
    render(){
      // action : 입력한 정보를 "/..."로 보내겠다!
      // method : action에 get? post? delete? 등등 어떤 방식으로 보내겠다!
      return(
        <article>
            <h2>Create</h2>
            <form action="/create_process" method="post"
              onSubmit={function(e){
                e.preventDefault();
                alert('submit!');
              }.bind(this)}>
              <p><imput type="text" name="title" placeholder="input title..."></imput></p>
              <p><textarea name="desc" placeholder="input content..."></textarea></p>
            </form>
        </article>
      ); 
    }
  }

  export default CreateContent;