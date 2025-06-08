import { Card } from './pages/level1/Card';
import { Level1Layout } from './pages/level1/Level1Layout';
import { QuoteCard } from './pages/level1/QuoteCard';
import { Counter } from './pages/level2/Counter';
import { Feedback } from './pages/level2/Feedback';
import { Level2Layout } from './pages/level2/Level2Layout';
import { Toggler } from './pages/level2/Toggler';
import { ExtendedToDoList } from './pages/level3/ExtendedToDoList';
import { Level3Layout } from './pages/level3/Level3Layout';
import { ToDoList } from './pages/level3/ToDoList';
import { Level4Layout } from './pages/level4/Level4Layout';

function App() {
  return (
    <>
      <div className="w-7xl h-full bg-gray-300 text-black flex flex-col items-center  mx-auto my-5 gap-24  p-10">
        <h1 className="text-5xl text-bold text-gray-700">
          React Beginner to Master
        </h1>
        <Level1Layout>
          <Card
            title="Card"
            imgUrl="https://picsum.photos/200"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima et reiciendis fugiat repellendus, explicabo sunt pariatur veritatis recusandae ullam? Rem delectus corporis quod praesentium beatae cupiditate quae inventore quam quisquam."
          ></Card>
          <QuoteCard
            author="George Orwell"
            text="Scrittore e giornalista britannico, noto per le sue opere di critica sociale e politica. Il suo stile è chiaro, diretto e impegnato. I suoi romanzi più celebri, 1984 e La fattoria degli animali, sono allegorie potenti contro il totalitarismo e la manipolazione della verità. Orwell è diventato un punto di riferimento per il pensiero critico sulla società moderna."
            imgUrl="https://th.bing.com/th/id/OIP.CCp8Du_ffUDrNS5MmlWRJwHaJ5?rs=1&pid=ImgDetMain"
          ></QuoteCard>
          <QuoteCard
            author="Elena Ferrante"
            text="Autrice italiana di grande fama internazionale, conosciuta per la serie de L’amica geniale, che racconta l’evoluzione dell’amicizia tra due donne sullo sfondo di una Napoli complessa e in trasformazione. Ferrante è apprezzata per il suo stile intenso e per la profondità psicologica dei personaggi. La sua scelta di restare anonima ha aumentato il fascino intorno alla sua figura."
            imgUrl="https://th.bing.com/th/id/OIP.5onaA1bEd8qeq85gkQk-wAAAAA?rs=1&pid=ImgDetMain"
          ></QuoteCard>
        </Level1Layout>
        <Level2Layout>
          <Toggler></Toggler>
          <Counter></Counter>
          <Feedback></Feedback>
        </Level2Layout>
        <Level3Layout>
          <ToDoList></ToDoList>
          <ExtendedToDoList></ExtendedToDoList>
        </Level3Layout>
        <Level4Layout></Level4Layout>
      </div>
    </>
  );
}

export default App;
