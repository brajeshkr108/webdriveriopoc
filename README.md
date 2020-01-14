# webdriveriopoc
	The details about the project structure can be found here:
	below is the folder structure of the project:
	main
	test
	Reports
	wdio.conf.js
	package.json
	
	main -> this folder will contain all the Page Objects and common utils.
	pageobjects -> All the WebElements locator and related UI action method is defined in the corresponding page objects class of pageobjects folder
	utils -> here we can define all the common utility methods.


	test -> this folder consists of :
	features -> All the required feature is defined in the corresponding feature file
	resources -> All the external test data can be defined here based on the requirement.
	stepDefination -> All the step definition files placed in the corresponding stepdef.js file under the stepDefination folder.

	Reports -> This folder contains all the execution Reports and screenshots.

	wdio.conf.js -> This file is the main runner file, which contains all the configuration.

	command to run the test ->
	Open the terminal -> navigate to Project location using terminal -> type command as :
	npm run test
