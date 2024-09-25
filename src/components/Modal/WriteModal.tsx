import styled from "styled-components";
import { useState, type FormEvent, ChangeEvent } from 'react';
import { Overlay } from "../Common/Overlay";
import { addTodo } from "../../services/todoService";

interface PropsType {
  showModal: boolean;
  onClick: () => void
}



export default function WriteModal({ showModal, onClick }: PropsType) {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDays, setSelectedDays] = useState(['월']);
  const [planTime, setPlanTime] = useState({
    start: {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    },
    end: {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    },
  })


  const weekdays = ['월', '화', '수', '목', '금', '토', '일'];

  const handleDaySelection = (day: string) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day) // 이전 날짜에 추가한 날짜가 이미 있으면 제외
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };


  // 시작 시간
  const handleSetStartHour = (e: ChangeEvent<HTMLInputElement>) => {
    let hour = timeSlice(e.currentTarget.value);
    hour = handleHourLimit(hour)
    setPlanTime((prevTime) => ({
      ...prevTime,
      start: {
        hours: hour,
        minutes: prevTime.start.minutes,
      },
    }));
  }

  // 시작 분
  const handleSetStartMinute = (e: ChangeEvent<HTMLInputElement>) => {
    let minute = timeSlice(e.currentTarget.value);
    minute = handleMinuteLimit(minute)
    setPlanTime((prevTime) => ({
      ...prevTime,
      start: {
        hours: prevTime.start.hours,
        minutes: minute,
      },
    }));
  }

  // 끝 시간
  const handleSetEndHour = (e: ChangeEvent<HTMLInputElement>) => {
    let hour = timeSlice(e.currentTarget.value);
    hour = handleHourLimit(hour)
    setPlanTime((prevTime) => ({
      ...prevTime,
      end: {
        hours: hour,
        minutes: prevTime.end.minutes,
      },
    }));
  }

  // 끝 분
  const handleSetEndMinute = (e: ChangeEvent<HTMLInputElement>) => {
    let minute = timeSlice(e.currentTarget.value);
    minute = handleMinuteLimit(minute)

    setPlanTime((prevTime) => ({
      ...prevTime,
      end: {
        hours: prevTime.end.hours,
        minutes: minute,
      }
    }))
  }


  // 시간 제한: 0 ~ 23
  const handleHourLimit = (value: number) => {
    if (value < 0) return Math.max(value, 0);
    if (value >= 24) return Math.min(value, 23);
    return Math.min(value, 23)
  }

  // 분 제한: 0 ~ 59
  const handleMinuteLimit = (value: number) => {
    if (value < 0) return Math.max(value, 0);
    if (value >= 60) return Math.min(value, 59);
    return Math.min(value, 59)
  }

  // 숫자 범위 제한
  const timeSlice = (value: string) => {
    return Number(value.slice(0, 2))
  }


  // 등록
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const todo = {
      title,
      description,
      startTime: `${planTime.start.hours}:${planTime.start.minutes}`,
      endTime: `${planTime.end.hours}:${planTime.end.minutes}`,
      selectedDays,
      completed: false

    }
    try {
      const data = await addTodo(todo)
      alert(data.message)
    } catch (err) {
      if(err instanceof Error){
        alert(err.message)
      }
    }
  };


  return (
    <>
      <Overlay $showmodal={showModal} onClick={onClick} />
      <WriteForm $showmodal={showModal} onSubmit={handleSubmit} >
        <Label htmlFor="title">제목</Label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Label htmlFor="description">세부 내용</Label>
        <TextArea
          id="description"
          rows={7}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <Label>시간 범위</Label>
        <Range>
          <RangeGroup>
            <Input onChange={handleSetStartHour} name="start-hours" type="number" min={0} max={23} maxLength={2} required defaultValue={planTime.start.hours} />
            :
            <Input onChange={handleSetStartMinute} name="start-minutes" type="number" min={0} max={59} maxLength={2} required defaultValue={planTime.start.minutes} />
          </RangeGroup>
          ~
          <RangeGroup>
            <Input onChange={handleSetEndHour} name="end-hours" type="number" min={0} max={23} maxLength={2} required defaultValue={planTime.start.hours} />
            :
            <Input onChange={handleSetEndMinute} type="end-minutes" min={0} max={59} maxLength={2} required defaultValue={planTime.start.minutes} />
          </RangeGroup>
        </Range>

        <Label>요일</Label>
        <WeekdaysContainer>
          {weekdays.map((day) => (
            <WeekdayLabel key={day}>
              <Input
                type="checkbox"
                checked={selectedDays.includes(day)}
                onChange={() => handleDaySelection(day)}
              />
              {day}
            </WeekdayLabel>
          ))}
        </WeekdaysContainer>

        <Button type="submit">등록</Button>
      </WriteForm>
    </>
  )
}


const WriteForm = styled.form<({ $showmodal: boolean }) >`
  visibility: ${({ $showmodal }) => $showmodal ? 'visible' : 'hidden'};
  opacity: ${({ $showmodal }) => $showmodal ? 1 : 0};
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 450px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  position: fixed;
  left: 50% ;
  top: 50%;
  transform: translate(-50%,-50%);

`

const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Range = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 2px;
`;

const RangeGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
const WeekdaysContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const WeekdayLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;