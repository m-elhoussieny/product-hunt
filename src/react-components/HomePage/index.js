import React from 'react';
import ProductList from '../Product/ProductList';

class HomePage extends React.Component{
    constructor(){
        super();
        this.state={
            productList:[
                {
                    id:1,
                    name:'Codecademy',
                    link:'http://codecademy.com',
                    media:'/img/id.png',
                    upvote:169,
                    desciption:"Code for anyone",
                    maker:{
                        name:'hieu',
                        avatar:'/img/f.png'
                    }
                },
                {
                    id:2,
                    name:'Code4startup',
                    link:'http://code4startup.com',
                    media:'/img/id.png',
                    upvote:280,
                    desciption:"Code for startups",
                    maker:{
                        name:'leo',
                        avatar:'/img/f.png'
                    }
                }
            ]
        }
    }

    render(){
        return(
            <section>
                <header>
                    <img src='/img/banner.png' ></img>
                </header>

                <section>
                   <section className='container'>
                         {
                        this.state.productList
                        ? 
                        <ProductList productList={this.state.productList}/>
                        : 
                        null
                        }
                   </section>
                </section>
            </section>
        );
            
    }
}

export default HomePage;

