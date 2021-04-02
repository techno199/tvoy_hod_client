const vipUsers = [
    'lisamarsa29@gmail.com',
    'fella-bella81@rambler.ru',
    'bolshaya.peremena.start@yandex.ru',
    'info@bolshaya-peremena.team',
    'ayrika01@gmail.com',
    '79261478229@yandex.ru',
    'drah5b90@box10.pw'
];

export const vipUser = (stateContext) => {
    return vipUsers.includes(stateContext.email)
};