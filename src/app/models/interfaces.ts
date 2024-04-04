export interface RetornoAPILista {
    dates?: {
        maximum: Date
        , minimum: Date
    }
    , page: number
    , results: Filme[]
    , total_Pages: number
    , total_results: number
}

export interface Filme {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}


//----------------------------------------------------------

export interface FilmeDetalhe {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: Collection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: Date;
    revenue: number;
    runtime: number;
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface Collection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface Genre {
    id: number;
    name: string;
}

//------------------------------------

export interface Creditos {
    id: number;
    cast: Elenco[];
}

export interface Elenco {
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: Department;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: null | string;
    cast_id?: number;
    character?: string;
    credit_id: string;
    order?: number;
    department?: Department;
    job?: string;
}

export enum Department {
    Acting = "Acting",
    Art = "Art",
    Camera = "Camera",
    CostumeMakeUp = "Costume & Make-Up",
    Crew = "Crew",
    Directing = "Directing",
    Editing = "Editing",
    Lighting = "Lighting",
    Production = "Production",
    Sound = "Sound",
    VisualEffects = "Visual Effects",
    Writing = "Writing",
}


//------------------------------------

export interface Videos {
    id: number;
    results: Trailer[];
}

export interface Trailer {
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    published_at: Date;
    id: string;
}



//---------------------------------


export interface Plataforma {
    id:      number;
    results: Results;
}

export interface Results {
    BR: TipoPlataforma;
}


export interface TipoPlataforma {
    link:      string;
    buy:       Flatrate[];
    rent?:     Flatrate[];
    flatrate?: Flatrate[];
}

export interface Flatrate {
    logo_path:        string;
    provider_id:      number;
    provider_name:    string;
    display_priority: number;
}
