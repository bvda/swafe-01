export const BILLIONAIRES: Billionaire[] = [{ 
  name: 'Bill Gates',
  net_worth: 133200000000,
  nationality: 'US',
}, {
  name: 'Jeff Bezos',
  net_worth: 200100000000,
  nationality: 'US',
}, {
  name: 'Elon Musk',
  net_worth: 190700000000,
  nationality: 'ZA',
}, {
  name: 'Mark Zuckerberg',
  net_worth: 135200000000,
  nationality: 'US',
}, {
  name: 'Sergey Brin',
  net_worth: 118800000000,
  nationality: 'RU',
}, {
  name: 'Larry Page',
  net_worth: 123100000000,
  nationality: 'US',  
}]

export interface Billionaire {
  name: string;
  net_worth: number;
  nationality: string;
}