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
        let pullink = [
            {
                link1: "https://shop.pulmuone.co.kr/events/promotion?event=240",
                link2: "https://shop.pulmuone.co.kr/events/promotion?event=241",
                link3: "https://shop.pulmuone.co.kr/events/promotion?event=219",
            },
            {
                link1: "https://shop.pulmuone.co.kr/shop/goodsView?goods=4677&PageCd=P_PC_GNB5&ContentCd=219",
                link2: "https://shop.pulmuone.co.kr/shop/goodsView?goods=4679&PageCd=P_PC_GNB5&ContentCd=219",
                link3: "https://shop.pulmuone.co.kr/shop/goodsView?goods=1888&PageCd=P_PC_GNB5&ContentCd=219",
            },
        ]
        return(        
            <section id={this.props.propid} className="container-lg">
                <div className="d-md-flex flex-row text-md-center text-center">
                    <h3 className="galtext col-md-4 d-block text-center d-md-block my-md-auto p-md-1 nanum">{this.props.proptitle}</h3>
                    <ul className="flex-grow-1 row m-0" id="imgs">
                        <Listthumb col='col-md-4' colimg='i1.jpg' imgfolder={this.state.folder} link={pullink[this.props.linknum].link1}></Listthumb>
                        <Listthumb col='col-md-4' colimg='i2.jpg' imgfolder={this.state.folder} link={pullink[this.props.linknum].link2}></Listthumb>
                        <Listthumb col='col-md-4' colimg='i3.jpg' imgfolder={this.state.folder} link={pullink[this.props.linknum].link3}></Listthumb>
                    </ul>
                </div>

            </section>
        )
    }
    

}



export default Gallery;