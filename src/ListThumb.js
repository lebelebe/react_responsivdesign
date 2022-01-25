import React, { Component } from "react";

class ListThumb extends Component{
    constructor(prop){
        super(prop)
        this.state = {
            imgallsrc: './img/'+this.props.imgfolder+'/'+this.props.colimg
        }
    }
    render(){
        return(
            <li className={ this.props.col }>
                <a href='#'>
                    <img src={this.state.imgallsrc} className="img-fluid" style={{height: 200}}/>
                </a>
            </li>
        )
    }
}

export default ListThumb;