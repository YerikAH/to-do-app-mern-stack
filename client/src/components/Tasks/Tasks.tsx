import { reorderTasks } from "../../redux/features/tasksSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import Filter from "../Filter/Filter";
import Task from "../Task/Task";
import st from "./Tasks.module.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

function Tasks() {
  const {tasksReducer, modeReducer} = useAppSelector((state) => state);
  
  const dispatch = useAppDispatch();
  return (
    <DragDropContext
      onDragEnd={(result) => {
        const { source, destination } = result;
        if (!destination) return;
        if (
          source.index === destination.index &&
          source.droppableId === destination.droppableId
        )
          return;
        dispatch(
          reorderTasks({
            arr: tasksReducer.tasks,
            starti: source.index,
            endi: destination.index,
          })
        );
      }}
    >
      <div className={`${st.tasks} ${st[modeReducer.mode]}`}>
        <Droppable droppableId="tasks">
          {(droppableProvided) => (
            <div
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
            >
              {tasksReducer.tasks.map((task, idx) => (
                <Draggable
                  key={task.id}
                  draggableId={task.id.toString()}
                  index={idx}
                >
                  {(draggableProvided) => (
                    <div
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <Task
                        completed={task.completed}
                        task={task.task}
                        key={task.id}
                        id={task.id}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
        <Filter />
      </div>
    </DragDropContext>
  );
}
export default Tasks;
