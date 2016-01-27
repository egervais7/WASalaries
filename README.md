# [WA Salaries](https://wa-salaries-api.herokuapp.com/)
![WA Seal Logo](http://i.imgur.com/4IeyhSL.png)

---
##24 Hour Hackathon
####<u>Criteria</u>
* Use mongoDB to create a database.
* Populate your DB with a dataset of your choosing.
* Create an access point for your database. So others can use it as api.
* Upload it to Heroku.
* Use Angular to create a front end to access the dataset.


####<u>Heroku Link</u> [WA Salaries on Heroku](https://wa-salaries-api.herokuapp.com/)

---
##Team
####James Chi <br/>[github](https://github.com/jamesjchi) & [LinkedIn](https://www.linkedin.com/in/jamesjchi?trk=contacts-contacts-list-contact_name-0&)
####Ed Gervais <br/>[github](https://github.com/egervais7) & [LinkedIn](https://www.linkedin.com/in/eagervais?trk=contacts-contacts-list-contact_name-0&)
####Erin Moon <br/>[github](https://github.com/chibitofu) & [LinkedIn](https://www.linkedin.com/in/erin-moon-9417b597)

---
##App Features
* Search through 2,500 entries.
<small>\* We limited it from 65,000, due to load times. </small>
* Displays 50 entries per page, using pagination.
* See total salary for 2014, based on the 2,5000 entries.
* Filter data to see specific entry.
* See salary information from 2011 - 2014.
*  Displays employee name, job title, and department name.

---
##Dataset
[Washington State Salaries](http://fiscal.wa.gov/salaries.aspx)
* Over 65,000 entries.
* Annual data from 2011 - 2014.

---
##How to access the api
Use [https://wa-salaries-api.herokuapp.com/api/state_workers]( https://wa-salaries-api.herokuapp.com/api/state_workers) to get a JSON of the full database.

<small>\* Currently only end point available.</small>

---
##Challenges
* First hackathon for all of us. It was a flurry of emotions.  It was a great experience.
* First time creating a MEAN stack app. We worked with each individually. So getting them to all work together was fun.
* First time creating an api.
* First time uploading a mongoDB to Heroku. James got it working in the end.
* Finding out our mongoDB collection had to be in lower case. We spent like an hour confused why we couldn't access it through mongoose.
* Working with over 65,000 entries. This brought up interesting challenges with the way Angular binds data.
