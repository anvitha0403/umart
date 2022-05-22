export const fetchurl=async(url, body, method1, token)=>{
    try {
          console.log(`${url} ${body} ${method1} ${token}`);
          var requestOptions;
          if (body) {
               requestOptions = {
                method: method1,
                // credentials: 'include',

                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
                credentials: "same-origin",
              };
          
          }
          else {
              requestOptions = {
                method: method1,
                // credentials: 'include',

                headers: {
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${token}`,
                },
                
                credentials: "same-origin",
              };
          }
      
      
      const response=await fetch(url, requestOptions );
      const data = await response.json();
      return data;
         
      }  
         
          // Calling the end function will send the request
       
    
    catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return error;
      
      // thunkAPI.dispatch(setMessage(message));
      // return thunkAPI.rejectWithValue();
     }
     
}