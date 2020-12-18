
Reactjs App to request and display an userslist(table) and userdetail(modal) data via ajax. The data is from https://jsonplaceholder.typicode.com/users
Includes 2 branchs for how it attempts  to fetch the async data. master branch is regular axios and onEffect
react-query branch uses react-query's exported functions to generate the data as well as information such as isLoading, error information and more. 
react-query also provides caching as to not needlessly refetch a remote response we have already.



## Building and running on localhost

First install dependencies:

```sh
npm install
```

To run in hot module reloading mode:

```sh
npm start
```

To create a production build:

```sh
npm run build-prod
```

To create a development build:

```sh
npm run build-dev
```

## Running

Open the file `dist/index.html` in your browser

