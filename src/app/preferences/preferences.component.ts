import { Component, OnInit} from '@angular/core';
import {PreferencesService} from '../preferences.service';

@Component({
  selector: 'app-preferences',
  templateUrl: './preferences.component.html',
  styleUrls: ['./preferences.component.css']
})
export class PreferencesComponent implements OnInit {
checkBox: any={};
  constructor(private preference: PreferencesService) { }

  ngOnInit() {
  }
  selectedValue: any = [];
  public genders = [
    { value: 'F', display: 'Female' },
    { value: 'M', display: 'Male' }
];
public maintainanceTypeList = [
    {preferencestype: 'Funds'},
    {preferencestype: 'GoldETF'},
    {preferencestype: 'Bonds'},
    {preferencestype: 'Stocks'},
    {preferencestype: 'CommercialRealEstate'}

  ];
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


} 
