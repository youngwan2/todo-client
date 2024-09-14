// TodoItem 인터페이스 정의
export interface TodoItem {
    id: number;             // 할 일의 고유 ID
    title: string;          // 할 일의 제목
    completed: boolean;     // 완료 여부
    dueDate: string;        // 마감 날짜 (YYYY-MM-DD 형식의 문자열)
    startTime: string;      // 시작 시간 (HH:mm 형식의 문자열)
    endTime: string;        // 종료 시간 (HH:mm 형식의 문자열)
  }
  