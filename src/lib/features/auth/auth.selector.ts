import { RootState } from "@/lib/store";
export const authSelector = (state: RootState) => state.authState;
export const selectCurrentToken = (state: RootState) => state.authState.token;