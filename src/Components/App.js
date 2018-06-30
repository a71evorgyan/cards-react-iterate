import React, { Component } from 'react';
import Main from './Main';
import '../StyleSheets/App.css';




class App extends Component {
  state = {
    data:{},
    loading:true,
    
  }
  componentDidMount(){
    fetch('https://api.dailymotion.com/users?fields=id,username,screenname,cover_250_url,avatar_120_url,videos_total,fans_total&list=recommended&limit=20')
    .then((response)=>{
      return response.json();
    })
    .then((myJson) => {
      this.setState({data: myJson, loading: false});
      
    }); 

  }
  render() {
    const {list} = this.state.data;
    // console.log(this.state.data);
    console.log(list);
    return (
      <div className="App">
        {this.state.loading ?
          <h1>loading</h1> 
          :
          list.map(elem => {return <Main avatar = {elem.avatar_120_url}  cover= {elem.cover_250_url} username={elem.username} fans={elem.fans_total} videos={elem.videos_total} /> })
        }
      </div>
    );
  }
}

export default App;
