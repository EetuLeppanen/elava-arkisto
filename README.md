# ELÄVÄ ARKISTO

Elävä arkisto is a team project for Haaga-Helia's Software Project II course.

The client for this project was Yleisradio oy; A national public broadcasting company of Finland.

We created a platform with the function of searching old tv- and radioprograms from Yle's elävä arkisto web service. 

With our service you can:
	
- Search for programs available in Yle's elävä arkisto
- Make requests for your favorite programs.
- Find new interesting programs to check out.
	
	
Data used in this project is provided by Yleisradio.

Front end has been created with React.js.

## Getting started with the project

### Step 0

As a prerequisite you must have installed the following:
- npm

### Step 1

Clone or download this project https://github.com/EetuLeppanen/elava-arkisto.git

Navigate to the directory cd /path_to/elava-arkisto

run npm install

npm start

Your front end should be now all set.

## Backend

REST api was made with Elasticsearch 7. 

Process the xml and csv files with the python programs included in this project and post the json files into Elasticsearch. The json files are ready-to-use after using the python program.

Put the proper ip (for example 1.2.3.4.5:9200/index/_doc/_search) into Searchtitles.js and Searchresult.js.

## Contributing 

Pull requests are always welcome! But first we would like to hear about the changes you've planned and discuss about them. 
There are no restrictions on the technologies you are allowed to use.



## Authors

Eetu Leppänen, Kristian Koskinen, Noel Marttinen, Kimi Korpela, Joonas Kirvesmäki




