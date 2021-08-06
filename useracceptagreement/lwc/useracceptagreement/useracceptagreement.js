import tmpl from './useracceptagreement.html'
import { LightningElement, track, api } from 'lwc';
import { OmniscriptBaseMixin } from 'vlocity_cmt/omniscriptBaseMixin';
export default class useracceptagreement extends OmniscriptBaseMixin(LightningElement) {

//@track termboxval = false;
     @api termboxval = false;
     @track openModal = false;
     gettermboxval(event){
        this.termboxval = event.target.checked;
    }
     handleBlur(evt) {
        console.log('handleBlur');
       // this.omniUpdateDataJson(evt.target.value);
    }
    nextButton(evt) {
        if (evt) {
            this.omniNextStep();
        }
    }
    
    showModal() {
        this.openModal = true;
    }
    closeModal() {
        this.openModal = false;
    }
    render() {
        console.log('connectedCallback');
        return tmpl;
    }
    connectedCallback() {
        console.log('render');
       // this.initMethod();
    }

   


}