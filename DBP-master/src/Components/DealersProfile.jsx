
import React from 'react';
import {useEffect, useState} from 'react';
import { MDBCol,MDBInput, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography } from 'mdb-react-ui-kit';
import DealerNavbar from './DealerNavbar';
import Modal from "react-bootstrap/Modal";
import Footer from './Footer';
import { useFormik } from "formik";
import * as Yup from "yup";



export default function DealerProfile() {
  
    const [Picture,setPicture] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbzkyXfNfGvQcUB3Kh0PrNLmT9LvbiJGglqAYDd6DD&s");
    const [UserId,setUserId] = useState(localStorage.getItem("UserId"));
    const [Profile,setProfile] = useState([{
      Email:false,
      FirstName:false,
      LastName:false,
      Picture:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzNJcVZYifo4XGd9HnBg9f6diJzOAPYiAhu-jxVNE&s',
      ProductsAndServices:false,
      AddressId:false,
      AccountId:false ,
      Contact:false,
      address:false,
      City:false,
      Country:false,
      AccountBank:false,
      AccountNumber:false,
      AccountTitle:false
    }]);
    const [show, setShow] = useState(false);
    const [addresss, setsddress] = useState(false);
    const [account, setaccount] = useState(false);
    const handleCloseModal = () => {setShow(false);setsddress(false);setaccount(false);};

    const [selectedImage, setSelectedImage] = useState(
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzNJcVZYifo4XGd9HnBg9f6diJzOAPYiAhu-jxVNE&s"
    );

    const signupSchema = Yup.object({
      firstname: Yup.string().min(3).max(25).required("Please enter your name"),
      lastname: Yup.string().max(25).required("Please enter your name"),
      contact: Yup.string().min(10).max(13),
      productandservices: Yup.string().min(0).max(255),
    });
    const AddressSchema = Yup.object({
      Country: Yup.string().min(3).max(25).required("Please enter Country"),
      City: Yup.string().min(3).max(25).required("Please enter City"),
      address: Yup.string().min(0).max(50).required("Please enter Address")
    });
    const AccountSchema = Yup.object({
      AccountBank: Yup.string().min(3).max(25).required("Please enter Bank"),
      AccountNumber: Yup.string().min(14).max(16).required("Please enter Account Number"),
      AccountTitle: Yup.string().min(3).max(25).required("Please enter Account Title")
    });
    const [formData, setFormData] = useState({
      firstname: 'abc',
      lastname: 'abc',
      contact: '',
      productandservices: '',
      productimg: '',
    });
  
    const [Address, setAddress] = useState({
      Country: '',
      City: '',
      address: '',
    });

    const [Account,setAccount] = useState({
      AccountBank:'',
      AccountNumber : '',
      AccountTitle:''
    });
    var temp = formData;
    var temp1 = signupSchema;
    if(addresss === true){
      temp = Address;
      temp1 = AddressSchema;
    }
    if(account === true){
      temp = Account;
      temp1 = AccountSchema;
    }
    
    const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
      useFormik({
        initialValues: temp,
        validationSchema: temp1,
        validateOnChange: true,
        validateOnBlur: false,
        //// By disabling validation onChange and onBlur formik will validate on submit.
        // onChange:(event)=>{
        //   values = event.target.value;
        // },
        onSubmit: (values, action) => {
          console.log("show",show===true)
          if(show === true){
            document.getElementById('UpdateDealerProfile').submit();
            action.resetForm();
            console.log("show",show===true)
          }
          console.log("addresss",addresss===true)
          if(addresss === true){
            console.log("OK");
            document.getElementById('UpdateDealerAddress').submit();
            action.resetForm();
          }
          console.log(account)
          console.log("account",account===true)
          if(account === true){
            console.log("OK");
            document.getElementById('UpdateDealerAccount').submit();
            action.resetForm();
          }
        },
      });

      function submitaddress(action){
        console.log("OK");
        document.getElementById('UpdateDealerAddress').submit();
        // action.resetForm();
      }
      function submitaccount(action){
        console.log("OK");
        document.getElementById('UpdateDealerAccount').submit();
        // action.resetForm();
      }

      const handleImageChange = (event) => {
        const imageFile = event.target.files[0];
        setSelectedImage(URL.createObjectURL(imageFile));
      };
      
      function handleShow() {
        if(String(Profile[0].Country) !== 'null'){
        setFormData({
          
          firstname: String(Profile[0].FirstName),
          lastname: String(Profile[0].LastName),
          contact: String(Profile[0].Contact),
          productandservices: String(Profile[0].ProductsAndServices),
          productimg: String(Profile[0].Picture),
        });
        }
        console.log(formData);
        setShow(true);
      }
      function showaddress(){
        setsddress(true);
        console.log(Profile);
        console.log(Profile[0].Country );
        console.log(Profile[0].Country != null);
        
        if(String(Profile[0].Country) !== 'null'){
          setAddress({
            Country: String(Profile[0].Country),
            City: String(Profile[0].City),
            address: String(Profile[0].Address),
          });
          
          console.log(Address);
          console.log(Address);
        }
        console.log(Address);
      }

      function showaccount(){
        setaccount(true);
        if(String(Profile[0].AccountBank) !== 'null'){
          setAccount({
            AccountBank: String(Profile[0].AccountBank),
            AccountNumber: String(Profile[0].AccountNumber),
            AccountTitle: String(Profile[0].AccountTitle),
          });
          
          console.log(Account);
        }
        console.log(Account);
      }
      const handleName=(event)=>{
        setFormData({
          firstname: event.target.value,
          lastname: formData.lastname,
          contact: formData.contact,
          productandservices: formData.productandservices,
          productimg: formData.productimg
        });
      }
      const handleLastName=(event)=>{
        setFormData({
          lastname: event.target.value,
        });
      }
      const handleContact=(event)=>{
        setFormData({
          contact: event.target.value,
        });
      }
      const handleProduct=(event)=>{
        setFormData({
          productandservices: event.target.value,
        });
      }
      const handlePicture=(event)=>{
        setFormData({
          productimg: event.target.value,
        });
      }

    // const handleImageChange = (event) => {
    // const imageFile = event.target.files[0];
    // setSelectedImage(URL.createObjectURL(imageFile));  };
    // function handleShow() {
    //   setFormData.firstname(values.);
    //   setShow(true);
    // }

    useEffect(()=>{
        setUserId(localStorage.getItem("UserId"));
        console.log(UserId);
        // window.action.href=`http://localhost:4000/GetDealerProfile?UserId=${UserId}`; 
        async function fetchData() {
          try {
            console.log(UserId);
            const response = await fetch(`http://localhost:4000/GetDealerProfile?UserId=${UserId}`);
            const data = await response.json();
            setProfile(data);
            console.log(data)
          } catch (error) {
          console.error(error);
          }
          console.log(Profile)
          if(Profile[0].Picture != null){
            setPicture(Profile[0].Picture)
            }
          if (Profile[0].AddressId === null){
            Profile[0].AddressId = 0;
          }
          if (Profile[0].City === null){
            Profile[0].City = false;
          }
        }
        fetchData();
      },[])
    
        const handleCountry=(event)=>{
          setAddress({
            Country: event.target.value,
          });
        }
        const handleCity=(event)=>{
          setAddress({
            City: event.target.value,
          });
        }
        const handleaddress=(event)=>{
          setAddress({
            address: event.target.value,
          });
        }
        const handleAccountBank=(event)=>{
          setAccount({
            AccountBank:event.target.value,
          })
        }
        const handleAccountNumber=(event)=>{
          setAccount({
            AccountNumber:event.target.value,
          })
        }
        const handleAccountTitle=(event)=>{
          setAccount({
            AccountTitle:event.target.value,
          })
        }



  return (
    <div className="gradient-custom-2" >
      <DealerNavbar/>
      {Profile.map((prof,index)=>(
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol lg="9" xl="9">
            <MDBCard>
              <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#007BFF', height: '200px' }}>
                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                  <MDBCardImage src={Picture}
                    alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />
                </div>
                <div className="ms-3" style={{ marginTop: '130px' }}>
                  <MDBTypography tag="h5">{prof.FirstName + " " + prof.LastName}</MDBTypography>
                </div>
              </div>
              <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                <div className="d-flex justify-content-end text-center py-1 text-center">
                  <div>
                    <MDBCardText className="mb-1 h5">4/5</MDBCardText>
                    <MDBCardText className="small text-muted mb-0">Rating</MDBCardText>
                  </div>


                </div>
              </div>
              <MDBCardBody className="text-black p-4">
                <div className="mb-5">
                <p className="lead fw-bold mb-1 ">About</p>
                
                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    
                <MDBRow>
                <MDBCol  className="font-italic mb-1" style={{ textAlign: "left" }}>
                        <MDBTypography  tag="h5">Email</MDBTypography >
                        <MDBCardText className="font-italic mb-1">{prof.Email}</MDBCardText>
                </MDBCol>
                <MDBCol size = "6" className="font-italic mb-1" style={{ textAlign: "left" }}>
                {prof.Contact?(<MDBTypography  tag="h5">Contact</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.Contact}</MDBCardText>
                </MDBCol>
                </MDBRow>
                    <MDBCol className="font-italic mb-1" style={{ textAlign: "left" }} >
                    {prof.ProductsAndServices?(<MDBTypography  tag="h5">Product and Services</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.ProductsAndServices }</MDBCardText>
                    </MDBCol>
                    <MDBCol className="font-italic mb-1" style={{ textAlign: "right",width:"200px", marginLeft: "auto" }} >
                    <button type="button" class="btn btn-primary btn-block mb-4" onClick={handleShow}>Edit Profile</button>
                    </MDBCol>
                  </div>
                <p className="lead fw-bold mb-1 ">Address</p>

                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    
                <MDBRow>
                <MDBCol  className="font-italic mb-1" style={{ textAlign: "left" }}>
                {prof.Country?(<MDBTypography  tag="h5">Country</MDBTypography >):null}
                        <MDBCardText className="font-italic mb-1">{prof.Country}</MDBCardText>
                </MDBCol>
                <MDBCol size = "6" className="font-italic mb-1" style={{ textAlign: "left" }}>
                {prof.City?(<MDBTypography  tag="h5">City</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.City}</MDBCardText>
                </MDBCol>
                </MDBRow>
                    <MDBCol className="font-italic mb-1" style={{ textAlign: "left" }} >
                    {prof.address?(<MDBTypography  tag="h5">Address</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.address }</MDBCardText>
                    </MDBCol>
                    <MDBCol className="font-italic mb-1" style={{ textAlign: "right",width:"200px", marginLeft: "auto" }} >
                    {prof.City?(<button type="button" class="btn btn-primary btn-block mb-4" onClick={showaddress}>Update Address</button>):<button type="button" class="btn btn-primary btn-block mb-4" onClick={showaddress}>Add Address</button>}
                    </MDBCol>


                    
                  </div>



                  <p className="lead fw-bold mb-1 ">Account</p>

                  <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                    
                <MDBRow>
                <MDBCol  className="font-italic mb-1" style={{ textAlign: "left" }}>
                {prof.AccountBank?(<MDBTypography  tag="h5">Bank</MDBTypography >):null}
                        <MDBCardText className="font-italic mb-1">{prof.AccountBank }</MDBCardText>
                </MDBCol>
                <MDBCol size = "6" className="font-italic mb-1" style={{ textAlign: "left" }}>
                {prof.AccountTitle?(<MDBTypography  tag="h5">Account Title</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.AccountTitle }</MDBCardText>
                </MDBCol>
                </MDBRow>
                    <MDBCol className="font-italic mb-1" style={{ textAlign: "left" }} >
                        {prof.AccountNumber?(<MDBTypography  tag="h5">Account No</MDBTypography>):null}
                        <MDBCardText className="font-italic mb-1">{prof.AccountNumber  }</MDBCardText>
                    </MDBCol>
                    <MDBCol className="font-italic mb-1" style={{ textAlign: "right",width:"200px", marginLeft: "auto" }} >
                    {prof.AccountNumber?(<button type="button" class="btn btn-primary btn-block mb-4" onClick={showaccount}>Update Account</button>):<button type="button" class="btn btn-primary btn-block mb-4" onClick={showaccount}>Add Account</button>}
                    </MDBCol>


                    
                  </div>
                  
                </div>

                
                <MDBRow className="g-2">
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(108).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                  <MDBCol className="mb-2">
                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Lightbox/Original/img%20(114).webp"
                      alt="image 1" className="w-100 rounded-3" />
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      ))}

      <Modal
            show={show}
            onHide={handleCloseModal}
            dialogClassName="modal-90w"
            size="lg"
            id="updatemodal"
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Edit Profile
              </Modal.Title>
            </Modal.Header>
            <form enctype='multipart/from-data'  action={`http://localhost:4000/UpdateDealerProfile?UserId=${UserId}`} method='post' id='UpdateDealerProfile'>
            <MDBCard className='d-flex'>
            <MDBCardBody className='p-5'>

            {
                <img
                  src={selectedImage}
                  alt="Selected"
                  style={{
                    width: "110px",
                    height: "110px",
                    borderRadius: "60px",
                    marginBottom: "10px",
                  }}
                />
              }
              <input
                type="file"
                name="productimg"
                id="productimg"
                onChange={handleImageChange}
                accept="image/*"
                style={{ marginLeft: "10px" }}
              />
          <MDBRow>
            <MDBCol lg='6' className="md-6" onChange ={handleName}>
              <MDBInput wrapperClass='mb-4' label='First Name' id='firstname' name='firstname' type='text' value={formData.firstname}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.firstname && touched.firstname ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.firstname}</p>
              ) : null}
            </MDBCol> 
             <MDBCol lg='6' className="md-6" onChange ={handleLastName}>
              <MDBInput wrapperClass='mb-4' label='Last Name' id='lastname' name='lastname' type='text' value={formData.lastname}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.lastname && touched.lastname ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.lastname}</p>
              ) : null}
            </MDBCol>
          </MDBRow>
                
          <MDBRow>
            <MDBCol lg='6' onChange ={handleContact}>
              <MDBInput wrapperClass='mb-4' label='Contact' id='contact' name='contact' type='contact' onChange ={handleChange} value={formData.contact}
                onBlur={handleBlur} />
              {errors.contact && touched.contact ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.contact}</p>
              ) : null}
            </MDBCol>
          </MDBRow>

          <MDBRow onChange ={handleProduct}>
            <label style={{ textAlign: "left", marginRight: "auto", marginBottom: "5px" }}>Product and Services</label>
            <textarea wrapperClass='mb-4' label='Product and Services' rows="4" id='productandservices' name='productandservices' type='password' value={formData.productandservices}
              onChange={handleChange}
              onBlur={handleBlur} />
            {errors.productandservices && touched.productandservices ? (
              <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.productandservices}</p>
            ) : null}
          </MDBRow>
          <MDBCol className="font-italic mb-1" style={{ textAlign: "right", width: "200px", marginLeft: "auto", marginTop: "10px" }} >
            <button onClick={handleSubmit} onSubmit={handleSubmit} type="button" className="btn btn-primary btn-block mb-4">Update Profile</button>
          </MDBCol>
          </MDBCardBody>
          </MDBCard>

            </form>
      </Modal>




      <Modal
            show={addresss}
            onHide={handleCloseModal}
            dialogClassName="modal-90w"
            size="lg"
            id="updatemodal"
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Address
              </Modal.Title>
            </Modal.Header>
            <form enctype='multipart/from-data'  action={`http://localhost:4000/UpdateDealerAddress?UserId=${UserId}&AddressId=${Profile[0].AddressId}`} method='post' id='UpdateDealerAddress'>
            <MDBCard className='d-flex'>
            <MDBCardBody className='p-5'>
          
          <MDBRow>
            <MDBCol lg='6' className="md-6" onChange ={handleCountry}>
              <MDBInput wrapperClass='mb-4' label='Country' id='Country' name='Country' type='text' value={Address.Country}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.Country && touched.Country ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.Country}</p>
              ) : null}
            </MDBCol>
            <MDBCol lg='6' className="md-6" onChange ={handleCity}>
              <MDBInput wrapperClass='mb-4' label='City' id='City' name='City' type='text' value={Address.City}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.City && touched.City ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.City}</p>
              ) : null}
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg='' className="" onChange ={handleaddress}>
              <MDBInput wrapperClass='mb-4' label='Address' id='address' name='address' type='email' value={Address.address}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.address && touched.address ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.address}</p>
              ) : null}
            </MDBCol>
          </MDBRow>
          <MDBCol className="font-italic mb-1" style={{ textAlign: "right", width: "200px", marginLeft: "auto", marginTop: "10px" }} >
            {Profile[0].Country ?(<button onClick={submitaddress} onSubmit={submitaddress} type="button" className="btn btn-primary btn-block mb-4">Update</button>):<button onClick={submitaddress} onSubmit={submitaddress} type="button" className="btn btn-primary btn-block mb-4">Add</button>}
          </MDBCol>
          </MDBCardBody>
          </MDBCard>

            </form>
      </Modal>


      <Modal
            show={account}
            onHide={handleCloseModal}
            dialogClassName="modal-90w"
            size="lg"
            id="updatemodal"
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-custom-modal-styling-title">
                Account
              </Modal.Title>
            </Modal.Header>
            <form enctype='multipart/from-data'  action={`http://localhost:4000/UpdateDealerAccount?UserId=${UserId}&AccountId=${Profile[0].AccountId}`} method='post' id='UpdateDealerAccount'>
            <MDBCard className='d-flex'>
            <MDBCardBody className='p-5'>
          
          <MDBRow>
            <MDBCol lg='6' className="md-6" onChange ={handleAccountBank}>
              <MDBInput wrapperClass='mb-4' label='Bank' id='AccountBank' name='AccountBank' type='text' value={Account.AccountBank}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.AccountBank && touched.AccountBank ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.AccountBank}</p>
              ) : null}
            </MDBCol>
            <MDBCol lg='6' className="md-6" onChange ={handleAccountTitle}>
              <MDBInput wrapperClass='mb-4' label='Title' id='AccountTitle' name='AccountTitle' type='text' value={Account.AccountTitle}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.AccountTitle && touched.AccountTitle ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.AccountTitle}</p>
              ) : null}
            </MDBCol>
          </MDBRow>

          <MDBRow>
            <MDBCol lg='' className="" onChange ={handleAccountNumber}>
              <MDBInput wrapperClass='mb-4' label='Account Number' id='AccountNumber' name='AccountNumber' type='email' value={Account.AccountNumber}
                onChange={handleChange}
                onBlur={handleBlur} />
              {errors.AccountNumber && touched.AccountNumber ? (
                <p className="form-error" style={{ color: "red", marginTop: "-25px" }}>{errors.AccountNumber}</p>
              ) : null}
            </MDBCol>
          </MDBRow>
          <MDBCol className="font-italic mb-1" style={{ textAlign: "right", width: "200px", marginLeft: "auto", marginTop: "10px" }} >
            {Profile[0].AccountBank ?(<button onClick={submitaccount} onSubmit={submitaccount} type="button" className="btn btn-primary btn-block mb-4">Update</button>):<button onClick={submitaccount} onSubmit={submitaccount} type="button" className="btn btn-primary btn-block mb-4">Add</button>}
          </MDBCol>
          </MDBCardBody>
          </MDBCard>

            </form>
      </Modal>
      

      <Footer/>


      
    </div>
  );
}