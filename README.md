# this code was written for the sole purpose of learning thats why it is not completely made with every feature of food ordering app but i am still pushing it on github so that if i needed to revise that topic i can 


- dist - it is developed when we run np run start it is pre production ready files
- src -  it contains all the important files mainly source
- utils - it contains all the utilities used in project synonymn is common
   -constants we can store all constant url type things
   -utils we can store  self made hooks which are daves with name use at start 
- .gitignore contains all the the fills we need not to upload on our git mainly that files which we can regenerate any time 
- .json contains all the dependencies scripts etc
- lock json contains all the latest versions of dependencies 
# 2 types of routing 
- server side routing ---when a network request is made to the server and server bring back request like html page etc
- client side routing --- nearly every component is loaded at first and later on components get interchanged
UserClass component is just for practice to know how class based components works 
- Higher order functions are those that takes function as their arguments and returns new modified funtion like in this app high rated label is added to those who have high ratings and rest are shown as it is with help of HOF their is no need to write sepearte whole big code for it we can add modification in restraunt card and return it
# redux
a central state container 
a store is created where all the slices are present with their action

- npm i @reduxjs/toolkit
- npm i react-redux
  
# testing 
first two are more for dev 
and we do while switching again and again b/w browser and code is manual testing
=>unit testing (testing don for one component in isolation is known as unit testing)
=>integration testing()
=>end to end testing e2e needed many software for this it is detailed testing it simulates the whole environment right from a user enters on site his action performed till he leaves the site
coverage folder is made by test to tell how much area is covered so no need to commit it on git so we can it in .gitingore 


# Setting up Testing in our app
- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Config file to disable default babel transpilation
- Jest- npx jest -init
- Install jsdom Library
- Install @babel/preset-react - to make JSX work in test cases
- Include @babel/preset-react inside my babel config
- npm i -D @testing-Library/jest-dom
