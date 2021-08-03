function el(css){
    return document.querySelector(css);
}
function con(parameter){
    console.log(parameter);
}
let arr2 =[]	;
let array = [[10,2],
             [1,52],
             [6,8],
             [2,1]
            ]	;

for (let i = 0 ; i < 4 ; i++) {
    	arr2[i] = array[i].filter((val) => (val >= 0 ));
	};


    let newusers = [
        {firstName : "Susan", lastName: "Steward"},
        {firstName : "Daniel", lastName: "Longbottom"},
        {firstName : "Jacob", lastName: "Black"}
      ];
      
      let userFullnames = newusers.map(function(element){
          return `${element.firstName} ${element.lastName}`;
      })
      
     // console.log(userFullnames);
      

    let arr = [2, 3, 5, 7]

    //   arr.map(function(element, index, array){
    //     //   console.log(element);
    //     //   console.log(index);
    //     //   console.log(array);
    //       return element;
    //   }, 80);
let obj1 ={
    k1 : arr,
    k2 : "Aboud",
    k3 : array,
    k4 : habashtakalat
} 

let objbasel ={
    k1 : arr,
    k2 : "BASEL",
    k3 : array,
} 
//let arr = [2, 3, 5, 7]
let arrThis = [[1,9],[10,0], [12,50], [6,-7]];
let lastarrayList =[];

// let array = [[10,2],
//              [1,52],
//              [6,8],
//              [2,1]
//             ]	;

/*
lastarrayList =[[10,9],
[10,52]





]
*/

function habashtakalat(){
array.forEach((row,i) =>{

 lastarrayList[i] =  ( row.map(
     function(element, j)
        {
        if(element  > arrThis[i][j]){
            return element;  
        };    
            return arrThis[i][j];
            },
            arrThis[i]));

});

}

habashtakalat(); 

con("nach proccess");
con("Last Array This");
con(lastarrayList);
con("Arr This");
con(arrThis);
con("Array =");
con(array);


//let arr2 = array.filter(val => val > 0);
// array[0][0]=0;
// array[1][0]=0;
// con("Arr2 = ");
// array[0][0]=0;
// array[0][1]=0;
// con(arr2);




	
//  let array3 = [10,-2,1,-10,6,8,2,1]	;
// let arr3 = array3.filter((val)=> val < 10000);

// con("arr3 =");
// con( arr3);


// array3[0]=0;
// array3[1]=0;
// con("arr3 =");
// con( arr3);

//con("Array 3");


//con(array3);


//  con("Every = " +array.every(val =>  val < 0 )); // and t and t and t ...
//  con("Some = " + array[2].some(val =>  val === 8  ));// or t or t or t



const users = [
	{ id: 11, name: 'Adam', age: 23, group: 'editor' },
	{ id: 47, name: 'John', age: 28, group: 'admin' },
	{ id: 85, name: 'William', age: 34, group: 'editor' },
	{ id: 97, name: 'Oliver', age: 28, group: 'admin' }
  ];
  
  let res = users.filter(it => it.name.includes('Adam'));

con("********************");
let mayy =[];
users.forEach(value =>{
    mayy.push(Object.entries(value));
}
);

 let sum =0;
let baselArray =[1,5,10,2,25,33];

function foo(v,i){
   con("i " + i);
    sum +=v;
}

baselArray.forEach(foo);

baselArray.forEach(val =>{

});


const sweetArray = [2, 3, 4, 5, 35]
const sweeterArray = sweetArray.map((val,index,aa) => {
    con("index =" + index);
    con(aa);
    if (val % 2 ===0 ){
       return val * 2 ;
    }else{
        return val ;
    }
    
})

console.log(sweeterArray)



console.log(mayy);
let newobj = {
	k1 : 15,
	k2 : 30,
	k3 : 25,
    k4 : 1,
    k5 : -5,
    k6 : 30

}

//************** my Example
// reduce(sum,newval)
// var val=Object.keys(newobj).reduce((acc,val) => {

//  	if(newobj[acc] >  newobj[val]  ){
// 		console.log("acc =" + newobj[acc]+ " val= "+ newobj[val]);
// 		return acc;
// 	}else{
//         console.log("acc =" + newobj[acc]+ " val = "+ newobj[val]);
//         return val;}
	

// 	 });
  
//     con("Val =" + newobj[val])

var maxvalinobj  = Object.keys(newobj).reduce((a,b) => newobj[a] > newobj[b] ? a:b);
var t = Object.values(newobj);
var t2 = Object.keys(newobj);
con(Array.isArray(t));
con(Array.isArray(t2));
con(t2);
con(Object.entries(newobj));

/**************************************** */

var xx=Object.keys(newobj).reduce((a,b,c ) => {
        //	if(newa[a] > 0 && newa[b]  >0 ){
                console.log("a =" + a + " b= "+ b +" c=" + c);
                con(Array.isArray(a));
                return a;
            //}
            //return 0;
        
            });   
con("*************");
console.log(xx);
con("*************");


//const array1 = [10,,25, 23, 30, 4];



const myVal = (aa, val) =>  aa >  val ? aa : val;

// 1 + 2 + 3 + 4
//console.log("red 1 = " + array1.reduce(myVal)); // 25 بدون قيمه بدوائية


////console.log("red 11 = " + array1.reduce(myVal,55)); // 55 مع قيمه بدائية و التي هي اكبر من القيمه المكدسة



// expected output: 10

// 5 + 1 + 2 + 3 + 4
//console.log(array1.reduce(myReducer, 50));
// expected output: 15
//******************************************** */

//// original Example

const array11 = [1, 2, 3, 4];
const getVal = (sum, currentValue) => sum + currentValue;

// // 1 + 2 + 3 + 4
// con("Get Va =")
// console.log(array11.reduce(getVal,11));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15



