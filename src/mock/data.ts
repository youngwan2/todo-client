import { TodoItem } from "../types/todo";

// fakeTodoData 배열에 TodoItem 타입 지정
const fakeTodoData: TodoItem[] = [
  {
    id: 1,
    title: "Complete project proposal",
    completed: false,
    dueDate: "2024-09-15",
    startTime: "14:00",  // 시작 시간
    endTime: "16:00"     // 종료 시간
  },
  {
    id: 2,
    title: "Buy groceries",
    completed: true,
    dueDate: "2024-09-14",
    startTime: "17:30",
    endTime: "18:30"
  },
  {
    id: 3,
    title: "Schedule dentist appointment",
    completed: false,
    dueDate: "2024-09-20",
    startTime: "09:00",
    endTime: "10:00"
  },
  {
    id: 4,
    title: "Attend team meeting",
    completed: true,
    dueDate: "2024-09-13",
    startTime: "10:00",
    endTime: "11:00"
  },
  {
    id: 5,
    title: "Workout at gym",
    completed: false,
    dueDate: "2024-09-16",
    startTime: "07:00",
    endTime: "08:00"
  }
];

export default fakeTodoData;
