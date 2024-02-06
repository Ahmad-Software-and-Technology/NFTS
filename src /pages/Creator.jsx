import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import BestSeller from '../components/layouts/BestSeller';
import dataBestSeller from '../assets/fake-data/dataBestSeller'
import LatestCollection from '../components/layouts/LatestCollection';
import dataCollections from '../assets/fake-data/dataCollections2'
import Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';
import { fetchListedNFT, fetchMyNFT } from '../blockchain/connection';

const Creator = () => {

    const [listedNft, setListedNFt] = useState([])
    const [ownedNft, setOwnedNFt] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchListedNFT();
            setListedNFt(data)
        };

        const fetchNftData = async () => {
            const newData = await fetchMyNFT()
            setOwnedNFt(newData)
        }

        fetchData().catch(console.error);
        fetchNftData().catch(console.error)
    }, []);

    return (
        <div className='creator'>
            <Header />
            <section className="fl-page-title">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="page-title-inner flex">
                                <div className="page-title-heading">
                                    <h2 className="heading">Author</h2>
                                </div>
                                <div className="breadcrumbs">
                                    <ul>
                                        <li><Link to="/">Home</Link></li>
                                        <li>Author</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <BestSeller data={dataBestSeller} name={"Own NFT"} />
            <BestSeller data={dataBestSeller} name={"Market NFT"} />
            {/* <LatestCollection data={dataCollections} /> */}
            {/* <Newsletters /> */}
            <Footer />
        </div>

    )
};

export default Creator;
