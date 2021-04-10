# Express_api_JS
## You need to install Node JS and NPM in order to use this.
## Can manage upto 100MB data. 😮
## Shows data in Objects.
## No data protecton is given.
### Commands you may need: 😀
`npm install express`

`npm install fs`
## It can only accept JSON raw data with name and age as property 🤒
This programme can save data in a JSON file as object and we 
can edit the database. The functions we can do are:-
* Add new data
* Show full database
* Delete any data
## The HTTP method that were used:-🤗
* GET
* POST
* PUT
* DELETE
# How to use 🙄
## Using Curl
**Syntax:** `curl -X <method> <address with port> -H "Content-Type: application/json" -d "{\"name\":\"<value>\",\"age\":\"<value>\"}"`

**Example:** `curl -X POST http://192.168.1.17:8888 -H "Content-Type: application/json"  -d "{\"name\":\"adarsh\",\"age\":\"20\"}"`
## Using Postman
1. Open postman and give **url** with port number
2. Select Body as **raw**
3. Then select format as **JSON**
4. Now write the JSON as **{"name":"value","age":"value"}**
5. Now Enjoy !! 😋
    

