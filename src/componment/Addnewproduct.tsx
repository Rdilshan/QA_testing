

export default function Addnewproduct() {
    return (
        <>
            <div className="myaccount-content">
                <h3>Add New Product</h3>

                <div className="account-details-form">
                    <form action="#">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label htmlFor="first-name" className="required">Title</label>
                                    <input type="text" id="first-name" placeholder="First Name" />
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="single-input-item">
                                    <label htmlFor="last-name" className="required">Price</label>
                                    <input type="number" id="last-name" placeholder="Price" />
                                </div>
                            </div>
                        </div>

                        <div className="single-input-item">
                            <label htmlFor="display-name" className="required">Short Description</label>
                            <input type="text" id="display-name" placeholder="Display Short Description" />
                        </div>

                        <div className="single-input-item">
                            <label htmlFor="email" className="required">Quantity</label>
                            <input type="number" id="email" placeholder=" qty" />
                        </div>

                        <div className="single-input-item">
                            <label htmlFor="email" className="required">Product Type</label>
                            <select name="" id="">
                                <option value="">None</option>
                                <option value="New">New </option>
                                <option value="Sale">Sale</option>
                            </select>
                        </div>

                        <div className="single-input-item">
                            <label htmlFor="email" className="required">Description</label>
                            <textarea name="" id=""></textarea>
                        </div>

                        <fieldset>
                            <legend>Image upload</legend>
                            <div className="single-input-item">
                                <label htmlFor="current-pwd" className="required">Upload
                                    </label>
                                <input type="file" id="current-pwd" placeholder="Current Password" />
                            </div>

                            
                        </fieldset>

                        <div className="single-input-item">
                            <button className="btn-login btn-add-to-cart">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
