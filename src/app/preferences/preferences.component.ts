import { Component, OnInit} from '@angular/core';
import {PreferencesService} from '../preferences.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
checkBox: any=[];
checkBoxCheck: any=[];
radioBut: any=[];
user: any={};
topics: any=[];
  constructor(private preference: PreferencesService) { }

  ngOnInit() {

    this.user = {
        gender: this.genders[0].value,
        role: null
    }

  }
  selectedValue: any = [];
  public genders = [
    { value: 'H', display: 'Hourly' },
    { value: 'D', display: 'Daily' },
    {value: 'W', display: 'weekly'}
];
public preferenceTypeList = [
    {preferencestype: 'Funds'},
    {preferencestype: 'GoldETF'},
    {preferencestype: 'Bonds'},
    {preferencestype: 'Stocks'},
    {preferencestype: 'CommercialRealEstate'}

  ];
  public modeOfContact=[
{contactType: 'Email'},
{contactType:'Mobile'}
  ];

    //.................
    change(e, type){
this.checkBox={
  "Funds": type.Funds,
  "GoldETF": type.GoldETF,
  "Bonds": type.Bonds,
  "Stocks": type.Stocks,
  "CommercialRealEstate": type.CommercialRealEstate
}
    console.log(e.checked);
    console.log(type);
    this.preference.insert(this.checkBox).subscribe((data)=>{
        this.preference=data;
        console.log(this.preference);
      })
    if(e.checked){
     this.selectedValue.push(type)
     }
    else{
     let updateItem = this.selectedValue.find(this.findIndexToUpdate, type.preferencestype);

     let index = this.selectedValue.indexOf(updateItem);

     this.selectedValue.splice(index, 1);
    }
    
  }
  
  findIndexToUpdate(type) { 
        return type.preferencestype === this;
    }



  //..................... 
  changeCheck(t, typecheck){
this.checkBoxCheck={
  "Email": typecheck.Email,
  "Mobile": typecheck.Mobile
}
    console.log(t.checked);
    console.log(typecheck);
    this.preference.insert(this.checkBoxCheck).subscribe((data)=>{
        this.preference=data;
        console.log(this.preference);
      })
    if(t.checked){
     this.selectedValue.push(typecheck)
     }
    else{
     let updateItem = this.selectedValue.find(this.findIndexToUpdate, typecheck.contactTypeCheck);

     let index = this.selectedValue.indexOf(updateItem);

     this.selectedValue.splice(index, 1);
    }
    
  }
  
  findIndexToUpdateCheck(type) { 
        return type.contactTypeCheck === this;
    }




    //...................
 public save(isValid: boolean, f:any) {
   console.log("abc");
        console.log(f);
        this.preference.insertFrequency(f).subscribe((data)=>{
          this.radioBut=data;
          console.log(this.radioBut)
        })
    }
}


