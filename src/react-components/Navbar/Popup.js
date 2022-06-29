import React from 'react';

class Popup extends React.Component{
    renderPopupContact(){
        return(
            <section className='popup'>
                <section className='popup-wrap'>
                    <img src='/img/xx.jpg'/>
                </section>
                <section className='popup-content'>
                    <section>POPUP CONTENT SHPULD BE HERE</section>
                </section>
            </section>
        );
    }

    render(){
        return(
            <section>
                {this.renderPopupContact()}
            </section>
        );
    }
}

export default Popup;