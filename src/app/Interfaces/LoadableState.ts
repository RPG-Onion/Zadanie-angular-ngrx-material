export interface ILoadableState {
  loading: boolean;
  loaded: boolean;
  failed: boolean;
}

const LoadableStateLoading: ILoadableState = {
  loading: true,
  loaded : false,
  failed : false,
};

const LoadableStateSuccess: ILoadableState = {
  loading: false,
  loaded : true,
  failed : false,
};

const LoadableStateFail: ILoadableState = {
  loading: false,
  loaded : false,
  failed : true,
};

const LoadableState = {
  Loading: LoadableStateLoading,
  Success: LoadableStateSuccess,
  Fail   : LoadableStateFail,
};

export {LoadableState};
