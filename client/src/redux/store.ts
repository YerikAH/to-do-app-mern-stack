import {configureStore} from '@reduxjs/toolkit'
import tasksReducer from './features/tasksSlice'
import modeReducer from './features/modeSlice'

export const store = configureStore({
  reducer:{
    tasksReducer,
    modeReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch