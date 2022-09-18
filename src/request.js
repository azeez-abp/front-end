
function request(){
    return {
  ///////////////////////////////////////////////////////////////
  /////////////////////gertDAta////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  
      getData: async function(data){
           let  form = data.form !== null ? new FormData(data.form) :new FormData()
                  
                  //console.log(data.appends)    
               if (typeof data.appends !== 'undefined') {     
                data.appends.forEach( (a,i)=>{
                     if(typeof data.keys !== 'undefined'){
                        form.append(data.keys[i],a) 
                     }else{
                        form.append('post'+i,a) 
                     }
                    
                } )
              }
               
          
                var request = new Request(data.url, {
                    method: 'POST', 
                    mode: 'cors',
                    headers: {"Accept": "application/json",
                               "Authorization":data.auth?data.auth:''
                            },
                    body: form
                });                   

  
              try{
                const fetchResult = fetch(request)
              

                const response = await fetchResult;
                const jsonData = await response.json();
                // let output = document.querySelector(".output").textContent=JSON.stringify(jsonData,null,2)
                //console.log(jsonData)
  
           
            return  {bol:true, res: jsonData}
            
            }catch(e){
             
  
              return {bol:false, res: {err:"Network refuse connection",e:e} } ;
  
  
            }
  
  
  
  },///////////////////////////////////////////////////////////////
  /////////////////////gertDAta////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////
  
  
  
  
    }////////////////End of object return///////////////
    //////////////////////////////
  
  
  
  
  }
  
  
  
  export default request
  
  
  
  
  
  
  
  
  
  