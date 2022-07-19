import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../context/testcontext";
import useMyHttp from "../../hooks/myhttp";
import AddPaymentModal from "./addpaymentmodal";
import classes from "./paymentmethods.module.css";

const PaymentMethods=()=>{
    const authCtx=useContext(AuthContext);

    const { isLoading, data, error, sendRequest } = useMyHttp();
    function fetchMethods() {
      sendRequest(
        `https://api.deine.fans/api/payment/methods/${authCtx.userID}?authToken=${authCtx.token}`,
        "GET"
      );
    }
    useEffect(() => {
      fetchMethods();
    }, []);
    const [seeModal,setSeeModal]=useState();
    function showModal(){
setSeeModal(true);
    }
    function closeModal (){
        setSeeModal(false);
    }
    function getbackdata(props){
        console.log(props)
        closeModal();
    }
    return (
      <div>
        <h5>Verwalte Deine Zahlungsmethoden:</h5>
        {isLoading && <h1>Lade Daten</h1>}
        {data && data.availablePaymentMethods && (
          <div>
            <ul>
              {data.availablePaymentMethods.map((method) => (
                <li
                  key={method.paymentMethodName}
                  className={`${
                    method.authorized ? classes.listtrue : classes.listfalse
                  }`}
                >
                  {method.paymentMethodName}
                  {method.authorized ? null : (
                    <div>
                      <button onClick={showModal}>
                        Zahlungsmethode hinzufügen
                      </button>
                    </div>
                  )}
                </li>
              ))}
            </ul>
            {seeModal && (
              <div>
                <AddPaymentModal
                  sendbackdata={getbackdata}
                  getbackclose={closeModal}
                />
              </div>
            )}
          </div>
        )}

        {error && { error }}
      </div>
    );
};

export default PaymentMethods;