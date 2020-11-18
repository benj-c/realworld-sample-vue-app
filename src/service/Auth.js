export const USER_ROLES = {
    ADMIN: "ADMIN",
    USER: "USER",
    COMPANY: "COMPANY",
}

export const put = user => {
    localStorage.setItem("sample_usr", JSON.stringify(user));
    let u = JSON.parse(localStorage.getItem("pre_logins_sample_usr")) || [];
    for (let i = 0; i < u.length; i++) {
        if (u[i] === user.username) {
            u.splice(i, 1);
            break;
        }
    }
    u.push(user.username);
    localStorage.setItem("pre_logins_sample_usr", JSON.stringify(u));
}

export const getAccessToken = () => {
    let d = JSON.parse(localStorage.getItem("sample_usr"));
    return d ? d.token : null;
};

export const getUser = () => {
    return JSON.parse(localStorage.getItem("sample_usr"));
}

export const getPreLogins = () => {
    return JSON.parse(localStorage.getItem("pre_logins_sample_usr"));
}

export function isAuthenticated() {
    return localStorage.getItem("sample_usr") ? true : false;
    //TODO: send req to bckend, check validity of token maybe.
}

export const logOut = () => {
    localStorage.removeItem("sample_usr");
    window.location.replace("/");
};
