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
    const { id, value, files } = e.target as HTMLInputElement;
    if (files) {
      setFormData({ ...formData, images: Array.from(files) });
    } else {
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('jwtToken');
      const response = await axios.post('http://localhost:3000/product/save', formData, {
        headers: {
          'Authorization': token,
          'Content-Type': 'multipart/form-data' 
        }
      });
      console.log(response.data);
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
            <input type="text" id="title" placeholder="Title" onChange={handleChange} />
          </div>
        </div>

        <div className="col-lg-6">
          <div className="single-input-item">
            <label htmlFor="price" className="required">Price</label>
            <input type="number" id="price" placeholder="Price" onChange={handleChange} />
          </div>
        </div>
      </div>

      <div className="single-input-item">
        <label htmlFor="shortDescription" className="required">Short Description</label>
        <input type="text" id="shortDescription" placeholder="Short Description" onChange={handleChange} />
      </div>

      <div className="single-input-item">
        <label htmlFor="quantity" className="required">Quantity</label>
        <input type="number" id="quantity" placeholder="Quantity" onChange={handleChange} />
      </div>

      <div className="single-input-item">
        <label htmlFor="productType" className="required">Product Type</label>
        <select id="productType" onChange={handleChange}>
          <option value="">None</option>
          <option value="New">New</option>
          <option value="Sale">Sale</option>
        </select>
      </div>

      <div className="single-input-item">
        <label htmlFor="description" className="required">Description</label>
        <textarea id="description" onChange={handleChange}></textarea>
      </div>

      <fieldset>
        <legend>Image upload</legend>
        <div className="single-input-item">
          <label htmlFor="images" className="required">Upload</label>
          <input type="file" id="images" name="images" multiple onChange={handleChange} />
        </div>
      </fieldset>

      <div className="single-input-item">
        <button type="submit" className="btn-login btn-add-to-cart">Save Changes</button>
      </div>
    </form>
  );
};

export default ProductForm;
