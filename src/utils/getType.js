export const getType = (roleId) => {
    switch(roleId) {
        case 1:
        case 2:
            return 1;

        case 9:
            return 2;

        default:
            return null
    }
};