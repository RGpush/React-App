import React,{Component} from 'react';



//functional component or dumb component
// const SearchBar = () => {
//     return <input/>
// };


//smart component or class base component
//state is a class based component it gets initialised with class
export default class SearchBar extends Component{

    constructor(props){
        super(props);
        this.state={value:''};
    }

    render(){
        return (
        <div className="search-bar">
        <input value ={this.state.value} onChange = {event=>this.onInputChange(event.target.value)}/>
        </div>
        );
    }

    onInputChange(term){
        this.setState({value:term});
        this.props.onSearchTermChange(term);
    }
};

