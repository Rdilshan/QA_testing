import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



interface FormDataType {
  title: string;
  price: string;
  shortDescription: string;
  quantity: string;
  productType: string;
  description: string;
  images: File[];
}

const ProductForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    title: '',
    price: '',
    shortDescription: '',
    quantity: '',
    productType: '',
    description: '',
    images: [],
  });
  const navigate = useNavigate(); 

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleImageChange = (e:any) => {
    setFormData({
      ...formData,
      images: Array.from(e.target.files),
    });
  };

  

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('title', formData.title);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('shortDescription', formData.shortDescription);
    formDataToSend.append('quantity', formData.quantity);
    formDataToSend.append('productType', formData.productType);
    formDataToSend.append('description', formData.description);


    formData.images.forEach((image) => {
      formDataToSend.append('images', image);
    });


    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/product/save`, formDataToSend, {
        headers: {
          'Authorization': token,
          'Content-Type': 'multipart/form-data' 
        }
      });
      console.log(response.data);
      navigate('/Admin', { replace: true });
      window.location.reload();
      
    } catch (error:any) {
      if(error.response.data == "Invalid Token"){
        navigate('/Adminlog');
       }
      console.error('There was an error!', error);
    }



  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <div className="single-input-item">
            <label htmlFor="title" className="required">Title</label>
            <input type="text" name="title" placeholder="Title" onChange={handleChange} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="single-input-item">
            <label htmlFor="price" className="required">Price</label>
            <input type="number" name="price" placeholder="Price" onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="single-input-item">
        <label htmlFor="shortDescription" className="required">Short Description</label>
        <input type="text" name="shortDescription" placeholder="Short Description" onChange={handleChange} />
      </div>

      <div className="single-input-item">
        <label htmlFor="quantity" className="required">Quantity</label>
        <input type="number" name="quantity" placeholder="Quantity" onChange={handleChange} />
      </div>

      <div className="single-input-item">
        <label  className="required">Product Type</label>
        <input type="text" name="productType" placeholder="New / Sale" onChange={handleChange} />
      </div>

      <div className="single-input-item">
        <label htmlFor="description" className="required">Description</label>
        <textarea name="description" onChange={handleChange}></textarea>
      </div>

      <fieldset>
        <legend>Image upload</legend>
        <div className="single-input-item">
          <label htmlFor="images" className="required">Upload</label>
          <input type="file" name="images" multiple onChange={handleImageChange} />
        </div>
      </fieldset>

      <div className="single-input-item">
        <button type="submit" className="btn-login btn-add-to-cart">Save Changes</button>
      </div>
    </form>
  );
};

export default ProductForm;
