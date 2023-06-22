let names:string[]; // array of strings
// a generic type is a type which is connected with some other type 
// and is flexible regarding which exact type will be used

const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is done!');
    }, 2000);
});
// 
function merge<T extends object,U extends object>(objA:T, objB:U){
    return Object.assign(objA, objB);
}

const mergedObj = merge({name:"Jamil", age:25}, {hobbies:['Guitar', 'Sports']});

interface Lengthy {
    length: number;
}
// constraints  are used to restrict the types that can be used with a generic function
function countAndPrint<T extends Lengthy>(element: T ): [T, string]{
    let descriptionText = 'Got no value';
    if(element.length === 1){
        descriptionText='Got 1 element';
    }else if(element.length > 1){
        descriptionText = 'Got ' + element.length + ' elements';
    }
    return [element, descriptionText];
}