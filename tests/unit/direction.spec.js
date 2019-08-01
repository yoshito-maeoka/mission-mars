import direction from '@/direction';

describe('direction', () => {
  describe('turn', () => {
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

  describe('forward', () => {
    it('returns {x: 1, y: 0} forwarding, if direction is N', () => {
      expect(direction.forward('N', { x: 0, y: 0 })).toMatchObject({ x: 1, y: 0 });
    });
    it('returns {x: 1, y: 1} forwarding, if direction is E', () => {
      expect(direction.forward('E', { x: 1, y: 0 })).toMatchObject({ x: 1, y: 1 });
    });
    it('returns {x: 0, y: 1} forwarding, if direction is S', () => {
      expect(direction.forward('S', { x: 1, y: 1 })).toMatchObject({ x: 0, y: 1 });
    });
    it('returns {x: 0, y: 0} forwarding, if direction is W', () => {
      expect(direction.forward('W', { x: 0, y: 1 })).toMatchObject({ x: 0, y: 0 });
    });
  });

  describe('backward', () => {
    it('returns {x: 0, y: 1} backwarding if direction is N', () => {
      expect(direction.backward('N', { x: 1, y: 1 })).toMatchObject({ x: 0, y: 1 });
    });
    it('returns {x: 0, y: 0} backwarding, if direction is E', () => {
      expect(direction.backward('E', { x: 0, y: 1 })).toMatchObject({ x: 0, y: 0 });
    });
    it('returns {x: 1, y: 0} backwarding, if direction is S', () => {
      expect(direction.backward('S', { x: 0, y: 0 })).toMatchObject({ x: 1, y: 0 });
    });
    it('returns {x: 1, y: 1} backwarding, if direction is W', () => {
      expect(direction.backward('W', { x: 1, y: 0 })).toMatchObject({ x: 1, y: 1 });
    });
  });
});
