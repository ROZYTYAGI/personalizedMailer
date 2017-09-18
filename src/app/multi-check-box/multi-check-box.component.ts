import { Component, OnInit } from '@angular/core';
import {PreferencesService} from '../preferences.service';

@Component({
  selector: 'app-multi-check-box',
  templateUrl: './multi-check-box.component.html',
  styleUrls: ['./multi-check-box.component.css']
})

export class MultiCheckBoxComponent implements OnInit {
	pref: any=[];
//preferences items
  basicExampleSelectedItems = [];
  placeholderExampleList = [];
  placeholderExampleSelectedItems = [];
  placeholderExampleSettings = {};

  //...mode of contact
  basicExampleSelectedItemsContact=[];
  placeholderContactList=[];
  placeholderContactSelectedItems=[];
  placeholderContactSettings={};

  constructor(private preference: PreferencesService){
    
  }
  ngOnInit(){
    
    this.basicExampleSelectedItems = [
                          {"id":1,"itemName":"Funds"},
                          {"id":2,"itemName":"GoldETF"},
                          {"id":3,"itemName":"Bonds"},
                          {"id":4,"itemName":"Stocks"},
                          {"id":5,"itemName":"CommercialRealEstate"}];
   
    this.placeholderExampleList = [
                          {"id":1,"itemName":"Funds"},
                          {"id":2,"itemName":"GoldETF"},
                          {"id":3,"itemName":"Bonds"},
                          {"id":4,"itemName":"Stocks"},
                          {"id":5,"itemName":"CommercialRealEstate"}
                        ];
    
    this.placeholderExampleSelectedItems = [
                          {"id":1,"itemName":"Funds"}];

    this.placeholderExampleSettings = { 
                              text:"Select preferences",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              classes:"myclass custom-class",
                              searchPlaceholderText: "Custom Placeholder text"
                            };

 //....for mode of contact
 this.basicExampleSelectedItemsContact=[
         {"id":1,"contactName":"Email"},
         {"id":2,"contactName":"Mobile"}
 ];
this.placeholderContactList=[
         {"id":1,"contactName":"Email"},
         {"id":2,"contactName":"Mobile"}
];
this.placeholderContactSelectedItems=[
         {"id":1,"contactName":"Email"}
];
 this.placeholderContactSettings={
                              text:"Select mode of contact",
                              selectAllText:'Select All',
                              unSelectAllText:'UnSelect All',
                              enableSearchFilter: true,
                              classes:"myclass custom-class",
                              searchPlaceholderText: "Custom Placeholder text"

 }             

  }
  onItemSelect(item:any){
  	this.preference.insert(item).subscribe((data)=>{
        this.pref=data;
console.log(this.pref);
      })
    console.log(item);
    /*console.log(this.basicExampleSelectedItems);
    console.log(this.basicExampleSelectedItemsContact);*/
    
  }
  OnItemDeSelect(item:any){
  	
    console.log(item);
    console.log(this.basicExampleSelectedItems);
   /* console.log(this.basicExampleSelectedItemsContact);*/
  }
  onSelectAll(items: any){
    console.log(items);
  }
   onDeSelectAll(items: any){
    console.log(items);
  }

}
