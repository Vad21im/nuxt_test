export const useAppStores = defineStore('app', {
    state: () => ({
        menuModal: false,
        namePage: "",
    }),
    actions: {
        setMenuModal(btn) {
            this.menuModal = btn
        },
        setNamePage(namePage) {
            this.namePage = namePage
        }
    },
})