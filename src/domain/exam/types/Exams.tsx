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
    passingScore: 35,
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
            '}, [count]);',
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
        code: 'function tick() {\n' +
            '  const element = (\n' +
            '     <div>\n' +
            '       <h1>Hello, world!</h1>\n' +
            '       <h2>It is {new Date().toLocaleTimeString()}.</h2>\n' +
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
            isCorrect: true,
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
            answer: 'click={doSomething()}',
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
            answer: 'onClick={doSomething()}',
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
                '});',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '7',
            isCorrect: true,
            answer: 'this.setState((state) => ({\n' +
                '  price: state.price - this.props.discount\n' +
                '}));',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '7',
            isCorrect: false,
            answer: 'this. setState(() => ({\n' +
                'price: this.state.price - this.props.discount\n' +
                '}));',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '7',
            isCorrect: false,
            answer: 'this. setState((state, props) => ({\n' +
                'price: state.price - props.discount\n' +
                '}));',
            isSelected: false
          },
        ]
      },
      {
        id: '8',
        question: 'Is there anything wrong with the following JSX syntax?',
        category: 'Components',
        code: '‹button onClick={extendDate()} disabled={selection.isEmpty()}>\n' +
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
      },
      {
        id: '11',
        question: 'What is the best method to implement in order to make an HTTP request call to fetch data in a class component?',
        category: 'Lifecycle',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '11',
            isCorrect: false,
            answer: 'componentWillMount',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '11',
            isCorrect: false,
            answer: 'constructor',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '11',
            isCorrect: false,
            answer: 'render',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '11',
            isCorrect: true,
            answer: 'componentDidMount',
            isSelected: false
          },
        ]
      },
      {
        id: '12',
        question: 'In a class component, what is the proper syntax to update the following default state to {name: "Joe"}:',
        category: 'State',
        code: 'this. state = {name: ""};',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '12',
            isCorrect: false,
            answer: 'this.state.name = "Joe";',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '12',
            isCorrect: false,
            answer: 'this.setState("Joe");',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '12',
            isCorrect: true,
            answer: 'this.setState({name: "Joe"});',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '12',
            isCorrect: false,
            answer: 'this.setName("Joe");',
            isSelected: false
          },
        ]
      },
      {
        id: '13',
        question: 'Which of the following expressions would render "Hello" when isActive is true, nothing otherwise?',
        category: 'Basics',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '13',
            isCorrect: false,
            answer: '{isActive || "Hello"}',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '13',
            isCorrect: false,
            answer: '{isActive ?? "Hello" }',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '13',
            isCorrect: true,
            answer: '{isActive && "Hello" }',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '13',
            isCorrect: true,
            answer: '{isActive ? "Hello" : \'\'}',
            isSelected: false
          },
        ]
      },
      {
        id: '14',
        question: 'What attribute do we have to add to each repeated item when rendering a list of items?',
        category: 'Basics',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '14',
            isCorrect: true,
            answer: 'key',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '14',
            isCorrect: false,
            answer: 'listItem',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '14',
            isCorrect: false,
            answer: 'id',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '14',
            isCorrect: false,
            answer: 'map',
            isSelected: false
          },
        ]
      },
      {
        id: '15',
        question: 'Which one of the following lifecycle timelines is correctly ordered?',
        category: 'Lifecycle',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '15',
            isCorrect: false,
            answer: 'render()\n' +
                'componentWillUnmount()\n' +
                'componentDidUpdate()',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '15',
            isCorrect: true,
            answer: 'constructor()\n' +
                'render()\n' +
                'componentDidMount()',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '15',
            isCorrect: false,
            answer: 'render()\n' +
                'constructor()\n' +
                'componentDidMount()',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '15',
            isCorrect: false,
            answer: 'constructor()\n' +
                'render()\n' +
                'componentWillMount()',
            isSelected: false
          },
        ]
      },
      {
        id: '16',
        question: 'Which of the following JSX elements is a controlled component?',
        category: 'Forms',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '16',
            isCorrect: true,
            answer: '‹input type="text" value={this.state.value} onChange={this.handleChange} />',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '16',
            isCorrect: false,
            answer: '<input type="text" value={this.state.value} />',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '16',
            isCorrect: false,
            answer: '<input type="text" value={this.state.value} onSubmit={this.handleSubmit} />',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '16',
            isCorrect: false,
            answer: '<input type="text" ref={this.input} />',
            isSelected: false
          },
        ]
      },
      {
        id: '17',
        question: 'What is create-react-app?',
        category: 'Basics',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '17',
            isCorrect: true,
            answer: 'A command-line interface to generate a project that can serve, compile, and build React apps',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '17',
            isCorrect: false,
            answer: 'An auto-complete tool for React',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '17',
            isCorrect: false,
            answer: 'A connection between front-end and back-end code',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '17',
            isCorrect: false,
            answer: 'A compiler for Javascript code',
            isSelected: false
          },
        ]
      },
      {
        id: '18',
        question: 'Which of these features do not exist as part of the React library? (multiple answers can be selected)',
        category: 'Basics',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '18',
            isCorrect: false,
            answer: 'Passing data to a component using props',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '18',
            isCorrect: true,
            answer: 'Redux store',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '18',
            isCorrect: true,
            answer: 'Two-way data binding',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '18',
            isCorrect: false,
            answer: 'Using a function to render a component',
            isSelected: false
          },
        ]
      },
      {
        id: '19',
        question: 'What is the value of b after running the following code:',
        code: 'let b = null;\n' +
            'let a = 21;\n' +
            'b = a;\n' +
            'a = 42;',
        category: 'Javascript',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '19',
            isCorrect: false,
            answer: '42',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '19',
            isCorrect: true,
            answer: '21',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '19',
            isCorrect: false,
            answer: '\'a\'',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '19',
            isCorrect: false,
            answer: 'null',
            isSelected: false
          },
        ]
      },
      {
        id: '20',
        question: 'Which of the following examples are proper ways to call this function:',
        code: 'function displayCar({make, model}) {\n' +
            'console. log("Car: ", make, model);\n' +
            '}',
        category: 'Javascript',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '20',
            isCorrect: false,
            answer: 'displayCar(make: "Tesla", model: "Cybertruck");',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '20',
            isCorrect: true,
            answer: 'let car = {make: "Tesla", model: "Cybertruck"};\n' +
                'displayCar(car);',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '20',
            isCorrect: false,
            answer: 'displayCar("Tesla"， "Cybertruck");',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '20',
            isCorrect: true,
            answer: 'displayCar({make: "Tesla", model: "Cybertruck"});',
            isSelected: false
          },
        ]
      },
      {
        id: '21',
        question: 'When will the console.log statement run according to the following code?',
        code: 'useEffect(() => {\n' +
            '  console. log("Effect running");\n' +
            '});',
        category: 'Hooks',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '21',
            isCorrect: false,
            answer: 'Before the component is mounted and after every single component update',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '21',
            isCorrect: false,
            answer: 'After the component is unmounted and after every single component update',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '21',
            isCorrect: true,
            answer: 'After the component is mounted and after every single component update',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '21',
            isCorrect: false,
            answer: 'Before the component is mounted and before every single component update',
            isSelected: false
          },
        ]
      },
      {
        id: '22',
        question: 'Which of the following are not React hooks?',
        category: 'Hooks',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '22',
            isCorrect: true,
            answer: 'useAction',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '22',
            isCorrect: false,
            answer: 'useState',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '22',
            isCorrect: false,
            answer: 'useContext',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '22',
            isCorrect: false,
            answer: 'useEffect',
            isSelected: false
          },
        ]
      },
      {
        id: '23',
        question: 'What is the children prop?',
        category: 'Components',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '23',
            isCorrect: false,
            answer: 'A prop that adds child values to state',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '23',
            isCorrect: true,
            answer: 'A prop that lets us pass HTML content to other components',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '23',
            isCorrect: false,
            answer: 'A prop that lets us pass data to a child component',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '23',
            isCorrect: false,
            answer: 'A prop that lets us set an object as a prop',
            isSelected: false
          },
        ]
      },
      {
        id: '24',
        question: 'Which of the following JSX snippets works with no errors in a React application?',
        category: 'JSX',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '24',
            isCorrect: true,
            answer: '<img src={user.avatarUrl} />',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '24',
            isCorrect: true,
            answer: '<h1 className="title">Hello!</h1>',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '24',
            isCorrect: false,
            answer: '<h1 class="title">Hello!</h1>',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '24',
            isCorrect: true,
            answer: '<h1>Hello!</h1>',
            isSelected: false
          },
        ]
      },
      {
        id: '25',
        question: 'Which of the following JSX expressions is valid?',
        category: 'JSX',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '25',
            isCorrect: true,
            answer: '<h1>Hello, {name)</h1>',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '25',
            isCorrect: false,
            answer: 'let element = <p>Hello</p><p>World!</p>;',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '25',
            isCorrect: false,
            answer: 'if (condition) { <p>True</p> } else { <p>False</p> }',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '25',
            isCorrect: false,
            answer: '<div class="container" >Content</div>',
            isSelected: false
          },
        ]
      },
      {
        id: '26',
        question: 'What does the following code do if the current URL path ends with /expenses?',
        code: '<BrowserRouter>\n' +
            '    <Routes>\n' +
            '        ‹Route path="/" element={<App />} />\n' +
            '        ‹Route path="expenses" element={<Expenses />} />\n' +
            '        ‹Route path="invoices" element={<Invoices />} />\n' +
            '    </Routes>\n' +
            '</BrowserRouter>',
        category: 'Router',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '26',
            isCorrect: false,
            answer: 'It displays three Route components',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '26',
            isCorrect: false,
            answer: 'It displays the App component',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '26',
            isCorrect: false,
            answer: 'It displays both the App and Expenses components',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '26',
            isCorrect: true,
            answer: 'It displays the Expenses component',
            isSelected: false
          },
        ]
      },
      {
        id: '27',
        question: 'Assuming that values = ["$8.25", "$16.50", "$24.75"], which HTML is the most likely to be\n' +
            'rendered by the following JSX code:',
        code: '{ values.map(val => (\n' +
            '‹button onClick={() => add(val)}>\n' +
            '    Add {val} </button>\n' +
            '))\n' +
            '}',
        category: 'Components',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '27',
            isCorrect: false,
            answer: 'Nothing would render because there is a syntax error',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '27',
            isCorrect: false,
            answer: 'Add 8.25\n' +
                'Add 16.5\n' +
                ' Add 24.75',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '27',
            isCorrect: false,
            answer: 'Add 8.25 currency\n' +
                'Add 16.5 currency\n' +
                'Add 24.75 currency',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '27',
            isCorrect: true,
            answer: 'Add $8.25\n' +
                'Add $16.50\n' +
                'Add $24.75',
            isSelected: false
          },
        ]
      },
      {
        id: '28',
        question: 'How can we concatenate the following arrays using the spread operator?',
        code: 'const array1 = [1, 2, 3];\n' +
            'const array2 = [4, 5, 6];',
        category: 'Javascript',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '28',
            isCorrect: false,
            answer: 'const result = [array1, array2];',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '28',
            isCorrect: false,
            answer: 'const result = array1 + array2;',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '28',
            isCorrect: false,
            answer: 'const result = [...array1] + [... array2];',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '28',
            isCorrect: true,
            answer: 'const result = [...array1, ... array2];',
            isSelected: false
          },
        ]
      },
      {
        id: '29',
        question: 'What is the purpose of the componentWillUnmount lifecycle method?',
        category: 'Lifecycle',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '29',
            isCorrect: true,
            answer: 'Perform any necessary cleanup such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created before.',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '29',
            isCorrect: false,
            answer: 'Enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed.',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '29',
            isCorrect: false,
            answer: 'Operate on the DOM when the component has been updated.',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '29',
            isCorrect: false,
            answer: 'Initialization that requires DOM nodes to be created.',
            isSelected: false
          },
        ]
      },
      {
        id: '30',
        question: 'What is JSX?',
        category: 'Basics',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '30',
            isCorrect: false,
            answer: 'A server-side language similar to HTML',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '30',
            isCorrect: false,
            answer: 'A command-line interface to generate, serve, compile, test, and build React code',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '30',
            isCorrect: false,
            answer: 'A language that is a superset of modern Javascript',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '30',
            isCorrect: true,
            answer: 'A syntax extension library used by React',
            isSelected: false
          },
        ]
      },
      {
        id: '31',
        question: 'In the following syntax, the variable name is inside...',
        code: '<h1>Hello, {name}</h1>',
        category: 'JSX',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '31',
            isCorrect: true,
            answer: 'An expression',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '31',
            isCorrect: false,
            answer: 'A prop',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '31',
            isCorrect: false,
            answer: 'A variable',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '31',
            isCorrect: false,
            answer: 'A fragment',
            isSelected: false
          },
        ]
      },
      {
        id: '32',
        question: 'Match the options below:',
        category: 'Basics',
        type: QuestionType.SELECT,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '32',
            isCorrect: true,
            answer: 'Only works with class components ---> this.setState',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '32',
            isCorrect: true,
            answer: 'Only works with function components ---> Hooks',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '32',
            isCorrect: true,
            answer: 'Works with components and elements ---> ReactDOM.render',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '32',
            isCorrect: true,
            answer: 'Works within JSX only ---> Expressions',
            isSelected: false
          },
          {
            id: 'E',
            questionId: '32',
            isCorrect: true,
            answer: 'Works with all types of components ---> Props',
            isSelected: false
          }
        ]
      },
      {
        id: '33',
        question: 'Which keyword should we use to create a constant in javascript?',
        category: 'Javascript',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '33',
            isCorrect: false,
            answer: 'let',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '33',
            isCorrect: true,
            answer: 'const',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '33',
            isCorrect: false,
            answer: 'constant',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '33',
            isCorrect: false,
            answer: 'var',
            isSelected: false
          },
        ]
      },
      {
        id: '34',
        question: 'What does the following code do?',
        code: 'import { useParams } from "react-router-dom";\n' +
            'export default function Invoice() {\n' +
            '    let params = useParams();\n' +
            '    return ‹h2>Invoice: {params.invoiceId}</h2>;\n' +
            '}',
        category: 'Router',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '34',
            isCorrect: false,
            answer: 'It reads a URL query param defined as invoiceId and displays it in a h2 tag',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '34',
            isCorrect: true,
            answer: 'It reads a URL param defined as invoiceId and displays it in a h2 tag',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '34',
            isCorrect: false,
            answer: 'This code would not work, there is a syntax error',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '34',
            isCorrect: false,
            answer: 'It reads a prop defined as invoiceId and displays it in a h2 tag',
            isSelected: false
          },
        ]
      },
      {
        id: '35',
        question: 'Which of these JSX examples would render the current value of data in a component?',
        category: 'Components',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '35',
            isCorrect: false,
            answer: '<input value="data" />',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '35',
            isCorrect: true,
            answer: '<input value={data} />',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '35',
            isCorrect: false,
            answer: '{{data}}',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '35',
            isCorrect: true,
            answer: '{data}',
            isSelected: false
          },
        ]
      },
      {
        id: '36',
        question: 'Which of the following statements are true regarding React state?',
        category: 'State',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '36',
            isCorrect: true,
            answer: 'We should not rely on this.state or this.props for calculating the next state',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '36',
            isCorrect: false,
            answer: 'State updates are always made synchronously',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '36',
            isCorrect: true,
            answer: 'The proper way to update state is to call setState()',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '36',
            isCorrect: false,
            answer: 'State updates are not merged into the current state',
            isSelected: false
          },
        ]
      },
      {
        id: '37',
        question: 'What does the following code allow us to do?',
        code: 'this.input = React.createRef();',
        category: 'Forms',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '37',
            isCorrect: false,
            answer: 'Creating a form element in a JSX expression.',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '37',
            isCorrect: true,
            answer: 'Accessing a DOM node or React element, possibly to read its value.',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '37',
            isCorrect: false,
            answer: 'Creating a controlled component for a given form input.',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '37',
            isCorrect: false,
            answer: 'Creating a reference to a React component called Input.',
            isSelected: false
          },
        ]
      },
      {
        id: '38',
        question: 'What is the value of props.autocomplete in the following instance of MyComponent:',
        code: '‹MyComponent autocomplete />',
        category: 'JSX',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '38',
            isCorrect: true,
            answer: 'true',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '38',
            isCorrect: false,
            answer: 'undefined',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '38',
            isCorrect: false,
            answer: '1',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '38',
            isCorrect: false,
            answer: '"autocomplete"',
            isSelected: false
          },
        ]
      },
      {
        id: '39',
        question: 'How do you update the state using the useState hook in a functional component?',
        category: 'Hooks',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '39',
            isCorrect: true,
            answer: 'By using the function that is the second element in the array returned by useState',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '39',
            isCorrect: false,
            answer: 'By calling the this.setState() method',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '39',
            isCorrect: false,
            answer: 'By passing an object to the useState function',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '39',
            isCorrect: false,
            answer: 'By directly modifying the state variable',
            isSelected: false
          },
        ]
      },
      {
        id: '40',
        question: 'Which of the following statements are true? (multiple answers can be selected)',
        category: 'Basics',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '40',
            isCorrect: true,
            answer: 'There are two different types of React components: Function and class components',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '40',
            isCorrect: true,
            answer: 'React uses its virtual DOM to perform change detection',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '40',
            isCorrect: false,
            answer: 'There are three different types of React components: Function, JSX, and class components',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '40',
            isCorrect: false,
            answer: 'React is an opinionated framework that comes with all the features you need to build a web application',
            isSelected: false
          },
        ]
      },
      {
        id: '41',
        question: 'What is the name of the feature used to pass data to a component?',
        category: 'Components',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '41',
            isCorrect: true,
            answer: 'Props',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '41',
            isCorrect: false,
            answer: 'Inputs',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '41',
            isCorrect: false,
            answer: 'Data params',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '41',
            isCorrect: false,
            answer: 'Attributes',
            isSelected: false
          },
        ]
      },
      {
        id: '42',
        question: 'What features do backticks (*) bring to the table? (multiple answers can be selected) |',
        category: 'Javascript',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '42',
            isCorrect: true,
            answer: 'They enable multi-line strings',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '42',
            isCorrect: true,
            answer: 'They allow the use of Javascript template literals',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '42',
            isCorrect: false,
            answer: 'They\'re the only way to use HTML templates in JSX',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '42',
            isCorrect: false,
            answer: 'They allow us to display props in JSX',
            isSelected: false
          },
        ]
      },
      {
        id: '43',
        question: 'Assuming that this.state.value is initialized to 1, what happens when we click on the button defined in the following template?',
        code: '‹button onClick={() => this.setState({value: this.state.value + 1})}>\n' +
            '{this.state.value}\n' +
            '</button>',
        category: 'Components',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '43',
            isCorrect: false,
            answer: 'The button text becomes {this.state.value}',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '43',
            isCorrect: false,
            answer: 'Nothing',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '43',
            isCorrect: false,
            answer: 'An error gets logged to the browser console',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '43',
            isCorrect: true,
            answer: 'The button text becomes "2"',
            isSelected: false
          },
        ]
      },
      {
        id: '44',
        question: 'What\'s the output of the following code?',
        code: 'const make = \'Tesla\';\n' +
            'const model = \'Model 3\';\n' +
            'const car = { make, model };\n' +
            'console. log(car);',
        category: 'Javascript',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '44',
            isCorrect: false,
            answer: '[make: \'Tesla\', model: \'Model 3\']',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '44',
            isCorrect: true,
            answer: '{make: \'Tesla\', model: \'Model 3\'}',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '44',
            isCorrect: false,
            answer: '[object Object]',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '44',
            isCorrect: false,
            answer: '{car: {make: \'Tesla\', model: \'Model 3\'}}',
            isSelected: false
          },
        ]
      },
      {
        id: '45',
        question: 'What is the proper component to use to create a link compatible with React Router?',
        category: 'Router',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '45',
            isCorrect: false,
            answer: 'a',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '45',
            isCorrect: false,
            answer: 'Outlet',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '45',
            isCorrect: false,
            answer: 'RouterLink',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '45',
            isCorrect: true,
            answer: 'Link',
            isSelected: false
          },
        ]
      },
      {
        id: '46',
        question: 'How can we render the following element with React:',
        code: 'const element = <h1>Hello, world</h1>;',
        category: 'Basics',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '46',
            isCorrect: false,
            answer: 'ReactDOM.render(element, document);',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '46',
            isCorrect: false,
            answer: 'ReactDOM.doRender(element, document.getElementById(\'root\'));',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '46',
            isCorrect: false,
            answer: 'ReactDOM.bootstrap(element, document.getElementById(\'root\'));',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '46',
            isCorrect: true,
            answer: 'ReactDOM.render(element,\n' +
                'document.getElementById(\'root\'));',
            isSelected: false
          },
        ]
      },
      {
        id: '47',
        question: 'How is React different from PHP, ASP, or JSP? (multiple answers can be selected)',
        category: 'Basics',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '47',
            isCorrect: true,
            answer: 'React is not a language',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '47',
            isCorrect: false,
            answer: 'React is a server-side language',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '47',
            isCorrect: false,
            answer: 'React is a plugin for PHP',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '47',
            isCorrect: true,
            answer: 'React is a client-side library',
            isSelected: false
          },
        ]
      },
      {
        id: '48',
        question: 'In JSX, what is the proper way to display an image for which the source comes from a user object that has an avatarUri property:',
        category: 'JSX',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '48',
            isCorrect: false,
            answer: '<img src={{user.avatarUrl}}></img>',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '48',
            isCorrect: false,
            answer: '<img src={"user.avatarUrl"}></img>',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '48',
            isCorrect: false,
            answer: '<img src="user.avatarUrl"></img>',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '48',
            isCorrect: true,
            answer: '<img src={user.avatarUrl}></img>',
            isSelected: false
          },
        ]
      },
      {
        id: '49',
        question: 'Considering the following component state:\n' +
            'this.state = {\n' +
            '   posts: [], comments: ["Test"]\n' +
            '｝\n' +
            'What is the value of that state after running:\n' +
            'this.setState({ posts: ["Post 1"] });',
        category: 'State',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '49',
            isCorrect: false,
            answer: '{posts: ["Post 1"], comments: []}',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '49',
            isCorrect: true,
            answer: '{posts: ["Post 1"], comments: ["Test"]}',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '49',
            isCorrect: false,
            answer: '{posts: "Post 1", comments: ["Test"]}',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '49',
            isCorrect: false,
            answer: '{posts: ["\'Post 1"]}',
            isSelected: false
          },
        ]
      },
      {
        id: '50',
        question: 'What is the value of c after running the following code:',
        code: 'Let c = null;\n' +
            'let a = {test: 21 };\n' +
            'let b = a;\n' +
            'c = b;\n' +
            'a.test = 42;',
        category: 'Javascript',
        type: QuestionType.MULTIPLE_CHOICE,
        points: 1,
        answers: [
          {
            id: 'A',
            questionId: '50',
            isCorrect: false,
            answer: '{test: 21 }',
            isSelected: false
          },
          {
            id: 'B',
            questionId: '50',
            isCorrect: false,
            answer: 'null',
            isSelected: false
          },
          {
            id: 'C',
            questionId: '50',
            isCorrect: true,
            answer: '{test: 42}',
            isSelected: false
          },
          {
            id: 'D',
            questionId: '50',
            isCorrect: false,
            answer: '\'b\'',
            isSelected: false
          },
        ]
      }

















    ]
  }
]
