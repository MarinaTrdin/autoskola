import { Tecaj } from "./tecaj";

export interface Kandidat{
    id: number;
    ime: string;
    prezime: string;
    oib: string;
    telefon: string;
    tecaj?: Tecaj;
}