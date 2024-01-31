import React from 'react'
import Footer from '../footer/Footer';
import Header from '../header/Header';
import { Link } from 'react-router-dom';
import CreateBill from './CreateBill';

const Settings = () => {
 
    return <div className='authors'>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Settings</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
                        <CreateBill/>

    {/* <Newsletters /> */}
    <Footer />
  </div>;

}

export default Settings