import { Component } from "@angular/core";

@Component({
    selector: "template-form",
    templateUrl: "app/components/template-form/template-form.component.html"
})

export class TemplateformComponent{

    contact = {
        "contactName": "Tên",
        "email": "abc@deg.com",
        "facebook": "facebook.com",
        "twitter": "twitter.com",
        "website": "tiepphan.com",
        "tel": "1234-5678-90"
      }
    onSubmit(formValue : any) {
        // Do something awesome
        console.log(formValue);
        // throw Error('something go wrong')
      }
}