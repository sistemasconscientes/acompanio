import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface MoodCheckIn {
  id: string;
  date: string;
  energy: number;
  emotions: string[];
}

interface MoodStore {
  checkIns: MoodCheckIn[];
  addCheckIn: (energy: number, emotions: string[]) => void;
  getCheckIns: () => MoodCheckIn[];
  getRecentCheckIns: (days: number) => MoodCheckIn[];
}

export const useMoodStore = create<MoodStore>()(
  persist(
    (set, get) => ({
      checkIns: [],

      addCheckIn: (energy: number, emotions: string[]) => {
        const newCheckIn: MoodCheckIn = {
          id: Date.now().toString(),
          date: new Date().toISOString(),
          energy,
          emotions,
        };

        set((state) => ({
          checkIns: [newCheckIn, ...state.checkIns],
        }));
      },

      getCheckIns: () => {
        return get().checkIns;
      },

      getRecentCheckIns: (days: number) => {
        const cutoffDate = new Date();
        cutoffDate.setDate(cutoffDate.getDate() - days);

        return get().checkIns.filter((checkIn) => {
          return new Date(checkIn.date) >= cutoffDate;
        });
      },
    }),
    {
      name: 'mood-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
