export async function addabo(userID, producerID, PaymentAuthtoken, authToken) {

   fetch("https://api.deine.fans/api/subscriptions", {
     method: "PUT",
     body: JSON.stringify({
       userID: userID,
       producerID: producerID,
       paymentAuthorizationID: PaymentAuthtoken,
       authToken: authToken,
     }),
     headers: {
       "Content-Type": "application/json",
     },
   }).then((res) => {
     res.json().then((data) => {
       if (data.error) {
         console.log(data.error);
       }
       if (data.success) {
         console.log(data.success);
       }
     });
   });

}