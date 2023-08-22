// Enums
enum ROLES { 
    manager = 'manager',
    ceo = 'ceo',
}

function printar(role: ROLES){
    console.log("🤬 ~ file: enums.ts:8 ~ printar ~ role:", role)
}

printar(ROLES.ceo)