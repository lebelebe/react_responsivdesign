import React, {Component} from "react";
import Listthumb from './ListThumb';
import './Gallery.css'


class Gallery extends Component{
    constructor(prop){
        super(prop)
        this.state = {
            folder: this.props.propfolder
        }
    }

    render(){
        return(        
            <section id={this.props.propid} className="container-lg">
                <div className="d-md-flex flex-row text-md-center text-center">
                    <h3 className="galtext col-md-4 d-block text-center d-md-block my-md-auto p-md-1 nanum">{this.props.proptitle}</h3>
                    <ul className="flex-grow-1 row m-0" id="imgs">
                        <Listthumb col='col-md-4' colimg='i1.jpg' imgfolder={this.state.folder}></Listthumb>
                        <Listthumb col='col-md-4' colimg='i2.jpg' imgfolder={this.state.folder}></Listthumb>
                        <Listthumb col='col-md-4' colimg='i3.jpg' imgfolder={this.state.folder}></Listthumb>
                    </ul>
                </div>

            </section>
        )
    }
    

}



export default Gallery;