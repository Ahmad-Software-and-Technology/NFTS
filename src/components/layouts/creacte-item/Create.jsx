import React, { useEffect, useState } from 'react';
import img from '../../../assets/images/background/img-create-item.jpg'
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { createNFT } from '../../../blockchain/connection';

const Create = () => {
    // ------STATES
    const [selectImage, setselectImage] = useState(null)
    const [selectImageName, setselectImageName] = useState("")
    const [ItemName, setItemName] = useState("")
    const [ItemPrice, setItemPrice] = useState("")
    const [Royality, setRoyality] = useState("")
    const [EndDate, setEndDate] = useState("")
    const [Des, setDes] = useState("")

    const checkIfWalletConnected = async () => {
        try {
            if (!window.ethereum) return console.log("install metamask wallet");

            const accounts = await window.ethereum.request({
                method: "eth_accounts",
            });

            if (accounts.length) {
                // setCurrentAccount(accounts[0]);
            } else {
                console.log("No Account Found");
            }
            // console.log(currentAccount);
        } catch (error) {
            console.log("Somthing went wrong while connecting to wallet");
        }
    };

    const connectWallet = async () => {
        try {
            if (!window.ethereum) return console.log("install metamask wallet");

            console.log("inside connect wallet")
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            console.log(accounts)
            // setCurrentAccount(accounts[0]);
            // window.location.reload();
        } catch (error) {
            console.log("error while connecting to wallet");
        }
    };

    useEffect(() => {
        checkIfWalletConnected();
        connectWallet()
    }, []);


    // *----Handling Image----
    const handle_Image_Input = (event) => {
        const file = event.target.files[0];
        const fileName = event.target.files[0].name;

        console.log(file)
        if (file) {
            setselectImageName(fileName)
            setselectImage(URL.createObjectURL(file))
        }
    }
    //*-----Handling Form Submitting------
    const handle_Form_Submit = async (event) => {
        // event.preventDefault()
        // console.log("name", ItemName)
        // console.log("price", ItemPrice)
        // console.log("Royality", Royality)
        // console.log("size", Size)
        // console.log("Description", Des)

        // await createNFT(ItemName, ItemPrice, selectImage, Des, Royality)
    }


    // *--------Mounting
    useEffect(() => {
        return () => {
            //todo: Erasing prev selected Image if the image select more than one time
            if (selectImage) {
                URL.revokeObjectURL(selectImage)
            }
        }

    }, [selectImage])


    // *---------------------



    return (
        <section className="tf-section create-item pd-top-0 mg-t-40">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-create-item-content">
                            <div className="form-create-item">
                                <div className="sc-heading">
                                    <h3>Create Item</h3>
                                    <p className="desc">Most popular gaming digital nft market place </p>
                                </div>
                                <form id="create-item-1"  >
                                    <label className="uploadFile">
                                        <span className="filename" >{selectImage ? selectImageName : "Choose Image"}</span>
                                        <input type="file" className="inputfile form-control" name="file" onChange={handle_Image_Input} />
                                        <span className="icon"><i className="far fa-cloud-upload"></i></span>
                                    </label>
                                    <div className="input-group">
                                        <input name="name" type="text" placeholder="Item Name" onChange={(e) => setItemName(e.target.value)} required />
                                        <input name="number" type="text" placeholder="Item Price"
                                            onChange={(e) => setItemPrice(e.target.value)} required />
                                    </div>
                                    <div className="input-group">
                                        <input name="name" type="text" placeholder="Royality" onChange={(e) => setRoyality(e.target.value)} required />
                                        <input name="date" type="date" placeholder='End Date'  onChange={(e) => setEndDate(e.target.value)} required />
                                    </div>
                                    {/* <div className="input-group">
                                    <input name="name" type="text" placeholder="Blance" required />
                                    <input name="number" type="text" placeholder="No Of Copies"
                                        required />
                                </div> */}
                                    <textarea id="comment-message" name="message" tabIndex="4"
                                        placeholder="Description" aria-required="true"
                                        onChange={(e) => setDes(e.target.value)}></textarea>
                                    {/* <div className="input-group style-2 ">
                                    <div className="btn-check">
                                        <input type="radio" id="sale" name="fav_language" />
                                        <label htmlFor="sale">Put On Sale</label>
                                    </div>
                                    <div className="btn-check">
                                        <input type="radio" id="price" name="fav_language" />
                                        <label htmlFor="price">
                                            Instant Sale Price
                                        </label>
                                    </div>
                                    <div className="btn-check">
                                        <input type="radio" id="purchase" name="fav_language" />
                                        <label htmlFor="purchase">
                                            Unlock Purchased
                                        </label>
                                    </div>
                                </div> */}

                                    <Button
                                        onClick={(event) => handle_Form_Submit(event)}
                                        className="sc-button style letter style-2 mt-1"><span>Create Item</span> </Button>
                                </form>
                            </div>
                            <div className="form-background">
                                {
                                    selectImage ? (<img src={selectImage} alt="NFTYART" />) : (<img src={img} alt="NFTYART" />)
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Create;
