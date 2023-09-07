var nav_home=document.getElementById('nav-home');
var nav_contact=document.getElementById("nav-contact");
var nav_resume=document.getElementById("nav-resume");
var nav_home=document.getElementById("nav-home");

var contact=document.getElementById('contact');
var about=document.getElementById('about-me');
var resume=document.getElementById('resume');
contact.style.display='none';
resume.style.display='none';

// about.style.opacity=1;
 about.classList.add('addopa');

nav_home.classList.add('change-nav-border-active');

nav_home.addEventListener('click', ()=>{
  //  about.style.opacity=1;
  
  // alert('hello')
 
  about.classList.add('addopa');
   about.style.display='block';
  contact.classList.remove('addopa')
   contact.style.display='none';
   resume.style.display='none';
   nav_home.classList.add('change-nav-border-active');
   nav_contact.classList.remove('change-nav-border-active');
   nav_resume.classList.remove('change-nav-border-active');

  



 })


 nav_contact.addEventListener('click', () =>{
  //  contact.style.opacity = 1;
  contact.classList.toggle('addopa')
 
  about.classList.remove('addopa')
  resume.classList.remove('addopa')
    contact.style.display='block';
    about.style.display='none';
    resume.style.display='none';
    contact.classList.add('addopa')
    about.classList.remove('addopa')
    resume.classList.remove('addopa')
    nav_home.classList.remove('change-nav-border-active');
    nav_contact.classList.add('change-nav-border-active');
    
    // nav_contact.classList.add('change-nav-border-active');
   
  
    
    nav_resume.classList.remove('change-nav-border-active');


})

nav_resume.addEventListener('click', function(){
  resume.classList.add('addopa')
  about.classList.remove('addopa')
  contact.classList.remove('addopa')
resume.style.display='block';
// resume.style.opacity=1;
about.style.display='none';
contact.style.display='none';
nav_home.classList.remove('change-nav-border-active')
resume.classList.add('section-opacity')
nav_contact.classList.remove('change-nav-border-active')


nav_resume.classList.add('change-nav-border-active')

})