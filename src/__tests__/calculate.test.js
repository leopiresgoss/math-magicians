import calculate from '../logic/calculate';

describe('the result should match', () => {
  test('2+2=4', () => {
    const object = {
      total: 2,
      next: 2,
      operation: '+',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('4');
  });

  test('2-2=0', () => {
    const object = {
      total: 2,
      next: 2,
      operation: '-',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('0');
  });

  test('2x2=4', () => {
    const object = {
      total: 2,
      next: 2,
      operation: 'x',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('4');
  });

  test('2%2=0', () => {
    const object = {
      total: 2,
      next: 2,
      operation: '%',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('0');
  });

  test('2÷2=0', () => {
    const object = {
      total: 2,
      next: 2,
      operation: '÷',
    };
    const result = calculate(object, '=');
    expect(result.total).toEqual('1');
  });
});
