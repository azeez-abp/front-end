
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
               
          
                let request = new Request(data.url, {
                  method: 'POST', 
                  // mode: 'cors',
                   // 'Content-Type': 'application/json',this will not allow json to be pass
                   headers:  data.header || {'Accept':'application/json'},
                   body: form
                });                   

  
              try{
                const fetchResult = fetch(request)
              

                const response = await fetchResult;
                const jsonData = await response.json();
             
  
           
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
  
  
  
  
  
  
  
  
  
  