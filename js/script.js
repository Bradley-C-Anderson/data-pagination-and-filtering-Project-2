/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
document.addEventListener('DOMContentLoaded', () => {
   const ul = document.querySelector('.student-list');
   let endNumStudent = data.length;
   let startNumStudent = 0;
   const numPerPage = 9;
   let numPages = Math.ceil(endNumStudent/numPerPage);

   function createElement(elementName, property, value){
      const element = document.createElement(elementName);
      element[property] = value;
      return element;
   }


   /*
      This section is for the search function
   */
   const header = document.getElementsByClassName('header');
   const label = createElement('label', 'className', 'student-search');
   //label.className = 'student-search';
   header[0].appendChild(label);
   const span = createElement('span', 'innerHTML', 'Search by name');
   label.appendChild(span);
   const input = createElement('input', 'id', 'search');
   input.placeholder = 'Search by name...';
   input.type = 'text';
   label.appendChild(input);
   const searchButton = createElement('button', 'type', 'button');
   label.appendChild(searchButton);
   const imgButton = createElement('img', 'src', 'img/icn-search.svg');
   imgButton.alt = 'Search icon';
   searchButton.appendChild(imgButton);
   const form = document.getElementById('registrar');
   //end of search function setting

   //search function listener
   input.addEventListener('input', (e) => {
      //e.preventDefault();
      let searchArray = [];
      for(let i = 0; i < data.length; i++){
         //console.log(input.value);
         
         const firstName = data[i].name.first.toLowerCase();
         const lastName = data[i].name.last.toLowerCase();
         const inputValue = input.value.toLowerCase();
         if (firstName.indexOf(inputValue) >=0 || lastName.indexOf(inputValue) >=0 ){
            searchArray.push(data[i]);
            numPages = Math.ceil(searchArray.length/numPerPage);
         } 
         
      }
      showPage(1, searchArray)
   }); 

   //function removeElementsByClass found on Stack Overflow by Miguel Mota
   //https://stackoverflow.com/questions/34193751/js-remove-last-child

   function removeElementsByClass(className){
      const elements = document.getElementsByClassName(className);
      while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
      }
  }

   //function to create a page of students
   function showPage(pageNum, data){
      let currNumPerPage = numPerPage;
      endNumStudent = data.length;
      //remove previous page
      removeElementsByClass('student-item cf');
      //where to start the next page
      const startingPosition = (pageNum - 1) * currNumPerPage;
      //if you're on the last page on show the leftovers
      if(pageNum === numPages){
         currNumPerPage = endNumStudent % numPerPage;
      }
      //loop through the data to create items per page.
      for(let i = startingPosition; i < startingPosition + currNumPerPage; i++){
         const li = createElement('li', 'className', 'student-item cf');
         ul.appendChild(li);

         const div1 = createElement('div', 'className', 'student-details');
         li.appendChild(div1);

         const img = createElement('img', 'className', 'avatar');
         img.src = data[i].picture.thumbnail;
         div1.appendChild(img);

         const name = createElement('h3', 'innerHTML', `${data[i].name.first} ${data[i].name.last}`);
         div1.appendChild(name);

         const email = createElement('span', 'className', 'email');
         email.innerHTML = data[i].email;
         div1.appendChild(email);

         const div2 = createElement('div', 'className', 'joined-details');
         li.appendChild(div2);

         const joined = createElement('span', 'className', 'date');
         joined.innerHTML = `Joined ${data[i].registered.date}`;
         div2.appendChild(joined)
      }
}


//create page buttons
   const ulPage = document.querySelector('.link-list');
   console.log('in button');
   console.log(numPages);
   for(let i = 0; i < numPages; i++){
      const listElement = document.createElement('li');
      ulPage.appendChild(listElement);
      //const button = createElement('button', 'textContent', `${i + 1}`)
      const button = createElement('button', 'type', `button`)
      button.className = 'page-button';
      button.textContent = i + 1;
      ulPage.children[i].appendChild(button);
   }



//get an array of all the buttons and set the first one to active
const pageButtons = document.querySelectorAll('.page-button');
pageButtons[0].className = 'page-button active';

//When click page buttons remove active class from current and add it to the clicked page.
   for(const item of pageButtons){
      item.addEventListener('click', (e) => { 
         ulPage.children[currPageNum - 1].firstChild.className = 'page-button';
         currPageNum = +(e.target.textContent);
         showPage(currPageNum, data);
         ulPage.children[currPageNum - 1].firstChild.className = 'page-button active';
      });
}




/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/



// Call functions
   //load the first page when page is opened
   let currPageNum = 1;
   showPage(currPageNum,data);





});//end of DOMContentLoaded handler