class Movie {
    //a) Constructor for the class 
    //b) it assign rating as PG for object without rating
    constructor (title,studio,rating="PG") {

        this.title=title;
        this.studio=studio;
        this.rating=rating;

    }

  
}

  //c) Method/function to get movie having rating "PG"
function getPG (arr) {

    let result= arr.filter((movieObj) => movieObj.rating==="PG");

    return result;

}

//d)Creating instance/Object for the Movie class
let m1= new Movie ("Casino Royale","Eon Productions","PG-13")
let m2= new Movie("Theri","Red Giant","G");
let m3 = new Movie("Vedhalam","Sony","PG-13");
let m4 = new Movie("Isai","Vendhar","R");
//b) Creating object without rating
let m5 = new Movie("Vikram","Sony");

 let objArray=[];
 objArray.push(m1,m2,m3,m4,m5);
//c)Getting the instance of  movies list having rating "PG"
console.log(getPG(objArray));


