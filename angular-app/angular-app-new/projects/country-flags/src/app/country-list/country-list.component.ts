import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FlagInfo } from '../flag-info';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  //@Input()
  //country: FlagInfo


  //@Output()
  //picked: EventEmitter<FlagInfo> = new EventEmitter()





  @Input()
  // tslint:disable-next-line: semicolon
  country: FlagInfo


  @Output()
  picked: EventEmitter<FlagInfo> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }


  /*
  onClk(ttl: string){
  const country: FlagInfo = {
    title: ttl,
    imgUrl: 'assets/i.png',
    info: 'This is India '
  }
  this.picked.emit(country)
}*/



  onClk(cName: string) {
    if (cName === "USA") {
      console.log(cName)
      const country: FlagInfo = {
        title: 'United States of America',
        imgUrl: 'assets/usa.jpg',
        info: `The United States of America (USA),
        commonly known as the United States (U.S. or US) or America,
         is a country comprising 50 states, a federal district,
         five major self-governing territories, and various possessions.[i]
         At 3.8 million square miles (9.8 million km2), the United
         States is the world's third or fourth largest country by total area[d] and
         is slightly smaller than the entire continent of Europe, which is 3.9 million
         square miles (10.1 million km2). With a population of over 327 million people,
         the U.S. is the third most populous country. The capital is Washington, D.C.,
         and the most populous city is New York City. Most of the country is located
         contiguously in North America between Canada and Mexico.

        `,
        mobile: 3746734437,
        address: 'Mumbai,Maharashtra'

      }
      this.picked.emit(country)
    } else if (cName === "UK") {

      console.log(cName)
      const country: FlagInfo = {
        title: 'United Kingdom',
        imgUrl: 'assets/uk.png',
        info: `The United Kingdom of Great Britain
        and Northern Ireland, commonly known as the United Kingdom (UK)[15]
        or Britain,[note 11] is a sovereign country
        located off the north-western coast of the European mainland.
        The United Kingdom includes the island of Great Britain, the north-eastern
        part of the island of Ireland, and many smaller islands.[16] Northern
        Ireland is the only part of the United Kingdom that shares a land border
        with another sovereign state, the Republic of Ireland. Apart from this land border,
        the United Kingdom is surrounded by the Atlantic Ocean, with the North Sea to the east,
        the English Channel to the south and the Celtic Sea to the south-west,
        giving it the 12th-longest coastline in the world. The Irish Sea separates Great
        Britain and Ireland. The United Kingdom's 242,500 square kilometres (93,600 sq mi)
        were home to an estimated 66.0 million inhabitants in 2017.

        `,
        mobile: 3746734437,
        address: 'Delhi,India'
      }
      this.picked.emit(country)
    }
    else if (cName === "China") {
      const country: FlagInfo = {
        title: 'China',
        imgUrl: 'assets/china.png',
        info: `China (Chinese: 中国; pinyin: Zhōngguó; lit. "Central State"),
        officially the People's Republic of China (PRC),
         is a country in East Asia and the world's most populous country,
         with a population of around 1.404 billion in 2017.[13]
          Covering approximately 9,600,000 square kilometers (3,700,000 sq mi),
           it is the third or fourth largest country by total area.[k][19]
            Governed by the Communist Party of China, the state exercises jurisdiction over
            22 provinces, five autonomous regions, four direct-controlled municipalities
            (Beijing, Tianjin, Shanghai, and Chongqing),
          and the special administrative regions of Hong Kong and Macau.

        `,
        mobile: 3746734437,
        address: 'Gujrat,India'
      }
      this.picked.emit(country)
    }
    else if (cName === "India") {
      const country: FlagInfo = {
        title: 'India',
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
        mobile: 3746734437,
        address: 'Pune,India'
      }
      this.picked.emit(country)
   } else if(cName === "Japan"){
    const country: FlagInfo = {
    title: 'Japan',
    imgUrl:'assets/japan.png',
    info :`Japan (Japanese: 日本, Nippon [ɲippoꜜɴ] (About this soundlisten) or
       Nihon [ɲihoꜜɴ] (About this soundlisten); formally 日本国, About this
       soundNippon-koku or Nihon-koku, lit. 'State of Japan')
       is an island country in East Asia. Located in the
       Pacific Ocean, it lies off the eastern coast of the
        Asian continent and stretches from the Sea of Okhotsk
        in the north to the East China Sea and the Philippine
        Sea in the south.

      The kanji that make up Japan's
       name mean 'sun origin', and it is often called
       the "Land of the Rising Sun". Japan is the world's 4th largest
        island country and encompasses about 6,852 islands.
        The stratovolcanic archipelago has five main islands:
        Honshu, Hokkaido, Kyushu, Shikoku and Okinawa which make
         up about 97% percent of Japan's land area.[15]
          The country is divided into 47 prefectures in eight regions,
          with Hokkaido being the northernmost prefecture and Okinawa being
           the southernmost one. Japan is the 2nd most populous island
           country. The population of approximately 126 million is the
            world's eleventh largest, of which 98.5% are ethnic Japanese.
             90.7% of people live in cities, while 9.3% live in the
             countryside.[16] About 13.8 million people live in Tokyo,[17]
             the capital of Japan. The Greater Tokyo Area is the most
              populous metropolitan area in the world with over
               38 million people.[18]

      `,
      mobile: 3746734437,
      address: 'Pune,India'
    }
    this.picked.emit(country)


   }





  }

}

