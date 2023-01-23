/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */
 
*/**
 * Define Global Variables
 * 
*/
const sections = Array.from(document.querySelectorAll("section");
const navList = document.getElementById("navbar_list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

// build the nav
function createlistItem() {
  for(sec of sections) {
    listItem = document.createElement("li);
    listItem.innerHTML = <li><a href="#${sec.id}"data.nav="${sec.id}"class="menu_link">${sec.dataset.nav}</a>
      navList.appendchild(listItem);
}

// add navbar style 
    links.classList.add("menu__link");

    links.setAttribute('href',IdAttribute);

// Scroll to section on link click
    links.addEventListener('click', e => {
        e.preventDefault();
      section.scrollIntoView({behaviour : "smooth"});
      
// add the name of sections from the data-nav
    const text = document.createTextNode(navDate);
  
links.appendChild(text);
      newli.appendChild(links);
      fragment.appendChild(newli);
    });

  Ul.appendChild(fragment);

window.adEventlistener('scroll'()=>{


// Check which section on screen and remove active class
  const activesec = document.getElementsByClassName('your-active-class')[0];
 
  if(activesec !== undefined){
    activesec.classList.remove('your-active-class')
        }
  
//  Check which section on screen and remove navactive class
   const ActiveNav = document.getElementsByClassName('navactive')[0]

        if(activeNav !== undefined){
         ActiveNav.classList.remove('navactive')
        }
            
          
// set sections to be active
  sections.forEach(section => {
    
    const react = section.getBoundingClientRect();
  
  if(react.top >=-50 && react.top<394>{
    
    section.classlist.add('your-active-class');
    
                               
// set navbar to be active
                
        const listactive = document.querySelectorAll(`a[href='${section.id}']`)[0].parentElement;
    
        listactive.classList.add("navactive");
    
           
//how to go top
    
    if (section.id == "section1"){
      
      goTop.style.display = 'none';
    }else{
      
      goTop.style.display = 'block';
    }
  })
      
    
 


