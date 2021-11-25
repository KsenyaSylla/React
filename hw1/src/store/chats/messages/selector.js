export const getMessageListRoot = (state) => (state.messages);
export const getMessageList = (state) => (getMessageListRoot(state).messageList
);