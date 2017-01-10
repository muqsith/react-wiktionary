# react-wiktionary
ReactJS based wiktionary ui (powered by Java, Spring and SQLite)

### Pre-requisites
- [jdk](http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html) (lates version is better). Make sure it is added to your path, you can check by executing. 
```sh
$ java -version
```
- [Maven 3](https://maven.apache.org/download.cgi) this also need to be on your path. The installation is very simple you need to download the .zip or .tar.gz extract it at certain folder, create an envionment variable MVN_HOME with value of the location of that folder and then to your path add the bin directory present in the folder. Just check if it is working by executing below command.
```sh
$ mvn --version
```
- [Node.js](https://nodejs.org/en/) make sure both node and npm are your path.
- [SQLite](https://sqlite.org/) the entire database including drivers comes in few kilobytes, once you download extract it to a particular folder and get it on your path. To check if it is working you need to download the SQLite dump (have explained in the below set-up part, just download and get it on your path).

### Steps to run this project
- Clone this repository to your local.
- Go to project **react-wiktionary/enwiktionary-ui** and run the below commands.
```sh
    $ npm install
```
- Sometimes webpack is not recognized as an executable on Windows, to make it work install webpack with global flag
```sh
    $ npm install -g webpack
```
- In the mean time you can download the SQLite Dictionary dump from [here](https://drive.google.com/file/d/0B8XOtGdedKnbejhFejRKczZDcGs/view?usp=sharing) it's ~60 MB (zipped), the link to this dictionary is from my google drive (i made it publicly accessible link).
- Once the SQLite dictionary is downloaded, create a folder with name **db** in project's root folder (**react-wiktionary**), and place this zip file over there and extract it.
- Now go the folder **react-wiktionary/enwiktionary/enwiktionary-rest/src/main/resources/** and open the file **database.properties** in any normal text editor, and replace the value with the location of your **enwiktionary.db** (SQLite dictionary dump). 
- db.url=jdbc:sqlite:**<your location goes here>**/enwiktionary.db
- You can also check what's there in this SQLite database dump, just execute below commands.
```sh
    $ sqlite3 enwiktionary.db
    You are now connected to this db file.
    $ .schema
```


>   The **.schema** command will reveal all the details of the tables and columns present.
>   You can query the tables normally you would do with any relationarl database
>   without any speed lag.


- To exit from the db type below command.
```sh
    $ .exit
```
- Now check if the npm installation has completed (if it is not wait till it completes), go to the folder **react-wiktionary/enwiktionary** and execute below command.
```sh
    $ mvn clean install
    Windows users need to give the profile flag like below
    $ mvn clean install -Pwindows
```
- For the first time it takes huge time to build the entire app later builds will be over very fast.
- If the build is successful go to the folder **react-wiktionary/enwiktionary/enwiktionary-web** and execute below command.
```sh
    $ mvn spring-boot:run
    Windows users need to give the profile flag like below
    $ mvn spring-boot:run -Pwindows
```
- Once you see that your terminal is no more scrolling and you can see the message, SpringBoot application started in x.xxx seconds then it means that our backend (REST APIs) is ready.
- Now go to the folder **react-wiktionary/enwiktionary-ui** and execute below command.
```sh
    $ npm start
```
- Go to the url http://localhost:8888 on your system and you can see the dictionary app.



###### Please let me know if you face any difficulty during set-up or execution. You can raise the issue in github repo, i will try my best to promptly resolve it.
