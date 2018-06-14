import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import YTsearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';

const API_KEY = 'AIzaSyCkxRnGhbmwl95KJE2Ij4MDRTKOPIAutbk';

//Create a new component. This component should produce
//some HTML
/*const App = () =>{
    return <div><SearchBar/></div>;
} ;*/

//Take this component's generated HTML and out it
// on the page(in the DOM)

class App extends Component {
    constructor(props){
        super(props);
        this.state = {videos:[],selectedVideo:null};

        this.videoSearch('basics of reactjs');
    }

    videoSearch(term){
        YTsearch({key:API_KEY,term:term},(videos)=>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]
            });
        });
    }

    render(){
        //debounce is a lodash method which will call our original this.videosearch in every 300ms only this is how google search is working
        // if you search something in google it will come in few mili seconds only
        const videoSearch = _.debounce((term) => {this.videoSearch(term)},300)

        return(
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                    onVideoSelect={selectedVideo=>this.setState({selectedVideo})} 
                    videos={this.state.videos}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('.container'));
