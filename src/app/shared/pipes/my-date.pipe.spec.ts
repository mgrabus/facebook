import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
    let pipe: MyDatePipe = null;

    beforeEach(() => {
        pipe = new MyDatePipe();
    });

    it('create an instance', () => {
        expect(pipe).toBeTruthy();
    });

    it('should works', () => {
        const input = 'Wed Oct 03 2222 10:14:01 GMT+0200 (czas środkowoeuropejski standardowy)';
        const output = pipe.transform(input);
        expect(output).toEqual('3 października 2222, 10:14');
    });

    it('should return empty string for falsy values', () => {
        const falsyValues = ['', 0, false, null, undefined, NaN];
        falsyValues.forEach((input) => {
            const output = pipe.transform(input as string);
            expect(output).toEqual('');
        });
    });

    it('should return empty string for non date-strings', () => {
        const input = 'ciasteczko';
        const output = pipe.transform(input);
        expect(output).toEqual('');
    });
});
