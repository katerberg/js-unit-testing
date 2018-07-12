import Person from './person';
import uniformService from './uniformService';

const assemblyService = {
    assemble: (name, phone) => {
        const idCard = uniformService.getIdCard(name, phone);
        const shirt = uniformService.getShirt();
        return new Person(idCard, shirt);
    },
};

export default assemblyService;
