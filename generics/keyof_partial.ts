// keyof is a generic type that takes an object type and returns a union of its keys
function extractAndConvert<T extends object, U extends keyof object>(obj:T, key:U) {
    return obj[key];
}

class DataStorage <T>{
    private data:T[] =[];

    addItem(item: T){
        this.data.push(item);
    }

    removeItem(item: T){
        this.data.splice(this.data.indexOf(item),1);
    }

    getItems(){
        return [...this.data];
    }
}

const textStorage= new DataStorage<string>();
textStorage.addItem('Burger');
textStorage.addItem('Pizza');
textStorage.removeItem('Burger');
console.log(textStorage.getItems());

const numberStorage= new DataStorage<number>();

interface CourseGoal{
    title:string;
    description:string;
    completeUntil:Date;
}
// Partial makes all the properties of the interface optional
// useful when you want to create an object with some properties
function createCourseGoal(title:string, description:string, date:Date):CourseGoal{
    let courseGoal:Partial<CourseGoal> = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal as CourseGoal;
}

// Readonly makes all the properties of the interface readonly
const names: Readonly<string[]> = ['Max', 'Anna'];

