import { create } from 'zustand';

const UseConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (conversation) => set({ selectedConversation: conversation }),
  messages: [],
  setMessages: (updater) =>
    set((state) => ({
      messages:
        typeof updater === 'function'
          ? updater(state.messages)
          : Array.isArray(updater)
          ? updater
          : [],
    })),
}));

export default UseConversation;
