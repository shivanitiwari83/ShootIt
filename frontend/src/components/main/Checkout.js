import React, { useState } from 'react'
import app_config from '../../config';

const Checkout = () => {

    const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));
    const [product, setProduct] = useState(JSON.parse(sessionStorage.getItem('product')));
    const url = app_config.api_url;


    const saveOrder = async () => {
        const res = await fetch(url+'/order/add', {
            method: 'POST',
            body : JSON.stringify({
                product : product._id,
                user : currentUser._id,
                createdAt : new Date(),
                paymentInfo : null
            }),
            headers : {'Content-Type' : 'application/json'}
        })

        console.log(res.status);
    }

    return (
        <section style={{ backgroundColor: "#eee" }}>
            <div className="container py-5">
                <div className="card">
                    <div className="card-body">
                        <div className="row d-flex justify-content-center pb-5">
                            <div className="col-md-7 col-xl-5 mb-4 mb-md-0">
                                <div className="py-4 d-flex flex-row">
                                    <h5>
                                        <span className="far fa-check-square pe-2" />
                                        <b>ELIGIBLE</b> |
                                    </h5>
                                    <span className="ps-2">Pay</span>
                                </div>
                                <h4 className="text-success">$85.00</h4>
                                <h4>Diabetes Pump &amp; Supplies</h4>
                                <div className="d-flex pt-2">
                                    <div>
                                        <p>
                                            <b>
                                                Insurance Responsibility{" "}
                                                <span className="text-success">$71.76</span>
                                            </b>
                                        </p>
                                    </div>
                                    <div className="ms-auto">
                                        <p className="text-primary">
                                            <i className="fas fa-plus-circle text-primary pe-1" />
                                            Add insurance card
                                        </p>
                                    </div>
                                </div>
                                <p>
                                    Insurance claims and all necessary dependencies will be submitted
                                    to your insurer for the coverred portion of this order
                                </p>
                                <div
                                    className="rounded d-flex"
                                    style={{ backgroundColor: "#f8f9fa" }}
                                >
                                    <div className="p-2">Aetna-Open Access</div>
                                    <div className="ms-auto p-2">OAP</div>
                                </div>
                                <hr />
                                <div className="pt-2">
                                    <div className="d-flex pb-2">
                                        <div>
                                            <p>
                                                <b>
                                                    Patient Balance{" "}
                                                    <span className="text-success">$13.24</span>
                                                </b>
                                            </p>
                                        </div>
                                        <div className="ms-auto">
                                            <p className="text-primary">
                                                <i className="fas fa-plus-circle text-primary pe-1" />
                                                Add payment card
                                            </p>
                                        </div>
                                    </div>
                                    <p>
                                        This is an estimate for the portion of your order (not covered
                                        by insurance) due today . once insurance finalizes their review
                                        refunds and/or balances will reconcile automatically.
                                    </p>
                                    <form className="pb-3">
                                        <div className="d-flex flex-row pb-3">
                                            <div className="d-flex align-items-center pe-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="radioNoLabel"
                                                    id="radioNoLabel1"
                                                    defaultValue=""
                                                    aria-label="..."
                                                    defaultChecked=""
                                                />
                                            </div>
                                            <div className="rounded border d-flex w-100 p-3 align-items-center">
                                                <p className="mb-0">
                                                    <i className="fab fa-cc-visa fa-lg text-primary pe-2" />
                                                    Visa Debit Card
                                                </p>
                                                <div className="ms-auto">************3456</div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row">
                                            <div className="d-flex align-items-center pe-2">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="radioNoLabel"
                                                    id="radioNoLabel2"
                                                    defaultValue=""
                                                    aria-label="..."
                                                />
                                            </div>
                                            <div className="rounded border d-flex w-100 p-3 align-items-center">
                                                <p className="mb-0">
                                                    <i className="fab fa-cc-mastercard fa-lg text-dark pe-2" />
                                                    Mastercard Office
                                                </p>
                                                <div className="ms-auto">************1038</div>
                                            </div>
                                        </div>
                                    </form>
                                    <button
                                        className="btn btn-primary btn-block btn-lg"
                                        onClick={saveOrder}
                                    >Make Payment</button>
                                </div>
                            </div>
                            <div className="col-md-5 col-xl-4 offset-xl-1">
                                <div className="py-4 d-flex justify-content-end">
                                    <h6>
                                        <a href="#!">Cancel and return to website</a>
                                    </h6>
                                </div>
                                <div
                                    className="rounded d-flex flex-column p-2"
                                    style={{ backgroundColor: "#f8f9fa" }}
                                >
                                    <div className="p-2 me-3">
                                        <h4>Order Recap</h4>
                                    </div>
                                    <div className="p-2 d-flex">
                                        <div className="col-8">Contracted Price</div>
                                        <div className="ms-auto">$186.76</div>
                                    </div>
                                    <div className="p-2 d-flex">
                                        <div className="col-8">Amount toward deductible</div>
                                        <div className="ms-auto">$0.00</div>
                                    </div>
                                    <div className="p-2 d-flex">
                                        <div className="col-8">Coinsurance( 0% )</div>
                                        <div className="ms-auto">+ $0.00</div>
                                    </div>
                                    <div className="p-2 d-flex">
                                        <div className="col-8">Copayment</div>
                                        <div className="ms-auto">+ $40.00</div>
                                    </div>
                                    <div className="border-top px-2 mx-2" />
                                    <div className="p-2 d-flex pt-3">
                                        <div className="col-8">
                                            Total Deductible, Coinsurance, and Copay
                                        </div>
                                        <div className="ms-auto">$40.00</div>
                                    </div>
                                    <div className="p-2 d-flex">
                                        <div className="col-8">
                                            Maximum out-of-pocket on Insurance Policy (not reached)
                                        </div>
                                        <div className="ms-auto">$6500.00</div>
                                    </div>
                                    <div className="border-top px-2 mx-2" />
                                    <div className="p-2 d-flex pt-3">
                                        <div className="col-8">Insurance Responsibility</div>
                                        <div className="ms-auto">
                                            <b>$71.76</b>
                                        </div>
                                    </div>
                                    <div className="p-2 d-flex">
                                        <div className="col-8">
                                            Patient Balance{" "}
                                            <span className="fa fa-question-circle text-dark" />
                                        </div>
                                        <div className="ms-auto">
                                            <b>$71.76</b>
                                        </div>
                                    </div>
                                    <div className="border-top px-2 mx-2" />
                                    <div className="p-2 d-flex pt-3">
                                        <div className="col-8">
                                            <b>Total</b>
                                        </div>
                                        <div className="ms-auto">
                                            <b className="text-success">$85.00</b>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Checkout