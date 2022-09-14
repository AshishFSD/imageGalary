
// let junrate randum number 

 const imageUrl ="https://picsum.photos/200/300?random="; 

   for(let i=0; i<100; i++){
      let url =imageUrl +i;
      const row = document.createElement("div");
      row.setAttribute("class" ,"row");
      
       const img = document.createElement("img");
           img.setAttribute("src" , url);
           row.append(img)
     
       const h2 = document.createElement('h2'); 
        h2.innerText=`Image number ${i+1}`;
      
        row.append(h2)
     // We can use this to add image discription;
      //   const p = document.createElement('p'); 
      //   p.innerText="this is a paragraf tax";
      
      //   row.append(p)

      document.getElementById('main').appendChild(row);
   }

  


