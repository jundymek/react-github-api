import { getFilteredDataByTechnology } from "../../components/helpers/getFilteredDataByTechnology";

const data = [{id: 1,language: "html"},{id: 2,language: "css"},{id: 3,language: "python"}];
const data1 = [{id: 1,language: null},{id: 2,language: "css"},{id: 3,language: "python"}];
const data2 = [{id: 1,language: "css"},{id: 2,language: "css"},{id: 3,language: "python"}];

describe('getFilteredDataByTechnology', () => {
    it('return same data as input - all input - data with diferent values', () => {
        expect(getFilteredDataByTechnology("all", data)).toEqual(data);
    });
    it('return empty list', () => {
        expect(getFilteredDataByTechnology("java", data)).toEqual([]);
    });
    it('return 1 item', () => {
        expect(getFilteredDataByTechnology("python", data)).toEqual([{id: 3,language: "python"}]);
    });
    it('return 1 item with "other" input', () => {
        expect(getFilteredDataByTechnology("Other", data1)).toEqual([{id: 1,language: null}]);
    });
    it('return 2 items filtered from data', () => {
        expect(getFilteredDataByTechnology("css", data2)).toEqual([{id: 1,language: "css"},{id: 2,language: "css"}]);
    });
});
