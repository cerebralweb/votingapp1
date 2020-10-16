import React from 'react';
import './App.css';
import Prototypes from './data.json'

const Data = Prototypes;

class PrototypeCardList extends React.Component {

  state = {
    prototypes: [],
  }
  componentDidMount() {
    this.setState({prototypes: Data});
  }
  increasesVotes = (id) => {
    this.setState({
      prototypes: this.state.prototypes.map((obj) => {
        if(obj.id === id) {
          return Object.assign({}, obj, {
            votes: obj.votes + 1
          });               
        } else {
          return obj;
        }
        }
        )    
  })
}
  
 
render() {
 const prototypes = this.state.prototypes
 .sort((a,b) => b.votes - a.votes)
 .map((proto, i) => (

  <PrototypeCard
  key={i}
  id={proto.id}
  title={proto.title}
  description={proto.description}
  votes={proto.votes}
  handleVote={this.increasesVotes}
  />
  
 )) ;
return (
  <div className="flexContainer center">
    <h1>WHAT IS THE BEST THING OF COCA-COLA? </h1>
    {prototypes}   
  </div>  
 );
}
}

class PrototypeCard extends React.Component {
  onVoteClick = () => {    
    this.props.handleVote(this.props.id);
  }
 
render() {
 
return (
  <div className="cardContainer">
    <div className="title smallPadding ">
      <h1> {this.props.title} </h1>
    </div>
    <div className="description smallPadding">
      <p>
        {this.props.description}
      </p>
    </div>
    <div className="votesContainer">
      <button 
      onClick={this.onVoteClick}
      className="votes"
      > 
      {this.props.votes} 
      </button>
    </div>
  </div>
);
}
}


export default PrototypeCardList;


