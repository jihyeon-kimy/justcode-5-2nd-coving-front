import { configureStore, createSlice } from '@reduxjs/toolkit';

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

let inputKeyword = createSlice({
  name: 'InputKeyword',
  initialState: '',
  reducers: {
    setInputKeyword(state, action) {
      return action.payload;
    },
  },
});

export let { setInputKeyword } = inputKeyword.actions;

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

let searchResultList = createSlice({
  name: 'searchResultList',
  initialState: { loading: false, data: { count: 0, dataList: [] } },
  reducers: {
    onLoading(state) {
      state.loading = true;
    },
    offLoading(state) {
      state.loading = false;
    },
    setSearchResultList(state, action) {
      state.data = action.payload;
    },
    initSearchResultList(state) {
      state.data = {};
    },
  },
});

export let {
  onLoading,
  offLoading,
  setSearchResultList,
  initSearchResultList,
} = searchResultList.actions;

let userInfo = createSlice({
  name: 'userInfo',
  initialState: {},
  reducers: {
    changeUserInfo(state, action) {
      return action.payload;
    },
  },
});

export let { changeUserInfo } = userInfo.actions;

export default configureStore({
  reducer: {
    searchModalStatus: searchModalStatus.reducer,
    searchIconStatus: searchIconStatus.reducer,
    searchResultList: searchResultList.reducer,
    userInfo: userInfo.reducer,
    inputKeyword: inputKeyword.reducer,
  },
});
