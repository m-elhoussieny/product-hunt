import React from 'react';

class HomePage extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <section>
                <header>
                    <img src='/img/banner.png' ></img>
                </header>

                <section>
                    <section className='container'>
                        <h2>ProductList</h2>
                    </section>
                </section>
            </section>
        );
            
    }
}

export default HomePage;

