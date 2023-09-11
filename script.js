document.addEventListener("DOMContentLoaded", () => {
   const bookTable = document.getElementById("body-table");
   const addBookBtn = document.getElementById("add-book-btn");
   const addBookForm = document.getElementById("add-book-form");
   const saveNewBookBtn = document.getElementById("save-new-book-btn");
   const cancelNewBookBtn = document.getElementById("cancel-new-book-btn");
   const books = JSON.parse(localStorage.getItem("books")) || [];

   // Event listener for "Add Book" button
   addBookBtn.addEventListener("click", () => {
      addBookForm.style.display = "block";
      addBookBtn.style.display = "none";
   });

   cancelNewBookBtn.addEventListener("click", () => {
      addBookForm.style.display = "none";
      addBookBtn.style.display = "inline";
   });

   saveNewBookBtn.addEventListener("click", () => {
      let bookName = document.getElementById("name").value;
      let bookAuthor = document.getElementById("author").value;
      let bookDescription = document.getElementById("description").value;
      let bookTotalCount = document.getElementById("totalCount").value;

      if (!bookName) {
         alert("Please enter Book Name!");
         return false;
      }
      if (!bookAuthor) {
         alert("Please enter Book Author!");
         return false;
      }
      if (!bookDescription) {
         alert("Please enter Book Description!");
         return false;
      }
      if (!bookTotalCount) {
         alert("Please enter Book Total Count!");
         return false;
      }

      const newBook = {
         name: bookName,
         author: bookAuthor,
         description: bookDescription,
         totalCount: bookTotalCount,
      };
      books.push(newBook);
      localStorage.setItem("books", JSON.stringify(books));
      addBookForm.style.display = "none";
      addBookBtn.style.display = "block";
      renderTable();
   });

   // Function to render the book table
   function renderTable() {
      bookTable.innerHTML = "";
      books.forEach((book, index) => {
         const row = document.createElement("tr");
         row.innerHTML = `
                <td id='book_name'>${book.name}</td>
                <td id='book_author'>${book.author}</td>
                <td id='book_description'>${book.description}</td>
                <td id='book_total_count'>${book.totalCount}</td>
                <td>
                    <button class="edit-btn" data-index="${index}">Edit</button>
                    <button class="delete-btn" data-index="${index}">Delete</button>
                    <button class="save-btn" data-index="${index}" style="display: none;">Save</button>
                </td>
            `;
         bookTable.appendChild(row);
      });
   }

   // Function to toggle edit mode
   function toggleEditMode(index) {
      const row = bookTable.rows[index];
      row.querySelector(".edit-btn").style.display = "none";
      row.querySelector(".delete-btn").style.display = "none";
      row.querySelector(".save-btn").style.display = "inline";
      const tds = row.querySelectorAll("td:not(:last-child)");
      // console.log(tds[3]);
      tds.forEach((td) => {
         // console.log(td.id);
         if (td.id === "book_total_count") {
            const text = td.innerText;
            td.innerHTML = `<input type="number" value="${text}">`;
         } else {
            const text = td.innerText;
            td.innerHTML = `<input type="text" value="${text}">`;
         }
      });
   }

   // Function to save changes in edit mode
   function saveChanges(index) {
      const row = bookTable.rows[index];
      const tds = row.querySelectorAll("td:not(:last-child)");
      const updatedBook = {
         name: tds[0].querySelector("input").value,
         author: tds[1].querySelector("input").value,
         description: tds[2].querySelector("input").value,
         totalCount: tds[3].querySelector("input").value,
      };
      books[index] = updatedBook;
      localStorage.setItem("books", JSON.stringify(books));
      renderTable();
   }

   // Function to delete a book
   function deleteBook(index) {
      books.splice(index, 1);
      localStorage.setItem("books", JSON.stringify(books));
      renderTable();
   }

   // Event listener for "Edit" button
   bookTable.addEventListener("click", (event) => {
      if (event.target.classList.contains("edit-btn")) {
         const index = event.target.getAttribute("data-index");
         toggleEditMode(index);
      }
   });

   // Event listener for "Save" button
   bookTable.addEventListener("click", (event) => {
      if (event.target.classList.contains("save-btn")) {
         const index = event.target.getAttribute("data-index");
         saveChanges(index);
      }
   });

   // Event listener for "Delete" button
   bookTable.addEventListener("click", (event) => {
      if (event.target.classList.contains("delete-btn")) {
         const index = event.target.getAttribute("data-index");
         deleteBook(index);
      }
   });

   //    // Event listener for "Add Book" button
   //    addBookBtn.addEventListener("click", () => {
   //       const newBook = {
   //          name: "",
   //          author: "",
   //          description: "",
   //          totalCount: "",
   //       };
   //       books.push(newBook);
   //       localStorage.setItem("books", JSON.stringify(books));
   //       renderTable();
   //    });

   // Initial rendering of the table
   renderTable();
});
