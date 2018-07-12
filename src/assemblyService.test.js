import Person from './person';
import assemblyService from './assemblyService';
import uniformService from './uniformService';
import chai, {expect} from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('assemblyService', () => {
    describe('assemble(name, photo)', () => {
        beforeEach(() => {
            sinon.stub(uniformService, 'getShirt');
            sinon.stub(uniformService, 'getIdCard');
        });

        afterEach(() => {
            uniformService.getShirt.restore();
            uniformService.getIdCard.restore();
        });

        it('builds a person', () => {
            //Act
            const result = assemblyService.assemble();

            //Assert
            expect(result instanceof Person).to.be.true;
        });

        it('uses their info and their picture', () => {
            //Assemble
            const name = Math.random();
            const photo = Math.random();
            const shirt = Math.random();
            const idCard = Math.random();
            uniformService.getShirt.returns(shirt);
            uniformService.getIdCard.returns(idCard);

            //Act
            const result = assemblyService.assemble(name, photo);

            //Assert
            expect(result instanceof Person).to.be.true;
            expect(result.idCard).to.equal(idCard);
            expect(result.shirt).to.equal(shirt);
            expect(uniformService.getShirt).to.have.been.calledWithExactly();
            expect(uniformService.getIdCard).to.have.been.calledWithExactly(name, photo);
        });
    });
});
