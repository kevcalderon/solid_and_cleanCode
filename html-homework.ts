(()=>{

    //* Aplicando el principio de responsabilidad única


    type HtmlType = 'input'|'select'|'textarea'|'radio';
   
    class HtmlElement {
        constructor(
            public id: string,
            public type: HtmlType,
        ) {}
    }

    class InputAttributes{
        constructor(
            public value: string,
            public placeholder: string,
        ) { }
    }

    class InputEvents {
        constructor() {}

        setFocus() {};
        getValue() {};
        isActive() {};
        removeValue() {};
    }


    //? Idea para la nueva clase InputElement
  class InputElement{
    public htmlElement     : HtmlElement;
    public inputAtributes  : InputAttributes;
    public inputEvent      : InputEvents;

    constructor(value: string, placeholder: string, id: string){
        this.htmlElement = new HtmlElement(id,'input'),
        this.inputAtributes = new InputAttributes(value, placeholder),
        this.inputEvent = new InputEvents()
    }
  }

    const nameField = new InputElement('Fernando', 'Enter first name', 'txtName');

    console.log({ nameField });

})()
