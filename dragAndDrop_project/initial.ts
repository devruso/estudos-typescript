// OOP approach 
class ProjectInput {
    // ! tells TS that this will never be null
    // as HTMLTemplateElement is a generic type, we need to tell TS what type of element we are working with
    // same thing with hostElement
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    element: HTMLFormElement;
    titleElement: HTMLInputElement;
    descriptionElement: HTMLInputElement;
    peopleElement: HTMLInputElement;
    constructor() {
        this.templateElement = document.getElementById("project-input")! as HTMLTemplateElement;
        this.hostElement = document.getElementById("app") as HTMLDivElement;
        
        // importNode() is a built-in method that allows us to import content from one document to another
        const importedNode = document.importNode(this.templateElement.content, true);
        // firstElementChild is a built-in property that allows us to access the first element in the importedNode
        this.element = importedNode.firstElementChild as HTMLFormElement;
        this.element.id = "user-input";
        this.titleElement = this.element.querySelector("#title") as HTMLInputElement;
        this.descriptionElement= this.element.querySelector("#description") as HTMLInputElement;
        this.peopleElement = this.element.querySelector("#people") as HTMLInputElement;
        this.attach();
    }

    private submitHandler(event: Event): void {
        event.preventDefault();
        console.log(this.titleElement.value);
    }

    private configure() {
        // bind() allows us to set the "this" keyword to whatever we pass as an argument
            this.element.addEventListener("submit", this.submitHandler.bind(this));
        }

    private attach() {

        // insertAdjacentElement() is a built-in method that allows us to insert an element into the DOM
        this.hostElement.insertAdjacentElement("afterbegin", this.element);
    }
}

const compileForm = new ProjectInput();