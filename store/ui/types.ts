import { PayloadAction } from '@reduxjs/toolkit';

export interface UIState {
    toc: string | null;
}

export type SetActiveToc = PayloadAction<string | null>;
