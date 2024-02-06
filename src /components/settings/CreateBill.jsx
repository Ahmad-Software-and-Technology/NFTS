import React, { useEffect, useState } from "react";
import img from "../../assets/Screenshot 2024-01-20 at 6.37.08 PM.png";
import { Link } from "react-router-dom";
import { Button, Dropdown } from "react-bootstrap";
import { Image } from "react-bootstrap"
import "./style.css"
import { API } from "../../services/api/api";
import { getUser } from "../../services/storage/storage";
const CreateBill = () => {
  // ------STATES
  const [selectImage, setselectImage] = useState(null);
  const user = getUser()
  const [selectImageName, setselectImageName] = useState("");
  const [selectImage2, setselectImage2] = useState(null);
  const [selectImageName2, setselectImageName2] = useState("");
  const [certificateImage, setcertificateImage] = useState("")
  const [certificateImageName, setcertificateImageName] = useState("")
  const [membershipImage, setmembershipImage] = useState("")
  const [membershipImageName, setmembershipImageName] = useState("")
  const [links, setlinks] = useState("")
  const [liveImage, setliveImage] = useState("")
  const [liveImageName, setliveImageName] = useState("")
  const [selectImageFile, setSelectImageFile] = useState(null);
  const [selectImageFile2, setSelectImageFile2] = useState(null);
  const [Address, setAddress] = useState("");
  const [Address2, setAddress2] = useState("");
  const [zipCode, setzipCode] = useState("")
  const [countryCode, setcountryCode] = useState("")
  const [statesSelection, setstatesSelection] = useState("")
  const [countrySelection, setcountrySelection] = useState("")
  console.log(statesSelection)
  console.log(countrySelection)
  const [ItemPrice, setItemPrice] = useState("");
  const [city, setcity] = useState("");
  const [Size, setSize] = useState("");
  const [Des, setDes] = useState("");


  const handleKycUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData();
    console.log(user)
    // Append text fields
    formData.append('userId', user._id); // Replace with actual user ID
    formData.append('address', Address);
    formData.append('address2', Address2);
    formData.append('city', city);
    formData.append('country', countrySelection);
    formData.append('zip', zipCode);
    formData.append('state', statesSelection);
    formData.append('countryCode', countryCode);
    formData.append('phoneNumber', 'YourPhoneNumber'); // Replace with actual phone number
    console.log(selectImageFile, selectImageFile2)
    if (selectImageFile) {
      formData.append('files', selectImageFile, selectImageFile2);
    }
    if (selectImageFile2) {
      formData.append('files', selectImageFile2, selectImageName2);
    }


    await API.uploadKycDocs(formData).then((res) => {
      if (res.status === 200) {
        console.log(res);
        // Handle success response
      }
    }).catch(e => console.log(e))
  };


  // *----Handling Image----
  const handle_Image_Input = (event) => {
    const file = event.target.files[0];
    if (file) {
      setselectImageName(file.name);
      setselectImage(URL.createObjectURL(file));
      setSelectImageFile(file); // Store the file object for upload
    }
  };
  const handle_Certificate_Input = (event) => {
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;

    console.log(file);
    if (file) {
      setcertificateImageName(fileName);
      setcertificateImage(URL.createObjectURL(file));
    }
  };
  const handle_Membership_Input = (event) => {
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;

    console.log(file);
    if (file) {
      setmembershipImageName(fileName);
      setmembershipImage(URL.createObjectURL(file));
    }
  };
  const handle_Live_Image_Input = (event) => {
    const file = event.target.files[0];
    const fileName = event.target.files[0].name;

    console.log(file);
    if (file) {
      setliveImageName(fileName);
      setliveImage(URL.createObjectURL(file));
    }
  };

  const handle_Image_Input2 = (event) => {
    const file = event.target.files[0];
    if (file) {
      setselectImageName2(file.name);
      setselectImage2(URL.createObjectURL(file));
      setSelectImageFile2(file); // Store the file object for upload
    }
  };

  //*-----Handling Form Submitting------
  const handle_Form_Submit = (event) => {
    // event.preventdefault()
    console.log(countrySelection)
    console.log(city)
    console.log(zipCode)
    console.log(countryCode)
    console.log(Address2)
    console.log(Address)


  };
  const handle_selection = (value) => {
    setstatesSelection(value)
    console.log(statesSelection)
  }
  const handle_country_selection = (value) => {
    setcountrySelection(value)
    console.log(countrySelection)
  }
  // *--------Mounting
  useEffect(() => {
    return () => {
      if (selectImage) {
        URL.revokeObjectURL(selectImage);
      }
      if (selectImage2) {
        URL.revokeObjectURL(selectImage2);
      }
    };
  }, [selectImage, selectImage2]);
  const countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Zimbabwe"
  ];
  const states = [
    "Asia",
    "USA",
    "Australia",
    "Africa",
    "Europe",

  ];


  // *---------------------

  return (
    <section className="tf-section create-item pd-top-0 m-t-40 my-5">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-create-item-content">
              <div className="form-create-item">
                <div className="sc-heading">
                  <h3>KYC</h3>

                </div>
                <form id="create-item-1">

                  <label className="uploadFile">
                    <span className="filename">
                      {selectImage ? selectImageName : "Cnic Front"}
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      name="file"
                      onChange={handle_Image_Input}
                    />
                    <span className="icon">
                      <i className="far fa-cloud-upload"></i>
                    </span>
                  </label>

                  <div className="row p-5  mx-4">
                    <div className="col-6 ">
                      <div className="form-background2 ">
                        {selectImage ? (
                          <Image src={selectImage} alt="NFTYART" className="selectedImage" />
                        ) : (
                          <Image src={img} alt="NFTYART" />
                        )}
                      </div>
                    </div>
                    <div className="col-6 ">
                      <div className="form-background2   ">
                        {selectImage2 ? (
                          <Image src={selectImage2} alt="NFTYART" className="" />
                        ) : (
                          <Image src={img} alt="NFTYART" />
                        )}

                      </div>
                    </div>
                  </div>

                  <label className="uploadFile">
                    <span className="filename">
                      {selectImage2 ? selectImageName2 : "Cnic Back"}
                    </span>
                    <input
                      type="file"
                      className="inputfile form-control"
                      name="file"
                      onChange={handle_Image_Input2}
                    />
                    <span className="icon">
                      <i className="far fa-cloud-upload"></i>
                    </span>
                  </label>
                  <div className="input-group">
                    <input
                      name="name"
                      type="text"
                      placeholder="Address line 1"
                      onChange={(e) => setAddress(e.target.value)}
                      required
                    />
                    <input
                      name="number"
                      type="text"
                      placeholder="Address line 2 (optional)"
                      onChange={(e) => setAddress2(e.target.value)}
                      required
                    />
                  </div>
                  <input
                    name="name"
                    type="text"
                    placeholder="City"
                    onChange={(e) => setcity(e.target.value)}
                    required
                  />
                  <div className="input-group my-5 ">

                    <Dropdown className="w-100 px-4" >
                      <Dropdown.Toggle style={{ backgroundColor: 'transparent', border: "0.2px solid gray" }} id="dropdown-basic">
                        {countrySelection ? countrySelection : 'Select a Country'}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {countries.map((country, index) => (
                          <Dropdown.Item key={index} onClick={() => handle_country_selection(country)}>
                            {country}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="w-100  my-3 mx-2">
                      <Dropdown.Toggle style={{ backgroundColor: 'transparent', border: "0.2px solid gray" }} id="dropdown-basic" >
                        {statesSelection ? statesSelection : 'Select a State'}
                      </Dropdown.Toggle>

                      <Dropdown.Menu >
                        {states.map((state, index) => (
                          <Dropdown.Item key={index} onClick={() => handle_selection(state)} >
                            {state}
                          </Dropdown.Item>
                        ))}
                      </Dropdown.Menu>
                    </Dropdown>



                  </div>
                  <div >
                    <div className="input-group "><label className="uploadFile mx-1">
                      <span className="filename">
                        {certificateImage ? certificateImageName : "Upload Certificate"}
                      </span>
                      <input
                        type="file"
                        className="inputfile form-control"
                        name="file"
                        onChange={handle_Certificate_Input}
                      />
                      <span className="icon">
                        <i className="far fa-cloud-upload"></i>
                      </span>
                    </label>
                      <label className="uploadFile mx-1 ">
                        <span className="filename">
                          {membershipImage ? membershipImageName : "Upload MemberShip"}
                        </span>
                        <input
                          type="file"
                          className="inputfile form-control"
                          name="file"
                          onChange={handle_Membership_Input}
                        />
                        <span className="icon">
                          <i className="far fa-cloud-upload"></i>
                        </span>
                      </label>
                      <label className="uploadFile mx-1">
                        <span className="filename">
                          {liveImage ? liveImageName : "Upload Live Image"}
                        </span>
                        <input
                          type="file"
                          className="inputfile form-control"
                          name="file"
                          onChange={handle_Live_Image_Input}
                        />
                        <span className="icon">
                          <i className="far fa-cloud-upload"></i>
                        </span>
                      </label></div>


                    <div className="row p-5  mx-4">
                      <div className="col-4 ">
                        <div className="form-background2 ">
                          {certificateImage ? (
                            <Image src={certificateImage} alt="NFTYART" className="selectedImage" />
                          ) : (
                            <Image src={img} alt="NFTYART" />
                          )}
                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="form-background2   ">
                          {membershipImage ? (
                            <Image src={membershipImage} alt="NFTYART" className="" />
                          ) : (
                            <Image src={img} alt="NFTYART" />
                          )}

                        </div>
                      </div>
                      <div className="col-4 ">
                        <div className="form-background2   ">
                          {liveImage ? (
                            <Image src={liveImage} alt="NFTYART" className="" />
                          ) : (
                            <Image src={img} alt="NFTYART" />
                          )}

                        </div>
                      </div>
                    </div>


                  </div>

                  <div className="input-group ">
                    <input
                      name="number"
                      type="text"
                      placeholder="Zip Code"
                      className="mb-4"
                      onChange={(e) => setzipCode(e.target.value)}
                      required
                    />
                    <input
                      name="number"
                      type="text"
                      placeholder="Country Code"
                      className="mb-4"
                      onChange={(e) => setcountryCode(e.target.value)}
                      required
                    />

                  </div>
                  <input
                    name="number"
                    type="text"
                    placeholder="Links of Previous Work"
                    className="mb-4"
                    onChange={(e) => setlinks(e.target.value)}
                    required
                  />

                  <Button
                    onClick={(event) => handleKycUpload(event)}
                    className="sc-button style letter style-2 mt-1"
                  >
                    <span>Save</span>{" "}
                  </Button>
                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreateBill;
