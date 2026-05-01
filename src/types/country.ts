export interface Country {
    name: string;
    emoji: string;
    currency: string;
    phone: string;
    continent: {
        name: string;
    };
    languages?: {
        name: string;
    }[];
}

export interface CountriesResponse {
    countries: Country[];
}