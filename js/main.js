
// Lets creat a required element 


//  const row = document.createElement("div");
//  row.setAttribute("class" ,"row");
 
//   const img = document.createElement("img");
//       img.setAttribute("src" , "#");

//       row.append(img)

//   const h2 = document.createElement('h2'); 
//    h2.innerText="hello world";
 
//    row.append(h2)

//    const p = document.createElement('p'); 
//    p.innerText="this is a paragraf tax";
 
//    row.append(p)

//===========Feact Api to get data ==============//

 
  const key ='563492ad6f91700001000001c476761ea0244c6a886db3ff26237130';


  function getImage(){

       fetch( "https://api.pexels.com/v1/curated?per_page=1", {
            method : "GET" ,
            He

       })
            
  }
    
      


 
   for(let i=0; i<5; i++){

      const row = document.createElement("div");
      row.setAttribute("class" ,"row");
      
       const img = document.createElement("img");
           img.setAttribute("src" , "#");
     
           row.append(img)
     
       const h2 = document.createElement('h2'); 
        h2.innerText=`hello world ${i}`;
      
        row.append(h2)
     
        const p = document.createElement('p'); 
        p.innerText="this is a paragraf tax";
      
        row.append(p)

      document.getElementById('main').appendChild(row);
   }

  


