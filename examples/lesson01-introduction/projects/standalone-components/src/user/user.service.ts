import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): Observable<{ first_name: string, last_name: string, email: string}[]> {
    return of(DATA);
  }
}

const DATA = [{
  "first_name": "Venus",
  "last_name": "Gisburn",
  "email": "vgisburn0@pinterest.com"
}, {
  "first_name": "Trace",
  "last_name": "Humberstone",
  "email": "thumberstone1@reddit.com"
}, {
  "first_name": "Basilio",
  "last_name": "Armin",
  "email": "barmin2@quantcast.com"
}, {
  "first_name": "Delphine",
  "last_name": "Stiddard",
  "email": "dstiddard3@dion.ne.jp"
}, {
  "first_name": "Brose",
  "last_name": "Edwardson",
  "email": "bedwardson4@mlb.com"
}, {
  "first_name": "Gordie",
  "last_name": "Neggrini",
  "email": "gneggrini5@parallels.com"
}, {
  "first_name": "Quentin",
  "last_name": "Rumsey",
  "email": "qrumsey6@ihg.com"
}, {
  "first_name": "Lois",
  "last_name": "Maffioni",
  "email": "lmaffioni7@freewebs.com"
}, {
  "first_name": "Bastian",
  "last_name": "Wrettum",
  "email": "bwrettum8@tiny.cc"
}, {
  "first_name": "Berni",
  "last_name": "Rosentholer",
  "email": "brosentholer9@telegraph.co.uk"
}, {
  "first_name": "Zonnya",
  "last_name": "Kleinerman",
  "email": "zkleinermana@dmoz.org"
}, {
  "first_name": "Gretel",
  "last_name": "Stearn",
  "email": "gstearnb@state.tx.us"
}, {
  "first_name": "Artus",
  "last_name": "Leacy",
  "email": "aleacyc@washington.edu"
}, {
  "first_name": "Braden",
  "last_name": "Laverty",
  "email": "blavertyd@ask.com"
}, {
  "first_name": "Bert",
  "last_name": "Shewery",
  "email": "bshewerye@wufoo.com"
}, {
  "first_name": "Miof mela",
  "last_name": "McCorley",
  "email": "mmccorleyf@xing.com"
}];