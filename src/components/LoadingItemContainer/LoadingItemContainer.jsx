import React from 'react'

export const LoadingItemContainer = ({ products }) => {
    const skeletonCount = products ? products.length : 15;
    const renderSkeletons = () => {
        const skeletons = [];
        for (let i = 0; i < skeletonCount; i++) {
            skeletons.push(
                <div key={i} className="card">
                    <div className="card-body">
                        <div className="loading-image">
                            <div className="spinner-border" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                        <hr />
                        <h5 className="card-title">-</h5>
                        <p className="card-text">$</p>
                    </div>
                    <div className="card-footer">-</div>
                </div>
            );
        }
        return skeletons;
    };
    return <div className="orderItems">{products ? products.map((id) => <div>{id}</div>) : renderSkeletons()}</div>;
};