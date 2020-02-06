import React from 'react';
import { directive } from '@babel/types';
import axios from 'axios';
import GiphyImage from 'GiphyImage';
const giphyUrl = 'https://api.giphy.com/v1/gifs/search?api_key=pzBL32qojWFID253ecJZFUBrSXhubTLg&q=cat&limit=25&offset=0&rating=G&lang=en';

class GiphyApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            giphies : []

        };
    }
    render (){
        return (
            <div>
                <button onClick = {this._doClick}>Click</button>
            </div>
        );
    }
    _doClick = () => {

        axios.get(giphyUrl)
            .then( response => {
                console.log(response.data.data[0].images.downsized_large);
                this.setState ({
                    giphes: [
                    ...this.state.giphies,
                    response.data.data[0].images.downsized_large
                ]
                        
                });
            })
            .catch( err=> {
                console.log('error');
            })

        console.log('you clicked');
        this.setState({
            giphies: [
                ...this.state.giphies,
                "hello"
            ]
        })
    }

};

export default GiphyApp;

