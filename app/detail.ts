export interface Details{
    name : string;
    email : string;
    phoneno : string;
    address : string;
    website : string;
    landline : string;
    selected : boolean
}
export const DETAILS: Details[] = [
    {name: 'Chandermani Arora', email: 'chandermani@technovert.net', website: 'http://www.technovert.com', phoneno: '9689858574', address:'Dno: 589, Madhapur, Hyderabad', landline: '040 30 1231211', selected: true},
    {name: 'Sashi Pagadala', email: 'sashi@technovert.net', website: 'http://www.technovert.com', phoneno: '9689858575', address:'Dno: 579, Krishna Nagar, Hyderabad', landline: '040 30 1231211', selected: false},
    {name: 'Praveen Battula', email: 'praveen@technovert.net', website: 'http://www.technovert.com', phoneno: '9689858576', address:'Dno: 689, Begumpet, Hyderabad', landline: '040 30 1231211', selected: false},
    {name: 'Vijay Yalamanchili', email: 'vijay@technovert.net', website: 'http://www.technovert.com', phoneno: '9689858577', address:'Dno: 509, Narsapuram, Hyderabad', landline: '040 30 1231211', selected: false}
]