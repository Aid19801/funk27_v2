
export const cache: object = {
    clearForm: function() {
        return sessionStorage.setItem("signupForm", JSON.stringify({}));
    },
    getForm: function() {
        const obj = JSON.parse(sessionStorage.getItem("signupForm"));
        return obj;
    },
    saveForm: function(obj) {
        const str = JSON.stringify(obj);
        return sessionStorage.setItem("signupForm", str);
    }
}

