/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/
document.addEventListener('DOMContentLoaded', () => {
   const ul = document.querySelector('.student-list');
   const endNumStudent = data.length;
   let startNumStudent = 0;
   const numPerPage = 9;
   const numPages = Math.ceil(endNumStudent/numPerPage);

   function createElement(elementName, property, value){
      const element = document.createElement(elementName);
      element[property] = value;
      return element;
   }
   //function removeElementsByClass found on Stack Overflow by Miguel Mota
   //https://stackoverflow.com/questions/34193751/js-remove-last-child

   function removeElementsByClass(className){
      const elements = document.getElementsByClassName(className);
      while(elements.length > 0){
          elements[0].parentNode.removeChild(elements[0]);
      }
  }
   
   let currPageNum = 1;
   showPage(currPageNum);
   function showPage(pageNum){
      let currNumPerPage = numPerPage;
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
      //if (currPageNum + 1 === numPages){
         //ul.removeChild(ul.lastChild);
      //}
}


//create page buttons
   const ulPage = document.querySelector('.pagination');
   
   for(let i = 0; i < numPages; i++){
      const pageButton = createElement('button', 'textContent', `${i+1}`);
      ulPage.appendChild(pageButton);

      ulPage.addEventListener('click', (e) => {
         if (e.target.textContent === `${i+1}`){
            showPage((i + 1));
         }
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






});//end of DOMContentLoaded handler