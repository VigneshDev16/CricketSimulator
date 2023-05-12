import weightedRandom from 'rtn-weightedrandnum/js/NativeWeigthedRandNum';

jest.mock('rtn-weightedrandnum/js/NativeWeigthedRandNum', () => ({
  /* Mock implementation of the native module */
}));

describe('weightedRandom', () => {
  it('should throw an error when the number of weights does not match the number of items', () => {
    const getWeightedRandomWithInvalidInputs = async () => {
      return await weightedRandom?.weightedRandNum([10, 20, 30], [10, 0]);
    };
    expect(getWeightedRandomWithInvalidInputs).toThrow(
      'Items and weights must be of the same size',
    );
  });

  it('should throw an error when the number of weights or items are empty', () => {
    const getWeightedRandomWithInvalidInputs = async () => {
      return await weightedRandom?.weightedRandNum([], []);
    };
    expect(getWeightedRandomWithInvalidInputs).toThrow(
      'Items must not be empty',
    );
  });

  it('should correctly do random selection based on weights in straightforward cases', async () => {
    expect(
      await weightedRandom?.weightedRandNum([10, 20, 30], [1, 0, 0]),
    ).toEqual(10);
    expect(
      await weightedRandom?.weightedRandNum([10, 20, 30], [0, 1, 0]),
    ).toEqual(20);
    expect(
      await weightedRandom?.weightedRandNum([10, 20, 30], [0, 0, 1]),
    ).toEqual(30);
    expect(
      await weightedRandom?.weightedRandNum([10, 20, 30], [0, 1, 1]),
    ).not.toEqual(10);
    expect(
      await weightedRandom?.weightedRandNum([10, 20, 30], [1, 0, 1]),
    ).not.toEqual(20);
    expect(
      await weightedRandom?.weightedRandNum([10, 20, 30], [1, 1, 0]),
    ).not.toEqual(30);
  });
});
