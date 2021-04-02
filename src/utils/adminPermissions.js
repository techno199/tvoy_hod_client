export function getAdminPage (roles) {
    const roleUser = roles.map(i => i.permissions).flat().map(i => i.sys_name);
    return roleUser.includes('admin_access')
}

export function getAdminPermissions (perm) {
    const roleUser = perm.map(i => i.sys_name);
    return roleUser.includes('admin_access')
}

export function getContestant (roles) {
    const roleUser = roles.map(i => i.sys_name);
    return roleUser.includes('ROLE_ATTENDEE')
}
