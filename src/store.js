import { configureStore, createSlice } from '@reduxjs/toolkit';

let inputKeyword = createSlice({
  name: 'inputKeyword',
  initialState: { keyword: '' },
  reducers: {
    changeKeyword(state, action) {
      state.keyword = action.payload;
    },
  },
});

export let { changeKeyword } = inputKeyword.actions;

let searchModalStatus = createSlice({
  name: 'searchModalStatus',
  initialState: false,
  reducers: {
    openSearchModal() {
      return true;
    },
    closeSearchModal() {
      return false;
    },
  },
});

export let { openSearchModal, closeSearchModal } = searchModalStatus.actions;

// searchIconStatus 0:돋보기 / 1:X / 2:공백
let searchIconStatus = createSlice({
  name: 'searchIconStatus',
  initialState: 0,
  reducers: {
    switchSearchIcon(state, action) {
      return action.payload;
    },
  },
});

export let { switchSearchIcon } = searchIconStatus.actions;

export default configureStore({
  reducer: {
    inputKeyword: inputKeyword.reducer,
    searchModalStatus: searchModalStatus.reducer,
    searchIconStatus: searchIconStatus.reducer,
  },
});
