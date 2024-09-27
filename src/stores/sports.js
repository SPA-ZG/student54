import { defineStore } from 'pinia'

export const useSportsStore = defineStore({
  id: 'sports',
  state: () => ({
    allSports: [
      {"name": "Running", "description": "Running is an outdoor aerobic exercise that involves continuous and rhythmic movement of the legs. It is a great cardiovascular activity and helps improve overall fitness.", "kcal": 600},
      {"name": "Cycling", "description": "Cycling is a low-impact exercise that can be done on a stationary bike. It is excellent for building leg strength and improving cardiovascular health.", "kcal": 450},
      {"name": "Yoga", "description": "Yoga is a practice that combines physical postures, breath control, and meditation. It promotes flexibility, strength, and relaxation, making it beneficial for both the body and mind.", "kcal": 200},
      {"name": "Basketball", "description": "Basketball is a fast-paced team sport that involves running, jumping, and strategic maneuvers. It provides an excellent full-body workout and helps improve agility and coordination.", "kcal": 700},
      {"name": "Weightlifting", "description": "Weightlifting involves lifting weights to build and strengthen muscles. It is a fundamental component of strength training and can contribute to improved overall muscular fitness.", "kcal": 300},
      {"name": "Swimming", "description": "Swimming is a full-body exercise that takes place in the water. It engages multiple muscle groups, improves cardiovascular endurance, and is a low-impact activity suitable for people of all ages.", "kcal": 500}
    ]

  }),
  getters: {
    getSports: (state) => state.allSports.map(
      x => x.name
    ),
    getSport: (state) => {
      return (name) => state.allSports.filter(x => x.name.toLowerCase() === name.toLowerCase())[0]
    }
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})