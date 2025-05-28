import { AxiosRequestConfig } from 'axios';
import * as FormData from 'form-data';
export interface AkinatorResult {
    completion?: string;
    akitude: string;
    step: string;
    progression: string;
    question_id: string;
    question: string;
}
export interface AkinatorResultGuess {
    completion: string;
    description_proposition: string;
    flag_photo: string;
    id_base_proposition: string;
    id_proposition: string;
    name_proposition: string;
    nb_elements: number;
    photo: string;
    pseudo: string;
    valide_constrainte: string;
}
export declare class AkinatorAPIError extends Error {
    constructor(data: any, region: string);
    private mapError;
}
export declare const request: (url: string, formData: FormData, axiosConfig: AxiosRequestConfig) => Promise<AkinatorAPIError | AkinatorResult | AkinatorResultGuess>;
