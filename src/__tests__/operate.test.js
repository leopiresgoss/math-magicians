import operate from '../logic/operate';

describe('the result should match', () => {
  test('2+2=4', () => {
    const object = {
      numberOne: 2,
      numberTwo: 2,
      operation: '+',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('4');
  });

  test('2-2=0', () => {
    const object = {
      numberOne: 2,
      numberTwo: 2,
      operation: '-',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('0');
  });

  test('2x2=4', () => {
    const object = {
      numberOne: 2,
      numberTwo: 2,
      operation: 'x',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('4');
  });

  test('2%2=0', () => {
    const object = {
      numberOne: 2,
      numberTwo: 2,
      operation: '%',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('0');
  });

  test('2÷2=1', () => {
    const object = {
      numberOne: 2,
      numberTwo: 2,
      operation: '÷',
    };
    const result = operate(
      object.numberOne,
      object.numberTwo,
      object.operation,
    );
    expect(result).toEqual('1');
  });
});
