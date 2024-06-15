import {create} from 'zustand';

type BookedItemState = {
    bookedItem: any;
    setBookedItem: (bookedItem: any) => void;
    appendBookedItem: (bookedItem: any) => void;
};

const useBookedItem = create<BookedItemState>((set) => ({
    bookedItem: [],
    setBookedItem: (bookedItem) => set({bookedItem}),
    appendBookedItem: (bookedItem) => set((state) => ({bookedItem: [...state.bookedItem, bookedItem]})),
}));

export default useBookedItem;