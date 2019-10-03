import { MyDatePipe } from './my-date.pipe';

describe('MyDatePipe', () => {
  it('create an instance', () => {
    const pipe = new MyDatePipe();
    expect(pipe).toBeTruthy();
  });

  it('sho', () => {
  const pipe = new MyDatePipe();

  const input = 'Wed Oct 03 2222 10:14:01 GMT+0100 (czas środkowoeuropejski standardowy)';
  const output = pipe.transform(input);
  expect(output).toEqual('3 października 2222, 11:14');
  })
});
