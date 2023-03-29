import operate from '../logic/operate';

describe('Testing Operate', () => {
  it('Testing +', () => {
    expect(operate('2', '4', '+')).toBe('6');
  });
  it('Testing -', () => {
    expect(operate('2', '4', '-')).toBe('-2');
  });
  it('Testing x', () => {
    expect(operate('2', '4', 'x')).toBe('8');
  });
});
