import {createBrowserRouter} from "react-router-dom";
import Overview, {loader as rootLoader} from "../pages/Overview";
import {loader as examLoader} from "../pages/ExamDetails";
import {loader as activeExamLoader} from "../pages/ActiveExam";
import ExamDetails from "../pages/ExamDetails";
import App from "../App";
import ActiveExam from "../pages/ActiveExam";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'exams',
        element: <Overview/>,
        loader: rootLoader,
      },
      {
        path: 'exams/exam/:examId',
        loader: examLoader,
        element: <ExamDetails/>,
      },
      {
        path: '/exams/exam/:examId/start',
        loader: activeExamLoader,
        element: <ActiveExam/>
      }
    ]
  },
]);
