import {Question, QuestionType} from "./Question"
import {FaAngular, FaReact} from "react-icons/fa";

export interface Exam {
  id: string,
  title: string,
  description: string,
  time: 25,
  questions: Question[],
  passingScore: number
  path: string,
  color: string,
  icon: any
}
export const Exams: Exam[] = [
  {
    id: '1',
    title: 'React Level 1',
    description: 'Level 1 React certification, for beginners.',
    time: 25,
    passingScore: 40,
    path: 'exam/1',
    color: '#faf304',
    icon: <FaReact size={80} />,
    questions: [
      {
        id: '1',
        question: 'Test',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            isCorrect: false,
            answer: 'qwertz',
            isSelected: false
          },
          {
            id: 'B',
            isCorrect: false,
            answer: 'ztrewq',
            isSelected: false
          },
          {
            id: 'C',
            isCorrect: false,
            answer: 'yxcvb',
            isSelected: false
          },
          {
            id: 'D',
            isCorrect: true,
            answer: 'bvcxy',
            isSelected: false
          },
        ]
      },
      {
        id: '2',
        question: 'Test 2',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: 'B',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: 'C',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: 'D',
            isCorrect: true,
            answer: 'Test 4',
            isSelected: false
          },
        ]
      },
      {
        id: '3',
        question: 'Test 3',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: 'B',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: 'C',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: 'D',
            isCorrect: true,
            answer: 'Test 4',
            isSelected: false
          },
        ]
      }

    ]
  },
  {
    id: '2',
    title: 'React Level 2',
    description: 'Level 1 React certification, for intermediate developers.',
    time: 25,
    passingScore: 40,
    path: 'exam/2',
    color: '#6aff40',
    icon: <FaReact size={80} />,
    questions: [
      {
        id: '1',
        question: 'Test',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: '1',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: '2',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: '3',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: '4',
            isCorrect: true,
            answer: 'Test 4',
            isSelected: false
          },
        ]
      }
    ]
  },
  {
    id: '3',
    title: 'React Level 3',
    description: 'Level 1 React certification, for expert developers.',
    time: 25,
    passingScore: 40,
    path: 'exam/3',
    color: '#40ccff',
    icon: <FaReact size={80} />,
    questions: [
      {
        id: '1',
        question: 'Test',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: '1',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: '2',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: '3',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: '4',
            isCorrect: true,
            answer: 'Test 4',
            isSelected: false
          },
        ]
      }
    ]
  },
  {
    id: '4',
    title: 'Angular Level 1',
    description: 'Level 1 Angular certification, for beginners',
    time: 25,
    passingScore: 40,
    path: 'exam/4',
    color: '#faf304',
    icon: <FaAngular size={80}/>,
    questions: [
      {
        id: '1',
        question: 'Test',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: '1',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: '2',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: '3',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: '4',
            isCorrect: true,
            answer: 'Test 4',
            isSelected: false
          },
        ]
      }
    ]
  },
  {
    id: '5',
    title: 'Angular Level 2',
    description: 'Level 1 Angular certification, for intermediate developers.',
    time: 25,
    passingScore: 40,
    path: 'exam/5',
    color: '#6aff40',
    icon: <FaAngular size={80}/>,
    questions: [
      {
        id: '1',
        question: 'Test',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: '1',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: '2',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: '3',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: '4',
            isCorrect: true,
            answer: 'Test 4',
            isSelected: false
          },
        ]
      }
    ]
  },
  {
    id: '6',
    title: 'Angular Level 3',
    description: 'Level 1 angular certification, for experts',
    time: 25,
    passingScore: 40,
    path: 'exam/6',
    color: '#40ccff',
    icon: <FaAngular size={80}/>,
    questions: [
      {
        id: '1',
        question: 'Test',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: '1',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: '2',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: '3',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: '4',
            isCorrect: true,
            answer: 'Test 4',
            isSelected: false
          },
        ]
      }
    ]
  }



]
