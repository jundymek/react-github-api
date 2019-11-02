import {chainedFetch} from '../../components/helpers/chainedFetch';

xdescribe('chainedFetch helper', () => {
    it('Empty user', () => {
        const res = chainedFetch('')
        // const user = 'jundymek'
        // chainedFetch('null')
        // expect(res).toEqual('Not Found');
        // expect.assertions(1);
        expect.assertions(1);
        return expect(res).rejects.toEqual('Not Found');
    });
    it('Proper user', () => {
        const res = chainedFetch('jundymek')
        // const user = 'jundymek'
        // chainedFetch('null')
        // expect(res).toEqual('Not Found');
        // expect.assertions(1);
        return expect(res).toContainKeys(['a', 'b']);
    });
});
