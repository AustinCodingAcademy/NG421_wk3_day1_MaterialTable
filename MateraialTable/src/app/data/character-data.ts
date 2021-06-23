import { ICharacters } from "../models/icharacters";

const ACTIVE_CHARACTER: ICharacters [] = [
    {
        name: "Robby Rick",
        alias: "Bob",
        age: 37,
        currentCharacter: false,
        characterSince: new Date('05/17/1989'),
        talents: ['Mechanic', 'Chicken Fajitas']
    },
    {
        name: "Tod Banks",
        alias: "Mr. Banks",
        age: 63,
        currentCharacter: false,
        characterSince: new Date('11/10/1952'),
        talents: ['Negotiation', 'Ramsay like pallet']
    },
    {
        name: "Lucas Martinez",
        alias: "Slick Hijo",
        age: 21,
        currentCharacter: false,
        characterSince: new Date('08/05/2009'),
        talents: ['Racing', 'Insight']
    }
];
export { ACTIVE_CHARACTER };