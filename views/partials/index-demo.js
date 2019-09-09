//factorial function (factorial(5) = 5*4*3*2*1)


function factorial(n){
    let t = n;
    while(n > 1){
        n--;
        t*=n;
    }

    return t;
}

const t = factorial(5);
console.log(t);

// Array of bits containing exactly one "1": [0,0,0,1,0,0,0,0,0,0,0]. Find the one.

const findIndexArr = (arr,el) => arr.indexOf(el);

O(n)

//sorted array -> Binary search 

//["a","b","b","c","c","c"] -- ["c","c","c","b","b","a"]

const obj = {
    a:1,
    b:2,
    c:3
}

O(n)

Object.keys(); //[a,b,c]








1. Uniques elements  O(n)
2. Create new object with oncancel. { O(3n)
    a:1,
    b:2,
    c:3
}

3. Create new arrey on the basis of object 
[c,c,c,b,b,a]


