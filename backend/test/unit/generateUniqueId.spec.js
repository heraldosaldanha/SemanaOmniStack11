const genegateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
    it('shoul generate an unique ID', () =>{
        const id = genegateUniqueId();

        expect(id).toHaveLength(8);
    });
});