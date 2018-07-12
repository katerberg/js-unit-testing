const uniformService = {
    getIdCard: (name, photo) => {
        return {
            name: `${name}, Esquire!`,
            photo,
        };
    },
    getShirt: () => {
        return {
            size: 'XL fits most',
        };
    },
};

export default uniformService;
