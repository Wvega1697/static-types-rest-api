"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
const isString = (string) => {
    return typeof string === 'string';
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (param) => {
    // return ['sunny', 'rainy', ' cloudy', 'windy', 'stormy'].includes(string)
    return Object.values(enums_1.Weather).includes(param);
};
const isVisibility = (param) => {
    return Object.values(enums_1.Visibility).includes(param);
};
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest;
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isString(weatherFromRequest) || !isWeather(weatherFromRequest)) {
        throw new Error('Incorrect or missing Weather');
    }
    return weatherFromRequest;
};
const parseVisibility = (VisibilityFromRequest) => {
    if (!isString(VisibilityFromRequest) || !isVisibility(VisibilityFromRequest)) {
        throw new Error('Incorrect or missing Visibility');
    }
    return VisibilityFromRequest;
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
        // ..
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
