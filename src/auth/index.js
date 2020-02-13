const Key = 'key-name-WarmHeart'

export default {
    getUser() {
        return JSON.parse(sessionStorage.getItem(Key))
    },
    setUser(user) {
        sessionStorage.setItem(Key, JSON.stringify(user))
    },
    delUser() {
        sessionStorage.removeItem(Key)
    }
}