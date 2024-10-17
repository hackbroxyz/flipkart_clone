import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation } from 'react-router-dom';

export default function OrderSuccess() {
    const location = useLocation();
    const { additionalPrice } = location.state || { additionalPrice: 0 };

    // Get today's date
    const today = new Date();
    const orderDate = today.toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });

    // Generate a random order number
    const [orderNumber, setOrderNumber] = useState('');

    useEffect(() => {
        const generateOrderNumber = () => {
            // Generate a random 6-digit number
            const randomNum = Math.floor(100000 + Math.random() * 900000);
            setOrderNumber(`#${randomNum}`);
        };
        generateOrderNumber();
    }, []);

    return (
        <div className="min-vh-100 bg-light d-flex align-items-center justify-content-center p-4">
            <div className="card w-100" style={{ maxWidth: "600px" }}>
                <div className="card-body text-center p-4">
                    <div className="mb-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="48"
                            height="48"
                            fill="green"
                            className="bi bi-check-circle-fill"
                            viewBox="0 0 16 16"
                        >
                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.904 11.803l7-7-.708-.708L6.5 10.086 3.854 7.44l-.708.707 3.758 3.656z" />
                        </svg>
                    </div>
                    <h1 className="text-success mb-3">Order Placed Successfully!</h1>
                    <p className="text-muted mb-4">
                        Thank you for your purchase. Your order is on its way!
                    </p>

                    <div className="bg-light rounded p-4 mb-4">
                        <h4 className="mb-3 text-start">Order Details</h4>
                        <div className="row">
                            <div className="col-6 mb-2">
                                <p className="text-muted mb-1">Order Number</p>
                                <p>{orderNumber}</p>
                            </div>
                            <div className="col-6 mb-2">
                                <p className="text-muted mb-1">Date</p>
                                <p>{orderDate}</p>
                            </div>
                            <div className="col-6 mb-2">
                                <p className="text-muted mb-1">Total</p>
                                <p>{additionalPrice}</p>
                            </div>
                            <div className="col-6 mb-2">
                                <p className="text-muted mb-1">Shipping</p>
                                <p>Express</p>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center align-items-center mb-4">
                        <div className="text-success">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-box-seam-fill me-2"
                                viewBox="0 0 16 16"
                            >
                                <path d="M7.293 0a1 1 0 0 0-.514.144L.5 3.5 8 8l7.5-4.5-6.279-3.356A1 1 0 0 0 8.707 0H7.293zM16 8.5V13l-7.5 4L1 13V8.5l7.5 4 7.5-4z" />
                            </svg>
                            <span>Preparing</span>
                        </div>
                        <div className="border border-success mx-2" style={{ width: "40px", height: "1px" }} />
                        <div className="text-success">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
                            </svg>
                            <span>Shipping</span>
                        </div>
                        <div className="border border-success mx-2" style={{ width: "40px", height: "1px" }} />
                        <div className="text-success">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-check-circle-fill me-2"
                                viewBox="0 0 16 16"
                            >
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.904 11.803l7-7-.708-.708L6.5 10.086 3.854 7.44l-.708.707 3.758 3.656z" />
                            </svg>
                            <span>Delivered</span>
                        </div>
                    </div>

                    <a href="/" className="btn btn-success text-white px-4">
                        Continue Shopping
                    </a>
                </div>
            </div>
        </div>
    );
}
