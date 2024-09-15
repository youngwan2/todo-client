import styled from "styled-components";
import { useState, type FormEvent, ChangeEvent } from 'react';
import { Overlay } from "../Common/Overlay";
import { addTodo } from "../../services/todoService";

interface PropsType {
  showModal: boolean;
  onClick: () => void
}

export default function WriteModal({ showModal, onClick }: PropsType) {

  const [loading, setLoading] = useState(false)
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [planTime, setPlanTime] = useState({
    start: {
      hours: 0,
      minutes: 0,
    },
    end: {
      hours: 0,
      minutes: 0,
    },
  })
  const [selectedDays, setSelectedDays] = useState(['월']);

  const weekdays = ['월', '화', '수', '목', '금', '토', '일'];

  const handleDaySelection = (day: string) => {
    setSelectedDays((prevDays) =>
      prevDays.includes(day) // 이전 날짜에 추가한 날짜가 이미 있으면 제외
        ? prevDays.filter((d) => d !== day)
        : [...prevDays, day]
    );
  };


  const handleSetStartHour=(e:ChangeEvent<HTMLInputElement>)=>{
    const hour = Number(e.currentTarget.value);

    setPlanTime((prevTime) => ({
     ...prevTime,
      start: {
        hours: hour,
        minutes: prevTime.start.minutes,
      },
    }));
  }

  const handleSetStartMinute=(e:ChangeEvent<HTMLInputElement>)=>{
    const minute = Number(e.currentTarget.value);
    setPlanTime((prevTime) => ({
     ...prevTime,
      start: {
        hours: prevTime.start.hours,
        minutes: minute,
      },
    }));
  }

  const handleSetEndHour=(e:ChangeEvent<HTMLInputElement>)=>{
    const hour = Number(e.currentTarget.value);
    setPlanTime((prevTime) => ({
     ...prevTime,
      end: {
        hours: hour,
        minutes: prevTime.end.minutes,
      },
    }));
  }

  const handleSetEndMinute=(e:ChangeEvent<HTMLInputElement>)=>{
    const minute = Number(e.currentTarget.value);
    setPlanTime((prevTime)=>({
      ...prevTime,
      end: {
        hours:prevTime.end.hours,
        minutes: minute,
      }
    }))
  }


  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const todo={
      title,
      description,
      startTime:`${planTime.start.hours}:${planTime.start.minutes}` ,
      endTime:`${planTime.end.hours}:${planTime.end.minutes}`,
      selectedDays,
      completed:false

    }
    await addTodo(todo)
  };



  return (
    <>
      <Overlay showModal={showModal} onClick={onClick} />
      <WriteForm showModal={showModal} onSubmit={handleSubmit} >
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
          <Input onChange={handleSetStartHour} type="number" min={0} max={24} maxLength={2} />
          :
          <Input onChange={handleSetStartMinute} type="number" min={0} max={60} maxLength={2} />
          ~
          <Input onChange={handleSetEndHour} type="number" min={0} max={24} maxLength={2} />
          :
          <Input onChange={handleSetEndMinute} type="number" min={0} max={60} maxLength={2} />
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


const WriteForm = styled.form<({ showModal?: boolean }) >`
  visibility: ${({ showModal }) => showModal ? 'visible' : 'hidden'};
  opacity: ${({ showModal }) => showModal ? 1 : 0};
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
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
  align-items: center;
  gap: 10px;
`;

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