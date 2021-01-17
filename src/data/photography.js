import { v4 as uuidv4 } from 'uuid';


// IMAGE IMPORTS
// =======================================================
// 1.0 CONCERTS ==========================================
import concerts01DR from '../images/concert/concert-1.jpg'
import concerts01HR from '../images/concert/highres/concert-1.jpg'

import concerts02DR from '../images/concert/concert-2.jpg'
import concerts02HR from '../images/concert/highres/concert-2.jpg'

import concerts03DR from '../images/concert/concert-3.jpg'
import concerts03HR from '../images/concert/highres/concert-3.jpg'

import concerts04DR from '../images/concert/concert-4.jpg'
import concerts04HR from '../images/concert/highres/concert-4.jpg'

import concerts05DR from '../images/concert/concert-5.jpg'
import concerts05HR from '../images/concert/highres/concert-5.jpg'

import concerts06DR from '../images/concert/concert-6.jpg'
import concerts06HR from '../images/concert/highres/concert-6.jpg'

import concerts07DR from '../images/concert/concert-7.jpg'
import concerts07HR from '../images/concert/highres/concert-7.jpg'

import concerts08DR from '../images/concert/concert-8.jpg'
import concerts08HR from '../images/concert/highres/concert-8.jpg'

import concerts09DR from '../images/concert/concert-9.jpg'
import concerts09HR from '../images/concert/highres/concert-9.jpg'

import concerts10DR from '../images/concert/concert-10.jpg'
import concerts10HR from '../images/concert/highres/concert-10.jpg'

import concerts11DR from '../images/concert/concert-11.jpg'
import concerts11HR from '../images/concert/highres/concert-11.jpg'

import concerts12DR from '../images/concert/concert-12.jpg'
import concerts12HR from '../images/concert/highres/concert-12.jpg'

import concerts13DR from '../images/concert/concert-13.jpg'
import concerts13HR from '../images/concert/highres/concert-13.jpg'

import concerts14DR from '../images/concert/concert-14.jpg'
import concerts14HR from '../images/concert/highres/concert-14.jpg'

import concerts15DR from '../images/concert/concert-15.jpg'
import concerts15HR from '../images/concert/highres/concert-15.jpg'

import concerts16DR from '../images/concert/concert-16.jpg'
import concerts16HR from '../images/concert/highres/concert-16.jpg'

import concerts17DR from '../images/concert/concert-17.jpg'
import concerts17HR from '../images/concert/highres/concert-17.jpg'

import concerts18DR from '../images/concert/concert-18.jpg'
import concerts18HR from '../images/concert/highres/concert-18.jpg'

import concerts19DR from '../images/concert/concert-19.jpg'
import concerts19HR from '../images/concert/highres/concert-19.jpg'

import concerts20DR from '../images/concert/concert-20.jpg'
import concerts20HR from '../images/concert/highres/concert-20.jpg'

import concerts21DR from '../images/concert/concert-21.jpg'
import concerts21HR from '../images/concert/highres/concert-21.jpg'

import concerts22DR from '../images/concert/concert-22.jpg'
import concerts22HR from '../images/concert/highres/concert-22.jpg'

import concerts23DR from '../images/concert/concert-23.jpg'
import concerts23HR from '../images/concert/highres/concert-23.jpg'

import concerts24DR from '../images/concert/concert-24.jpg'
import concerts24HR from '../images/concert/highres/concert-24.jpg'

import concerts25DR from '../images/concert/concert-25.jpg'
import concerts25HR from '../images/concert/highres/concert-25.jpg'

import concerts26DR from '../images/concert/concert-26.jpg'
import concerts26HR from '../images/concert/highres/concert-26.jpg'

import concerts27DR from '../images/concert/concert-27.jpg'
import concerts27HR from '../images/concert/highres/concert-27.jpg'

import concerts28DR from '../images/concert/concert-28.jpg'
import concerts28HR from '../images/concert/highres/concert-28.jpg'

import concerts29DR from '../images/concert/concert-29.jpg'
import concerts29HR from '../images/concert/highres/concert-29.jpg'

import concerts30DR from '../images/concert/concert-30.jpg'
import concerts30HR from '../images/concert/highres/concert-30.jpg'

import concerts31DR from '../images/concert/concert-31.jpg'
import concerts31HR from '../images/concert/highres/concert-31.jpg'

import concerts32DR from '../images/concert/concert-32.jpg'
import concerts32HR from '../images/concert/highres/concert-32.jpg'

// 2.0 PEOPLE ==========================================
import people01DR from '../images/people/people-1.jpg'
import people01HR from '../images/people/highres/people-1.jpg'

import people02DR from '../images/people/people-2.jpg'
import people02HR from '../images/people/highres/people-2.jpg'

import people03DR from '../images/people/people-3.jpg'
import people03HR from '../images/people/highres/people-3.jpg'

import people04DR from '../images/people/people-4.jpg'
import people04HR from '../images/people/highres/people-4.jpg'

import people05DR from '../images/people/people-5.jpg'
import people05HR from '../images/people/highres/people-5.jpg'

import people06DR from '../images/people/people-6.jpg'
import people06HR from '../images/people/highres/people-6.jpg'

import people07DR from '../images/people/people-7.jpg'
import people07HR from '../images/people/highres/people-7.jpg'

import people08DR from '../images/people/people-8.jpg'
import people08HR from '../images/people/highres/people-8.jpg'

import people09DR from '../images/people/people-9.jpg'
import people09HR from '../images/people/highres/people-9.jpg'

import people10DR from '../images/people/people-10.jpg'
import people10HR from '../images/people/highres/people-10.jpg'

import people11DR from '../images/people/people-11.jpg'
import people11HR from '../images/people/highres/people-11.jpg'

import people12DR from '../images/people/people-12.jpg'
import people12HR from '../images/people/highres/people-12.jpg'

import people13DR from '../images/people/people-13.jpg'
import people13HR from '../images/people/highres/people-13.jpg'

import people14DR from '../images/people/people-14.jpg'
import people14HR from '../images/people/highres/people-14.jpg'

import people15DR from '../images/people/people-15.jpg'
import people15HR from '../images/people/highres/people-15.jpg'

import people16DR from '../images/people/people-16.jpg'
import people16HR from '../images/people/highres/people-16.jpg'

import people17DR from '../images/people/people-17.jpg'
import people17HR from '../images/people/highres/people-17.jpg'

import people18DR from '../images/people/people-18.jpg'
import people18HR from '../images/people/highres/people-18.jpg'

import people19DR from '../images/people/people-19.jpg'
import people19HR from '../images/people/highres/people-19.jpg'

import people20DR from '../images/people/people-20.jpg'
import people20HR from '../images/people/highres/people-20.jpg'


export const photos = [
  // TRAVEL CATEGORY
  { 
    alt: 'travel-01',
    id: uuidv4(),
    category: 'travel',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-01.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-01.png',
  },
  {
    alt: 'travel-02',
    id: uuidv4(),
    category: 'travel',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-03.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-03.png',
  },
  {
    alt: 'travel-03',
    id: uuidv4(),
    category: 'travel',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-02.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-02.png',
  },
  {
    alt: 'travel-04',
    id: uuidv4(),
    category: 'travel',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-04.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-04.png',
  },
  {
    alt: 'travel-05',
    id: uuidv4(),
    category: 'travel',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-05.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-05.png',
  },
  {
    alt: 'travel-06',
    id: uuidv4(),
    category: 'travel',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-06.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-06.png',
  },
  {
    alt: 'travel-07',
    id: uuidv4(),
    category: 'travel',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-08.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-08.png',
  },
  {
    alt: 'travel-08',
    id: uuidv4(),
    category: 'travel',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-07.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/travel-07.png',
  },
  // PEOPLE CATEGORY
  {
    alt: 'people-01',
    id: uuidv4(),
    category: 'people',
    url: people01DR,
    hiResUrl: people01HR,
  },
  {
    alt: 'people-02',
    id: uuidv4(),
    category: 'people',
    url: people03DR,
    hiResUrl: people03HR,
  },
  {
    alt: 'people-03',
    id: uuidv4(),
    category: 'people',
    url: people02DR,
    hiResUrl: people02HR,
  },
  {
    alt: 'people-04',
    id: uuidv4(),
    category: 'people',
    url: people04DR,
    hiResUrl: people04HR,
  },
  {
    alt: 'people-05',
    id: uuidv4(),
    category: 'people',
    url: people05DR,
    hiResUrl: people05HR,
  },
  {
    alt: 'people-06',
    id: uuidv4(),
    category: 'people',
    url: people06DR,
    hiResUrl: people06HR,
  },
  {
    alt: 'people-07',
    id: uuidv4(),
    category: 'people',
    url: people09DR,
    hiResUrl: people09HR,
  },
  {
    alt: 'people-08',
    id: uuidv4(),
    category: 'people',
    url: people07DR,
    hiResUrl: people07HR,
  },
  {
    alt: 'people-09',
    id: uuidv4(),
    category: 'people',
    url: people12DR,
    hiResUrl: people12HR,
  },
  {
    alt: 'people-10',
    id: uuidv4(),
    category: 'people',
    url: people08DR,
    hiResUrl: people08HR,
  },
  {
    alt: 'people-11',
    id: uuidv4(),
    category: 'people',
    url: people15DR,
    hiResUrl: people15HR,
  },
  {
    alt: 'people-12',
    id: uuidv4(),
    category: 'people',
    url: people10DR,
    hiResUrl: people10HR,
  },
  {
    alt: 'people-13',
    id: uuidv4(),
    category: 'people',
    url: people18DR,
    hiResUrl: people18HR,
  },
  {
    alt: 'people-14',
    id: uuidv4(),
    category: 'people',
    url: people11DR,
    hiResUrl: people11HR,
  },
  {
    alt: 'people-15',
    id: uuidv4(),
    category: 'people',
    url: people19DR,
    hiResUrl: people19HR,
  },
  {
    alt: 'people-16',
    id: uuidv4(),
    category: 'people',
    url: people13DR,
    hiResUrl: people13HR,
  },
  {
    alt: 'people-17',
    id: uuidv4(),
    category: 'people',
    url: people20DR,
    hiResUrl: people20HR,
  },
  {
    alt: 'people-18',
    id: uuidv4(),
    category: 'people',
    url: people14DR,
    hiResUrl: people14HR,
  },
  {
    alt: 'people-19',
    id: uuidv4(),
    category: 'people',
    url: people16DR,
    hiResUrl: people16HR,
  },
  {
    alt: 'people-20',
    id: uuidv4(),
    category: 'people',
    url: people17DR,
    hiResUrl: people17HR,
  },
  // CONCERTS CATEGORY
  {
    alt: 'concerts-01',
    id: uuidv4(),
    category: 'concerts',
    url: concerts01DR,
    hiResUrl: concerts01HR,
  },
  {
    alt: 'concerts-02',
    id: uuidv4(),
    category: 'concerts',
    url: concerts03DR,
    hiResUrl: concerts03HR,
  },
  {
    alt: 'concerts-03',
    id: uuidv4(),
    category: 'concerts',
    url: concerts02DR,
    hiResUrl: concerts02HR,
  },
  {
    alt: 'concerts-04',
    id: uuidv4(),
    category: 'concerts',
    url: concerts04DR,
    hiResUrl: concerts04HR,
  },
  {
    alt: 'concerts-05',
    id: uuidv4(),
    category: 'concerts',
    url: concerts05DR,
    hiResUrl: concerts05HR,
  },
  {
    alt: 'concerts-06',
    id: uuidv4(),
    category: 'concerts',
    url: concerts13DR,
    hiResUrl: concerts13HR,
  },
  {
    alt: 'concerts-07',
    id: uuidv4(),
    category: 'concerts',
    url: concerts06DR,
    hiResUrl: concerts06HR,
  },
  {
    alt: 'concerts-08',
    id: uuidv4(),
    category: 'concerts',
    url: concerts14DR,
    hiResUrl: concerts14HR,
  },
  {
    alt: 'concerts-09',
    id: uuidv4(),
    category: 'concerts',
    url: concerts07DR,
    hiResUrl: concerts07HR,
  },
  {
    alt: 'concerts-10',
    id: uuidv4(),
    category: 'concerts',
    url: concerts15DR,
    hiResUrl: concerts15HR,
  },
  {
    alt: 'concerts-11',
    id: uuidv4(),
    category: 'concerts',
    url: concerts08DR,
    hiResUrl: concerts08HR,
  },
  {
    alt: 'concerts-12',
    id: uuidv4(),
    category: 'concerts',
    url: concerts16DR,
    hiResUrl: concerts16HR,
  },
  {
    alt: 'concerts-13',
    id: uuidv4(),
    category: 'concerts',
    url: concerts09DR,
    hiResUrl: concerts09HR,
  },
  {
    alt: 'concerts-14',
    id: uuidv4(),
    category: 'concerts',
    url: concerts17DR,
    hiResUrl: concerts17HR,
  },
  {
    alt: 'concerts-15',
    id: uuidv4(),
    category: 'concerts',
    url: concerts10DR,
    hiResUrl: concerts10HR,
  },
  {
    alt: 'concerts-16',
    id: uuidv4(),
    category: 'concerts',
    url: concerts18DR,
    hiResUrl: concerts18HR,
  },
  {
    alt: 'concerts-17',
    id: uuidv4(),
    category: 'concerts',
    url: concerts11DR,
    hiResUrl: concerts11HR,
  },
  {
    alt: 'concerts-18',
    id: uuidv4(),
    category: 'concerts',
    url: concerts19DR,
    hiResUrl: concerts19HR,
  },
  {
    alt: 'concerts-19',
    id: uuidv4(),
    category: 'concerts',
    url: concerts12DR,
    hiResUrl: concerts12HR,
  },
  {
    alt: 'concerts-20',
    id: uuidv4(),
    category: 'concerts',
    url: concerts21DR,
    hiResUrl: concerts21HR,
  },
  {
    alt: 'concerts-21',
    id: uuidv4(),
    category: 'concerts',
    url: concerts20DR,
    hiResUrl: concerts20HR,
  },
  {
    alt: 'concerts-22',
    id: uuidv4(),
    category: 'concerts',
    url: concerts22DR,
    hiResUrl: concerts22HR,
  },
  {
    alt: 'concerts-23',
    id: uuidv4(),
    category: 'concerts',
    url: concerts23DR,
    hiResUrl: concerts23HR,
  },
  {
    alt: 'concerts-24',
    id: uuidv4(),
    category: 'concerts',
    url: concerts25DR,
    hiResUrl: concerts25HR,
  },
  {
    alt: 'concerts-25',
    id: uuidv4(),
    category: 'concerts',
    url: concerts26DR,
    hiResUrl: concerts26HR,
  },
  {
    alt: 'concerts-26',
    id: uuidv4(),
    category: 'concerts',
    url: concerts31DR,
    hiResUrl: concerts31HR,
  },
  {
    alt: 'concerts-27',
    id: uuidv4(),
    category: 'concerts',
    url: concerts27DR,
    hiResUrl: concerts27HR,
  },
  {
    alt: 'concerts-28',
    id: uuidv4(),
    category: 'concerts',
    url: concerts32DR,
    hiResUrl: concerts32HR,
  },
  {
    alt: 'concerts-29',
    id: uuidv4(),
    category: 'concerts',
    url: concerts28DR,
    hiResUrl: concerts28HR,
  },
  {
    alt: 'concerts-30',
    id: uuidv4(),
    category: 'concerts',
    url: concerts29DR,
    hiResUrl: concerts29HR,
  },
  {
    alt: 'concerts-31',
    id: uuidv4(),
    category: 'concerts',
    url: concerts30DR,
    hiResUrl: concerts30HR,
  },
  {
    alt: 'concerts-32',
    id: uuidv4(),
    category: 'concerts',
    url: concerts24DR,
    hiResUrl: concerts24HR,
  },
  // CLIENTS CATEGORY
  {
    alt: 'clients-06',
    id: uuidv4(),
    category: 'clients',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-06.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-06.png',
  },
  {
    alt: 'clients-01',
    id: uuidv4(),
    category: 'clients',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-01.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-01.png',
  },
  {
    alt: 'clients-04',
    id: uuidv4(),
    category: 'clients',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-04.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-04.png',
  },
  {
    alt: 'clients-02',
    id: uuidv4(),
    category: 'clients',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-02.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-02.png',
  },
  {
    alt: 'clients-04',
    id: uuidv4(),
    category: 'clients',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-07.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-07.png',
  },
  {
    alt: 'clients-03',
    id: uuidv4(),
    category: 'clients',
    url: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-03.png',
    hiResUrl: 'https://pmacapagal-assets.s3-us-west-2.amazonaws.com/photography/clients-03.png',
  },
]

