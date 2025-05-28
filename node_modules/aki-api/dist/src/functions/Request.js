"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.request = exports.AkinatorAPIError = void 0;
const axios_1 = require("axios");
const Client_1 = require("../constants/Client");
class AkinatorAPIError extends Error {
    constructor(data, region) {
        super(`A problem occurred with making the request data: ${data}: region: ${region}`);
        this.message = this.mapError(data.completion || '', region);
    }
    mapError(c, region) {
        if (!c)
            return `A problem occurred with making the request.\nRequest Body: ${c}`;
        switch (c) {
            case 'KO - SERVER DOWN': return `Akinator servers are down for the "${region}" region. Check back later. ${c}`;
            case 'KO - TECHNICAL ERROR': return `Akinator's servers have had a technical error for the "${region}" region. Check back later. ${c}`;
            case 'KO - INCORRECT PARAMETER': return `You inputted a wrong paramater, this could be session, region, or signature. ${c}`;
            case 'KO - TIMEOUT': return `Your Akinator session has timed out. ${c}`;
            case 'WARN - NO QUESTION': return `No question found. ${c}`;
            case 'KO - MISSING PARAMETERS': return `Akinator needs more parameters. Please make an issue at: ${Client_1.issues}`;
            default: return `Unknown error has occurred. Server response: ${c}`;
        }
    }
}
exports.AkinatorAPIError = AkinatorAPIError;
const request = async (url, formData, axiosConfig) => {
    const { status, data: result } = await axios_1.default.postForm(url, formData, axiosConfig);
    if (status !== 200 || !result) {
        throw new AkinatorAPIError(result, url);
    }
    const guess = result;
    if (guess.id_proposition) {
        return guess;
    }
    return result;
};
exports.request = request;
//# sourceMappingURL=Request.js.map