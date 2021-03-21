export const CHANGE_USERNAME = '@@profile/CHANGE_USERNAME';

export const changeUserName = (userName) => ({
    type: CHANGE_USERNAME,
    payload: {
        userName,
    },
});