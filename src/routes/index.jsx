import { HOME_PAGE, STUDY_PAGE, WORD_LIST } from './routeConstants';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import StudyPage from '../pages/StudyPage/StudyPage';
import WordList from '../pages/WordList/WordList';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path={HOME_PAGE} element={<HomePage />} />
            <Route path={STUDY_PAGE} element={<StudyPage />} />
            <Route path={WORD_LIST} element={<WordList />} />
        </Routes>
    )
}

export default AppRoutes