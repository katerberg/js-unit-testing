import uniformService from './uniformService';
import chai, {expect} from 'chai';

describe('uniformService', () => {
    describe('getIdCard(name, photo)', () => {
        it('gives name and photo back', () => {
            const name = Math.random();
            const photo = Math.random();

            const result = uniformService.getIdCard(name, photo);

            expect(result).to.eql({name, photo});
        });
    });

    describe('getShirt()', () => {
        it('has a size', () => {
            const result = uniformService.getShirt();

            expect(result.size).to.exist;
        });
    });
});
