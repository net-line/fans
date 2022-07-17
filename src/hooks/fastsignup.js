export async function  faststsignup(pseudo, pw, context){
    
fetch("https://api.deine.fans/api/userlogin",{
        method: "POST",
        body: JSON.stringify({
        pseudo: pseudo,
        password: pw,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
          
             res.json().then((data) => {
                context.login(
                  data.authToken,
                  data.login,
                  data.pseudo,
                  data.userID
                );

             })})
        

}