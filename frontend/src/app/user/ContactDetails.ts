export class ContactDetails
{
  contactId : number=0;
  primaryPhoneNo : string='';
  secondaryPhoneNo : string='';
  primaryAddress : string='';
  shippingAddress : string='';

  getPrimaryPhoneNo(){
    return this.primaryPhoneNo;
  }
}
  
           