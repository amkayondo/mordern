console.log("Before");
console.log("After");

const getUser = () => {
setTimeout((id)=> {
    console.log("Reading the database")
}, 2000);
}

getUser();