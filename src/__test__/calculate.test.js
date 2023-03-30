import calculate from '../logic/calculate';

const testCal = {
  total: null,
  next: null,
  operation: null,
};

it('Testing calculate', () => {
  const testcalc = (btn) => {
    const { total = null, next = null, operation = null } = calculate(testCal, btn);
    testCal.total = total;
    testCal.next = next;
    testCal.operation = operation;
  };
  testcalc('2');
  testcalc('+');
  testcalc('2');
  testcalc('=');
  expect(testCal.total).toBe('4');
  expect(testCal.next).toBe(null);
  expect(testCal.operation).toBe(null);
});
