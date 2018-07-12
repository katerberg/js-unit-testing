const uniformService = {
    getIdCard: (name, photo) => {
        return {
            name,
            photo,
        }
    },
    getShirt: () => {
        return {
            size: 'XL fits most',
        };
    },
};

export default uniformService;
