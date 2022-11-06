const filtercontainer = document.querySelector('.gallary-filter'),
 gallaryIteam = document.querySelectorAll('.gallary-iteam')

filtercontainer.addEventListener('click',(event)=>{
  if(event.target.classList.contains('filter-iteam')){
    // deactive the existing 'filter-iteam'//
    // filtercontainer.querySelector('.active').classList.remove('active')
    // active new filter-iteam//
    //event.target.classList.add('active')
    const filtervalue = event.target.getAttribute('data-filter')
    
    gallaryIteam.forEach((iteam)=>{
      if(iteam.classList.contains(filtervalue) || filtervalue === 'all'){
        iteam.classList.remove('hide')
        iteam.classList.add('show')
      }
      else {
        iteam.classList.remove('show')
        iteam.classList.add('hide')
      }
    })
  }
})