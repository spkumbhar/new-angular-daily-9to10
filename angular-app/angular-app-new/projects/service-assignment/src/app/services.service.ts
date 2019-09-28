import { Injectable, EventEmitter } from '@angular/core';
import { CountryInfo } from './countryInfo.config';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
count = 0;
em: EventEmitter<CountryInfo> = new EventEmitter();
cIndiaInfo: CountryInfo = {
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


};
cUsaInfo: CountryInfo = {
  title: 'United States of America',
  imgUrl : 'assets/usa.jpg',
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

  `
};
cJapanInfo: CountryInfo = {
  title: 'Japan',
  imgUrl: 'assets/japan.png',
  info: `Japan (Japanese: 日本, Nippon [ɲippoꜜɴ] (About this soundlisten) or
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

 `
};



constructor() { }

  inc() {
    return this.count++;
  }
}
