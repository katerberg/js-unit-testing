import uniformService from './uniformService';
import chai, {expect} from 'chai';

describe('uniformService', () => {
    describe('getIdCard(name, photo)', () => {
        it('gives photo back', () => {
            //Assemble
            const photo = Math.random();

            //Act
            const result = uniformService.getIdCard('foo', photo);

            //Assert
            expect(result.photo).to.equal(photo);
        });

        it('makes the person have an exemplary name', () => {
            //Assemble
            const name = 'Jason Newman';

            //Act
            const result = uniformService.getIdCard(name);

            //Assert
            expect(result.name).to.equal('Jason Newman, Esquire!');
        });
    });

    describe('getShirt()', () => {
        it('has a size', () => {
            //Act
            const result = uniformService.getShirt();

            //Assert
            expect(result.size).to.exist;
        });
    });
});
