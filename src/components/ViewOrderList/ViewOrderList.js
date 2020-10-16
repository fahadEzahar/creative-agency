import React from 'react';

const ViewOrderList = (props) => {
    const { title, projectDetails, image } = props.order;
    return (
        <div className="col-md-6">
            <div className="card shadow-sm border-0 my-3">
                <div className="card-body d-flex justify-content-between ">
                    <img src={`data:image/png;base64,${image.img}`} alt="" width="60" />
                    <div className="">
                        <div class="btn alert-danger text-danger" role="alert">
                            pending
                    </div>
                    </div>
                </div>
                <div className="card-footer border-0 bg-white">
                    <h5>{title}</h5>
                    <p className="card-text ">{projectDetails}</p>
                </div>
            </div>
        </div>
    );
};

export default ViewOrderList;