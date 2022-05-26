import {Formio,Form} from 'formiojs'
export class CustomFormRenderer extends HTMLElement {
    linkHrefs = [
        'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
        'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css',
        'https://cdn.form.io/formiojs/formio.full.min.css'
    ];
    windowObj:any = window;
    constructor() {
        super();
    }
    connectedCallback() {
        var formioUrl = 'http://localhost:3001';
        Formio.setProjectUrl(formioUrl);
        Formio.setBaseUrl(formioUrl);
        let url = this.getAttribute('url') || '';
        
        document.createElement('link');
        this.linkHrefs.forEach((href)=>{
            let link = document.createElement('link');
            link.href = href;
            link.rel ='stylesheet';
            document.head.appendChild(link);
        });
        Formio.createForm(this,url);
        console.log(this.windowObj.config);
    }
}