import {Question, QuestionType} from "./Question"
import {FaAngular, FaReact} from "react-icons/fa";

export interface Exam {
  id: string,
  title: string,
  description: string,
  time: number,
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
        question: 'What is the purpose of this hook?',
        category: 'Hooks',
        code: 'useEffect(() => {\n' +
            '   document. title = `You clicked ${count} times`;\n' +
            '3, [count]);)',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '1',
            isCorrect: false,
            answer: 'There is a syntax error, this hook won\'t work',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '1',
            isCorrect: true,
            answer: 'Change the page title every time the count state variable is updated',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '1',
            isCorrect: false,
            answer: 'Change the page title every time any state variable is updated',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '1',
            isCorrect: false,
            answer: 'Change the page title every time props gets updated',
            isSelected: false
          },
        ]
      },
      {
        id: '2',
        question: 'What name is given to form elements that have their internal state synchronized with the state of their parent React component?',
        category: 'Forms',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '2',
            isCorrect: false,
            answer: 'Redux elements',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '2',
            isCorrect: true,
            answer: 'Controlled components',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '2',
            isCorrect: false,
            answer: 'Hook components',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '2',
            isCorrect: false,
            answer: 'Synchronized elements',
            isSelected: false
          },
        ]
      },
      {
        id: '3',
        question: 'What would happen if we run the tick function 10 times consecutively?',
        category: 'Basics',
        code: 'function tick {\n' +
            '  const element = (\n' +
            '     <div>\n' +
            '       <h1>Hello, world!</h1>\n' +
            '       <h2>It is {new Date().toLocaleTimeString}.</h2>\n' +
            '     </div>\n' +
            '  );\n' +
            '  ReactD0M.render(element, document.getElementById(\'root\'));\n' +
            '}',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '3',
            isCorrect: false,
            answer: 'The div element would be displayed 10 times in the DOM.',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '3',
            isCorrect: false,
            answer: 'We would see an error in the browser console.',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '3',
            isCorrect: false,
            answer: 'The div element would be rendered by React and then refreshed 9 times consecutively in the browser DOM.',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '3',
            isCorrect: false,
            answer: 'The div element would be rendered by React and then refreshed 0 or 1 time in the browser DOM.',
            isSelected: false
          },
        ]
      },
      {
        id: '4',
        question: 'What is the purpose of the className attribute in JSX?',
        category: 'JSX',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '4',
            isCorrect: false,
            answer: 'It assigns a unique name to the component',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '4',
            isCorrect: false,
            answer: 'It specifies the component\'s name',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '4',
            isCorrect: true,
            answer: 'It sets the CSS class for an element',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '4',
            isCorrect: false,
            answer: 'It defines the component\'s ID',
            isSelected: false
          },
        ]
      },
      {
        id: '5',
        question: 'Which React hook is used to manage component state?',
        category: 'Hooks',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '5',
            isCorrect: false,
            answer: 'useContext',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '5',
            isCorrect: true,
            answer: 'useState',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '5',
            isCorrect: false,
            answer: 'useStore',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '5',
            isCorrect: false,
            answer: 'useEffect',
            isSelected: false
          },
        ]
      },
      {
        id: '6',
        question: 'What is the correct syntax to listen to a click event in a component and call a doSomething function when the click happens:',
        category: 'Components',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '6',
            isCorrect: false,
            answer: '(click)={doSomething}',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '6',
            isCorrect: false,
            answer: 'click={doSomething}',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '6',
            isCorrect: true,
            answer: 'onClick={doSomething}',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '6',
            isCorrect: false,
            answer: 'onClick={doSomething)}',
            isSelected: false
          },
        ]
      },
      {
        id: '7',
        question: 'We want to update the price of an item by applying a discount to it. The price of that item is stored in the state of a component, and the discount value is passed to the component as a prop. What is the proper way to apply a discount to the price?',
        category: 'State',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '7',
            isCorrect: false,
            answer: 'this.setState({\n' +
                'price: this.state.price - this.props.discount\n' +
                '3);',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '7',
            isCorrect: false,
            answer: 'this.setState((state) => ({\n' +
                'price: state.price - this.props.discount}));',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '7',
            isCorrect: false,
            answer: 'this. setState(0 => ({\n' +
                'price: this.state.price - this.props.discount\n' +
                '3));',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '7',
            isCorrect: false,
            answer: 'this. setState((state, props) => (£\n' +
                'price: state.price - props.discount\n' +
                '3));',
            isSelected: false
          },
        ]
      },
      {
        id: '8',
        question: 'Is there anything wrong with the following JSX syntax?',
        category: 'Components',
        code: '‹button onClick={extendDate} disabled={selection.isEmpty)}>\n' +
            'Extend date for selection </button>',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '8',
            isCorrect: false,
            answer: 'No, the code looks correct.',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '8',
            isCorrect: false,
            answer: 'Yes, some curly braces f} are missing.',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '8',
            isCorrect: false,
            answer: 'Yes, the click listener syntax should be (onClick).',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '8',
            isCorrect: true,
            answer: 'Yes, the onClick event listener is not going to work properly.',
            isSelected: false
          },
        ]
      },
      {
        id: '9',
        question: 'In a functional component, when is the useEffect hook called for the first time?',
        category: 'Hooks',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: '1',
            questionId: '9',
            isCorrect: false,
            answer: 'During component rendering',
            isSelected: false
          },
          {
            id: '2',
            questionId: '9',
            isCorrect: false,
            answer: 'During component initialization',
            isSelected: false
          },
          {
            id: '3',
            questionId: '9',
            isCorrect: true,
            answer: 'After the component has been inserted into the DOM',
            isSelected: false
          },
          {
            id: '4',
            questionId: '9',
            isCorrect: false,
            answer: 'When the component\'s state changes',
            isSelected: false
          },
        ]
      },
      {
        id: '10',
        question: 'What method does a class component have to define?',
        category: 'Components',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '10',
            isCorrect: false,
            answer: 'display',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '10',
            isCorrect: false,
            answer: 'refresh',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '10',
            isCorrect: true,
            answer: 'render',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '10',
            isCorrect: false,
            answer: 'constructor',
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
            questionId: '1',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: '2',
            questionId: '1',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: '3',
            questionId: '1',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: '4',
            questionId: '1',
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
            questionId: '1',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: '2',
            questionId: '1',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: '3',
            questionId: '1',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: '4',
            questionId: '1',
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
            questionId: '1',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: '2',
            questionId: '1',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: '3',
            questionId: '1',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: '4',
            questionId: '1',
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
            questionId: '1',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: '2',
            questionId: '1',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: '3',
            questionId: '1',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: '4',
            questionId: '1',
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
            questionId: '1',
            isCorrect: false,
            answer: 'Test 1',
            isSelected: false
          },
          {
            id: '2',
            questionId: '1',
            isCorrect: false,
            answer: 'Test 2',
            isSelected: false
          },
          {
            id: '3',
            questionId: '1',
            isCorrect: false,
            answer: 'Test 3',
            isSelected: false
          },
          {
            id: '4',
            questionId: '1',
            isCorrect: true,
            answer: 'Test 4',
            isSelected: false
          },
        ]
      }
    ]
  }



]
