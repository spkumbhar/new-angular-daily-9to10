import { Component, OnInit, Input, Output } from '@angular/core';
import { FlagInfo } from '../flag-info';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

// @Input()
 // country: FlagInfo


  countryObj: FlagInfo ={
  title:  'India',
  imgUrl: 'assets/i.png',
  info: `India (official name: the Republic of India;[19] Hindi:
    Bhārat Gaṇarājya) is a country in South Asia. It is the seventh-largest
    country by area, the second-most populous country, and the most populous
    democracy in the world. Bounded by the Indian Ocean on the south, the
    Arabian Sea on the southwest, and the Bay of Bengal on the southeast,
    it shares land borders with Pakistan to the west;[d] China, Nepal,
    and Bhutan to the north; and Bangladesh and Myanmar to the east.
     In the Indian Ocean, India is in the vicinity of Sri Lanka and
     the Maldives; its Andaman and Nicobar Islands share a maritime
     border with Thailand and Indonesia.`,

   mobile: 123456789,
   address: 'Pune,Maharashtra'

}

  constructor() { }

  ngOnInit() {
  }


  onPick(evDt: FlagInfo) {
    /*this.countryObj.title = evDt.title
    this.countryObj.info = evDt.info
    this.countryObj.address = evDt.address
    this.countryObj.mobile = evDt.mobile
    this.countryObj.imgUrl = evDt.imgUrl
    */

    this.countryObj= evDt

    /*countryObj: FlagInfo = {
    title:  'India',
    imgUrl: 'assets/i.png',
    info:  `This is information about ${evDt.info}`,
    mobile: 123456789,
    address: 'Pune,Maharashtra'


  }
  */

}
}
