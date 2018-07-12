import uniformService from './uniformService';
import chai, {expect} from 'chai';

describe('uniformService', () => {
    describe('getIdCard(name, photo)', () => {
        it('gives photo back', () => {
            const photo = Math.random();

            const result = uniformService.getIdCard('foo', photo);

            expect(result.photo).to.equal(photo);
        });

        it('makes the person have an exemplary name', () => {
            const name = 'Jason Newman';

            const result = uniformService.getIdCard(name);

            expect(result.name).to.equal('Jason Newman, Esquire!');
        });
    });

    describe('getShirt()', () => {
        it('has a size', () => {
            const result = uniformService.getShirt();

            expect(result.size).to.exist;
        });
    });
});
