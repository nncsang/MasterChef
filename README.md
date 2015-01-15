# MasterChef

This is our project for *Human-Computer Interaction for the Web: Interaction Design and User Evaluation - Fall 2014* course at EURECOM institute. In this project, we focus on demonstrating new features of HTML5. 
￼ 
Project Description
======
Our application is a cooking webpage. It gives recommendations on cooking and nutrition. In the homepage, users can reach the list of foods that we suggest. For every food, we provide details of nutrition analysis and instructions to cook in different kinds of formats (video, images, text). Users also can search foods for their own needs by providing:

	- the type of meal: breakfast, lunch or dinner
	- number of people
	- food restrictions: diet or vegetarian
Users are able to add/remove their favourite foods to/from ’MY MEAL’ (see /mymeal.html for detail).


Features' HTML5L in the project
======
In this application, we used different kinds of features of HTML5 to facilitate the development process and the most important thing is to give users the best interactions. In particular, we used:

	- New structural constructs likes < nav >< header >< footer >< session > etc. to provide semantics for our webpage
	- Local storages for storing users’ favourite foods (see MY MEAL page)
	- File Drag’n Drop: users can drag and drop their images to webpage for avatar input (see /register.html for details)
	- Geo: to locate users’ current location for determing nearest shops for ingredients (see /detail.html for details)
	- Audio, Video: users don’t need any plugin to load the video. We also support different kinds of video formats to make our videos viewable on allmost major browsers (Firefox, Chrome, Safari, etc.)
	- Media Fragments URIs: we fragmented the instruction video by steps, so that users can easy to access to different parts of the instruction.
	- Cookie: it’s not a new feature in HTML5 but it’s very helpful for storing small data during a session or specified duration. We applied cookie for session login and ”remember me” function in the login.html

