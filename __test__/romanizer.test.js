import {transform} from "../src/romanizer";

describe('transform number', () => {
    it('should return x when 10', () => {
        const transformed = transform(10);
        expect(transformed).toEqual('X');
    });
});