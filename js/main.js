 const data = fetch('https://picsum.photos/v2/list').then(res=>{
    res.json().then(edta=>{
           console.log(data)
    })
 })