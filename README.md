* Initialise a new project directory called notes-app.


*Update the contents of index.html so it contains the following HTML code:
  <!doctype html>
  <html>
     <head>
        <title>Notes app</title>
     </head>
     <body>
        <h1>Notes app</h1>
        <div id="main-container">

        </div>
     </body>
  </html>

* Update the contents of the main JS file, so it prints to the console 'The notes app is running'.
* Run the build task with npm run build.
* Load the bundle file bundle.js on the HTML page.
* Open the HTML page with your browser, and verify the message is correctly printed in the developer console.


* Install jest in the project directory with npm install --save jest and create a test file notesModel.test.js.
* Write the test cases for NotesModel (at least three) verifying the acceptance criteria shown above, and test-drive the NotesModel class (in notesModel.js), one test at a time. To test arrays, prefer the use of .toEqual() matcher over .toBe().
