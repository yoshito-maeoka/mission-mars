import direction from '@/direction';

describe('direction', () => {
  it('returns E if turn right', () => {
    expect(direction.turn('N', true)).toMatch('E');
  });

  it('returns W if turn left', () => {
    expect(direction.turn('N', false)).toMatch('W');
  });

  it('returns S if turn right twice from N', () => {
    let ret = direction.turn('N', true);
    ret = direction.turn(ret, true);
    expect(ret).toMatch('S');
  });

  it('returns S if turn left twice from N', () => {
    let ret = direction.turn('N', false);
    ret = direction.turn(ret, false);
    expect(ret).toMatch('S');
  });
});
