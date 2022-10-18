const LINK = document.getElementById('contents');

LINK.addEventListener('click',(e)=>{
   
    if(confirm('Procedere con il caricamento?')==false){
      e.preventDefault();
    }

})
