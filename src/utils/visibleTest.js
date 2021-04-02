export function visibleTest (stateContext) {
    if(stateContext.role.find(i => i.role_id === 1) && stateContext?.educationalInstitutionInfo?.grade >= 8 && stateContext?.educationalInstitutionInfo?.grade <= 10) {
        return true
    }

    if(stateContext.role.find(i => i.role_id === 9) && stateContext?.educationalInstitutionInfo?.course < 4) {
        return true
    }

    return false
}