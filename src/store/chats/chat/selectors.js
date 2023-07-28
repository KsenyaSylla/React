export const getChatListRoot = (state) => (state.chats);
export const getChatList = (state) => (getChatListRoot(state).chats);